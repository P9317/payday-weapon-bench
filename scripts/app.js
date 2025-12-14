
/**
 *
 * @param {string} tag
 * @param {object} attributes
 * @param {Array} children
 * @returns {HTMLElement}
 */
function createElementWithAttributes(tag, attributes, children) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });
    children?.forEach(child => element.appendChild(child));
    return element;
}

/**
 *
 * @param {number} value
 * @param {number} decimals
 * @returns {number}
 */
function formatNumber(value, decimals = 2) {
    if (typeof value !== 'number' || isNaN(value)) {
        return 0;
    }
    return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * @returns {string|null} 
 */
function getCurrentWeapon() {
    try {
        const weaponInput = document.querySelector('.selectable-weapon input:checked');
        return weaponInput ? weaponInput.value : null;
    } catch (error) {
        console.error('获取当前武器时出错:', error);
        return null;
    }
}

/**
 * @param {HTMLElement} element
 * @param {string} tooltipContent
 */
function addTooltipEvents(element, tooltipContent) {
    element.addEventListener('mouseenter', (event) => {
        const rect = event.target.getBoundingClientRect();
        showTooltip(
            rect.left + 'px', 
            rect.top + event.target.clientHeight + 'px', 
            tooltipContent
        );
    });
    element.addEventListener('mouseleave', () => {
        tooltip.style.visibility = 'hidden';
    });
}

/**
 * @param {HTMLElement} element
 * @param {string} key
 * @param {object} variables
 */
function setLocalizationAttributes(element, key, variables = {}) {
    if (!element) {
        console.warn('setLocalizationAttributes: 元素不存在');
        return;
    }
    
    if (typeof key !== 'string' || key.trim() === '') {
        console.warn('setLocalizationAttributes: 本地化键无效');
        return;
    }
    
    element.setAttribute('data-localisation-key', key);
    if (variables && typeof variables === 'object' && Object.keys(variables).length > 0) {
        try {
            element.setAttribute('data-localisation-var', JSON.stringify(variables));
        } catch (error) {
            console.error('setLocalizationAttributes: 序列化变量时出错', error);
        }
    }
}

/**
 */
function updateStatsAfterChange() {
    const currentWeapon = getCurrentWeapon();
    if (currentWeapon) {
        try {
            updateWeaponStats(currentWeapon);
            updateDamageStats(currentWeapon);
        } catch (error) {
            console.error('更新统计数据时出错:', error);
        }
    }
}
/**
 * @param {string} -skillName 
 * @returns {boolean} - isSkillMastered
 */
function isSkillMastered(skillName) {
    return equippedSkills.includes(skillName) && equippedSkillsMastered.has(skillName);
}
/**
 * 
 * @param {string} skillName 
 * @returns {boolean} - isSkillEquipped
 */
function isSkillEquipped(skillName) {
    return equippedSkills.includes(skillName);
}
function preloadImages(imageUrls) {
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

const SKILL_ICONS_TO_PRELOAD = [
        'images/Skills2.0/AR_AR_Proficency.png',
        'images/Skills2.0/AR_AR_Proficency_ACED.png',
        'images/Skills2.0/AR_Crack_Open.png',
        'images/Skills2.0/AR_Crack_Open_ACED.png',
        'images/Skills2.0/AR__Hollow_Point_Rounds.png',
        'images/Skills2.0/AR__Hollow_Point_Rounds_ACED.png',
        'images/Skills2.0/Skills2_Profesional_Sniper_Sniper_Expert.png',
        'images/Skills2.0/Skills2_Profesional_Sniper_Sniper_Expert_ACED.png',
        'images/Skills2.0/Skills2_Ninja_SMG_SMG_Proficiency.png',
        'images/Skills2.0/Skills2_Ninja_SMG_SMG_Proficiency_ACED.png',
        'images/Skills2.0/Skills2_Ninja_SMG_Brick_Buster.png',
        'images/Skills2.0/Skills2_Ninja_SMG_Brick_Buster_ACED.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert_ACED.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Point_Blank.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Point_Blank_ACED.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Obilterator.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Obilterator_ACED.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert.png',
        'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert_ACED.png',
        'images/Skills2.0/Skills2_Profesional_Ammo_High_Quality_Bag.png',
        'images/Skills2.0/Skills2_Profesional_Ammo_High_Quality_Bag_ACED.png',
];

const SKILLS = {
    
////////////////////skill2.0/////////////////////    
    Rifleman: {
        name: 'skills-Rifleman',
        description: 'skills-Rifleman-desc',
        icons: {
            base: 'images/Skills2.0/AR_AR_Proficency.png',
            mastered: 'images/Skills2.0/AR_AR_Proficency_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        modifier: 0.1,
        reloadSpeedModifier: 2.5,
        allowedClasses: ['Assault Rifle','LMG'],
    },
    BreakingPoint: {
        name: 'skills-breaking-point',
        description: 'skills-breaking-point-desc',
        basemodifier: 0.05,
        masteredmodifier: 0.15,
        icons: {
            base: 'images/Skills2.0/AR_Crack_Open.png',
            mastered: 'images/Skills2.0/AR_Crack_Open_ACED.png',
        },
        iconOffset: {
            x: 320,
            y: 1280,
        },
        allowedClasses: ['Assault Rifle','LMG'],
    },
    HollowPointRounds: {
        name: 'skills-HollowPointRounds',
        description: 'skills-HollowPointRounds-desc',
        basemodifier: 0.15,
        masteredmodifier: 0.40,
        icons: {
            base: 'images/Skills2.0/AR__Hollow_Point_Rounds.png',
            mastered: 'images/Skills2.0/AR__Hollow_Point_Rounds_ACED.png',
        },
        iconOffset: {
            x: 320,
            y: 1280,
        },
        allowedClasses: ['Assault Rifle','LMG'],
    },    
    HeadGames: {
        name: 'skills-HeadGames',
        description: 'skills-HeadGames-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Profesional_Sniper_Sniper_Expert.png',
            mastered: 'images/Skills2.0/Skills2_Profesional_Sniper_Sniper_Expert_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        modifier: 0.1,
        allowedClasses: ['Marksman'],
    },
    SMGAdept: {
        name: 'skills-SMGAdept',
        description: 'skills-SMGAdept-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Ninja_SMG_SMG_Proficiency.png',
            mastered: 'images/Skills2.0/Skills2_Ninja_SMG_SMG_Proficiency_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        modifier: 0.02,
        allowedClasses: ['SMG'], 
    },
    Cracked: {
        name: 'skills-Cracked',
        description: 'skills-Cracked-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Ninja_SMG_Brick_Buster.png',
            mastered: 'images/Skills2.0/Skills2_Ninja_SMG_Brick_Buster_ACED.png',
        },
        basemodifier: 0.1,
        masteredmodifier: 0.3,
        allowedClasses: ['SMG'],
    },
    CallingShotgun:{
        name: 'skills-CallingShotgun',
        description: 'skills-CallingShotgun-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert.png',
            mastered: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        modifier: 0.025,
        allowedClasses: ['Shotgun'],
        directBasiced: true,
    },
    PointBlank: {
        name: 'skills-PointBlank',
        description: 'skills-PointBlank-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Point_Blank.png',
            mastered: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Point_Blank_ACED.png',
        },
        iconOffset: {
            x: 320,
            y: 1280,
        },
        distancemodifier:300,
        basemodifier: 0.2,
        masteredmodifier: 0.6,
        allowedClasses: ['Shotgun'],
    },
    Annihilation: {
        name: 'skills-Annihilation',
        description: 'skills-Annihilation-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Obilterator.png',
            mastered: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Obilterator_ACED.png',
        },
        iconOffset: {
            x: 320,
            y: 1280,
        },
        basemodifier: 0.36,
        masteredmodifier: 0.9,
        allowedClasses: ['Shotgun'],
    },
    Bullseye:{
        name: 'skills-Bullseye',
        description: 'skills-Bullseye-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert.png',
            mastered: 'images/Skills2.0/Skills2_Mechanic_Shotgun_Shotgun_Expert_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        Unmarkmodifier: 0.025,
        Markmodifier: 0.1,
        directBasiced: true,
        allowedClasses: ['Pistol','Revolver'],
    },
    PremiumBag: {
        name: 'skills-PremiumBag',
        description: 'skills-PremiumBag-desc',
        icons: {
            base: 'images/Skills2.0/Skills2_Profesional_Ammo_High_Quality_Bag.png',
            mastered: 'images/Skills2.0/Skills2_Profesional_Ammo_High_Quality_Bag_ACED.png',
        },
        iconOffset: {
            x: 192,
            y: 1280,
        },
        modifier: 2,
        allowedClasses: ['Assault Rifle','Marksman','Shotgun','Pistol','Revolver','SMG','LMG'],
        directMastered: true,
    },       
};

// minimal skill numeric values (persist across populateSkills calls)
const SKILL_VALUES = {
    // Rifleman adjustable value (1..12)
    Rifleman: 1,
    // HeadGames adjustable value (1..12)
    HeadGames: 1,
    SMGAdept: 1,
    CallingShotgun: 1,
    Bullseye: 1,
    BullseyeMode: 'Unmarkmodifier', 
};

const EDGE_DEPENDENT_SKILLS = [
    'longShot',
    'faceToFace',
    'coupDeGrace',
    'combatMarking',
    'painAsymbolia',
];

const ENEMIES = {
    swat: {
        displayName: 'SWAT',
        health: 220,
        armor: 150,
        armorHardness: 1.5,
        armorLayer: 4,
    },
    heavySwat: {
        displayName: 'Heavy SWAT',
        health: 218,
        armor: 230,
        armorHardness: 1.5,
        armorLayer: 5,
    },
    specials: {
        displayName: 'Specials',
        health: 160*1.5,
        armor: 270,
        armorHardness: 2,
        armorLayer: 6,
    },
    techies: {
        displayName: 'Techies',
        health: 280,
        armor: 90,
        armorHardness: 1.5,
        armorLayer: 2,  
    },
    shield: {
        displayName: 'Shield',
        health: 160*1.5,
        armor: 270,
        armorHardness: 2.5,
        visorArmor: 240,
        visorArmorHardness: 7,
        armorLayer: 6,
    },
    bulldozer: {
        displayName: 'Bulldozer',
        health: 320*3,
        armor: 3600*5,
        armorHardness: 4,
        visorArmor: 2000,
        visorArmorHardness: 4,
        armorLayer: 35,
    },
    sniper: {
        displayName: 'Sniper',
        health: 80*1.6,
        armor: 0,
        armorHardness: 0,
        armorLayer: 0,
    },
    cloaker: {
        displayName: 'Cloaker',
        health: 140*1.6,
        armor: 80,
        armorHardness: 0,   
        armorLayer: 2,
    },
    drone: {
        displayName: 'Drone',
        health: 50,
        armor: 50,
        armorHardness: 2,
        armorLayer: 2,
    },
};

/**
 * Modify a weapon's stats with magazine data and attribute modifiers
 * from skills and attachments
 *
 * @param {string} weapon Weapon to apply skills and attachments to
 * @param {array} skills Skills to apply to the weapon's stats
 * @param {array} attachments Attachments to apply to the weapon's stats
 * @returns {object} Updated weapon data
 */
