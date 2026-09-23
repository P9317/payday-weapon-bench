import * as fs from 'node:fs/promises';
import * as path from 'node:path';

const weaponCategories = [
    'AssaultRifle',
    'Marksman',
    'Pistol',
    'Revolver',
    'Shotgun',
    'SMG',
    'LMG',
];

const AMMO_PICKUP_PRESETS = {
    min: 5,
    max: 10
};

const weaponOutput = {};
const attachmentOutput = {};
/**
 * ============================================================
 * DLC / content source resolver
 * ============================================================
 *
 * PAYDAY 3 新版已经不再统一使用 DLCxxxx 目录。
 *
 * 当前导出中实际存在例如：
 *
 * 00006-DLCWEAP0001
 * 00010-DLCHEIST0002
 * 00030-DLC0003
 * 00080-DLC0004
 * 00110-DLCWEAP0002
 * 00120-Primary001
 * 00130-Primary002
 * 00170-Weapon3
 * WPN_SECO_Pocket
 * WPN_SECO_Yates
 *
 * 网站中的 dlc 字段是显示分组 ID，
 * 不是 Unreal 的 DLC 文件夹名称。
 */
const DLC_FOLDER_MAP = Object.freeze({

    // Syntax Error
    '00006-DLCWEAP0001': '1',

    // Boys in Blue
    '00010-DLCHEIST0002': '2',

    // Houston Breakout
    '00030-DLC0003': '3',

    // Fear & Greed
    '00080-DLC0004': '4',

    // Swedish Weapon Pack
    // Skogskrigare AG-9
    '00130-Primary002': '6',

    // Swedish Weapon Pack
    // Russell JB-9
    'WPN_SECO_Yates': '6',

    // Brute Force Crimebond
    // Locomotive 12G
    'WPN_SECO_Pocket': '7',
});


/**
 * 位于 DLCs 目录中，
 * 但实际上属于免费武器的武器 ID。
 *
 * 这些武器不能因为路径里出现 DLC
 * 就被标记为付费 DLC。
 */
const FREE_WEAPON_IDS = new Set([

    // Justicar
    'Justicar',

    // Zokas-17
    'PFLK',

    // Spearfish 1895
    'Spearfish',

    // M135 Arges
    'Arges',

]);


/**
 * 从：
 *
 * PAYDAY3/Content/DLCs/WPN_SECO_Pocket/Gameplay/...
 *
 * 获取：
 *
 * WPN_SECO_Pocket
 */
function getDlcContentFolder(filePath) {

    if (
        !filePath ||
        typeof filePath !== 'string'
    ) {

        return null;

    }


    const normalizedPath =
        filePath.replace(
            /\\/g,
            '/'
        );


    const match =
        normalizedPath.match(
            /(?:^|\/)DLCs\/([^/]+)(?:\/|$)/
        );


    return match
        ? match[1]
        : null;
}


/**
 * ============================================================
 * 判断武器所属 DLC
 * ============================================================
 *
 * 返回：
 *
 * "1"
 * "2"
 * "3"
 * ...
 *
 * 或：
 *
 * null
 */
function resolveWeaponDlc(
    filePath,
    weaponId
) {

    /*
     * --------------------------------------------------------
     * 免费武器优先
     * --------------------------------------------------------
     *
     * 即使目录位于 Content/DLCs，
     * 也保持 dlc: null。
     */

    if (
        FREE_WEAPON_IDS.has(
            weaponId
        )
    ) {

        return null;

    }


    /*
     * 获取 DLC 内容目录
     */

    const folder =
        getDlcContentFolder(
            filePath
        );


    /*
     * 不在 Content/DLCs
     *
     * 即基础游戏武器。
     */

    if (
        !folder
    ) {

        return null;

    }


    /*
     * --------------------------------------------------------
     * 新版显式映射
     * --------------------------------------------------------
     */

    if (
        Object.hasOwn(
            DLC_FOLDER_MAP,
            folder
        )
    ) {

        return DLC_FOLDER_MAP[
            folder
        ];

    }


    /*
     * --------------------------------------------------------
     * 兼容旧版 DLC 目录
     * --------------------------------------------------------
     *
     * 例如：
     *
     * 00006-DLCWEAP0001
     * 00010-DLCHEIST0002
     * 00030-DLC0003
     *
     * 这里仅作为 fallback。
     */

    const legacyMatch =
        folder.match(
            /-DLC(?:WEAP|HEIST)?0*(\d+)$/i
        );


    if (
        legacyMatch
    ) {

        return String(
            Number(
                legacyMatch[1]
            )
        );

    }


    /*
     * 未知的新 DLC 目录
     *
     * 不要乱猜编号。
     */

    console.warn(
        `[WARNING] ${weaponId} 位于 DLCs/${folder}，但没有 DLC 映射，使用 dlc: null`
    );


    return null;
}

