const SKILLS = {
    edge: {
        name: 'skills-edge',
        description: 'skills-edge-desc',
        modifier: 0.1,
        iconOffset: {
            x: 0,
            y: 0,
        },
    },
    longShot: {
        name: 'skills-long-shot',
        description: 'skills-long-shot-desc',
        iconOffset: {
            x: 128,
            y: 320,
        },
    },
    faceToFace: {
        name: 'skills-face-to-face',
        description: 'skills-face-to-face-desc',
        modifier: 0.1,
        iconOffset: {
            x: 128,
            y: 512,
        },
    },
    coupDeGrace: {
        name: 'skills-coup-de-grace',
        description: 'skills-coup-de-grace-desc',
        modifier: 0.1,
        iconOffset: {
            x: 128,
            y: 896,
        },
    },
    combatMarking: {
        name: 'skills-combat-marking',
        description: 'skills-combat-marking-desc',
        modifier: 0.2,
        iconOffset: {
            x: 64,
            y: 960,
        },
    },
    painAsymbolia: {
        name: 'skills-pain-asymbolia',
        description: 'skills-pain-asymbolia-desc',
        modifier: 0.1,
        iconOffset: {
            x: 320,
            y: 1216,
        },
    },
    precisionShot: {
        name: 'skills-precision-shot',
        description: 'skills-precision-shot-desc',
        iconOffset: {
            x: 192,
            y: 322,
        },
    },
    highGrain: {
        name: 'skills-high-grain',
        description: 'skills-high-grain-desc',
        attributeModifierMap: [
            {
                attribute: 'ArmorPenetration',
                value: 10,
            },
        ],
        iconOffset: {
            x: 256,
            y: 64,
        },
    },
    expose: {
        name: 'skills-expose',
        description: 'skills-expose-desc',
        iconOffset: {
            x: 256,
            y: 896,
        },
    },
    duckAndWeave: {
        name: 'skills-duck-and-weave',
        description: 'skills-duck-and-weave-desc',
        modifier: 0.25,
        iconOffset: {
            x: 190,
            y: 1280,
        },
    },
    quickReload: {
        name: 'skills-quick-reload',
        description: 'skills-quick-reload-desc',
        attributeModifierMap: [
            {
                attribute: 'OverallReloadPlayRate',
                value: 20,
            },
        ],
        iconOffset: {
            x: 64,
            y: 512,
        },
    },
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
        health: 150,
        armor: 70,
        armorHardness: 1.5,
    },
    heavySwat: {
        displayName: 'Heavy SWAT',
        health: 150,
        armor: 170,
        armorHardness: 1.5,
    },
    specials: {
        displayName: 'Specials',
        health: 150,
        armor: 140,
        armorHardness: 2,
    },
    techies: {
        displayName: 'Techies',
        health: 150,
        armor: 140,
        armorHardness: 1.5,
    },
    shield: {
        displayName: 'Shield',
        health: 160,
        armor: 180,
        armorHardness: 2.5,
        visorArmor: 250,
        visorArmorHardness: 2.5,
    },
    bulldozer: {
        displayName: 'Bulldozer',
        health: 200,
        armor: 4000,
        armorHardness: 4,
        visorArmor: 850,
        visorArmorHardness: 4,
    },
    sniper: {
        displayName: 'Sniper',
        health: 40,
        armor: 0,
        armorHardness: 0,
    },
    cloaker: {
        displayName: 'Cloaker',
        health: 150,
        armor: 0,
        armorHardness: 0,
    },
    drone: {
        displayName: 'Drone',
        health: 50,
        armor: 50,
        armorHardness: 2,
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
        (equippedMag ?? fireData).ammoInventoryMax ?? 200;
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

    const faceToFaceIsEquipped = skills.includes('faceToFace');

    fireData.damageDistanceArray = fireData.damageDistanceArray.map(
        (damageStep) => {
            let damage = damageStep.damage;

            // Face to Face adds to the damage modifier within 5 metres
            if (
                faceToFaceIsEquipped &&
                damageStep.distance + rangeModifier <= 500
            )
                damage *= damageModifier + SKILLS['faceToFace'].modifier;
            else damage *= damageModifier;

            return {
                damage: damage,
                distance: damageStep.distance + rangeModifier,
            };
        }
    );

    if (faceToFaceIsEquipped) {
        if (fireData.damageDistanceArray[0].distance > 500) {
            // Insert face to face's 5m range at the start of the array
            fireData.damageDistanceArray.unshift({
                damage:
                    WEAPON_DATA[weapon].fireData.damageDistanceArray[0].damage *
                    (damageModifier + SKILLS['faceToFace'].modifier),
                distance: 500,
            });
        } else if (fireData.damageDistanceArray[0].distance < 500) {
            // Insert face to face's 5m range second in the array
            const damage =
                WEAPON_DATA[weapon].fireData.damageDistanceArray[1].damage *
                (damageModifier + SKILLS['faceToFace'].modifier);

            fireData.damageDistanceArray.splice(1, 0, {
                damage: damage,
                distance: 500,
            });
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
    if (weapon == 'MX63') {
        updatedWeapon.reloadTime = 4.4999995;
        updatedWeapon.reloadEmptyTime = 5.166667;
    }
    if (weapon == 'T32') {
        updatedWeapon.reloadTime = 1.4666667;
        updatedWeapon.reloadEmptyTime = 1.9999999;
    }

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

    const shotsOnArmor = Math.min(
        Math.ceil(enemyArmor / weaponDamage),
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

let equippedSkills = [],
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

        weaponDLC.setAttribute(
            'data-localisation-key',
            'dlc-' + WEAPON_DATA[weapon].dlc
        );
        weaponDLC.setAttribute('for', id);

        weaponInput.addEventListener('change', (event) => {
            populateLoadout(event.target.value);
            updateWeaponStats(event.target.value);
            updateDamageStats(event.target.value);
        });

        if (weapon == 'CAR4') weaponInput.checked = true;

        populateLoadout('CAR4');
        updateWeaponStats('CAR4');
        updateDamageStats('CAR4');
    }
}

const tooltip = document.querySelector('#tooltip');

function showTooltip(left, top, tooltipBody) {
    tooltip.style.visibility = 'visible';
    tooltip.style.left = left;
    tooltip.style.top = top;
    tooltip.innerHTML = tooltipBody;
}

const skillSelector = document.querySelector(
    '#skill-selector .loadout-category-container'
);
const skillTemplate = document.querySelector('template.skill').cloneNode(true);
document.querySelector('template.skill').remove();

const defaultSkillIcons = 'sydch';
let skillIcons = defaultSkillIcons;
if (localStorage.getItem('icons')) skillIcons = localStorage.getItem('icons');

function populateSkills() {
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

        if (EDGE_DEPENDENT_SKILLS.includes(skill)) skillInput.disabled = true;

        skillLabel.innerHTML = SKILLS[skill].displayName;
        skillLabel.setAttribute('for', id);

        skillLabel.style = `
            --image-x-offset: ${SKILLS[skill].iconOffset.x * -1}px;
            --image-y-offset: ${SKILLS[skill].iconOffset.y * -1}px;
            --image-url: url("images/${
                skill == 'edge'
                    ? skillIcons + '-edge.png'
                    : skillIcons + '-skills.png'
            }");
        `;

        skillInput.addEventListener('change', (event) => {
            updateSkills(event.target.value);
            updateWeaponStats(
                document.querySelector('.selectable-weapon input:checked').value
            );
            updateDamageStats(
                document.querySelector('.selectable-weapon input:checked').value
            );
        });

        skillLabel.addEventListener('mouseenter', (event) => {
            const tooltipBody = `
                <span class="tooltip-title">${getLocalisation(
                    SKILLS[skill].name
                )}</span>
                <span>${getLocalisation(SKILLS[skill].description)}</span>
            `;

            const rect = event.target.getBoundingClientRect();

            showTooltip(
                rect.left + 'px',
                rect.top + event.target.clientHeight + 'px',
                tooltipBody
            );
        });

        skillLabel.addEventListener('mouseleave', (event) => {
            tooltip.style.visibility = 'hidden';
        });
    }
}

function updateSkillIcons() {
    document.querySelectorAll('.skill label').forEach((element) => {
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
                    updateWeaponStats(selectedWeapon);
                    updateDamageStats(selectedWeapon);
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
                                    200) +
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

                attachmentLabel.addEventListener('mouseleave', (event) => {
                    tooltip.style.visibility = 'hidden';
                });
            }
        }
    }

    updateAttachments();
}