function applyLoadout(weapon, skills, attachments) {
    const updatedWeapon = structuredClone(WEAPON_DATA[weapon]);

    const attributeModifiers = {};
    attachments.forEach((attachment) => {
        if (!ATTACHMENT_DATA[attachment]?.attributeModifierMap) return;

        ATTACHMENT_DATA[attachment].attributeModifierMap.forEach((modifier) => {
            return attributeModifiers[modifier.attribute]
                ? (attributeModifiers[modifier.attribute] += modifier.value)
                : (attributeModifiers[modifier.attribute] = modifier.value);
        });
    });

    skills.forEach((skill) => {
        if (!SKILLS[skill]?.attributeModifierMap) return;

        SKILLS[skill].attributeModifierMap.forEach((modifier) => {
            return attributeModifiers[modifier.attribute]
                ? (attributeModifiers[modifier.attribute] += modifier.value)
                : (attributeModifiers[modifier.attribute] = modifier.value);
        });
    });

    const equippedMag =
        ATTACHMENT_DATA[
            attachments.find((attachment) => {
                return ATTACHMENT_DATA[attachment].magazineData;
            })
        ]?.magazineData;

    const fireData = updatedWeapon.fireData;

    fireData.ammoLoaded = (equippedMag ?? fireData).ammoLoaded ?? 10;
    fireData.ammoInventory = (equippedMag ?? fireData).ammoInventory ?? 100;
    fireData.ammoInventoryMax =
        (equippedMag ?? fireData).ammoInventoryMax ?? 100;
    fireData.ammoPickup = {
        min: (equippedMag ?? fireData).ammoPickup.min ?? 5,
        max: (equippedMag ?? fireData).ammoPickup.max ?? 10,
    };

    const equippedSight =
        ATTACHMENT_DATA[
            attachments.find((attachment) => {
                return ATTACHMENT_DATA[attachment]?.targetingData;
            })
        ];

    let damageModifier = 1,
        rangeModifier = convertAttributeModifier(
            'DamageDistance',
            attributeModifiers['DamageDistance']
        );

    // Precision Shot sets the base damage modifier
    // to the current scope's magnification
    if (
        skills.includes('precisionShot') &&
        equippedSight?.targetingData?.targetingMagnification > 4
    )
        damageModifier = equippedSight.targetingData.targetingMagnification;

    for (const skill of [
        'edge',
        'coupDeGrace',
        'combatMarking',
        'painAsymbolia',
        'duckAndWeave',
    ]) {
        if (skills.includes(skill)) damageModifier += SKILLS[skill].modifier;
    }
    if(isSkillEquipped('Annihilation')){
        const AnnihilationModifier = isSkillMastered('Annihilation') 
                ? SKILLS['Annihilation'].masteredmodifier 
                : SKILLS['Annihilation'].basemodifier;
        damageModifier += AnnihilationModifier;
    }
    if(isSkillEquipped('Bullseye')){
        const BullseyeModifier = SKILL_VALUES.Bullseye;
        if(SKILL_VALUES.BullseyeMode === 'Unmarkmodifier')
            damageModifier += BullseyeModifier*(SKILLS['Bullseye'].Unmarkmodifier ?? 0.025);
        else 
            damageModifier += BullseyeModifier*(SKILLS['Bullseye'].Markmodifier ?? 0.1)
    }
    fireData.damageDistanceArray = fireData.damageDistanceArray.map(
        (damageStep) => {
            let damage = damageStep.damage;

            // Face to Face adds to the damage modifier within 5 metres
            if (
                isSkillEquipped('PointBlank') &&
                damageStep.distance + rangeModifier <= SKILLS['PointBlank'].distancemodifier
            ){const pointBlankModifier = isSkillMastered('PointBlank') 
                ? SKILLS['PointBlank'].masteredmodifier 
                : SKILLS['PointBlank'].basemodifier;
                damage *= damageModifier + pointBlankModifier;
            }else damage *= damageModifier;
            if(isSkillEquipped('CallingShotgun')){
                const CSvalue = SKILL_VALUES.CallingShotgun ?? 1;
                damageStep.distance *= 1+SKILLS['CallingShotgun'].modifier*CSvalue;
            }
            return {
                damage: damage,
                distance: damageStep.distance + rangeModifier,
            };
        }
    )
        .filter((item, index, array) => {
        // Find all items with the same damage value
        const sameDamageItems = array.filter(x => x.damage === item.damage);
        // If there's only one item with this damage, keep it
        if (sameDamageItems.length === 1) return true;
        // If there are multiple items with this damage, keep the one with the longest distance
        return item.distance === Math.max(...sameDamageItems.map(x => x.distance));
    });

    if (isSkillEquipped('PointBlank')) {
            const pointBlankModifier = isSkillMastered('PointBlank') 
                ? SKILLS['PointBlank'].masteredmodifier 
                : SKILLS['PointBlank'].basemodifier;
        if (fireData.damageDistanceArray[0].distance > SKILLS['PointBlank'].distancemodifier) {
            // Insert face to face's 5m range at the start of the array
            fireData.damageDistanceArray.unshift({
                damage:
                    WEAPON_DATA[weapon].fireData.damageDistanceArray[0].damage *
                    (damageModifier + pointBlankModifier),
                distance: SKILLS['PointBlank'].distancemodifier,
            });
        } else if (fireData.damageDistanceArray[0].distance < SKILLS['PointBlank'].distancemodifier) {
            // Insert face to face's 5m range second in the array
            const damage =
                WEAPON_DATA[weapon].fireData.damageDistanceArray[1].damage *
                (damageModifier + pointBlankModifier);

            fireData.damageDistanceArray.splice(1, 0, {
                damage: damage,
                distance: SKILLS['PointBlank'].distancemodifier,
            });
            
            const uniqueDamageArray = [];
            const damageMap = {};
            
            for (let i = fireData.damageDistanceArray.length - 1; i >= 0; i--) {
                const item = fireData.damageDistanceArray[i];
                const roundedDamage = Math.round(item.damage * 100) / 100; // 四舍五入到小数点后两位
                
                if (!damageMap[roundedDamage] || damageMap[roundedDamage] < item.distance) {
                    damageMap[roundedDamage] = item.distance;
                    uniqueDamageArray.unshift(item);
                }
            }
            
            fireData.damageDistanceArray = uniqueDamageArray;
        }
        
    }

    // Long shot removes distance penalties on critical multipliers
    if (skills.includes('longShot')) {
        fireData.criticalDamageMultiplierDistanceArray = [
            {
                multiplier:
                    fireData.criticalDamageMultiplierDistanceArray[0]
                        .multiplier,
                distance:
                    fireData.criticalDamageMultiplierDistanceArray.reverse()[0]
                        .distance,
            },
        ];
    }

    fireData.fireType = fireData.fireType ?? 'Semi';
    fireData.roundsPerMinute = fireData.roundsPerMinute ?? 600;

    fireData.armorPenetration =
        (fireData.armorPenetration ?? 0) +
        convertAttributeModifier(
            'ArmorPenetration',
            attributeModifiers['ArmorPenetration'] ?? 0
        );
    if (weapon == 'MX63') {
        updatedWeapon.reloadTime = 4.4999995;
        updatedWeapon.reloadEmptyTime = 5.166667;
    }
    if (weapon == 'T32') {
        updatedWeapon.reloadTime = 1.4666667;
        updatedWeapon.reloadEmptyTime = 1.9999999;
    }


    if (isSkillEquipped('Rifleman')) {
        const rv = SKILL_VALUES.Rifleman ?? 1;
        fireData.armorPenetration += rv * (SKILLS.Rifleman?.modifier ?? 0.1);
        
        if (isSkillMastered('Rifleman')) {
            const reloadSpeedBonus = (SKILL_VALUES.Rifleman ?? 1) * (SKILLS.Rifleman?.reloadSpeedModifier ?? 2.5) / 100; // 将百分比转换为小数
            updatedWeapon.reloadTime /= (1 + reloadSpeedBonus); 
            updatedWeapon.reloadEmptyTime /= (1 + reloadSpeedBonus * 2); 
        }
    }
    if(isSkillMastered('PremiumBag')){
        fireData.armorPenetration += SKILLS.PremiumBag.modifier ?? 2;
    }

    const viewKick = updatedWeapon.recoilData.viewKick;

    viewKick.initialNum = viewKick.initialNum ?? 3;

    let currentPoint = 0,
        initialRecoilOffsetX = 0,
        initialRecoilOffsetY = 0;

    const horizontalRecoilMultiplier =
        convertAttributeModifier(
            'HorizontalRecoil',
            (attributeModifiers['HorizontalRecoil'] ?? 0) +
                (attributeModifiers['OverallRecoil'] ?? 0)
        ) || 1;
    const verticalRecoilMultiplier =
        convertAttributeModifier(
            'VerticalRecoil',
            (attributeModifiers['VerticalRecoil'] ?? 0) +
                (attributeModifiers['OverallRecoil'] ?? 0)
        ) || 1;
    const initialRecoilMultiplier =
        convertAttributeModifier(
            'InitialRecoil',
            attributeModifiers['InitialRecoil'] ?? 0
        ) || 1;

    viewKick.recoilPattern = viewKick.recoilPattern.map((point) => {
        const pointX = point.x * horizontalRecoilMultiplier;
        const pointY = point.y * verticalRecoilMultiplier;

        if (currentPoint < viewKick.initialNum) {
            const offsetX = pointX * initialRecoilMultiplier;
            initialRecoilOffsetX = offsetX - pointX;

            const offsetY = pointY * initialRecoilMultiplier;
            initialRecoilOffsetY = offsetY - pointY;

            currentPoint++;

            return {
                x: offsetX,
                y: offsetY,
            };
        } else {
            return {
                x: pointX + initialRecoilOffsetX,
                y: pointY + initialRecoilOffsetY,
            };
        }
    });

    viewKick.loopStart = viewKick.loopStart ?? 0;
    viewKick.recoverWaitTime = viewKick.recoverWaitTime ?? 0;
    viewKick.hipfireMultiplier = viewKick.hipfireMultiplier ?? 1;

    const gunKick = updatedWeapon.recoilData.gunKick;

    const horizontalGunkickMultiplier =
        convertAttributeModifier(
            'HorizontalGunkick',
            (attributeModifiers['HorizontalGunkick'] ?? 0) +
                (attributeModifiers['OverallGunkick'] ?? 0)
        ) || 1;
    const verticalGunkickMultiplier =
        convertAttributeModifier(
            'VerticalGunkick',
            (attributeModifiers['VerticalGunkick'] ?? 0) +
                (attributeModifiers['OverallGunkick'] ?? 0)
        ) || 1;

    gunKick.verticalTop = {
        min: gunKick.verticalTop.min * verticalGunkickMultiplier || 0,
        max: gunKick.verticalTop.max * verticalGunkickMultiplier || 0,
    };
    gunKick.verticalBottom = {
        min: gunKick.verticalBottom.min * verticalGunkickMultiplier || 0,
        max: gunKick.verticalBottom.max * verticalGunkickMultiplier || 0,
    };
    gunKick.horizontalRight = {
        min: gunKick.horizontalRight.min * horizontalGunkickMultiplier || 0,
        max: gunKick.horizontalRight.max * horizontalGunkickMultiplier || 0,
    };
    gunKick.horizontalLeft = {
        min: gunKick.horizontalLeft.min * horizontalGunkickMultiplier || 0,
        max: gunKick.horizontalLeft.max * horizontalGunkickMultiplier || 0,
    };
    gunKick.verticalMultiplier = {
        start: gunKick.verticalMultiplier.start ?? 1,
        increment: gunKick.verticalMultiplier.increment ?? 0,
        max: gunKick.verticalMultiplier.max ?? 1,
        threshold: gunKick.verticalMultiplier.threshold ?? 1,
    };
    gunKick.horizontalMultiplier = {
        start: gunKick.horizontalMultiplier.start ?? 1,
        increment: gunKick.horizontalMultiplier.increment ?? 0,
        max: gunKick.horizontalMultiplier.max ?? 1,
        threshold: gunKick.horizontalMultiplier.threshold ?? 1,
    };

    // Bandaid fix for inaccurate reload notify times

    if (attributeModifiers['OverallReloadPlayRate']) {
        updatedWeapon.reloadTime /= convertAttributeModifier(
            'OverallReloadPlayRate',
            attributeModifiers['OverallReloadPlayRate']
        );

        updatedWeapon.reloadEmptyTime /= convertAttributeModifier(
            'OverallReloadPlayRate',
            attributeModifiers['OverallReloadPlayRate']
        );
    }

    if (attributeModifiers['OverallSwapSpeed']) {
        updatedWeapon.equipTime /= convertAttributeModifier(
            'OverallSwapSpeed',
            attributeModifiers['OverallSwapSpeed']
        );

        updatedWeapon.unequipTime /= convertAttributeModifier(
            'OverallSwapSpeed',
            attributeModifiers['OverallSwapSpeed']
        );
    }

    if (attributeModifiers['SprintExitPlayRate'])
        updatedWeapon.sprintExitTime /= convertAttributeModifier(
            'SprintExitPlayRate',
            attributeModifiers['SprintExitPlayRate']
        );

    return updatedWeapon;
}