/**
 * ============================================================
 * Unreal Engine ObjectPath -> FModel JSON Path
 * ============================================================
 *
 * 例如：
 *
 * /Game/Gameplay/WeaponParts/SMG/PC9/WMD_PC9_Compact.0
 *
 * ->
 *
 * PAYDAY3/Content/Gameplay/WeaponParts/SMG/PC9/WMD_PC9_Compact.json
 */
function unrealPathToJson(objectPath) {

    if (
        !objectPath ||
        typeof objectPath !== 'string'
    ) {

        throw new TypeError(
            `Invalid Unreal ObjectPath: ${objectPath}`
        );

    }

    let result =
        objectPath
            .replace(
                /^\/Game(?=\/|$)/,
                'PAYDAY3/Content'
            )
            .replace(
                /\.\d+$/,
                ''
            );

    if (
        !result.endsWith('.json')
    ) {

        result += '.json';

    }

    return result;
}


/**
 * ============================================================
 * 读取 SBZSharedPartList
 * ============================================================
 *
 * 新版 PAYDAY 3 的 ModularConfiguration 中：
 *
 * UniqueModParts
 *
 * 已经不一定包含全部可用配件。
 *
 * 例如：
 *
 * SharedParts:
 * [
 *     {
 *         ObjectName:
 *             "SBZSharedPartList'DA_SharedParts_Sights_RDS'",
 *
 *         ObjectPath:
 *             "/Game/.../DA_SharedParts_Sights_RDS.0"
 *     }
 * ]
 *
 *
 * DA_SharedParts_Sights_RDS.json：
 *
 * Properties:
 * {
 *     SharedModParts:
 *     [
 *         {
 *             ObjectName:
 *                 "SBZWeaponPartDataAsset'WPD_Sight_Compact'"
 *         }
 *     ]
 * }
 *
 *
 * 最终返回：
 *
 * [
 *     "Sight_Compact",
 *     ...
 * ]
 */
async function loadSharedParts(
    sharedPartReference
) {

    /*
     * 没有有效 ObjectPath
     */

    if (
        !sharedPartReference?.ObjectPath
    ) {

        return [];

    }


    /*
     * 转换 UE 路径
     */

    const sharedPartsPath =
        unrealPathToJson(
            sharedPartReference.ObjectPath
        );


    console.log(
        `[SharedParts] -> ${sharedPartsPath}`
    );


    try {

        /*
         * 读取 SharedParts JSON
         */

        const sharedPartsFile =
            JSON.parse(

                await fs.readFile(
                    sharedPartsPath,
                    'utf8'
                )

            );


        /*
         * 获取 Properties
         */

        const sharedPartsObject =
    sharedPartsFile.find(
        (entry) =>
            entry?.Properties
    );

if (!sharedPartsObject) {

    console.log(
        `[SharedParts] Empty -> ${sharedPartsPath}`
    );

    return [];
}

const properties =
    sharedPartsObject.Properties;


        /*
         * 获取 SharedModParts
         */

        const sharedModParts =
            properties.SharedModParts;


        if (
            !Array.isArray(
                sharedModParts
            )
        ) {

            console.warn(
                `[WARNING] SharedParts 缺少 SharedModParts: ${sharedPartsPath}`
            );

            return [];

        }


        /*
         * 将：
         *
         * SBZWeaponPartDataAsset'WPD_Sight_Compact'
         *
         * 转换为：
         *
         * Sight_Compact
         */

        const result =
            sharedModParts

                .map(
                    (part) => {

                        if (
                            !part?.ObjectName
                        ) {

                            return null;

                        }


                        const match =
                            part
                                .ObjectName
                                .match(
                                    /'WPD_([^']+)'/
                                );


                        return match
                            ? match[1]
                            : null;

                    }
                )

                .filter(Boolean);


        console.log(
            `[SharedParts] Found ${result.length}: ${result.join(', ')}`
        );


        return result;

    }

    catch (err) {

        /*
         * 某一个 SharedParts 没有导出时，
         * 不让整个 importer 崩溃。
         */

        console.error(
            `[ERROR] 无法读取 SharedParts: ${sharedPartsPath}`
        );

        console.error(err);

        return [];

    }

}


