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

try {
    const files = await fs.readdir('PAYDAY3/Content', {
        withFileTypes: true,
        recursive: true,
    });

    const weapons = files.filter((file) => {
        return (
            file.isDirectory() &&
            file.parentPath.includes(`Gameplay${path.sep}Weapons`) &&
            weaponCategories.includes(path.basename(file.parentPath))
        );
    });

    const attachments = files.filter((file) => {
        return (
            file.parentPath.includes(`Gameplay${path.sep}WeaponParts`) &&
            /WPD_[a-zA-Z0-9_]*\.json/.test(file.name)
        );
    });

    for (const weapon of weapons) {
        const weaponPath = weapon.parentPath + '/' + weapon.name;
        const weaponFiles = await fs.readdir(weaponPath);

        const weaponDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_WeaponData'));

        const weaponData = JSON.parse(await fs.readFile(weaponDataPath))[0]
            .Properties;

        const iconDataPath =
            weaponData.DisplayIcon.AssetPathName.replace(
                '/Game',
                'PAYDAY3/Content'
            ).split('.')[0] + '.json';
        const iconDataFile = JSON.parse(await fs.readFile(iconDataPath));
        const iconData = iconDataFile[1]
            ? iconDataFile[1].Properties
            : iconDataFile[0].Properties;

        const sourceTexturePath = iconData.BakedSourceTexture.ObjectPath;

        const iconName = path.basename(sourceTexturePath).replace('.0', '.png');

        const iconFile = sourceTexturePath.replace('.0', '.png');

        const fireDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_FireData'));

        const fireData = JSON.parse(await fs.readFile(fireDataPath))[0]
            .Properties;

        const spreadDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_SpreadData'));

        const spreadData = JSON.parse(await fs.readFile(spreadDataPath))[0]
            .Properties;

        const recoilDataPath =
            weaponPath +
            '/' +
            weaponFiles.find((fileName) => fileName.includes('DA_RecoilData'));

        const recoilData = JSON.parse(await fs.readFile(recoilDataPath))[0]
            .Properties;

        const weaponAttachments = {};

        for (const attachmentCategory of weaponData.ModularConfiguration) {
            const slot = attachmentCategory.Key.split(`'`)[1]
                .split('.')[1]
                .replace('SLOT_', '');
            weaponAttachments[slot] = {};
            weaponAttachments[slot].DefaultPart = attachmentCategory.Value
                .DefaultPart
                ? attachmentCategory.Value.DefaultPart.ObjectName.split(
                      `'`
                  )[1].replace('WPD_', '')
                : null;
            weaponAttachments[slot].UniqueModParts =
                attachmentCategory.Value.UniqueModParts.map((part) => {
                    return part.ObjectName.split(`'`)[1].replace('WPD_', '');
                });
        }

        const DLC = weapon.parentPath.match(/\d*-DLC[a-zA-Z0]*(\d*)/);

        weaponOutput[weapon.name] = {
            displayName: weaponData.DisplayName.LocalizedString,
            class: weaponData.TypeClassText.LocalizedString,
            dlc: DLC ? DLC[1] : null,
            displayIcon: {
                offset: iconData.BakedSourceUV
                    ? {
                          x: iconData.BakedSourceUV.X,
                          y: iconData.BakedSourceUV.Y,
                      }
                    : { x: 0, y: 0 },
                source: iconName,
            },
            fireData: {
                damageDistanceArray: fireData.DamageDistanceArray.map(
                    (damageStep) => {
                        return {
                            damage: damageStep.Damage,
                            distance: damageStep.Distance,
                        };
                    }
                ),
                criticalDamageMultiplierDistanceArray:
                    fireData.CriticalDamageMultiplierDistanceArray.map(
                        (critMultiplierStep) => {
                            return {
                                multiplier: critMultiplierStep.Multiplier,
                                distance: critMultiplierStep.Distance,
                            };
                        }
                    ),
                ammoLoaded: fireData.AmmoLoaded,
                ammoInventory: fireData.AmmoInventory,
                ammoInventoryMax: fireData.AmmoInventoryMax,
                ammoPickup: fireData.AmmoPickup ?{
                    min: fireData.AmmoPickup.Min,
                    max: fireData.AmmoPickup.Max,
                } : AMMO_PICKUP_PRESETS,
                fireType: fireData.FireType?.split('::')[1],
                timeBetweenBursts: fireData.TimeBetweenBurstsSeconds,
                projectilesPerFiredRound: fireData.ProjectilesPerFiredRound,
                maximumPenetrationCount: fireData.MaximumPenetrationCount,
                armorPenetration: fireData.ArmorPenetration,
                roundsPerMinute: fireData.RoundsPerMinute,
            },
            spreadData: {
                start: spreadData.FireSpreadStart,
                increase: spreadData.FireSpreadIncrease,
                resetTime: spreadData.FireSpreadResetTime,
                decayRate: spreadData.FireSpreadDecayRate,
                cap: spreadData.FireSpreadCap,
                stanceMultipliers: Object.fromEntries(
                    Object.keys(spreadData.SpreadStanceMultipliers).map(
                        (stance) => {
                            const stanceMultipliers =
                                spreadData.SpreadStanceMultipliers[stance];
                            return [
                                stance.charAt(0).toLowerCase() +
                                    stance.slice(1),
                                {
                                    spread: stanceMultipliers.Spread,
                                    start: stanceMultipliers.Start,
                                    cap: stanceMultipliers.Cap,
                                    increment: stanceMultipliers.Increment,
                                },
                            ];
                        }
                    )
                ),
                radiusMultipliers: {
                    x: spreadData.SpreadRadiusMultipliers?.X,
                    y: spreadData.SpreadRadiusMultipliers?.Y,
                },
                shotgunPatterns: spreadData.ShotgunPatterns?.map((pattern) => {
                    return pattern.PelletSpreadAngles.map((spreadAngles) => {
                        return { x: spreadAngles.X, y: spreadAngles.Y };
                    });
                }),
            },
            recoilData: {
                viewKick: {
                    deflectSpeed: recoilData.ViewKick.SpeedDeflect,
                    recoverSpeed: recoilData.ViewKick.SpeedRecover,
                    recoverWaitTime: recoilData.ViewKick.RecoverWaitTime,
                    recoilPattern:
                        recoilData.ViewKick.GraphDisplacementList.Points.map(
                            (point) => {
                                return { x: point.X, y: point.Y };
                            }
                        ),
                    resetTime: recoilData.ViewKick.DisplacementResetTime,
                    loopStart: recoilData.ViewKick.DisplacementGraphLoopStart,
                    initialNum: recoilData.ViewKick.DisplacementGraphInitialNum,
                    hipfireMultiplier:
                        recoilData.ViewKick.DisplacementHipFireMultiplier,
                },
                gunKick: {
                    deflectSpeed: recoilData.GunKickXY.SpeedDeflect,
                    recoverSpeed: recoilData.GunKickXY.SpeedRecover,
                    verticalTop: {
                        min: recoilData.GunKickXY.VerticalTop?.Min,
                        max: recoilData.GunKickXY.VerticalTop?.Max,
                    },
                    verticalBottom: {
                        min: recoilData.GunKickXY.VerticalBottom?.Min,
                        max: recoilData.GunKickXY.VerticalBottom?.Max,
                    },
                    verticalMultiplier: {
                        start: recoilData.GunKickXY.VerticalMultiplier?.Start,
                        min: recoilData.GunKickXY.VerticalMultiplier?.Min,
                        max: recoilData.GunKickXY.VerticalMultiplier?.Max,
                        threshold:
                            recoilData.GunKickXY.VerticalMultiplier?.Threshold,
                    },
                    horizontalRight: {
                        min: recoilData.GunKickXY.HorizontalRight?.Min,
                        max: recoilData.GunKickXY.HorizontalRight?.Max,
                    },
                    horizontalLeft: {
                        min: recoilData.GunKickXY.HorizontalLeft?.Min,
                        max: recoilData.GunKickXY.HorizontalLeft?.Max,
                    },
                    horizontalMultiplier: {
                        start: recoilData.GunKickXY.HorizontalMultiplier?.Start,
                        min: recoilData.GunKickXY.HorizontalMultiplier?.Min,
                        max: recoilData.GunKickXY.HorizontalMultiplier?.Max,
                        threshold:
                            recoilData.GunKickXY.HorizontalMultiplier
                                ?.Threshold,
                    },
                },
            },
            modularConfiguration: Object.fromEntries(
                Object.keys(weaponAttachments).map((slot) => {
                    return [
                        slot.charAt(0).toLowerCase() + slot.slice(1),
                        {
                            defaultPart: weaponAttachments[slot].DefaultPart,
                            uniqueParts: weaponAttachments[slot].UniqueModParts,
                        },
                    ];
                })
            ),
            equipTime: weaponData.EquipNotifyTime,
            unequipTime: weaponData.UnequipNotifyTime,
            sprintExitTime: weaponData.SprintExitNotifyTime,
            reloadTime: weaponData.ReloadNotifyTime,
            reloadEmptyTime: weaponData.ReloadEmptyNotifyTime,
        };

        try {
            await fs.copyFile(
                iconFile,
                `../images/${iconName}`,
                fs.constants.COPYFILE_EXCL
            );
        } catch {}
    }

    const sortedWeaponData = Object.keys(weaponOutput)
        .sort()
        .reduce((obj, key) => {
            obj[key] = weaponOutput[key];
            return obj;
        }, {});

    fs.writeFile(
        '../scripts/weapons.js',
        'const WEAPON_DATA = Object.freeze(' +
            JSON.stringify(sortedWeaponData, null, 4) +
            ');'
    );

    for (const attachment of attachments) {
        const attachmentPath = attachment.parentPath + '/' + attachment.name;
        const attachmentData = JSON.parse(await fs.readFile(attachmentPath))[0]
            .Properties;

        const key = attachment.name.split('.')[0].replace('WPD_', '');
        attachmentOutput[key] = {};

        if (attachmentData.DisplayName) {
            attachmentOutput[key].displayName =
                attachmentData.DisplayName.LocalizedString;
        }

        if (attachmentData.AttributeModifierMap)
            attachmentOutput[key].attributeModifierMap =
                attachmentData.AttributeModifierMap.map((modifier) => {
                    return {
                        attribute: modifier.Key.replace(
                            'ESBZWeaponAttribute::',
                            ''
                        ),
                        value: modifier.Value,
                    };
                });

        if (attachmentData.MagazineData) {
            const magazineData = JSON.parse(
                await fs.readFile(
                    attachmentData.MagazineData.ObjectPath.replace(
                        '.0',
                        '.json'
                    )
                )
            )[0].Properties;

            attachmentOutput[key].magazineData = {
                ammoLoaded: magazineData.AmmoLoaded,
                ammoInventory: magazineData.AmmoInventory,
                ammoInventoryMax: magazineData.AmmoInventoryMax,
                ammoPickup: {
                    min: magazineData.AmmoPickup?.Min,
                    max: magazineData.AmmoPickup?.Max,
                },
            };
        }

        if (attachmentData.SightDataArray) {
            const targetingDataPath = JSON.parse(
                await fs.readFile(
                    attachmentData.SightDataArray[0].ObjectPath.replace(
                        '.0',
                        '.json'
                    )
                )
            )[0].Properties.TargetingData.ObjectPath;

            const targetingDataProperties = JSON.parse(
                await fs.readFile(targetingDataPath.replace('.0', '.json'))
            )[0].Properties;

            attachmentOutput[key].targetingData = {
                targetingMagnification:
                    targetingDataProperties.TargetingMagnification,
                targetingOnTopMagnification:
                    targetingDataProperties.TargetingOnTopMagnification,
            };
        }
    }

    const sortedAttachmentData = Object.keys(attachmentOutput)
        .sort()
        .reduce((obj, key) => {
            obj[key] = attachmentOutput[key];
            return obj;
        }, {});

    fs.writeFile(
        '../scripts/attachments.js',
        'const ATTACHMENT_DATA = Object.freeze(' +
            JSON.stringify(sortedAttachmentData, null, 4) +
            ');'
    );

    const modData = JSON.parse(
        await fs.readFile(
            'PAYDAY3/Content/Gameplay/Weapons/CT_ModData_Default.json'
        )
    )[0].Rows;

    const modDataOutput = Object.fromEntries(
        Object.keys(modData).map((attribute) => {
            return [
                attribute,
                modData[attribute].Keys.map((step) => {
                    return {
                        point: step.Time,
                        value: step.Value,
                    };
                }),
            ];
        })
    );

    fs.writeFile(
        '../scripts/curve-data.js',
        'const CURVE_DATA = Object.freeze(' +
            JSON.stringify(modDataOutput, null, 4) +
            ');'
    );
} catch (err) {
    console.error(err);
}