/**
 * Convert an attribute modifier to a modifier that can be applied to stats
 * based on the attribute's mod data curve
 *
 * @param {string} attribute Attribute to convert
 * @param {number} modifier Attribute modifier
 * @returns {number} Stat modifier
 */
function convertAttributeModifier(attribute, modifier) {
    if (attribute == 'OverallSwapSpeed') attribute = 'EquipPlayRate';

    const attributeModifierCurve = CURVE_DATA[attribute];

    if (modifier == 0 || modifier == undefined) return 0;

    // Get points on the curve preceding and succeeding the attribute modifier

    const preceding = attributeModifierCurve.findLast((i) => {
        return modifier >= i.point;
    });
    const succeeding = attributeModifierCurve.find((i) => {
        return modifier <= i.point;
    });

    if (preceding == succeeding) return preceding.value;

    // Interpolate linearly between the preceding and succeeding points

    const gradient =
        (succeeding.value - preceding.value) /
        (succeeding.point - preceding.point);
    const intercept = preceding.value - gradient * preceding.point;

    return gradient * modifier + intercept;
}

/**
 * Calculate the amount of damage dealt through armour against a specific enemy
 *
 * @param {number} armorPenetration The weapon's armor penetration stat
 * @param {number} armorHardness The enemy's armor hardness stat
 * @returns The weapon's EAP against the enemy
 */
function effectiveArmorPenetration(armorPenetration, armorHardness) {
    return Math.max(0, Math.min(1, armorPenetration - armorHardness + 1));
}

/**
 * Calculate how many shots it would take to defeat an enemy
 *
 * @param {number} weaponDamage The weapon's current damage
 * @param {number} weaponCritMultiplier The weapon's current crit multiplier
 * @param {number} effectiveArmorPenetration The weapon's EAP against the enemy
 * @param {number} enemyHealth The enemy's health stat
 * @param {number} enemyArmor The enemy's armor stat
 */
function weaponShotsToKill(
    weaponDamage,
    weaponCritMultiplier,
    effectiveArmorPenetration,
    enemyHealth,
    enemyArmor
) {
    if (weaponCritMultiplier < 1) weaponCritMultiplier = 1;

    const critDamage = weaponDamage * weaponCritMultiplier;
    const apDamage = weaponDamage * effectiveArmorPenetration;
    const critApDamage = critDamage * effectiveArmorPenetration;

    const armorDamagePerShot = weaponDamage * (weaponCritMultiplier !== 1 ? armorCritMultiplier : 1);
    const shotsOnArmor = Math.min(
        Math.ceil(enemyArmor / armorDamagePerShot),
        Math.ceil(enemyHealth / critApDamage)
    );

    const remainingHealth = Math.max(
        0,
        Math.floor(enemyHealth - critApDamage * shotsOnArmor)
    );

    const shotsOnHealth = Math.ceil(remainingHealth / critDamage);

    if (weaponCritMultiplier > 1) {
        const overdamage =
            critDamage - (remainingHealth % critDamage || critDamage);
        const replaceableCrits = Math.min(
            shotsOnHealth,
            Math.floor(overdamage / (critDamage - weaponDamage))
        );

        const armorOverdamage =
            overdamage - replaceableCrits * (critDamage - weaponDamage) ||
            critApDamage - (enemyHealth % critApDamage || critApDamage);
        const replaceableArmoredCrits = Math.min(
            shotsOnArmor,
            Math.floor(
                armorOverdamage / (critApDamage - apDamage) || shotsOnArmor
            )
        );

        return {
            armoredCrits: shotsOnArmor - replaceableArmoredCrits,
            armoredNonCrits: replaceableArmoredCrits,
            unarmoredCrits: shotsOnHealth - replaceableCrits,
            unarmoredNonCrits: replaceableCrits,
            totalShots: shotsOnArmor + shotsOnHealth,
        };
    }

    return {
        armoredCrits: 0,
        armoredNonCrits: shotsOnArmor,
        unarmoredCrits: 0,
        unarmoredNonCrits: shotsOnHealth,
        totalShots: shotsOnArmor + shotsOnHealth,
    };
}

function weaponShotsToKillByArmorLayer(
    weaponDamage,
    weaponCritMultiplier,
    armorPenetration,
    enemyHealth,
    enemyArmor,
    armorlayer
) {
    //if (weaponCritMultiplier < 1) weaponCritMultiplier = 1;
    if (weaponDamage <= 0) {
        return {
            totalShotsNonCrit: Infinity,
            totalShotsFullCrit: Infinity,
        };
    }

    armorlayer = Math.max(0, Math.floor(armorlayer || 0));
    const penetrationThreshold = Math.floor(armorPenetration || 0);
    const layersToBreak = Math.max(armorlayer - penetrationThreshold, 0);
    const layerArmorValue = armorlayer > 0 ? enemyArmor / armorlayer : 0;
    const requiredArmorDamage = layerArmorValue * layersToBreak;
    let healthDamage = weaponDamage;
    let DamagetoArmor = 0, armorShots = 0, increment = 0, CrackedBonus = 0;

    let armorCritMultiplier = 1;
    if (isSkillEquipped('HeadGames')) {
        const hgLevel = SKILL_VALUES.HeadGames ?? 1;
        armorCritMultiplier *= (1 + (SKILLS.HeadGames?.modifier ?? 0) * hgLevel);
    }

    // Default armor shots if no BreakingPoint: number of shots needed to do
    // requiredArmorDamage using armorDamagePerShot per shot
    let armorDamagePerShot = weaponDamage * (weaponCritMultiplier !== 1 ? armorCritMultiplier : 1);
    if(isSkillEquipped('SMGAdept')) {
        const smgLevel = SKILL_VALUES.SMGAdept ?? 1;
        armorDamagePerShot *= (1 + (SKILLS.SMGAdept?.modifier ?? 0.02) * smgLevel);
    }

    // BreakingPoint behaviour (new): if equipped, each failed shot that does not
    // satisfy the penetration threshold will increase the weapon's armorPenetration
    // for the *next* shot by a fixed increment (base 0.05, mastered 0.15). We need
    // to simulate shot-by-shot because armor damage may reduce the effective
    // "layer" count (enemy armor divided into equal layers), and the penetration
    // increases only apply to subsequent shots.
    if (isSkillEquipped('BreakingPoint') || isSkillEquipped('Cracked')) {
        if(isSkillEquipped('BreakingPoint')) {
            increment = equippedSkillsMastered?.has('BreakingPoint')
                ? (SKILLS.BreakingPoint.masteredmodifier ?? 0.15)
                : (SKILLS.BreakingPoint.basemodifier ?? 0.05);
        }

        // If armorlayer or enemyArmor are zero, no need to simulate
        if (armorlayer > 0 && enemyArmor > 0 && weaponDamage > 0) {
            // Preserve initial values
            const initialArmor = enemyArmor;
            const initialLayers = armorlayer;

            // layerValue: how much armor corresponds to one layer
            const layerValue = initialLayers > 0 ? initialArmor / initialLayers : 0;

            let currentArmor = initialArmor;
            let currentPen = armorPenetration ?? 0; // this will accumulate increments
            let currentLayers = initialLayers;
            let shots = 0,previousArmorLayers = currentLayers;
            

            // Simulate shots until either penetration floor reaches remaining
            // layer count (i.e. we can start penetrating), or armor is gone
            while (currentArmor > 0) {
                // If the current floored penetration already is sufficient to
                // bypass the remaining layers, we stop (no more armor shots)
                if (Math.floor(currentPen) >= currentLayers) break;
                previousArmorLayers = currentLayers;

                // This shot hits armor and reduces its absolute value
                shots++;
                currentArmor -= armorDamagePerShot * (1 + CrackedBonus ?? 0);
                DamagetoArmor += armorDamagePerShot * (1 + CrackedBonus ?? 0);

                // After a shot that did not penetrate, BreakingPoint increases
                // the effective penetration for the *next* shot
                if(isSkillEquipped('BreakingPoint')) {
                    currentPen += Math.max(0, increment);
                }

                // Recompute layers from remaining armor (each layer has size layerValue)
                currentLayers = layerValue > 0 
                    ? Math.max(0, Math.ceil(currentArmor / layerValue)) 
                    : 0;
                if(isSkillEquipped('Cracked')) {
                    if(previousArmorLayers-currentLayers > 0) {
                        CrackedBonus += equippedSkillsMastered?.has('Cracked')
                        ? (SKILLS.Cracked?.masteredmodifier ?? 0.3)
                        : (SKILLS.Cracked?.basemodifier ?? 0.1);
                    }
                }

                // If after the shot the currentPen floored is sufficient, we stop
                if (Math.floor(currentPen) >= currentLayers) break;
                // Otherwise continue; the loop will end when we can penetrate or currentArmor <= 0
            }

            armorShots = shots;
        }
    } else {
        armorShots = requiredArmorDamage > 0 ? Math.ceil(requiredArmorDamage / armorDamagePerShot) : 0;
        DamagetoArmor = armorDamagePerShot * armorShots;
    }

    if (enemyHealth <= 0) {
        return {
            totalShotsNonCrit: armorShots,
            totalShotsFullCrit: armorShots,
        };
    }

    // If BreakingPoint was used we may have computed armorShots using an effective
    // armor-damage-per-shot; calculate overflow using that effective value if present.
    // Compute overflowDamage: only the portion of the last armor-shot that
    // exceeded the remaining armor spills into health. Note: with the
    // BreakingPoint per-shot increment behaviour, the penetration increase
    // applies to the next shot, so overflow only happens if a shot actually
    // reduced armor below zero.
    let overflowDamage = 0;
    if (armorShots > 0 && DamagetoArmor > enemyArmor) {
        // amount of armour actually removed by the shots is armorShots * weaponDamage
        // but the armour that existed to be removed was requiredArmorDamage when there
        // was no per-shot penetration change. To keep consistent, if BreakingPoint
        // was involved and the armour wasn't fully drained, overflow is 0. A simpler
        // and robust rule: overflowDamage equals max(0, armorShots * weaponDamage - requiredArmorDamage)
        // except when BreakingPoint increments allowed early termination without
        // consuming requiredArmorDamage (in which case requiredArmorDamage would be
        // larger than consumed armour) — that makes overflow negative which we clamp to 0.

        overflowDamage = Math.max(0, DamagetoArmor - enemyArmor);

        if (weaponCritMultiplier !== 1) {
            overflowDamage *= weaponCritMultiplier;
        }
    }
        if (isSkillEquipped('HollowPointRounds')) {
        const HealBonus = equippedSkillsMastered?.has('HollowPointRounds')
            ? (SKILLS.HollowPointRounds.masteredmodifier ?? 0.4)
            : (SKILLS.HollowPointRounds.basemodifier ?? 0.15);    
            overflowDamage *= (1 + HealBonus);
            healthDamage *= (1 + HealBonus);
    }
    if (isSkillEquipped('Cracked')) {
        healthDamage *= (1 + CrackedBonus ?? 0);
    }
    const remainingHealthAfterOverflow = Math.max(0, enemyHealth - overflowDamage);

    const nonCritHealthShots = Math.ceil(remainingHealthAfterOverflow / healthDamage);

    if (isSkillEquipped('HeadGames')) {
        const hgLevel = SKILL_VALUES.HeadGames ?? 1;
        weaponCritMultiplier *= 1 + (SKILLS.HeadGames?.modifier ?? 0) * hgLevel;
    }

    const fullCritHealthShots = Math.ceil(
        remainingHealthAfterOverflow / (healthDamage * weaponCritMultiplier)
    );


    if (weaponCritMultiplier > 1) {
        return {
            armoredCrits: armorShots,
            armoredNonCrits: 0,
            unarmoredCrits: fullCritHealthShots,
            unarmoredNonCrits: 0,
            totalShots: armorShots + fullCritHealthShots,
        };
    }

    return {
        armoredCrits: 0,
        armoredNonCrits: armorShots,
        unarmoredCrits: 0,
        unarmoredNonCrits: nonCritHealthShots,
        totalShots: armorShots + nonCritHealthShots,
        //totalShotsNonCrit: armorShots + nonCritHealthShots,
        //totalShotsFullCrit: armorShots + fullCritHealthShots,
    };
}