try {

    /*
     * ============================================================
     * 扫描 PAYDAY3/Content
     * ============================================================
     */

    const files =
        await fs.readdir(

            'PAYDAY3/Content',

            {

                withFileTypes: true,

                recursive: true,

            }

        );


    /*
     * ============================================================
     * 查找武器目录
     * ============================================================
     */

    const weapons =
        files.filter(
            (file) => {

                return (

                    file.isDirectory()

                    &&

                    file.parentPath.includes(
                        `Gameplay${path.sep}Weapons`
                    )

                    &&

                    weaponCategories.includes(
                        path.basename(
                            file.parentPath
                        )
                    )

                );

            }
        );


    /*
     * ============================================================
     * 查找 WPD 配件 JSON
     * ============================================================
     */

    const attachments =
        files.filter(
            (file) => {

                return (

                    file.parentPath.includes(
                        `Gameplay${path.sep}WeaponParts`
                    )

                    &&

                    /WPD_[a-zA-Z0-9_]*\.json/
                        .test(
                            file.name
                        )

                );

            }
        );


    /*
     * ============================================================
     * 导入武器
     * ============================================================
     */

    for (
        const weapon
        of weapons
    ) {

        /*
         * ========================================================
         * Weapon Path
         * ========================================================
         */

        const weaponPath =
            weapon.parentPath
            +
            '/'
            +
            weapon.name;


        const weaponFiles =
            await fs.readdir(
                weaponPath
            );


        /*
         * ========================================================
         * Weapon Data
         * ========================================================
         */

        const weaponDataFileName =
            weaponFiles.find(
                (fileName) =>
                    fileName.includes(
                        'DA_WeaponData'
                    )
            );


        /*
         * 防止错误目录被识别为武器
         */

        if (
            !weaponDataFileName
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 找不到 DA_WeaponData，跳过`
            );

            continue;

        }


        const weaponDataPath =
            weaponPath
            +
            '/'
            +
            weaponDataFileName;


        const weaponData =
            JSON.parse(

                await fs.readFile(
                    weaponDataPath,
                    'utf8'
                )

            )[0].Properties;


        /*
         * ========================================================
         * Weapon Icon
         * ========================================================
         */

        const iconDataPath =
            weaponData
                .DisplayIcon
                .AssetPathName

                .replace(
                    '/Game',
                    'PAYDAY3/Content'
                )

                .split('.')[0]

            +

            '.json';


        const iconDataFile =
            JSON.parse(

                await fs.readFile(
                    iconDataPath,
                    'utf8'
                )

            );


        const iconData =
            iconDataFile[1]

                ? iconDataFile[1]
                    .Properties

                : iconDataFile[0]
                    .Properties;


        const sourceTexturePath =
            iconData
                .BakedSourceTexture
                .ObjectPath;


        const iconName =
            path
                .basename(
                    sourceTexturePath
                )
                .replace(
                    '.0',
                    '.png'
                );


        const iconFile =
            sourceTexturePath
                .replace(
                    '.0',
                    '.png'
                );


        /*
         * ========================================================
         * Fire Data
         * ========================================================
         */

        const fireDataFileName =
            weaponFiles.find(
                (fileName) =>
                    fileName.includes(
                        'DA_FireData'
                    )
            );


        if (
            !fireDataFileName
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 找不到 DA_FireData，跳过`
            );

            continue;

        }


        const fireDataPath =
            weaponPath
            +
            '/'
            +
            fireDataFileName;


        const fireData =
            JSON.parse(

                await fs.readFile(
                    fireDataPath,
                    'utf8'
                )

            )[0].Properties;


        /*
         * ========================================================
         * Spread Data
         * ========================================================
         */

        const spreadDataFileName =
            weaponFiles.find(
                (fileName) =>
                    fileName.includes(
                        'DA_SpreadData'
                    )
            );


        if (
            !spreadDataFileName
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 找不到 DA_SpreadData，跳过`
            );

            continue;

        }


        const spreadDataPath =
            weaponPath
            +
            '/'
            +
            spreadDataFileName;


        const spreadData =
            JSON.parse(

                await fs.readFile(
                    spreadDataPath,
                    'utf8'
                )

            )[0].Properties;


        /*
         * ========================================================
         * Recoil Data
         * ========================================================
         */

        const recoilDataFileName =
            weaponFiles.find(
                (fileName) =>
                    fileName.includes(
                        'DA_RecoilData'
                    )
            );


        if (
            !recoilDataFileName
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 找不到 DA_RecoilData，跳过`
            );

            continue;

        }


        const recoilDataPath =
            weaponPath
            +
            '/'
            +
            recoilDataFileName;


        const recoilData =
            JSON.parse(

                await fs.readFile(
                    recoilDataPath,
                    'utf8'
                )

            )[0].Properties;


        /*
         * ========================================================
         * 武器配件槽
         * ========================================================
         *
         * 同时支持：
         *
         * DefaultPart
         * UniqueModParts
         * SharedParts
         *
         * ========================================================
         */

        const weaponAttachments = {};


        for (
            const attachmentCategory
            of weaponData.ModularConfiguration ?? []
        ) {

            /*
             * ----------------------------------------------------
             * Slot
             * ----------------------------------------------------
             */

            const keyParts =
                attachmentCategory
                    .Key
                    ?.split(`'`);


            if (
                !keyParts ||
                !keyParts[1]
            ) {

                console.warn(
                    `[WARNING] ${weapon.name} 存在无法解析的配件槽`
                );

                continue;

            }


            const slotPathParts =
                keyParts[1]
                    .split('.');


            if (
                !slotPathParts[1]
            ) {

                console.warn(
                    `[WARNING] ${weapon.name} 存在无法解析的 SLOT`
                );

                continue;

            }


            const slot =
                slotPathParts[1]
                    .replace(
                        'SLOT_',
                        ''
                    );


            const slotData =
                attachmentCategory.Value
                ?? {};


            weaponAttachments[
                slot
            ] = {};


            /*
             * ----------------------------------------------------
             * Default Part
             * ----------------------------------------------------
             */

            weaponAttachments[
                slot
            ].DefaultPart =

                slotData
                    .DefaultPart
                    ?.ObjectName

                    ?

                    slotData
                        .DefaultPart
                        .ObjectName
                        .split(`'`)[1]
                        ?.replace(
                            'WPD_',
                            ''
                        )

                    :

                    null;


            /*
             * ----------------------------------------------------
             * Unique Mod Parts
             * ----------------------------------------------------
             */

            const uniqueParts =

                (
                    slotData
                        .UniqueModParts
                    ??
                    []
                )

                .map(
                    (part) => {

                        if (
                            !part?.ObjectName
                        ) {

                            return null;

                        }


                        const match =
                            part
                                .ObjectName
                                .match(
                                    /'WPD_([^']+)'/
                                );


                        return match
                            ? match[1]
                            : null;

                    }
                )

                .filter(Boolean);


            /*
             * ----------------------------------------------------
             * Shared Parts
             * ----------------------------------------------------
             */

            const sharedParts = [];


            for (
                const sharedPart
                of slotData.SharedParts ?? []
            ) {

                const loadedSharedParts =
                    await loadSharedParts(
                        sharedPart
                    );


                sharedParts.push(
                    ...loadedSharedParts
                );

            }


            /*
             * ----------------------------------------------------
             * 合并 UniqueModParts + SharedParts
             * ----------------------------------------------------
             *
             * 使用 Set 自动去重。
             */

            weaponAttachments[
                slot
            ].UniqueModParts = [

                ...new Set(
                    [

                        ...uniqueParts,

                        ...sharedParts,

                    ]
                ),

            ];


            /*
             * ----------------------------------------------------
             * 防止 DefaultPart 同时出现在 UniqueParts
             * ----------------------------------------------------
             */

            if (
                weaponAttachments[
                    slot
                ].DefaultPart
            ) {

                weaponAttachments[
                    slot
                ].UniqueModParts =

                    weaponAttachments[
                        slot
                    ].UniqueModParts

                        .filter(
                            (part) =>

                                part
                                !==
                                weaponAttachments[
                                    slot
                                ].DefaultPart
                        );

            }


            /*
             * ----------------------------------------------------
             * Debug
             * ----------------------------------------------------
             */

            console.log(
                `[WeaponParts] ${weapon.name} / ${slot}`
            );


            console.log(
                `  Default: ${
                    weaponAttachments[
                        slot
                    ].DefaultPart
                    ??
                    'None'
                }`
            );


            console.log(
                `  Parts: ${
                    weaponAttachments[
                        slot
                    ].UniqueModParts
                        .join(', ')
                    ||
                    'None'
                }`
            );

        }


