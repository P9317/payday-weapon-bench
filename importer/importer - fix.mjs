import * as fs from 'node:fs/promises';
import * as path from 'node:path';

// Damage formulas are site-specific; the exported WPD does not contain these values.
// Add new persistent damage perks here without changing the importer logic.
// A missing or broken file must not abort the import.
let perkDamageEffects = {};
try {
    perkDamageEffects = JSON.parse(await fs.readFile(
        new URL('./perk-damage-effects.json', import.meta.url), 'utf8'
    )) ?? {};
} catch (error) {
    console.warn(
        '[WARNING] 无法读取 perk-damage-effects.json，天赋伤害效果将回退到旧数据',
        error
    );
}

// Retain manually completed descriptions when an export lacks its skill asset.
let previousAttachments = {};
try {
    const existing = await fs.readFile('../scripts/attachments.js', 'utf8');
    const json = existing.match(/^const ATTACHMENT_DATA = Object\.freeze\(([\s\S]*)\);\s*$/)?.[1];
    if (json) previousAttachments = JSON.parse(json);
} catch (error) {
    // A missing file is expected on a fresh checkout; anything else is worth reporting.
    if (error.code !== 'ENOENT') {
        console.warn(
            '[WARNING] 无法读取已有的 attachments.js，手动完成的描述将无法沿用',
            error
        );
    }
}

// Manual icon overrides for weapons whose UI icon asset is not in the export.
let weaponIconOverrides = {};
try {
    weaponIconOverrides = JSON.parse(await fs.readFile(
        new URL('./icon-overrides.json', import.meta.url), 'utf8'
    )) ?? {};
} catch (error) {
    if (error.code !== 'ENOENT') {
        console.warn(
            '[WARNING] 无法读取 icon-overrides.json，图标覆盖配置将不生效',
            error
        );
    }
}

// Retain the previous icons when an export does not contain its UI textures.
let previousWeapons = {};
try {
    const existing = await fs.readFile('../scripts/weapons.js', 'utf8');
    const json = existing.match(/^const WEAPON_DATA = Object\.freeze\(([\s\S]*)\);\s*$/)?.[1];
    if (json) previousWeapons = JSON.parse(json);
} catch (error) {
    // A missing file is expected on a fresh checkout; anything else is worth reporting.
    if (error.code !== 'ENOENT') {
        console.warn(
            '[WARNING] 无法读取已有的 weapons.js，旧图标将无法沿用',
            error
        );
    }
}

/**
 * 旧 weapons.js 里的武器数据。
 *
 * 导出目录偶尔会改变大小写
 * （例如 Fsa12 -> fsa12），所以名字对不上时
 * 再按不区分大小写找一次。
 */
function getPreviousWeapon(weaponName) {

    if (
        Object.hasOwn(
            previousWeapons,
            weaponName
        )
    ) {

        return previousWeapons[
            weaponName
        ];

    }


    const lowerName =
        weaponName
            .toLowerCase();


    const key =
        Object
            .keys(
                previousWeapons
            )
            .find(
                (candidate) =>
                    candidate
                        .toLowerCase()
                        ===
                        lowerName
            );


    return key
        ? previousWeapons[key]
        : null;

}

// Single-item failures are collected instead of aborting the whole import,
// so one broken weapon/attachment never prevents the rest from being exported.
const importFailures = [];

// 单项失败时是否让退出码变成非 0。
// 默认 false：只要跑完全程就算成功（run-importer.bat 会显示“导入完成”），
// 失败项仍会在结尾处逐条列出；想让它显示“导入失败”就改成 true。
const FAIL_ON_PARTIAL_ERRORS = false;

function recordFailure(label, error) {

    importFailures.push({ label, error });

    console.error(
        `[ERROR] ${label} 导入失败，已跳过该项并继续`
    );

    console.error(error);

}