let equippedSkills = [],
    equippedSkillsMastered = new Set(),
    equippedAttachments = [];

const weaponClasses = [
    'Assault Rifle',
    'Marksman',
    'Shotgun',
    'Pistol',
    'Revolver',
    'SMG',
    'LMG',
];

const sortedWeapons = Object.keys(WEAPON_DATA).sort((a, b) => {
    return (
        weaponClasses.indexOf(WEAPON_DATA[a].class) -
            weaponClasses.indexOf(WEAPON_DATA[b].class) ||
        WEAPON_DATA[a].dlc - WEAPON_DATA[b].dlc
    );
});

function populateWeaponSelector() {
    const weaponSelector = document.querySelector('#weapon-list');
    const selectableWeaponTemplate = document
        .querySelector('template.selectable-weapon')
        .cloneNode(true);
    document.querySelector('template.selectable-weapon').remove();

    for (const weapon of sortedWeapons) {
        const selectableWeapon = weaponSelector.appendChild(
            document.createElement('div')
        );

        selectableWeapon.innerHTML = selectableWeaponTemplate.innerHTML;
        selectableWeapon.classList = ['selectable-weapon'];
        selectableWeapon.style = `
            --image-x-offset: ${
                WEAPON_DATA[weapon].displayIcon.offset.x * -1
            }px;
            --image-y-offset: ${
                WEAPON_DATA[weapon].displayIcon.offset.y * -1
            }px;
            --image-url: url("images/${
                WEAPON_DATA[weapon].displayIcon.source
            }");
        `;

        const weaponInput = selectableWeapon.children[0];
        const weaponName = selectableWeapon.children[1];
        const weaponDLC = selectableWeapon.children[2];

        const id = weapon.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();

        weaponInput.id = id;
        weaponInput.value = weapon;

        weaponName.innerHTML = WEAPON_DATA[weapon].displayName;
        weaponName.setAttribute('for', id);

        setLocalizationAttributes(
            weaponDLC,
            'dlc-' + WEAPON_DATA[weapon].dlc
        );
        weaponDLC.setAttribute('for', id);

        weaponInput.addEventListener('change', (event) => {
            populateLoadout(event.target.value);
            updateStatsAfterChange();
        });

        if (weapon == 'CAR4') weaponInput.checked = true;

        populateLoadout('CAR4');
        updateStatsAfterChange();
    }
}

const tooltip = document.querySelector('#tooltip');

function showTooltip(left, top, tooltipBody) {
    tooltip.innerHTML = tooltipBody;

    const desiredLeft = parseFloat(left);
    const desiredTop = parseFloat(top);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;

    tooltip.style.left = desiredLeft + 'px';
    tooltip.style.top = desiredTop + 'px';
    tooltip.style.visibility = 'hidden';

    const height = tooltip.offsetHeight || 0;
    const margin = 35;
    const adjustedTop = desiredTop + height + margin > viewportHeight 
        ? desiredTop - height - margin 
        : desiredTop;

    tooltip.style.top = adjustedTop + 'px';
    tooltip.style.visibility = 'visible';
}

const skillSelector = document.querySelector(
    '#skill-selector .loadout-category-container'
);
const skillTemplate = document.querySelector('template.skill').cloneNode(true);
document.querySelector('template.skill').remove();

const defaultSkillIcons = 'sydch';
let skillIcons = defaultSkillIcons;
if (localStorage.getItem('icons')) skillIcons = localStorage.getItem('icons');