function updateSkills(selectedSkill) {
    const skillIsEquipped = equippedSkills.includes(selectedSkill);

    if (!skillIsEquipped) equippedSkills.push(selectedSkill);
    else equippedSkills.splice(equippedSkills.indexOf(selectedSkill), 1);

    if (selectedSkill !== 'edge') return;
    for (const skill of EDGE_DEPENDENT_SKILLS) {
        const skillInput = document.querySelector(`input[value=${skill}]`);

        if (skillIsEquipped) {
            skillInput.disabled = true;
            skillInput.checked = false;

            if (equippedSkills.includes(skill))
                equippedSkills.splice(equippedSkills.indexOf(skill), 1);
        } else {
            skillInput.disabled = false;
        }
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
            Math.round(fireData.damageDistanceArray[0].damage * 100) / 100 +
            '*' +
            Math.round(fireData.projectilesPerFiredRound) +
            '/';
    } else {
        baseDamageStat.innerHTML =
            Math.round(fireData.damageDistanceArray[0].damage * 100) / 100 +
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
    baseMultiplierStat.innerHTML =
        fireData.criticalDamageMultiplierDistanceArray[0].multiplier + '×/';

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

    document.querySelector('#stat-armor-penetration').innerHTML =
        fireData.armorPenetration;

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
    reloadStat.setAttribute('data-localisation-key', 'stats-time');
    reloadStat.setAttribute(
        'data-localisation-var',
        `{"duration": "${Math.round(weapon.reloadTime * 1000) / 1000}"}`
    );

    const fullReloadStat = document.querySelector('#stat-full-reload');
    fullReloadStat.setAttribute('data-localisation-key', 'stats-time');
    fullReloadStat.setAttribute(
        'data-localisation-var',
        `{"duration": "${Math.round(weapon.reloadEmptyTime * 1000) / 1000}"}`
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
            Math.round(damageStep.damage * 100) / 100;
    });

    const weaponCritStats = document.querySelector('#weapon-stats-damage > div')
        .children[1];
    weaponCritStats.innerHTML = '';

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
                `{"distance": "${
                    Math.round(Math.min(criticalDamageStep.distance, 100000)) /
                    100
                }"}`
            );

            critStat.children[1].innerHTML =
                criticalDamageStep.multiplier + 'x';
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
    equipTimeStat.setAttribute('data-localisation-key', 'stats-time');
    equipTimeStat.setAttribute(
        'data-localisation-var',
        `{"duration": "${Math.round(weapon.equipTime * 1000) / 1000}"}`
    );

    const unequipTimeStat = document.querySelector('#stat-unequip-time');
    unequipTimeStat.setAttribute('data-localisation-key', 'stats-time');
    unequipTimeStat.setAttribute(
        'data-localisation-var',
        `{"duration": "${Math.round(weapon.unequipTime * 1000) / 1000}"}`
    );

    const sprintExitTimeStat = document.querySelector('#stat-sprint-exit-time');
    sprintExitTimeStat.setAttribute('data-localisation-key', 'stats-time');
    sprintExitTimeStat.setAttribute(
        'data-localisation-var',
        `{"duration": "${Math.round(weapon.sprintExitTime * 1000) / 1000}"}`
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

        const shotsToKill = weaponShotsToKill(
            damage,
            multiplier,
            effectiveArmorPenetration(
                fireData.armorPenetration,
                enemy.armorHardness
            ),
            enemy.health,
            enemyArmor
        );

        if (enemy.displayName == 'Bulldozer' || enemy.displayName == 'Shield') {
            const shotsToBreakVisor =
                fireData.armorPenetration < enemy.visorArmorHardness - 0.99
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

        if (enemyData.armorHardness) {
            const enemyArmorHardness = enemyInfo.appendChild(
                document.createElement('span')
            );
            enemyArmorHardness.setAttribute(
                'data-localisation-key',
                'enemy-stats-armor-hardness'
            );
            enemyArmorHardness.setAttribute(
                'data-localisation-var',
                `{"hardness":"${enemyData.armorHardness}"}`
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
            ttk.setAttribute('data-localisation-key', 'stats-time');
            ttk.setAttribute(
                'data-localisation-var',
                `{"duration": "${
                    Math.round(timeToKill(weapon, totalShots) * 100) / 100
                }"}`
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
            ttk.setAttribute('data-localisation-key', 'stats-time');
            ttk.setAttribute(
                'data-localisation-var',
                `{"duration": "${
                    Math.round(timeToKill(weapon, totalShots) * 100) / 100
                }"}`
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