/*
 * ========================================================
 * DLC
 * ========================================================
 */

const DLC =
    resolveWeaponDlc(
        weapon.parentPath,
        weapon.name
    );


console.log(
    `[DLC] ${weapon.name} -> ${DLC ?? 'Base / Free'}`
);


        /*
         * ========================================================
         * Weapon Class
         * ========================================================
         *
         * 旧武器：
         *
         * TypeClassText.LocalizedString
         *
         * 新武器（例如 Pocket）可能没有 TypeClassText。
         *
         * 此时依次尝试：
         *
         * WeaponPartsTags
         * Family.TagName
         * Unknown
         */

        console.log(
            `\n[Weapon] ${weapon.name}`
        );


        if (
            !weaponData.DisplayName
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 缺少 DisplayName`
            );

        }


        if (
            !weaponData.TypeClassText
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 缺少 TypeClassText`
            );

        }


        let weaponClass;


        /*
         * 旧版 / 常规武器
         */

        if (
            weaponData
                .TypeClassText
                ?.LocalizedString
        ) {

            weaponClass =
                weaponData
                    .TypeClassText
                    .LocalizedString;

        }


        /*
         * 新版：
         *
         * Weapon.Class.Shotgun
         *
         * ->
         *
         * Shotgun
         */

        else if (
            Array.isArray(
                weaponData
                    .WeaponPartsTags
            )
        ) {

            const classTag =
                weaponData
                    .WeaponPartsTags
                    .find(
                        (tag) =>

                            typeof tag
                            ===
                            'string'

                            &&

                            tag.startsWith(
                                'Weapon.Class.'
                            )
                    );


            if (
                classTag
            ) {

                weaponClass =
                    classTag
                        .replace(
                            'Weapon.Class.',
                            ''
                        );

            }

        }


        /*
         * 再尝试：
         *
         * Weapon.Family.Shotgun
         *
         * ->
         *
         * Shotgun
         */

        if (
            !weaponClass
            &&
            weaponData
                .Family
                ?.TagName
        ) {

            weaponClass =
                weaponData
                    .Family
                    .TagName
                    .replace(
                        'Weapon.Family.',
                        ''
                    );

        }


        /*
         * 最终兜底
         */

        if (
            !weaponClass
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 无法确定武器类型`
            );


            weaponClass =
                'Unknown';

        }


        console.log(
            `[Weapon] ${weapon.name} -> ${weaponClass}`
        );


        /*
         * ========================================================
         * 生成武器数据
         * ========================================================
         */

        weaponOutput[
            weapon.name
        ] = {


            /*
             * ----------------------------------------------------
             * Basic
             * ----------------------------------------------------
             */

            displayName:

                weaponData
                    .DisplayName
                    ?.LocalizedString

                ??

                weaponData
                    .DisplayName
                    ?.SourceString

                ??

                weapon.name,


            class:
                weaponClass,


            dlc:
                DLC,


            /*
             * ----------------------------------------------------
             * Icon
             * ----------------------------------------------------
             */

            displayIcon: {

                offset:

                    iconData
                        .BakedSourceUV

                        ?

                        {

                            x:
                                iconData
                                    .BakedSourceUV
                                    .X,

                            y:
                                iconData
                                    .BakedSourceUV
                                    .Y,

                        }

                        :

                        {

                            x: 0,

                            y: 0,

                        },


                source:
                    iconName,

            },


            /*
             * ----------------------------------------------------
             * Fire Data
             * ----------------------------------------------------
             */

            fireData: {


                damageDistanceArray:

                    (
                        fireData
                            .DamageDistanceArray
                        ??
                        []
                    )

                    .map(
                        (damageStep) => {

                            return {

                                damage:
                                    damageStep
                                        .Damage,

                                distance:
                                    damageStep
                                        .Distance,

                            };

                        }
                    ),


                criticalDamageMultiplierDistanceArray:

                    (
                        fireData
                            .CriticalDamageMultiplierDistanceArray
                        ??
                        []
                    )

                    .map(
                        (
                            critMultiplierStep
                        ) => {

                            return {

                                multiplier:
                                    critMultiplierStep
                                        .Multiplier,

                                distance:
                                    critMultiplierStep
                                        .Distance,

                            };

                        }
                    ),


                ammoLoaded:
                    fireData
                        .AmmoLoaded,


                ammoInventory:
                    fireData
                        .AmmoInventory,


                ammoInventoryMax:
                    fireData
                        .AmmoInventoryMax,


                ammoPickup:

                    fireData
                        .AmmoPickup

                        ?

                        {

                            min:
                                fireData
                                    .AmmoPickup
                                    .Min,

                            max:
                                fireData
                                    .AmmoPickup
                                    .Max,

                        }

                        :

                        AMMO_PICKUP_PRESETS,


                fireType:
                    fireData
                        .FireType
                        ?.split('::')[1],


                timeBetweenBursts:
                    fireData
                        .TimeBetweenBurstsSeconds,


                projectilesPerFiredRound:
                    fireData
                        .ProjectilesPerFiredRound,


                maximumPenetrationCount:
                    fireData
                        .MaximumPenetrationCount,


                armorPenetration:
                    fireData
                        .ArmorPenetration,


                roundsPerMinute:
                    fireData
                        .RoundsPerMinute,

            },


            /*
             * ----------------------------------------------------
             * Spread Data
             * ----------------------------------------------------
             */

            spreadData: {


                start:
                    spreadData
                        .FireSpreadStart,


                increase:
                    spreadData
                        .FireSpreadIncrease,


                resetTime:
                    spreadData
                        .FireSpreadResetTime,


                decayRate:
                    spreadData
                        .FireSpreadDecayRate,


                cap:
                    spreadData
                        .FireSpreadCap,


                stanceMultipliers:

                    Object.fromEntries(

                        Object
                            .keys(
                                spreadData
                                    .SpreadStanceMultipliers
                                ??
                                {}
                            )

                            .map(
                                (stance) => {

                                    const stanceMultipliers =

                                        spreadData
                                            .SpreadStanceMultipliers[
                                                stance
                                            ];


                                    return [

                                        stance
                                            .charAt(0)
                                            .toLowerCase()

                                        +

                                        stance
                                            .slice(1),


                                        {

                                            spread:
                                                stanceMultipliers
                                                    .Spread,

                                            start:
                                                stanceMultipliers
                                                    .Start,

                                            cap:
                                                stanceMultipliers
                                                    .Cap,

                                            increment:
                                                stanceMultipliers
                                                    .Increment,

                                        },

                                    ];

                                }
                            )

                    ),


                radiusMultipliers: {

                    x:
                        spreadData
                            .SpreadRadiusMultipliers
                            ?.X,

                    y:
                        spreadData
                            .SpreadRadiusMultipliers
                            ?.Y,

                },


                shotgunPatterns:

                    spreadData
                        .ShotgunPatterns
                        ?.map(
                            (pattern) => {

                                return (

                                    pattern
                                        .PelletSpreadAngles
                                    ??
                                    []

                                )

                                .map(
                                    (
                                        spreadAngles
                                    ) => {

                                        return {

                                            x:
                                                spreadAngles
                                                    .X,

                                            y:
                                                spreadAngles
                                                    .Y,

                                        };

                                    }
                                );

                            }
                        ),

            },


            /*
             * ----------------------------------------------------
             * Recoil Data
             * ----------------------------------------------------
             */

            recoilData: {


                viewKick: {


                    deflectSpeed:
                        recoilData
                            .ViewKick
                            ?.SpeedDeflect,


                    recoverSpeed:
                        recoilData
                            .ViewKick
                            ?.SpeedRecover,


                    recoverWaitTime:
                        recoilData
                            .ViewKick
                            ?.RecoverWaitTime,


                    recoilPattern:

                        (
                            recoilData
                                .ViewKick
                                ?.GraphDisplacementList
                                ?.Points
                            ??
                            []
                        )

                        .map(
                            (point) => {

                                return {

                                    x:
                                        point.X,

                                    y:
                                        point.Y,

                                };

                            }
                        ),


                    resetTime:
                        recoilData
                            .ViewKick
                            ?.DisplacementResetTime,


                    loopStart:
                        recoilData
                            .ViewKick
                            ?.DisplacementGraphLoopStart,


                    initialNum:
                        recoilData
                            .ViewKick
                            ?.DisplacementGraphInitialNum,


                    hipfireMultiplier:
                        recoilData
                            .ViewKick
                            ?.DisplacementHipFireMultiplier,

                },


                gunKick: {


                    deflectSpeed:
                        recoilData
                            .GunKickXY
                            ?.SpeedDeflect,


                    recoverSpeed:
                        recoilData
                            .GunKickXY
                            ?.SpeedRecover,


                    verticalTop: {

                        min:
                            recoilData
                                .GunKickXY
                                ?.VerticalTop
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.VerticalTop
                                ?.Max,

                    },


                    verticalBottom: {

                        min:
                            recoilData
                                .GunKickXY
                                ?.VerticalBottom
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.VerticalBottom
                                ?.Max,

                    },


                    verticalMultiplier: {

                        start:
                            recoilData
                                .GunKickXY
                                ?.VerticalMultiplier
                                ?.Start,

                        min:
                            recoilData
                                .GunKickXY
                                ?.VerticalMultiplier
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.VerticalMultiplier
                                ?.Max,

                        threshold:
                            recoilData
                                .GunKickXY
                                ?.VerticalMultiplier
                                ?.Threshold,

                    },


                    horizontalRight: {

                        min:
                            recoilData
                                .GunKickXY
                                ?.HorizontalRight
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.HorizontalRight
                                ?.Max,

                    },


                    horizontalLeft: {

                        min:
                            recoilData
                                .GunKickXY
                                ?.HorizontalLeft
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.HorizontalLeft
                                ?.Max,

                    },


                    horizontalMultiplier: {

                        start:
                            recoilData
                                .GunKickXY
                                ?.HorizontalMultiplier
                                ?.Start,

                        min:
                            recoilData
                                .GunKickXY
                                ?.HorizontalMultiplier
                                ?.Min,

                        max:
                            recoilData
                                .GunKickXY
                                ?.HorizontalMultiplier
                                ?.Max,

                        threshold:
                            recoilData
                                .GunKickXY
                                ?.HorizontalMultiplier
                                ?.Threshold,

                    },

                },

            },


            /*
             * ----------------------------------------------------
             * Modular Configuration
             * ----------------------------------------------------
             */

            modularConfiguration:

                Object.fromEntries(

                    Object
                        .keys(
                            weaponAttachments
                        )

                        .map(
                            (slot) => {

                                return [

                                    slot
                                        .charAt(0)
                                        .toLowerCase()

                                    +

                                    slot
                                        .slice(1),


                                    {

                                        defaultPart:
                                            weaponAttachments[
                                                slot
                                            ].DefaultPart,


                                        uniqueParts:
                                            weaponAttachments[
                                                slot
                                            ].UniqueModParts,

                                    },

                                ];

                            }
                        )

                ),


            /*
             * ----------------------------------------------------
             * Weapon Times
             * ----------------------------------------------------
             */

            equipTime:
                weaponData
                    .EquipNotifyTime,


            unequipTime:
                weaponData
                    .UnequipNotifyTime,


            sprintExitTime:
                weaponData
                    .SprintExitNotifyTime,


            reloadTime:
                weaponData
                    .ReloadNotifyTime,


            reloadEmptyTime:
                weaponData
                    .ReloadEmptyNotifyTime,

        };


        /*
         * ========================================================
         * 复制武器图标
         * ========================================================
         */

        try {

            await fs.copyFile(

                iconFile,

                `../images/${iconName}`,

                fs.constants
                    .COPYFILE_EXCL

            );

        }

        catch {

            /*
             * 已存在时忽略
             */

        }

    }


    /*
     * ============================================================
     * 武器排序
     * ============================================================
     */

    const sortedWeaponData =

        Object
            .keys(
                weaponOutput
            )

            .sort()

            .reduce(
                (
                    obj,
                    key
                ) => {

                    obj[
                        key
                    ] =
                        weaponOutput[
                            key
                        ];


                    return obj;

                },

                {}

            );


    /*
     * ============================================================
     * 输出 weapons.js
     * ============================================================
     */

    await fs.writeFile(

        '../scripts/weapons.js',

        'const WEAPON_DATA = Object.freeze('

        +

        JSON.stringify(
            sortedWeaponData,
            null,
            4
        )

        +

        ');'

    );


    /*
     * ============================================================
     * 导入配件
     * ============================================================
     */

    for (
        const attachment
        of attachments
    ) {

        /*
         * ========================================================
         * Attachment Path
         * ========================================================
         */

        const attachmentPath =
            attachment.parentPath
            +
            '/'
            +
            attachment.name;


        /*
         * ========================================================
         * Attachment Data
         * ========================================================
         */

        const attachmentData =
            JSON.parse(

                await fs.readFile(
                    attachmentPath,
                    'utf8'
                )

            )[0].Properties;


        /*
         * WPD_PC9_Mag_Compact.json
         *
         * ->
         *
         * PC9_Mag_Compact
         */

        const key =
            attachment
                .name
                .split('.')[0]
                .replace(
                    'WPD_',
                    ''
                );


        attachmentOutput[
            key
        ] = {};


        /*
         * ========================================================
         * Display Name
         * ========================================================
         */

        if (
            attachmentData
                .DisplayName
        ) {

            attachmentOutput[
                key
            ].displayName =

                attachmentData
                    .DisplayName
                    ?.LocalizedString

                ??

                attachmentData
                    .DisplayName
                    ?.SourceString;

        }


        /*
         * ========================================================
         * Attribute Modifier
         * ========================================================
         */

        if (
            Array.isArray(
                attachmentData
                    .AttributeModifierMap
            )
        ) {

            attachmentOutput[
                key
            ].attributeModifierMap =

                attachmentData
                    .AttributeModifierMap

                    .map(
                        (modifier) => {

                            return {

                                attribute:
                                    modifier
                                        .Key
                                        ?.replace(
                                            'ESBZWeaponAttribute::',
                                            ''
                                        ),

                                value:
                                    modifier
                                        .Value,

                            };

                        }
                    );

        }


        /*
         * ========================================================
         * Magazine Data
         * ========================================================
         */

        if (
            attachmentData
                .MagazineData
                ?.ObjectPath
        ) {

            const magazineDataPath =
                unrealPathToJson(

                    attachmentData
                        .MagazineData
                        .ObjectPath

                );


            console.log(
                `[MagazineData] ${key} -> ${magazineDataPath}`
            );


            try {

                const magazineData =
                    JSON.parse(

                        await fs.readFile(
                            magazineDataPath,
                            'utf8'
                        )

                    )[0].Properties;


                attachmentOutput[
                    key
                ].magazineData = {


                    ammoLoaded:
                        magazineData
                            .AmmoLoaded,


                    ammoInventory:
                        magazineData
                            .AmmoInventory,


                    ammoInventoryMax:
                        magazineData
                            .AmmoInventoryMax,


                    ammoPickup: {

                        min:
                            magazineData
                                .AmmoPickup
                                ?.Min,

                        max:
                            magazineData
                                .AmmoPickup
                                ?.Max,

                    },

                };

            }

            catch (err) {

                console.error(
                    `[ERROR] 无法读取 MagazineData: ${magazineDataPath}`
                );

                console.error(err);

            }

        }


        /*
         * ========================================================
         * Sight Data
         * ========================================================
         *
         * WPD
         *
         * ->
         *
         * WSD
         *
         * ->
         *
         * WTD
         */

        if (
            attachmentData
                .SightDataArray
                ?.length > 0
        ) {

            const firstSightData =
                attachmentData
                    .SightDataArray[0];


            /*
             * 没有 ObjectPath 就跳过
             */

            if (
                firstSightData
                    ?.ObjectPath
            ) {

                const sightDataPath =
                    unrealPathToJson(

                        firstSightData
                            .ObjectPath

                    );


                console.log(
                    `[SightData] ${key} -> ${sightDataPath}`
                );


                try {

                    /*
                     * 读取 WSD
                     */

                    const sightDataFile =
                        JSON.parse(

                            await fs.readFile(
                                sightDataPath,
                                'utf8'
                            )

                        );


                    const targetingDataPath =
                        sightDataFile[0]
                            ?.Properties
                            ?.TargetingData
                            ?.ObjectPath;


                    /*
                     * 某些 SightData 可能没有 TargetingData
                     */

                    if (
                        !targetingDataPath
                    ) {

                        console.warn(
                            `[WARNING] ${key} 的 SightData 没有 TargetingData`
                        );

                    }

                    else {

                        /*
                         * WTD Path
                         */

                        const targetingDataJsonPath =
                            unrealPathToJson(
                                targetingDataPath
                            );


                        console.log(
                            `[TargetingData] ${key} -> ${targetingDataJsonPath}`
                        );


                        /*
                         * 读取 WTD
                         */

                        const targetingDataProperties =
                            JSON.parse(

                                await fs.readFile(
                                    targetingDataJsonPath,
                                    'utf8'
                                )

                            )[0].Properties;


                        attachmentOutput[
                            key
                        ].targetingData = {


                            targetingMagnification:
                                targetingDataProperties
                                    .TargetingMagnification,


                            targetingOnTopMagnification:
                                targetingDataProperties
                                    .TargetingOnTopMagnification,

                        };

                    }

                }

                catch (err) {

                    console.error(
                        `[ERROR] 无法读取 SightData: ${key}`
                    );

                    console.error(err);

                }

            }

        }

    }


    /*
     * ============================================================
     * 配件排序
     * ============================================================
     */

    const sortedAttachmentData =

        Object
            .keys(
                attachmentOutput
            )

            .sort()

            .reduce(
                (
                    obj,
                    key
                ) => {

                    obj[
                        key
                    ] =
                        attachmentOutput[
                            key
                        ];


                    return obj;

                },

                {}

            );


    /*
     * ============================================================
     * 输出 attachments.js
     * ============================================================
     */

    await fs.writeFile(

        '../scripts/attachments.js',

        'const ATTACHMENT_DATA = Object.freeze('

        +

        JSON.stringify(
            sortedAttachmentData,
            null,
            4
        )

        +

        ');'

    );


    /*
     * ============================================================
     * Curve Data
     * ============================================================
     */

    const modData =
        JSON.parse(

            await fs.readFile(

                'PAYDAY3/Content/Gameplay/Weapons/CT_ModData_Default.json',

                'utf8'

            )

        )[0].Rows;


    const modDataOutput =

        Object.fromEntries(

            Object
                .keys(
                    modData
                )

                .map(
                    (attribute) => {

                        return [

                            attribute,


                            (
                                modData[
                                    attribute
                                ].Keys
                                ??
                                []
                            )

                            .map(
                                (step) => {

                                    return {

                                        point:
                                            step.Time,

                                        value:
                                            step.Value,

                                    };

                                }
                            ),

                        ];

                    }
                )

        );


    /*
     * ============================================================
     * 输出 curve-data.js
     * ============================================================
     */

    await fs.writeFile(

        '../scripts/curve-data.js',

        'const CURVE_DATA = Object.freeze('

        +

        JSON.stringify(
            modDataOutput,
            null,
            4
        )

        +

        ');'

    );


    /*
     * ============================================================
     * 完成
     * ============================================================
     */

    console.log(
        '\n============================================'
    );

    console.log(
        'Importer completed successfully.'
    );

    console.log(
        `Weapons: ${Object.keys(sortedWeaponData).length}`
    );

    console.log(
        `Attachments: ${Object.keys(sortedAttachmentData).length}`
    );

    console.log(
        '============================================\n'
    );

}

catch (
    err
) {

    console.error(
        '\n[FATAL ERROR]'
    );

    console.error(
        err
    );

}