function populateSkills(weaponClass = 'Assault Rifle') {
    skillSelector.innerHTML = '';

    for (const skill in SKILLS) {
        const selectableSkill = skillSelector.appendChild(
            document.createElement('div')
        );

        selectableSkill.innerHTML = skillTemplate.innerHTML;
        selectableSkill.classList = 'skill';

        const skillInput = selectableSkill.children[0];
        const skillLabel = selectableSkill.children[1];

        const id = skill.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase();

        skillInput.id = id;
        skillInput.value = skill;

        if (equippedSkills.includes(skill)) {
            skillInput.checked = true;
            skillInput.dataset.state = equippedSkillsMastered.has(skill) ? '2' : '1';
        } else {
            skillInput.checked = false;
            skillInput.dataset.state = '0';
        }

        const allowed = SKILLS[skill].allowedClasses;
        if (weaponClass && Array.isArray(allowed) && !allowed.includes(weaponClass)) {
            selectableSkill.style.display = 'none';
            skillInput.disabled = true;
            if (skillInput.checked) {
                const idx = equippedSkills.indexOf(skill);
                if (idx > -1) equippedSkills.splice(idx, 1);
                equippedSkillsMastered.delete(skill);
                skillInput.checked = false;
                skillInput.dataset.state = '0';
            }
        } else {
            selectableSkill.style.display = '';
            skillInput.disabled = false;
        }

        // put text into a dedicated span so we don't overwrite the overlay img
        const skillTextSpan = skillLabel.querySelector('.skill-label-text');
        if (skillTextSpan) {
            setLocalizationAttributes(skillTextSpan, SKILLS[skill].name);
            skillTextSpan.innerText = getLocalisation(SKILLS[skill].name);
        } else {
            // fallback if template hasn't been updated
            setLocalizationAttributes(skillLabel, SKILLS[skill].name);
            skillLabel.innerText = getLocalisation(SKILLS[skill].name);
        }
        skillLabel.setAttribute('for', id);

        const iconSpec = SKILLS[skill].icons || (SKILLS[skill].iconBase || SKILLS[skill].iconMastered ? { base: SKILLS[skill].iconBase, mastered: SKILLS[skill].iconMastered } : null);
        if (iconSpec && iconSpec.base) {
            skillLabel.dataset.iconMode = 'single';
            skillLabel.style.setProperty('--image-url', `url("${iconSpec.base}")`);
            skillLabel.style.setProperty('--image-x-offset', 'center');
            skillLabel.style.setProperty('--image-y-offset', 'center');
            skillLabel.style.setProperty('--image-size', '64px 64px');
        } else {
            skillLabel.dataset.iconMode = 'pack';
            skillLabel.style = `
                --image-x-offset: ${SKILLS[skill].iconOffset.x * -1}px;
                --image-y-offset: ${SKILLS[skill].iconOffset.y * -1}px;
                --image-url: url("images/${
                    skill == 'edge'
                        ? skillIcons + '-edge.png'
                        : skillIcons + '-skills.png'
                }");
            `;
        }

        if (skillLabel.dataset.iconMode === 'pack') {
            skillLabel.style.setProperty('--image-size', '64px 64px');
        }

        if (skill === 'HeadGames') {
            skillLabel.style.setProperty('--image-scale', '70%');
        }

        skillLabel.style.position = skillLabel.style.position || 'relative';

        // overlay img is now provided in template (no dynamic creation needed)
        const overlay = skillLabel.querySelector('.skill-mastered-overlay');
//skill value span
        if (skill === 'Rifleman') {
            let counter = selectableSkill.querySelector('.rifleman-counter');

            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'rifleman-counter';
                counter.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:-3px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';

                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'rifleman-minus';
                minus.textContent = '-';
                minus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const valueSpan = document.createElement('span');
                valueSpan.className = 'rifleman-value';
                valueSpan.style.cssText = 'min-width:12px;text-align:center;display:inline-block;font-size:0.85em;line-height:1;';
                valueSpan.textContent = SKILL_VALUES.Rifleman ?? 1;

                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'rifleman-plus';
                plus.textContent = '+';
                plus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const stopEvent = (ev) => {
                    ev.stopPropagation();
                };

                minus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.Rifleman ?? 1;
                    const next = Math.max(1, cur - 1);
                    SKILL_VALUES.Rifleman = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('Rifleman')) {
                        updateStatsAfterChange();
                    }
                });

                plus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.Rifleman ?? 1;
                    const next = Math.min(12, cur + 1);
                    SKILL_VALUES.Rifleman = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('Rifleman')) {
                        updateStatsAfterChange();
                    }
                });

                minus.addEventListener('contextmenu', (ev) => ev.stopPropagation());
                plus.addEventListener('contextmenu', (ev) => ev.stopPropagation());

                counter.appendChild(minus);
                counter.appendChild(valueSpan);
                counter.appendChild(plus);

                selectableSkill.appendChild(counter);
            } else {
                const valueSpan = counter.querySelector('.rifleman-value');
                if (valueSpan) valueSpan.textContent = SKILL_VALUES.Rifleman ?? 1;
            }
        }
        if (skill === 'HeadGames') {
            let counter = selectableSkill.querySelector('.headgames-counter');

            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'headgames-counter';
                counter.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:-3px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';

                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'headgames-minus';
                minus.textContent = '-';
                minus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const valueSpan = document.createElement('span');
                valueSpan.className = 'headgames-value';
                valueSpan.style.cssText = 'min-width:12px;text-align:center;display:inline-block;font-size:0.85em;line-height:1;';
                valueSpan.textContent = SKILL_VALUES.HeadGames ?? 1;

                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'headgames-plus';
                plus.textContent = '+';
                plus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const stopEvent = (ev) => {
                    ev.stopPropagation();
                };

                minus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.HeadGames ?? 1;
                    const next = Math.max(1, cur - 1);
                    SKILL_VALUES.HeadGames = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('HeadGames')) {
                        updateStatsAfterChange();
                    }
                });

                plus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.HeadGames ?? 1;
                    const next = Math.min(12, cur + 1);
                    SKILL_VALUES.HeadGames = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('HeadGames')) {
                        updateStatsAfterChange();
                    }
                });

                minus.addEventListener('contextmenu', (ev) => ev.stopPropagation());
                plus.addEventListener('contextmenu', (ev) => ev.stopPropagation());

                counter.appendChild(minus);
                counter.appendChild(valueSpan);
                counter.appendChild(plus);

                selectableSkill.appendChild(counter);
            } else {
                const valueSpan = counter.querySelector('.headgames-value');
                if (valueSpan) valueSpan.textContent = SKILL_VALUES.HeadGames ?? 1;
            }
        }
        if (skill === 'SMGAdept') {
            let counter = selectableSkill.querySelector('.SMGAdept-counter');

            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'SMGAdept-counter';
                counter.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:-3px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';

                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'SMGAdept-minus';
                minus.textContent = '-';
                minus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const valueSpan = document.createElement('span');
                valueSpan.className = 'SMGAdept-value';
                valueSpan.style.cssText = 'min-width:12px;text-align:center;display:inline-block;font-size:0.85em;line-height:1;';
                valueSpan.textContent = SKILL_VALUES.SMGAdept ?? 1;

                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'SMGAdept-plus';
                plus.textContent = '+';
                plus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const stopEvent = (ev) => {
                    ev.stopPropagation();
                };

                minus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.SMGAdept ?? 1;
                    const next = Math.max(1, cur - 1);
                    SKILL_VALUES.SMGAdept = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('SMGAdept')) {
                        updateStatsAfterChange();
                    }
                });

                plus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.SMGAdept ?? 1;
                    const next = Math.min(12, cur + 1);
                    SKILL_VALUES.SMGAdept = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('SMGAdept')) {
                        updateStatsAfterChange();
                    }
                });

                minus.addEventListener('contextmenu', (ev) => ev.stopPropagation());
                plus.addEventListener('contextmenu', (ev) => ev.stopPropagation());

                counter.appendChild(minus);
                counter.appendChild(valueSpan);
                counter.appendChild(plus);

                selectableSkill.appendChild(counter);
            } else {
                const valueSpan = counter.querySelector('.SMGAdept-value');
                if (valueSpan) valueSpan.textContent = SKILL_VALUES.SMGAdept ?? 1;
            }
        }
        if (skill === 'CallingShotgun') {
            let counter = selectableSkill.querySelector('.CallingShotgun-counter');

            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'CallingShotgun-counter';
                counter.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:-3px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';

                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'CallingShotgun-minus';
                minus.textContent = '-';
                minus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const valueSpan = document.createElement('span');
                valueSpan.className = 'CallingShotgun-value';
                valueSpan.style.cssText = 'min-width:12px;text-align:center;display:inline-block;font-size:0.85em;line-height:1;';
                valueSpan.textContent = SKILL_VALUES.CallingShotgun ?? 1;

                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'CallingShotgun-plus';
                plus.textContent = '+';
                plus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const stopEvent = (ev) => {
                    ev.stopPropagation();
                };

                minus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.CallingShotgun ?? 1;
                    const next = Math.max(1, cur - 1);
                    SKILL_VALUES.CallingShotgun = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('CallingShotgun')) {
                        updateStatsAfterChange();
                    }
                });

                plus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.CallingShotgun ?? 1;
                    const next = Math.min(12, cur + 1);
                    SKILL_VALUES.CallingShotgun = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('CallingShotgun')) {
                        updateStatsAfterChange();
                    }
                });

                minus.addEventListener('contextmenu', (ev) => ev.stopPropagation());
                plus.addEventListener('contextmenu', (ev) => ev.stopPropagation());

                counter.appendChild(minus);
                counter.appendChild(valueSpan);
                counter.appendChild(plus);

                selectableSkill.appendChild(counter);
            } else {
                const valueSpan = counter.querySelector('.CallingShotgun-value');
                if (valueSpan) valueSpan.textContent = SKILL_VALUES.CallingShotgun ?? 1;
            }
            
            
        }
        if (skill === 'Bullseye') {
            let counter = selectableSkill.querySelector('.Bullseye-counter');

            if (!counter) {
                counter = document.createElement('div');
                counter.className = 'Bullseye-counter';
                counter.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:-3px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';

                const minus = document.createElement('button');
                minus.type = 'button';
                minus.className = 'Bullseye-minus';
                minus.textContent = '-';
                minus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const valueSpan = document.createElement('span');
                valueSpan.className = 'Bullseye-value';
                valueSpan.style.cssText = 'min-width:12px;text-align:center;display:inline-block;font-size:0.85em;line-height:1;';
                valueSpan.textContent = SKILL_VALUES.Bullseye ?? 1;

                const plus = document.createElement('button');
                plus.type = 'button';
                plus.className = 'Bullseye-plus';
                plus.textContent = '+';
                plus.style.cssText = 'min-width:16px;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;line-height:1;';

                const stopEvent = (ev) => {
                    ev.stopPropagation();
                };

                minus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.Bullseye ?? 1;
                    const next = Math.max(1, cur - 1);
                    SKILL_VALUES.Bullseye = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('Bullseye')) {
                        updateStatsAfterChange();
                    }
                });

                plus.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    const cur = SKILL_VALUES.Bullseye ?? 1;
                    const next = Math.min(12, cur + 1);
                    SKILL_VALUES.Bullseye = next;
                    valueSpan.textContent = next;
                    if (equippedSkills.includes('Bullseye')) {
                        updateStatsAfterChange();
                    }
                });

                minus.addEventListener('contextmenu', (ev) => ev.stopPropagation());
                plus.addEventListener('contextmenu', (ev) => ev.stopPropagation());

                counter.appendChild(minus);
                counter.appendChild(valueSpan);
                counter.appendChild(plus);

                selectableSkill.appendChild(counter);
                const buttonContainer = document.createElement('div');
                buttonContainer.style.cssText = 'display:flex;justify-content:space-between;align-items:center;gap:4px;margin-top:4px;width:4.236em;height:1.6em;padding:0 0.15em;box-sizing:border-box;';
                const unmarkBtn = document.createElement('button');
                unmarkBtn.type = 'button';
                unmarkBtn.className = 'Bullseye-unmark';
                unmarkBtn.textContent = SKILLS.Bullseye.Unmarkmodifier * 100 + '%';
                unmarkBtn.style.cssText = 'flex:1;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.8em;line-height:1;';
                const markBtn = document.createElement('button');
                markBtn.type = 'button';
                markBtn.className = 'Bullseye-mark';
                markBtn.textContent = SKILLS.Bullseye.Markmodifier * 100 + '%';
                markBtn.style.cssText = 'flex:1;padding:0;border-radius:3px;border:1px solid rgba(255,255,255,0.08);background:transparent;color:inherit;cursor:pointer;height:100%;display:inline-flex;align-items:center;justify-content:center;font-size:0.8em;line-height:1;';
        
                const updateButtonStyles = () => {
                    if (SKILL_VALUES.BullseyeMode === 'Unmarkmodifier') {
                        unmarkBtn.style.background = 'rgba(255,255,255,0.2)';
                        markBtn.style.background = 'transparent';
                    } else {
                        unmarkBtn.style.background = 'transparent';
                        markBtn.style.background = 'rgba(255,255,255,0.2)';
                    }
                };
        
                unmarkBtn.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    SKILL_VALUES.BullseyeMode = 'Unmarkmodifier';
                    updateButtonStyles();
                    if (equippedSkills.includes('Bullseye')) {
                        updateStatsAfterChange();
                    }
                });
        
                markBtn.addEventListener('click', (ev) => {
                    stopEvent(ev);
                    SKILL_VALUES.BullseyeMode = 'Markmodifier';
                    updateButtonStyles();
                    if (equippedSkills.includes('Bullseye')) {
                        updateStatsAfterChange();
                    }
                });
        
                updateButtonStyles();
        
                buttonContainer.appendChild(unmarkBtn);
                buttonContainer.appendChild(markBtn);
        
                selectableSkill.appendChild(buttonContainer);
            } else {
                const valueSpan = counter.querySelector('.Bullseye-value');
                if (valueSpan) valueSpan.textContent = SKILL_VALUES.Bullseye ?? 1;
            }
            
            
        }


         const applyVisualState = (state) => {
             // Keep data-state on both input and label in sync (some CSS targets input[data-state])
             skillInput.dataset.state = state;
             skillLabel.dataset.state = state;

             // checked should be true for both basic(1) and mastered(2), false for none(0)
             skillInput.checked = state !== '0';

             // Use a class to control the icon-only greyscale via CSS on the ::before pseudo-element
             skillLabel.classList.toggle('unselected', state === '0');

             // toggle mastered overlay
             skillLabel.classList.toggle('mastered', state === '2');

             // ensure the container .skill has .selected when any state except '0' so the page's
             // original selected visuals (which use .skill.selected or :has(> input:checked)) are
             // applied consistently. When state is '0' remove .selected to clear visuals.
             selectableSkill.classList.toggle('selected', state !== '0');

             if (skillLabel.dataset.iconMode === 'single') {
                 const baseIcon = (SKILLS[skill].icons && SKILLS[skill].icons.base) || SKILLS[skill].iconBase;
                 const masteredIcon = (SKILLS[skill].icons && SKILLS[skill].icons.mastered) || SKILLS[skill].iconMastered || baseIcon;
                 const iconUrl = state === '2' ? masteredIcon : baseIcon;
                 if (iconUrl) {
                     skillLabel.style.setProperty('--image-url', `url("${iconUrl}")`);
                 }
             }

                     console.debug('Skill state updated', {
                 skill,
                 state,
                 mastered: equippedSkillsMastered.has(skill),
                 overlayVisible: skillLabel.classList.contains('mastered'),
             });
         };

        applyVisualState(skillInput.dataset.state);

        skillInput.addEventListener('click', (event) => {
            event.preventDefault();
            const skill = event.target.value;
            const isEquipped = equippedSkills.includes(skill);
            const isMastered = equippedSkillsMastered.has(skill);
            const isDirectMastered = SKILLS[skill]?.directMastered;
            const isdirectBasiced = SKILLS[skill]?.directBasiced;

            if (isDirectMastered) {
                if (!isEquipped) {
                    equippedSkills.push(skill);
                    equippedSkillsMastered.add(skill);
                    skillInput.dataset.state = '2';
                    applyVisualState('2');
                } else if (isMastered) {
                    const idx = equippedSkills.indexOf(skill);
                    if (idx > -1) equippedSkills.splice(idx, 1);
                    equippedSkillsMastered.delete(skill);
                    skillInput.dataset.state = '0';
                    applyVisualState('0');
                } else {
                    if (isdirectBasiced) {
                        const idx = equippedSkills.indexOf(skill);
                        if (idx > -1) equippedSkills.splice(idx, 1);
                        equippedSkillsMastered.delete(skill);
                        skillInput.dataset.state = '0';
                        applyVisualState('0');
                    } else {
                        equippedSkillsMastered.add(skill);
                        skillInput.dataset.state = '2';
                        applyVisualState('2');
                    }
                }
            } else {
                        if (!isEquipped) {
                            equippedSkills.push(skill);
                            equippedSkillsMastered.delete(skill);
                            skillInput.dataset.state = '1';
                            applyVisualState('1');
                        } else if (isEquipped && !isMastered) {
                            if (isdirectBasiced) {
                                const idx = equippedSkills.indexOf(skill);
                                if (idx > -1) equippedSkills.splice(idx, 1);
                                equippedSkillsMastered.delete(skill);
                                skillInput.dataset.state = '0';
                                applyVisualState('0');
                            } else {
                                equippedSkillsMastered.add(skill);
                                skillInput.dataset.state = '2';
                                applyVisualState('2');
                            }
                        } else {
                            const idx = equippedSkills.indexOf(skill);
                            if (idx > -1) equippedSkills.splice(idx, 1);
                            equippedSkillsMastered.delete(skill);
                            skillInput.dataset.state = '0';
                            applyVisualState('0');
                        }
                }   

            console.debug('Skill clicked', { skill, state: skillInput.dataset.state });
            updateStatsAfterChange();
        });

        skillInput.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            const skill = event.target.value;

            // Context behaviour: always reset to none (用户要求：右键直接回到未选)
            const idx = equippedSkills.indexOf(skill);
            if (idx > -1) equippedSkills.splice(idx, 1);
            equippedSkillsMastered.delete(skill);
            skillInput.dataset.state = '0';
            skillInput.checked = false;
            applyVisualState('0');

            console.debug('Skill contextmenu changed', { skill, state: skillInput.dataset.state });

            updateStatsAfterChange();
        });

        skillLabel.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            skillInput.dispatchEvent(
                new MouseEvent('contextmenu', { bubbles: true, cancelable: true })
            );
        });

        const tooltipBody = `
            <span class="tooltip-title">${getLocalisation(
                SKILLS[skill].name
            )}</span>
            <span>${getLocalisation(SKILLS[skill].description)}</span>
        `;
        
        addTooltipEvents(skillLabel, tooltipBody);
    }
}