/*
 * ============================================================
 * 站点支持的武器类型
 * ============================================================
 *
 * 必须与 scripts/app.js 里的 weaponClasses 保持一致。
 *
 * 导出里出现新的武器类型（例如双持武器 Dual、
 * Overkill 类武器）时：
 *
 * - 类型在这里有 -> 正常导入
 * - 类型在这里没有 -> 跳过并提示，
 *   避免生成站点无法渲染的数据
 *
 * 不再需要维护“武器分类目录名”白名单：
 * 只要目录里有 DA_WeaponData*.json 就当作武器，
 * 所以新增分类目录（如 Dual）不用改代码。
 */
const KNOWN_WEAPON_CLASSES = [
    'Assault Rifle',
    'Marksman',
    'Shotgun',
    'Pistol',
    'Revolver',
    'SMG',
    'LMG',
];


/**
 * 统一比较用的写法。
 *
 * Assault Rifle / AssaultRifle / assault rifle
 * 会被视为同一个类型。
 */
function normaliseWeaponClass(weaponClass) {

    return String(
        weaponClass
        ?? ''
    )
        .replace(
            /[^a-z0-9]/gi,
            ''
        )
        .toLowerCase();

}


function canonicaliseWeaponClass(weaponClass) {

    const normalised =
        normaliseWeaponClass(
            weaponClass
        );


    if (
        !normalised
    ) {

        return weaponClass;

    }


    /*
     * 完全一致优先
     */
    const exact =
        KNOWN_WEAPON_CLASSES.find(
            (knownClass) =>
                normaliseWeaponClass(
                    knownClass
                )
                ===
                normalised
        );


    if (
        exact
    ) {

        return exact;

    }


    /*
     * 其次按包含关系匹配：
     * Weapon.Family.Sidearm.Revolver
     *
     * ->
     *
     * Sidearm.Revolver
     *
     * ->
     *
     * Revolver
     */
    const contained =
        KNOWN_WEAPON_CLASSES
            .filter(
                (knownClass) =>
                    normalised.includes(
                        normaliseWeaponClass(
                            knownClass
                        )
                    )
            )
            .sort(
                (a, b) =>
                    normaliseWeaponClass(
                        b
                    ).length
                    -
                    normaliseWeaponClass(
                        a
                    ).length
            )[0];


    return contained
        ?? weaponClass;

}


function isKnownWeaponClass(weaponClass) {

    return KNOWN_WEAPON_CLASSES.some(
        (knownClass) =>
            normaliseWeaponClass(
                knownClass
            )
            ===
            normaliseWeaponClass(
                weaponClass
            )
    );

}

const AMMO_PICKUP_PRESETS = {
    min: 5,
    max: 10
};

// Default weapon curve values; explicit notify times in weapon data take precedence.
const DEFAULT_WEAPON_TIMES = {
    equip: 0.167,
    unequip: 0.300,
    sprintExit: 0.150,
};

const weaponOutput = {};
const attachmentOutput = {};
const weaponIdsByDataPath = new Map();
const weaponIdsByDataName = new Map();

function normaliseDataPath(filePath) {
    return path.resolve(filePath).replace(/\\/g, '/').toLowerCase();
}

function getReferenceAssetName(reference) {
    return reference?.ObjectName?.match(/'([^']+)'$/)?.[1]?.split('.').pop() ??
        reference?.ObjectPath?.replace(/\\/g, '/').split('/').pop()?.split('.')[0];
}

