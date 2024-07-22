import * as fs from 'node:fs/promises';

const weaponCategories = [
    'AssaultRifle',
    'Marksman',
    'Pistol',
    'Revolver',
    'Shotgun',
    'SMG',
    'LMG'
];

const data = {};

try {
    const files = await fs.readdir('PAYDAY3/Content', {
        withFileTypes: true,
        recursive: true
    });

    const weapons = files.filter(file => {
        return file.isDirectory()
            && file.path.includes('Gameplay/Weapons/')
            && weaponCategories.includes(file.path.split('/').pop());
    });

    for (const weapon of weapons) {
        const weaponPath = weapon.path + '/' + weapon.name;
        const weaponFiles = await fs.readdir(weaponPath);

        const weaponDataPath = weaponPath + '/' + weaponFiles.find(element => element.includes('DA_WeaponData'));
        const weaponData = JSON.parse(await fs.readFile(weaponDataPath))[0].Properties;

        const iconDataPath = weaponData.DisplayIcon.AssetPathName.replace('/Game', 'PAYDAY3/Content').split('.')[0] + '.json';
        const iconDataFile = JSON.parse(await fs.readFile(iconDataPath));
        const iconData = iconDataFile[1] ? iconDataFile[1].Properties : iconDataFile[0].Properties;

        const iconFile = iconData.BakedSourceTexture.ObjectPath.split('.')[0] + '.png';
        const iconName = iconFile.split('/').reverse()[0];

        const fireDataPath = weaponPath + '/' + weaponFiles.find(element => element.includes('DA_FireData'));
        const fireData = JSON.parse(await fs.readFile(fireDataPath))[0].Properties;

        const fireDataFilter = [
            'DamageDistanceArray',
            'AmmoLoaded',
            'AmmoInventoryMax',
            'AmmoInventory',
            'AmmoPickup',
            'CriticalDamageMultiplierDistanceArray',
            'FireType',
            'ProjectilesPerFiredRound',
            'MaximumPenetrationCount',
            'ArmorPenetration',
            'RoundsPerMinute',
        ];

        const DLC = weapon.path.match(/\d*-DLC[a-zA-Z0]*(\d*)\//);

        data[weapon.name] = {
            DisplayName: weaponData.DisplayName.LocalizedString,
            TypeClassText: weaponData.TypeClassText.LocalizedString,
            DLC: DLC ? DLC[1] : null,
            DisplayIcon: {
                SourceUV: iconData.BakedSourceUV ? iconData.BakedSourceUV : { X: 0, Y: 0 },
                SourceTexture: iconName
            },
            FireData: Object.fromEntries(
                Object.entries(fireData)
                .filter(([key, _]) => fireDataFilter.includes(key))
            ),
            ReloadNotifyTime: weaponData.ReloadNotifyTime,
            ReloadEmptyNotifyTime: weaponData.ReloadEmptyNotifyTime,
        };

        try {
            await fs.copyFile(iconFile, `../images/${iconName}`, fs.constants.COPYFILE_EXCL);
        } catch { }
    }

    fs.writeFile('../scripts/weapons.js', 'const weaponData = ' + JSON.stringify(data, null, 4));
} catch(err) {
    console.error(err);
}