function updateSkillIcons() {
    document.querySelectorAll('.skill label').forEach((element) => {
        if (element.dataset.iconMode === 'pack') {
            if (element.getAttribute('for') == 'edge') {
                element.style.setProperty(
                    '--image-url',
                    `url("images/${skillIcons}-edge.png")`
                );
            } else {
                element.style.setProperty(
                    '--image-url',
                    `url("images/${skillIcons}-skills.png")`
                );
            }
        }
    });
}

const attachmentsSection = document.querySelector('#loadout-attachments');

const attachmentSelectorTemplate = document
    .querySelector('#attachment-selector')
    .cloneNode(true);
document.querySelector('#attachment-selector').remove();

const attachmentTemplate = document
    .querySelector('template.attachment')
    .cloneNode(true);
document.querySelector('template.attachment').remove();

const attachmentSlots = [
    'sight',
    'mag',
    'barrelExtension',
    'barrel',
    'verticalGrip',
    'foreGrip',
    'grip',
    'stock',
];

function populateLoadout(selectedWeapon) {
    const weapon = WEAPON_DATA[selectedWeapon];

    populateSkills(weapon.class);

    document.querySelector('#loadout h2').innerHTML = weapon.displayName;

    document
        .querySelector('#loadout h3')
        .setAttribute(
            'data-localisation-key',
            'weapon-class-' + weapon.class.toLowerCase().replace(' ', '-')
        );
    localise(document.querySelector('#loadout h3'));

    attachmentsSection.innerHTML = '';

    const sortedAttachments = Object.keys(weapon.modularConfiguration).sort(
        (a, b) => {
            return attachmentSlots.indexOf(a) - attachmentSlots.indexOf(b);
        }
    );

    for (const slot of sortedAttachments) {
        const defaultAttachment =
            weapon.modularConfiguration[slot].defaultPart ?? 'None';
        const attachments = [
            defaultAttachment,
            ...weapon.modularConfiguration[slot].uniqueParts,
        ];

        if (weapon.modularConfiguration[slot].uniqueParts.length > 0) {
            const attachmentFieldset = attachmentsSection.appendChild(
                document.createElement('fieldset')
            );
            attachmentFieldset.innerHTML = attachmentSelectorTemplate.innerHTML;
            attachmentFieldset.classList = ['loadout-category'];

            attachmentFieldset.children[0].setAttribute(
                'data-localisation-key',
                'attachment-category-' +
                    slot.replace(/([a-z])([A-Z0-9])/g, '$1-$2').toLowerCase()
            );

            for (const attachment of attachments) {
                const attachmentData = ATTACHMENT_DATA[attachment];

                const attachmentButton =
                    attachmentFieldset.children[1].appendChild(
                        document.createElement('div')
                    );
                attachmentButton.innerHTML = attachmentTemplate.innerHTML;
                attachmentButton.classList = 'attachment';

                const attachmentInput = attachmentButton.children[0];
                const attachmentLabel = attachmentButton.children[1];

                const id = (attachment !== 'None' ? attachment : slot + 'None')
                    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
                    .replace(/_/g, '-')
                    .toLowerCase();

                attachmentInput.id = id;
                attachmentInput.value = attachment;
                attachmentInput.name = slot;
                attachmentInput.checked = attachment == defaultAttachment;

                let attachmentName =
                    attachmentData?.displayName ??
                    attachment
                        .split('_')
                        .pop()
                        .replace(/([a-z])([A-Z0-9])/g, '$1 $2');

                attachmentLabel.setAttribute('for', id);
                attachmentLabel.innerHTML = attachmentName;
                //translate attachments翻译配件
                attachmentLabel.setAttribute('data-localisation-key', attachmentLabel.innerHTML);

                attachmentInput.addEventListener('change', () => {
                    updateAttachments();
                    updateStatsAfterChange();
                });

                attachmentInput.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    const slotName = attachmentInput.name;
                    const defaultValue = defaultAttachment;

                    if (attachmentInput.value !== defaultValue) {
                        const defaultInput = document.querySelector(
                            `input[name="${slotName}"][value="${defaultValue}"]`
                        );
                        if (defaultInput) {
                            defaultInput.checked = true;
                            defaultInput.dispatchEvent(
                                new Event('change', { bubbles: true })
                            );
                        }
                    } else {
                        const noneInput = document.querySelector(
                            `input[name="${slotName}"][value="None"]`
                        );
                        if (noneInput && !noneInput.checked) {
                            noneInput.checked = true;
                            noneInput.dispatchEvent(
                                new Event('change', { bubbles: true })
                            );
                        }
                    }
                });

                attachmentLabel.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                    attachmentInput.dispatchEvent(
                        new MouseEvent('contextmenu', { bubbles: true, cancelable: true })
                    );
                });

                attachmentLabel.addEventListener('mouseenter', (event) => {
                    if (!attachmentData) return;

                    let attachmentStats = [];

                    if (attachmentData.targetingData) {
                        attachmentStats.push(
                            attachmentData.targetingData
                                .targetingMagnification + getLocalisation('× Magnification')
                        );
                    }

                    if (attachmentData.magazineData) {
                        attachmentStats.push(
                            (attachmentData.magazineData.ammoLoaded ?? 10) +
                                '/' +
                                (attachmentData.magazineData.ammoInventoryMax ??
                                    100) +
                            getLocalisation(' Magazine Size')
                        );
                        attachmentStats.push(
                            (attachmentData.magazineData.ammoPickup.min ?? 5) +
                                '–' +
                                (attachmentData.magazineData.ammoPickup.max ??
                                    10) +
                            getLocalisation(' Ammo Pickup')
                        );
                    }

                    attachmentData.attributeModifierMap?.forEach((modifier) => {
                        const attribute = modifier.attribute.replace(
                            /([a-z])([A-Z])/g,
                            '$1 $2'
                        );
                        const value =
                            modifier.value > 0
                                ? '+' + modifier.value
                                : modifier.value;
                        attachmentStats.push(getLocalisation(attribute) + ' ' + value);
                        //attachmentStats.push(attribute + ' ' + value);
                    });

                    if (attachmentStats.length == 0) return;

                    const tooltipBody = `
                        <span>${attachmentStats.join('</br>')}</span>
                    `;
                    
                    const rect = event.target.getBoundingClientRect();
                    showTooltip(
                        rect.left + 'px',
                        rect.top + event.target.clientHeight + 'px',
                        tooltipBody
                    );
                });

                attachmentLabel.addEventListener('mouseleave', () => {
                    tooltip.style.visibility = 'hidden';
                });
            }
        }
    }

    updateAttachments();
}

function updateSkills(selectedSkill) {
    const skillIsEquipped = equippedSkills.includes(selectedSkill);

    if (!skillIsEquipped) {
        equippedSkills.push(selectedSkill);
    } else {
        equippedSkills.splice(equippedSkills.indexOf(selectedSkill), 1);
        equippedSkillsMastered.delete(selectedSkill);
    }
}

function updateAttachments() {
    equippedAttachments = [];

    return document
        .querySelectorAll('.attachment input:checked')
        .forEach((i) => {
            if (i.value !== 'None') equippedAttachments.push(i.value);
        });
}

const weaponStatTemplate = document
    .querySelector('template.weapon-stat')
    .cloneNode(true);
document.querySelector('template.weapon-stat').remove();

let previousWeapon = '';