async function importPresetPerks(files) {
    const presets = files.filter((file) => file.isFile() &&
        /^DA_Preset_.*\.json$/i.test(file.name))
        .sort((a, b) => path.join(a.parentPath, a.name).localeCompare(
            path.join(b.parentPath, b.name)
        ));

    for (const presetFile of presets) {
        const presetPath = path.join(presetFile.parentPath, presetFile.name);
        let exports;
        try {
            exports = JSON.parse(await fs.readFile(presetPath, 'utf8'));
            if (!Array.isArray(exports)) throw new TypeError('Expected an export array');
        } catch (error) {
            console.warn(`[WARNING] 无法读取武器预设: ${presetPath}`, error);
            continue;
        }

        for (const preset of exports) {
            try {
                if (preset.Type !== 'SBZWeaponPresetConfigData') continue;
                const data = preset.Properties ?? {};
                const perks = (data.ModData ?? [])
                    .filter((mod) => /SLOT_Perk\d*(?:\.|')/i.test(mod.Key ?? ''))
                    .map((mod) => getReferenceAssetName(mod.Value?.Part))
                    .filter((name) => /^WPD_Perk_/.test(name ?? ''))
                    .map((name) => name.replace(/^WPD_/, ''));
                if (!perks.length) continue;

                const weaponRef = data.WeaponData;
                const weaponId = weaponRef?.ObjectPath
                    ? weaponIdsByDataPath.get(normaliseDataPath(
                        unrealPathToJson(weaponRef.ObjectPath)
                    ))
                    : weaponIdsByDataName.get(getReferenceAssetName(weaponRef));
                const weapon = weaponOutput[weaponId];
                if (!weapon) {
                    console.warn(`[WARNING] ${presetFile.name} 的原型武器未导入，跳过预设天赋`);
                    continue;
                }

                const slot = weapon.modularConfiguration.perk1 ??= {
                    defaultPart: null, uniqueParts: []
                };
                const available = new Set([slot.defaultPart, ...slot.uniqueParts]);
                const added = [];
                for (const perk of perks) {
                    if (available.has(perk)) continue;
                    slot.uniqueParts.push(perk);
                    available.add(perk);
                    added.push(perk);
                }
                if (added.length) {
                    console.log(`[PresetPerks] ${presetFile.name} -> ${weaponId}: ${added.join(', ')}`);
                }
            } catch (error) {
                recordFailure(`[PresetPerks] ${presetFile.name}`, error);
            }
        }
    }
}
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

    // Western（双持武器 Dual Grimshot / Dual Outlaw）
    '00252-Western': '8',
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

    let sharedPartsPath;

    try {

        sharedPartsPath =
            unrealPathToJson(
                sharedPartReference.ObjectPath
            );

    }

    catch (err) {

        /*
         * 路径本身无效时也不要中断整个武器，
         * 只跳过这个 SharedParts。
         */

        console.warn(
            `[WARNING] SharedParts 路径无效，已跳过: ${sharedPartReference.ObjectPath}`
        );

        return [];

    }


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
     *
     * 只要目录里含有 DA_WeaponData*.json 就当作武器目录，
     * 不再按固定的分类目录名（AssaultRifle / Dual / ...）筛选。
     *
     * 这样新版导出的新分类目录（例如双持武器 Dual）
     * 不改代码也能被读到。
     */

    const weaponFolderPaths =
        new Set(
            files
                .filter(
                    (file) =>

                        file.isFile()

                        &&

                        /^DA_WeaponData.*\.json$/i
                            .test(
                                file.name
                            )

                        &&

                        file.parentPath.includes(
                            `Gameplay${path.sep}Weapons`
                        )
                )
                .map(
                    (file) =>
                        path.resolve(
                            file.parentPath
                        )
                )
        );


    const weapons =
        files.filter(
            (file) => {

                return (

                    file.isDirectory()

                    &&

                    weaponFolderPaths.has(
                        path.resolve(
                            file.parentPath,
                            file.name
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
     * 导出数据完整性检查
     * ============================================================
     *
     * 扫描不到任何武器/配件时，说明导出的 PAYDAY3 目录不完整，
     * 或者不是从 importer 目录运行。
     *
     * 这种情况下必须中止，否则会用空数据覆盖现有的 weapons.js。
     */

    if (
        !weapons.length
    ) {

        throw new Error(
            'PAYDAY3/Content 中找不到任何武器目录，已中止，避免用空数据覆盖现有文件。' +
            '请确认已在 importer 目录运行，并且 FModel 导出完整。'
        );

    }

    if (
        !attachments.length
    ) {

        throw new Error(
            'PAYDAY3/Content 中找不到任何 WPD 配件文件，已中止，避免用空数据覆盖现有文件。' +
            '请确认 FModel 导出包含 Gameplay/WeaponParts。'
        );

    }


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
         * 单个武器出错时不再中断整个导入，
         * 只记录错误并继续处理下一个武器。
         */

        try {

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


        /*
         * 导出目录里的武器分类，例如：
         *
         * Shotgun
         * Pistol
         * Dual
         *
         * 注意与 class 的区别：
         * Dual 武器的 class 仍然是 Shotgun / Revolver。
         */

        const weaponCategoryName =
            path.basename(
                weapon.parentPath
            );


        const weaponCategory =
            weaponCategoryName
            ===
            'Weapons'

                ? null

                : weaponCategoryName;


        const weaponFiles =
            await fs.readdir(
                weaponPath
            );


        /*
         * ========================================================
         * Weapon Data
         * ========================================================
         */

        /*
         * 同一把武器可能导出多个 WeaponData，
         * 例如双持武器还有 _Vendor_Permission 版本。
         *
         * 优先取基础版本，避免 readdir 顺序决定读到哪一份。
         */

        const weaponDataFileNames =
            weaponFiles
                .filter(
                    (fileName) =>
                        /^DA_WeaponData.*\.json$/i
                            .test(
                                fileName
                            )
                )
                .sort(
                    (a, b) =>
                        a.localeCompare(
                            b
                        )
                );


        const weaponDataFileName =
            weaponDataFileNames.find(
                (fileName) =>
                    !/_Vendor_Permission\.json$/i
                        .test(
                            fileName
                        )
            )
            ??
            weaponDataFileNames[0];


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

        weaponIdsByDataPath.set(normaliseDataPath(weaponDataPath), weapon.name);
        const dataName = path.basename(weaponDataFileName, '.json');
        // Names are a fallback only when the preset does not include an ObjectPath.
        weaponIdsByDataName.set(dataName, weaponIdsByDataName.has(dataName)
            ? null : weapon.name);


        /*
         * ========================================================
         * Weapon Icon
         * ========================================================
         */

        /*
         * 图标属于可选数据：
         * 读取失败时先用 icon-overrides.json，
         * 再沿用旧的 weapons.js 里的图标，
         * 都没有就只丢掉图标，武器本身仍然导出。
         */

        let iconData = null;

        try {

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


            iconData =
                iconDataFile[1]

                    ? iconDataFile[1]
                        .Properties

                    : iconDataFile[0]
                        .Properties;

        }

        catch (err) {

            console.warn(
                `[WARNING] ${weapon.name} 图标数据无法读取: ${err.message}`
            );

        }


        const sourceTexturePath =
            iconData
                ?.BakedSourceTexture
                ?.ObjectPath;


        let iconName =
            sourceTexturePath ?

                path
                    .basename(
                        sourceTexturePath
                    )
                    .replace(
                        '.0',
                        '.png'
                    )

                :

                null;


        let iconFile =
            sourceTexturePath ?

                sourceTexturePath
                    .replace(
                        '.0',
                        '.png'
                    )

                :

                null;


        let iconOffset = {

            x:
                iconData
                    ?.BakedSourceUV
                    ?.X
                ?? 0,

            y:
                iconData
                    ?.BakedSourceUV
                    ?.Y
                ?? 0,

        };


        /*
         * 导出的 PAYDAY3 里没有 UI 贴图时（新版导出常见），
         * 依次尝试：
         *
         * 1. icon-overrides.json 里手写的坐标
         * 2. 上次生成的 weapons.js 里的图标
         * 3. 没有图标
         *
         * 免得整批武器都变成 404 图片。
         */

        if (
            !iconName
        ) {

            const iconOverride =
                weaponIconOverrides[
                    weapon.name
                ];


            const previousIcon =
                getPreviousWeapon(
                    weapon.name
                )
                ?.displayIcon;


            if (
                iconOverride
                    ?.source
            ) {

                iconName =
                    iconOverride
                        .source;


                iconOffset = {

                    x:
                        iconOverride
                            .offset
                            ?.x
                        ?? 0,

                    y:
                        iconOverride
                            .offset
                            ?.y
                        ?? 0,

                };


                /*
                 * 贴图还在导出目录里时顺便复制到 images。
                 */

                iconFile =
                    iconOverride
                        .texture
                    ?? null;


                console.log(
                    `[Icon] ${weapon.name} 使用 icon-overrides.json: ${iconName} @ ${iconOffset.x},${iconOffset.y}`
                );

            }

            else if (
                previousIcon
                    ?.source
            ) {

                iconName =
                    previousIcon
                        .source;


                iconOffset = {

                    x:
                        previousIcon
                            .offset
                            ?.x
                        ?? 0,

                    y:
                        previousIcon
                            .offset
                            ?.y
                        ?? 0,

                };


                /*
                 * 图片文件已经在 images 里，
                 * 不需要再从导出里复制。
                 */

                iconFile =
                    null;


                console.log(
                    `[Icon] ${weapon.name} 沿用旧图标: ${iconName}`
                );

            }

            else {

                console.warn(
                    `[WARNING] ${weapon.name} 没有导出图标，旧数据里也没有，武器将不含图标`
                );

            }

        }


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
         *
         * 优先用 SourceString：
         * LocalizedString 会随导出语言变化（例如中文“霰弹枪”），
         * 而站点按英文类型名（class-weapon-*）判断。
         */

        if (
            weaponData
                .TypeClassText
                ?.SourceString
            ??
            weaponData
                .TypeClassText
                ?.LocalizedString
        ) {

            weaponClass =
                weaponData
                    .TypeClassText
                    .SourceString

                ??

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


        const weaponClassWasDetected =
            weaponClass
            !==
            'Unknown';


        /*
         * 统一成站点使用的写法：
         *
         * AssaultRifle (Tag)
         *
         * ->
         *
         * Assault Rifle
         */

        weaponClass =
            canonicaliseWeaponClass(
                weaponClass
            );


        /*
         * ========================================================
         * 不支持的武器类型
         * ========================================================
         *
         * 站点没有对应类型时（例如 Overkill 类武器），
         * 导出的数据在页面上无法正确渲染，
         * 所以跳过并明确提示，而不是生成一份坏数据。
         */

        if (
            weaponClassWasDetected
                &&
            !isKnownWeaponClass(
                weaponClass
            )
        ) {

            console.warn(
                `[WARNING] ${weapon.name} 的武器类型 "${weaponClass}" 站点暂不支持，已跳过。`
                +
                '如需导入，请把该类型同时加入 importer 的 KNOWN_WEAPON_CLASSES 和 scripts/app.js 的 weaponClasses。'
            );

            continue;

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


            /*
             * 导出目录里的分类（Pistol / Dual / ...）。
             * 新类型（如 Dual）可以靠这个字段跟 class 区分开。
             */
            category:
                weaponCategory,


            dlc:
                DLC,


            /*
             * ----------------------------------------------------
             * Icon
             * ----------------------------------------------------
             */

            displayIcon: {

                offset:
                    iconOffset,


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
                    .EquipNotifyTime ?? DEFAULT_WEAPON_TIMES.equip,


            unequipTime:
                weaponData
                    .UnequipNotifyTime ?? DEFAULT_WEAPON_TIMES.unequip,


            sprintExitTime:
                weaponData
                    .SprintExitNotifyTime ?? DEFAULT_WEAPON_TIMES.sprintExit,


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

            if (iconFile) {

                await fs.copyFile(

                    iconFile,

                    `../images/${iconName}`,

                    fs.constants
                        .COPYFILE_EXCL

                );

            }

        }

        catch (err) {

            /*
             * 已存在时忽略，
             * 其它情况（例如贴图没导出）要说一声，
             * 否则页面上就是一张裂图。
             */

            if (
                err.code
                !==
                'EEXIST'
            ) {

                console.warn(
                    `[WARNING] ${weapon.name} 图标复制失败，页面上这张图会缺失: ${iconFile} -> ${iconName}: ${err.message}`
                );

            }

        }

        }

        catch (error) {

            /*
             * 单个武器出错：
             * 记录后继续导入下一个武器。
             */

            recordFailure(`[Weapon] ${weapon.name}`, error);

        }

    }


    /*
     * ============================================================
     * 武器排序
     * ============================================================
     */

    // Merge preset perks before generating weapons.js; keep the prototype's default.
    try {

        await importPresetPerks(files);

    }

    catch (error) {

        recordFailure('[PresetPerks]', error);

    }

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

    try {

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

    }

    catch (error) {

        recordFailure('输出 ../scripts/weapons.js', error);

    }


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
         * 单个配件出错时不再中断整个导入，
         * 只记录错误并继续处理下一个配件。
         */

        try {

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

        if (key.startsWith('Perk_')) {
            const icon = attachmentData.DisplayIcon?.AssetPathName ??
                attachmentData.DisplayIconResource?.AssetPathName ?? '';
            const type = icon.match(/Perk(Persistent|Equipped)(?:_|Frame)/i)?.[1]?.toLowerCase() ??
                previousAttachments[key]?.perkType;
            if (type) attachmentOutput[key].perkType = type;

            const skillPath = attachmentData.SkillDataArray?.[0]?.ObjectPath;
            if (skillPath) {
                try {
                    const skill = JSON.parse(await fs.readFile(
                        unrealPathToJson(skillPath), 'utf8'
                    ))[0]?.Properties;
                    const description = skill?.DescriptionText?.LocalizedString ??
                        skill?.DescriptionText?.SourceString;
                    if (description) attachmentOutput[key].description = description;
                } catch (error) {
                    console.warn(`[WARNING] ${key} 天赋描述无法读取: ${skillPath}`, error);
                }
            }

            attachmentOutput[key].description ??= previousAttachments[key]?.description;

            const damageEffect = perkDamageEffects[key] ??
                previousAttachments[key]?.persistentDamageEffect;
            if (type === 'persistent' && damageEffect) {
                attachmentOutput[key].persistentDamageEffect = damageEffect;
            }
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

        catch (error) {

            /*
             * 单个配件出错：
             * 记录后继续导入下一个配件。
             */

            recordFailure(`[Attachment] ${attachment.name}`, error);

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

    try {

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

    }

    catch (error) {

        recordFailure('输出 ../scripts/attachments.js', error);

    }


    /*
     * ============================================================
     * Curve Data
     * ============================================================
     */

    try {

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

    }

    catch (error) {

        recordFailure('输出 ../scripts/curve-data.js', error);

    }


    /*
     * ============================================================
     * 完成
     * ============================================================
     */

    console.log(
        '\n============================================'
    );

    console.log(
        `Weapons: ${Object.keys(sortedWeaponData).length}`
    );

    console.log(
        `Attachments: ${Object.keys(sortedAttachmentData).length}`
    );


    if (
        importFailures.length
    ) {

        /*
         * 有项目失败时，整个流程依然跑完，
         * 但把失败的项目列出来，避免静默丢数据。
         */

        console.error(
            `[WARNING] ${importFailures.length} 项导入失败，相关数据已跳过:`
        );

        for (
            const failure
            of importFailures
        ) {

            console.error(
                `  - ${failure.label}`
            );

        }

        console.log(
            'Importer finished, 其余数据已正常导出 (with skipped items).'
        );

        if (
            FAIL_ON_PARTIAL_ERRORS
        ) {

            process.exitCode = 1;

        }

    }

    else {

        console.log(
            'Importer completed successfully.'
        );

    }

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

    process.exitCode = 1;

}