function updateWeaponStats(selectedWeapon) {
    const weapon = applyLoadout(
        selectedWeapon,
        equippedSkills,
        equippedAttachments
    );

    const fireData = weapon.fireData;

    const baseDamageStat = document.querySelector('#stat-base-damage');
    if (
        fireData.projectilesPerFiredRound &&
        fireData.projectilesPerFiredRound > 1
    ) {
        baseDamageStat.innerHTML =
            formatNumber(fireData.damageDistanceArray[0].damage) +
            '*' +
            Math.round(fireData.projectilesPerFiredRound) +
            '/';
    } else {
        baseDamageStat.innerHTML =
            formatNumber(fireData.damageDistanceArray[0].damage) +
            '/';
    }

    const baseDamageRange = baseDamageStat.appendChild(
        document.createElement('span')
    );
    baseDamageRange.setAttribute('data-localisation-key', 'stats-range');
    baseDamageRange.setAttribute(
        'data-localisation-var',
        `{"distance":"${
            Math.round(fireData.damageDistanceArray[0].distance) / 100
        }"}`
    );

    const baseMultiplierStat = document.querySelector('#stat-base-multiplier');
    let baseMultiplier = fireData.criticalDamageMultiplierDistanceArray[0].multiplier;
    
    if (equippedSkills.includes('HeadGames')) {
        const hgLevel = SKILL_VALUES.HeadGames ?? 1;
        baseMultiplier *= (1 + (SKILLS.HeadGames?.modifier ?? 0) * hgLevel);
    }
    
    baseMultiplierStat.innerHTML = formatNumber(baseMultiplier, 2) + '×/';

    const baseMultiplierRange = baseMultiplierStat.appendChild(
        document.createElement('span')
    );
    baseMultiplierRange.setAttribute('data-localisation-key', 'stats-range');
    baseMultiplierRange.setAttribute(
        'data-localisation-var',
        `{"distance":"${
            fireData.criticalDamageMultiplierDistanceArray[0].distance / 100
        }"}`
    );

    const rawAp = Number(fireData.armorPenetration ?? 0);
    const apDisplay = formatNumber(rawAp).toString().replace(/\.0+$/, '');
    document.querySelector('#stat-armor-penetration').innerHTML = apDisplay;

    const fireModeStat = document.querySelector('#stat-fire-type');
    fireModeStat.innerHTML = fireData.fireType;

    if (fireData.fireType == 'Burst') {
        fireModeStat.innerHTML += '/';

        const burstStat = fireModeStat.appendChild(
            document.createElement('span')
        );
        burstStat.setAttribute('data-localisation-key', 'stats-time');
        burstStat.setAttribute(
            'data-localisation-var',
            `{"duration": "${fireData.timeBetweenBursts}"}`
        );
    }

    const rpmStat = document.querySelector('#stat-rpm');
    rpmStat.setAttribute('data-localisation-key', 'stats-fire-rate-value');
    rpmStat.setAttribute(
        'data-localisation-var',
        `{"rpm":"${fireData.roundsPerMinute}"}`
    );

    document.querySelector('#stat-magazine').innerHTML =
        fireData.ammoLoaded + '/' + weapon.fireData.ammoInventoryMax;
    document.querySelector('#stat-ammo-pickup').innerHTML =
        fireData.ammoPickup.min + '–' + weapon.fireData.ammoPickup.max;

    const reloadStat = document.querySelector('#stat-reload');
    setLocalizationAttributes(
        reloadStat,
        'stats-time',
        {"duration": formatNumber(weapon.reloadTime, 3).toString()}
    );

    const fullReloadStat = document.querySelector('#stat-full-reload');
    setLocalizationAttributes(
        fullReloadStat,
        'stats-time',
        {"duration": formatNumber(weapon.reloadEmptyTime, 3).toString()}
    );

    const weaponDamageStats = document.querySelector(
        '#weapon-stats-damage > div'
    ).children[0];
    weaponDamageStats.innerHTML = '';

    weapon.fireData.damageDistanceArray.forEach((damageStep) => {
        const damageStat = weaponDamageStats.appendChild(
            document.createElement('div')
        );
        damageStat.innerHTML = weaponStatTemplate.innerHTML;
        damageStat.classList = ['weapon-stat'];

        damageStat.children[0].setAttribute(
            'data-localisation-key',
            'stats-range'
        );
        damageStat.children[0].setAttribute(
            'data-localisation-var',
            `{"distance": "${
                Math.round(Math.min(damageStep.distance, 100000)) / 100
            }"}`
        );

        damageStat.children[1].innerHTML =
            formatNumber(damageStep.damage);
    });

    const weaponCritStats = document.querySelector('#weapon-stats-damage > div')
        .children[1];
    weaponCritStats.innerHTML = '';

    const headGamesLevel = equippedSkills.includes('HeadGames') ? (SKILL_VALUES.HeadGames ?? 1) : 0;
    const headGamesModifier = equippedSkills.includes('HeadGames') ? (SKILLS.HeadGames?.modifier ?? 0) : 0;

    weapon.fireData.criticalDamageMultiplierDistanceArray.forEach(
        (criticalDamageStep) => {
            const critStat = weaponCritStats.appendChild(
                document.createElement('div')
            );
            critStat.innerHTML = weaponStatTemplate.innerHTML;
            critStat.classList = ['weapon-stat'];

            critStat.children[0].setAttribute(
                'data-localisation-key',
                'stats-range'
            );
            critStat.children[0].setAttribute(
                'data-localisation-var',
                `{"distance":"${
                    Math.round(Math.min(criticalDamageStep.distance, 100000)) /
                    100
                }"}`
            );

            let finalMultiplier = criticalDamageStep.multiplier;
            if (headGamesLevel > 0) {
                finalMultiplier *= (1 + headGamesModifier * headGamesLevel);
            }

            critStat.children[1].innerHTML = formatNumber(finalMultiplier, 2) + 'x';
        }
    );


    const recoilPatternStat = document.querySelector('svg#recoil-pattern');

    const recoilPattern = weapon.recoilData.viewKick.recoilPattern;
    const baseRecoilPattern =
        WEAPON_DATA[selectedWeapon].recoilData.viewKick.recoilPattern;

    const points = [
        ...baseRecoilPattern.map((point) => {
            return point.x;
        }),
        ...baseRecoilPattern.map((point) => {
            return point.y;
        }),
    ];
    const max = points.reduce((a, b) => {
        return Math.max(a, b);
    }, 0);

    // const gunKickStat = document.querySelector('svg#gunkick');

    // const gunKickLeft =
    //     weapon.recoilData.gunKick.horizontalLeft.max -
    //     weapon.recoilData.gunKick.horizontalRight.min;
    // const gunKickRight =
    //     weapon.recoilData.gunKick.horizontalRight.max -
    //     weapon.recoilData.gunKick.horizontalLeft.min;
    // const gunKickWidth = gunKickLeft + gunKickRight;
    // const gunKickUp =
    //     weapon.recoilData.gunKick.verticalTop.max -
    //     weapon.recoilData.gunKick.verticalBottom.min;
    // const gunKickDown =
    //     weapon.recoilData.gunKick.verticalBottom.max -
    //     weapon.recoilData.gunKick.verticalTop.min;
    // const gunKickHeight = gunKickUp + gunKickDown;

    if (selectedWeapon !== previousWeapon) {
        recoilPatternStat.innerHTML = '';

        recoilPatternStat.setAttribute('viewBox', `0 0 ${max} ${max}`);

        const firstPoint = recoilPatternStat.appendChild(
            document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        );

        firstPoint.setAttribute('cx', max / 2);
        firstPoint.setAttribute('cy', max * 0.9);
        firstPoint.setAttribute('r', max / 80);
        firstPoint.setAttribute('fill', 'white');

        for (const recoilPoint of recoilPattern) {
            for (let i = 0; i < 2; i++) {
                const point = recoilPatternStat.appendChild(
                    document.createElementNS(
                        'http://www.w3.org/2000/svg',
                        'circle'
                    )
                );

                point.setAttribute('cx', recoilPoint.x * 0.8 + max * 0.5);
                point.setAttribute('cy', recoilPoint.y * -0.8 + max * 0.9);
                point.setAttribute('r', max / 80);
                point.setAttribute('fill', 'white');

                if (i == 0) point.setAttribute('fill-opacity', '10%');
            }
        }

        // gunKickStat.innerHTML = '';

        // for (let i = 0; i < 2; i++) {
        //     const gunKick = gunKickStat.appendChild(
        //         document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        //     );

        //     gunKick.setAttribute('width', gunKickWidth * 50);
        //     gunKick.setAttribute('height', gunKickHeight * 50);
        //     gunKick.setAttribute(
        //         'x',
        //         50 - gunKickWidth * 25 + (gunKickRight - gunKickLeft) * 25
        //     );
        //     gunKick.setAttribute(
        //         'y',
        //         50 - gunKickHeight * 25 + (gunKickDown - gunKickUp) * 25
        //     );
        //     gunKick.setAttribute('fill', 'transparent');
        //     gunKick.setAttribute('stroke', 'white');
        //     gunKick.setAttribute('stroke-width', 0.75);
        //     gunKick.setAttribute('pathLength', '20');
        //     gunKick.setAttribute('stroke-dasharray', '2 8');
        //     gunKick.setAttribute('stroke-dashoffset', '1');

        //     if (i == 0) gunKick.setAttribute('stroke-opacity', '25%');
        // }

        // const center = gunKickStat.appendChild(
        //     document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        // );

        // center.setAttribute('cx', 50);
        // center.setAttribute('cy', 50);
        // center.setAttribute('r', 2);
        // center.setAttribute('fill', 'none');
        // center.setAttribute('stroke', 'white');
        // center.setAttribute('stroke-width', 0.75);
    } else {
        for (const recoilPoint in recoilPattern) {
            const point =
                recoilPatternStat.childNodes[Number(recoilPoint) * 2 + 2];

            point.setAttribute(
                'cx',
                recoilPattern[recoilPoint].x * 0.8 + max * 0.5
            );
            point.setAttribute(
                'cy',
                recoilPattern[recoilPoint].y * -0.8 + max * 0.9
            );
        }

        // const gunKick = gunKickStat.childNodes[1];

        // gunKick.setAttribute('width', gunKickWidth * 50);
        // gunKick.setAttribute('height', gunKickHeight * 50);
        // gunKick.setAttribute(
        //     'x',
        //     50 - gunKickWidth * 25 + (gunKickRight - gunKickLeft) * 25
        // );
        // gunKick.setAttribute(
        //     'y',
        //     50 - gunKickHeight * 25 + (gunKickDown - gunKickUp) * 25
        // );
    }

    previousWeapon = selectedWeapon;

    const hipfireMultiplierStat = document.querySelector(
        '#stat-hipfire-multiplier'
    );
    hipfireMultiplierStat.innerHTML =
        weapon.recoilData.viewKick.hipfireMultiplier + '×';

    const initialNumStat = document.querySelector('#stat-initial-num');
    initialNumStat.innerHTML = weapon.recoilData.viewKick.initialNum;

    const equipTimeStat = document.querySelector('#stat-equip-time');
    setLocalizationAttributes(
        equipTimeStat,
        'stats-time',
        {"duration": formatNumber(weapon.equipTime, 3).toString()}
    );

    const unequipTimeStat = document.querySelector('#stat-unequip-time');
    setLocalizationAttributes(
        unequipTimeStat,
        'stats-time',
        {"duration": formatNumber(weapon.unequipTime, 3).toString()}
    );

    const sprintExitTimeStat = document.querySelector('#stat-sprint-exit-time');
    setLocalizationAttributes(
        sprintExitTimeStat,
        'stats-time',
        {"duration": formatNumber(weapon.sprintExitTime, 3).toString()}
    );
}

function shotsToKillAtDistances(weapon, enemy, headshots) {
    const fireData = weapon.fireData;

    const distanceArray = [
        ...new Set([
            ...fireData.damageDistanceArray.map(
                (damageStep) => damageStep.distance
            ),
            ...fireData.criticalDamageMultiplierDistanceArray.map(
                (critMultiplierStep) => critMultiplierStep.distance
            ),
        ]),
    ].sort((a, b) => b - a);

    let shotsToKillAtDistances = {},
        previous = {};

    distanceArray.forEach((distance) => {
        const damage = (
            fireData.damageDistanceArray.find(
                (damageStep) => damageStep.distance >= distance
            ) ?? fireData.damageDistanceArray.slice(-1)[0]
        ).damage;

        const multiplier = headshots
            ? (
                  fireData.criticalDamageMultiplierDistanceArray.find(
                      (critMultiplierStep) =>
                          critMultiplierStep.distance >= distance
                  ) ??
                  fireData.criticalDamageMultiplierDistanceArray.slice(-1)[0]
              ).multiplier
            : 1;

        let enemyArmor = enemy.armor;

        if (enemy.displayName == 'Bulldozer' && headshots) enemyArmor = 0;
        if (
            equippedSkills.includes('expose') &&
            enemy.displayName != 'Bulldozer'
        )
            enemyArmor = 0;

//        const shotsToKill = weaponShotsToKill(
//            damage,
//            multiplier,
//            effectiveArmorPenetration(
//                fireData.armorPenetration,
//                enemy.armorHardness
//            ),
//            enemy.health,
//            enemyArmor
//        );
        const shotsToKill = weaponShotsToKillByArmorLayer(
            damage,
            multiplier,
            fireData.armorPenetration,
            enemy.health,
            enemyArmor,
            enemy.armorLayer
        );

        if (enemy.displayName == 'Bulldozer' || enemy.displayName == 'Shield') {
            const shotsToBreakVisor = enemy.displayName == 'Bulldozer' 
                ? Math.ceil(enemy.visorArmor / damage)
                : fireData.armorPenetration < enemy.visorArmorHardness - 0.99
                ? Math.ceil(enemy.visorArmor / damage)
                : 0;
    
            shotsToKill.visorShots = shotsToBreakVisor;
            shotsToKill.nonVisorShots = shotsToKill.totalShots;
            if (headshots) shotsToKill.totalShots += shotsToBreakVisor;
        }

        if (
            fireData.projectilesPerFiredRound &&
            fireData.projectilesPerFiredRound > 1
        ) {
            if (
                enemy.displayName == 'Bulldozer' ||
                enemy.displayName == 'Shield'
            ) {
                if (headshots) {
                    shotsToKill.totalShots =
                        Math.ceil(
                            shotsToKill.visorShots /
                                fireData.projectilesPerFiredRound
                        ) +
                        Math.ceil(
                            shotsToKill.nonVisorShots /
                                fireData.projectilesPerFiredRound
                        );
                } else {
                    shotsToKill.totalShots = Math.ceil(
                        shotsToKill.totalShots /
                            fireData.projectilesPerFiredRound
                    );
                }
            } else {
                shotsToKill.totalShots = Math.ceil(
                    shotsToKill.totalShots / fireData.projectilesPerFiredRound
                );
            }
        }

        if (previous && JSON.stringify(shotsToKill) != JSON.stringify(previous))
            shotsToKillAtDistances[Math.round(distance)] = shotsToKill;

        previous = shotsToKill;
    });

    return Object.keys(shotsToKillAtDistances)
        .sort()
        .reduce((obj, key) => {
            obj[key] = shotsToKillAtDistances[key];
            return obj;
        }, {});
}

function timeToKill(weapon, shotsToKill) {
    let TTK = (shotsToKill - 1) / (weapon.fireData.roundsPerMinute / 60);

    if (weapon.fireData.fireType == 'Burst') {
        TTK +=
            weapon.fireData.timeBetweenBursts *
            Math.floor((shotsToKill - 1) / 3);
    }

    if (shotsToKill > weapon.fireData.ammoLoaded)
        TTK +=
            weapon.reloadEmptyTime *
            Math.floor(shotsToKill / weapon.fireData.ammoLoaded);

    return TTK;
}

const damageStatTemplate = document
    .querySelector('template.damage-stat-container')
    .cloneNode(true);
document.querySelector('template.damage-stat-container').remove();

function updateDamageStats(selectedWeapon) {
    document.querySelector('#damage-stats').innerHTML = '';

    for (enemy in ENEMIES) {
        const filteredSkills = equippedSkills.filter((skill) => {
            return (
                // In normal gameplay dozers cannot be stunned
                !(enemy == 'bulldozer' && skill == 'coupDeGrace')
            );
        });

        let weapon = applyLoadout(
            selectedWeapon,
            filteredSkills,
            equippedAttachments
        );

        const enemyData = ENEMIES[enemy];

        const damageStats = document
            .querySelector('#damage-stats')
            .appendChild(document.createElement('div'));

        damageStats.innerHTML = damageStatTemplate.innerHTML;
        damageStats.classList = ['damage-stat-container'];

        const enemyInfo = damageStats.children[0];

        const enemyName = enemyInfo.appendChild(document.createElement('span'));
        enemyName.classList = ['enemy-name'];
        enemyName.setAttribute(
            'data-localisation-key',
            'enemy-' + enemyData.displayName.toLowerCase().replace(' ', '-')
        );

        if (enemyData.armor) {
            const enemyArmor = enemyInfo.appendChild(
                document.createElement('span')
            );
            enemyArmor.setAttribute(
                'data-localisation-key',
                'enemy-stats-armor'
            );
            enemyArmor.setAttribute(
                'data-localisation-var',
                `{"armor":"${enemyData.armor}"}`
            );
        }

//        if (enemyData.armorHardness) {
//            const enemyArmorHardness = enemyInfo.appendChild(
//                document.createElement('span')
//            );
//            enemyArmorHardness.setAttribute(
//                'data-localisation-key',
//                'enemy-stats-armor-hardness'
//            );
//            enemyArmorHardness.setAttribute(
//                'data-localisation-var',
//                `{"hardness":"${enemyData.armorHardness}"}`
//            );
//        }

        if (enemyData.armorLayer) {
            const enemyArmorLayer = enemyInfo.appendChild(
                document.createElement('span')
            );
            enemyArmorLayer.setAttribute(
                'data-localisation-key',
                'enemy-stats-armor-layer'
            );
            enemyArmorLayer.setAttribute(
                'data-localisation-var',
                `{"layer":"${enemyData.armorLayer}"}`
            );
        }

        if (enemyData.visorArmor) {
            const enemyVisorArmor = enemyInfo.appendChild(
                document.createElement('span')
            );
            enemyVisorArmor.setAttribute(
                'data-localisation-key',
                'enemy-stats-visor-armor'
            );
            enemyVisorArmor.setAttribute(
                'data-localisation-var',
                `{"armor":"${enemyData.visorArmor}"}`
            );
        }

        if (enemyData.visorArmorHardness) {
            const enemyVisorArmorHardness = enemyInfo.appendChild(
                document.createElement('span')
            );
            enemyVisorArmorHardness.setAttribute(
                'data-localisation-key',
                'enemy-stats-visor-armor-hardness'
            );
            enemyVisorArmorHardness.setAttribute(
                'data-localisation-var',
                `{"hardness":"${enemyData.visorArmorHardness}"}`
            );
        }

        const enemyHealth = enemyInfo.appendChild(
            document.createElement('span')
        );
        enemyHealth.setAttribute('data-localisation-key', 'enemy-stats-health');
        enemyHealth.setAttribute(
            'data-localisation-var',
            `{"health":"${enemyData.health}"}`
        );

        const bodyShotTtkStat = damageStats.children[2].children[1];
        bodyShotTtkStat.innerHTML = '';

        const bodyShotDamageDistanceStats = shotsToKillAtDistances(
            weapon,
            enemyData,
            false
        );

        for (distance in bodyShotDamageDistanceStats) {
            const damageBreakpoint = bodyShotTtkStat.appendChild(
                document.createElement('div')
            );

            const distanceStat = damageBreakpoint.appendChild(
                document.createElement('span')
            );
            distanceStat.setAttribute('data-localisation-key', 'stats-range');
            distanceStat.setAttribute(
                'data-localisation-var',
                `{"distance": "${Math.min(distance, 100000) / 100}"}`
            );

            const shotStats = damageBreakpoint.appendChild(
                document.createElement('div')
            );
            shotStats.classList = 'shot-stats';

            const damageStat = shotStats.appendChild(
                document.createElement('span')
            );

            const totalShots = bodyShotDamageDistanceStats[distance].totalShots;
            damageStat.setAttribute('data-localisation-key', 'stats-shots');
            damageStat.setAttribute(
                'data-localisation-var',
                `{"count": "${totalShots}"}`
            );
            damageStat.setAttribute('data-localisation-count', totalShots);

            const damageBreakdown = shotStats.appendChild(
                document.createElement('span')
            );
            damageBreakdown.classList = ['damage-breakdown'];

            if (enemyData.armor)
                damageBreakdown.innerHTML += `${bodyShotDamageDistanceStats[distance].armoredNonCrits}B + `;

            damageBreakdown.innerHTML += `${bodyShotDamageDistanceStats[distance].unarmoredNonCrits}B`;

            const ttk = damageBreakdown.appendChild(
                document.createElement('span')
            );
            setLocalizationAttributes(
                ttk,
                'stats-time',
                {"duration": formatNumber(timeToKill(weapon, totalShots), 2).toString()}
            );

            if (totalShots > weapon.fireData.ammoLoaded) {
                const reloads = Math.floor(
                    totalShots / weapon.fireData.ammoLoaded
                );

                const ttkReloads = damageBreakdown.appendChild(
                    document.createElement('span')
                );
                ttkReloads.setAttribute(
                    'data-localisation-key',
                    'stats-reloads'
                );
                ttkReloads.setAttribute(
                    'data-localisation-var',
                    `{"count": "${reloads}"}`
                );
                ttkReloads.setAttribute('data-localisation-count', reloads);
            }
        }

        const headshotSkills = filteredSkills.filter((skill) => {
            return (
                // Precision shot does not affect headshots
                (skill != 'precisionShot' || enemy == 'bulldozer') &&
                // Bulldozer visors can't be shot from behind
                !(skill == 'duckAndWeave' && enemy == 'bulldozer')
            );
        });

        weapon = applyLoadout(
            selectedWeapon,
            headshotSkills,
            equippedAttachments
        );

        const optimalTtkStat = damageStats.children[1].children[1];
        optimalTtkStat.innerHTML = '';

        const optimalDamageDistanceStats = shotsToKillAtDistances(
            weapon,
            enemyData,
            true
        );

        for (distance in optimalDamageDistanceStats) {
            const damageBreakpoint = optimalTtkStat.appendChild(
                document.createElement('div')
            );

            const distanceStat = damageBreakpoint.appendChild(
                document.createElement('span')
            );
            distanceStat.setAttribute('data-localisation-key', 'stats-range');
            distanceStat.setAttribute(
                'data-localisation-var',
                `{"distance": "${Math.min(distance, 100000) / 100}"}`
            );

            const shotStats = damageBreakpoint.appendChild(
                document.createElement('div')
            );
            shotStats.classList = 'shot-stats';

            const damageStat = shotStats.appendChild(
                document.createElement('span')
            );

            const totalShots = optimalDamageDistanceStats[distance].totalShots;
            damageStat.setAttribute('data-localisation-key', 'stats-shots');
            damageStat.setAttribute(
                'data-localisation-var',
                `{"count": "${totalShots}"}`
            );
            damageStat.setAttribute('data-localisation-count', totalShots);

            const damageBreakdown = shotStats.appendChild(
                document.createElement('span')
            );
            damageBreakdown.classList = ['damage-breakdown'];

            if (enemy == 'bulldozer' || enemy == 'shield')
                damageBreakdown.innerHTML +=
                    optimalDamageDistanceStats[distance].visorShots + 'V + ';

            if (enemyData.armor)
                damageBreakdown.innerHTML += `${optimalDamageDistanceStats[distance].armoredCrits}H${optimalDamageDistanceStats[distance].armoredNonCrits}B + `;

            damageBreakdown.innerHTML += `${optimalDamageDistanceStats[distance].unarmoredCrits}H${optimalDamageDistanceStats[distance].unarmoredNonCrits}B`;

            const ttk = damageBreakdown.appendChild(
                document.createElement('span')
            );
            setLocalizationAttributes(
                ttk,
                'stats-time',
                {"duration": formatNumber(timeToKill(weapon, totalShots), 2).toString()}
            );

            if (totalShots > weapon.fireData.ammoLoaded) {
                const reloads = Math.floor(
                    totalShots / weapon.fireData.ammoLoaded
                );

                const ttkReloads = damageBreakdown.appendChild(
                    document.createElement('span')
                );
                ttkReloads.setAttribute(
                    'data-localisation-key',
                    'stats-reloads'
                );
                ttkReloads.setAttribute(
                    'data-localisation-var',
                    `{"count": "${reloads}"}`
                );
                ttkReloads.setAttribute('data-localisation-count', reloads);
            }
        }
    }

    setLocale(currentLocale);
}

document.addEventListener('DOMContentLoaded', async () => {
    await initialiseDefaultLocale();
    preloadImages(SKILL_ICONS_TO_PRELOAD);
    populateWeaponSelector();
    populateSkills();

    const localeSwitcher = document.querySelector('#locale-switcher');

    for (const locale in supportedLocales) {
        const option = localeSwitcher.appendChild(
            document.createElement('option')
        );
        option.value = locale;
        option.textContent = supportedLocales[locale];
    }

    localeSwitcher.value = currentLocale;

    localeSwitcher.onchange = (event) => {
        setLocale(event.target.value);
    };

    const iconSwitcher = document.querySelector('#icons-switcher');

    iconSwitcher.value = skillIcons;

    iconSwitcher.onchange = (event) => {
        skillIcons = event.target.value;

        localStorage.setItem('icons', event.target.value);

        updateSkillIcons();
    };
});
