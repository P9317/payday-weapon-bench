const WEAPON_DATA = Object.freeze({
    "A114": {
        "displayName": "SA A144",
        "class": "Marksman",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 128
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 96,
                    "distance": 1000
                },
                {
                    "damage": 96,
                    "distance": 2000
                },
                {
                    "damage": 88,
                    "distance": 2500
                },
                {
                    "damage": 80,
                    "distance": 3000
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 2000
                },
                {
                    "multiplier": 3.3,
                    "distance": 2500
                },
                {
                    "multiplier": 3.9,
                    "distance": 3000
                }
            ],
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 3,
                "max": 4
            },
            "armorPenetration": 3,
            "roundsPerMinute": 450
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.15,
            "resetTime": 0.25,
            "cap": 1,
            "stanceMultipliers": {
                "standMove": {
                    "start": 1.5,
                    "cap": 1.5,
                    "increment": 1.5
                },
                "crouch": {
                    "start": 0.5,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "start": 0.25,
                    "cap": 0.25,
                    "increment": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 75,
                "recoverSpeed": 28,
                "recoverWaitTime": 0.12,
                "recoilPattern": [
                    {
                        "x": 0.2,
                        "y": 3.6
                    },
                    {
                        "x": -0.1,
                        "y": 6.9
                    },
                    {
                        "x": 0.3,
                        "y": 9.6
                    },
                    {
                        "x": 0.7,
                        "y": 10.829999
                    },
                    {
                        "x": 0.8,
                        "y": 14.700001
                    },
                    {
                        "x": 1.1,
                        "y": 17.400002
                    },
                    {
                        "x": 0.8,
                        "y": 19.5
                    },
                    {
                        "x": 1.05,
                        "y": 21.900002
                    },
                    {
                        "x": 0.75,
                        "y": 23.700003
                    },
                    {
                        "x": 0.85,
                        "y": 26.699999
                    },
                    {
                        "x": 0.5,
                        "y": 27.599998
                    },
                    {
                        "x": 0.3,
                        "y": 30.900002
                    },
                    {
                        "x": -0.05,
                        "y": 30
                    },
                    {
                        "x": -0.25,
                        "y": 32.4
                    },
                    {
                        "x": -0.55,
                        "y": 32.1
                    },
                    {
                        "x": -0.55,
                        "y": 35.699997
                    },
                    {
                        "x": -0.9,
                        "y": 36
                    },
                    {
                        "x": -0.9,
                        "y": 38.1
                    },
                    {
                        "x": -1.1,
                        "y": 41.1
                    }
                ],
                "resetTime": 0.2,
                "loopStart": 10,
                "initialNum": 0
            },
            "gunKick": {
                "deflectSpeed": 40,
                "recoverSpeed": 25,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalBottom": {
                    "max": 0.1
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "A114_Barrel_Default",
                "uniqueParts": [
                    "A114_Barrel_Ranged",
                    "A114_Barrel_CQC"
                ]
            },
            "bolt": {
                "defaultPart": "A114_Bolt_Default",
                "uniqueParts": []
            },
            "upperReceiver": {
                "defaultPart": "A114_Body_UpperReceiver",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "A114_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "A114_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "A114_Mag_Default",
                "uniqueParts": [
                    "A114_Mag_Extended",
                    "A114_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "A114_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "A114_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_Torque",
                    "BarrelExt_Ridged",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Fluted",
                    "Sight_Primed"
                ]
            },
            "ammo": {
                "defaultPart": "A114_Ammo_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "A114_SightMount_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "A114_Body_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "A114_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "stock": {
                "defaultPart": "A114_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "stockMount": {
                "defaultPart": "A114_StockMount_Default",
                "uniqueParts": []
            },
            "trigger": {
                "defaultPart": "A114_Trigger_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.3333335,
        "reloadEmptyTime": 2.6666665
    },
    "ATK7": {
        "displayName": "ATK-7",
        "class": "SMG",
        "dlc": "2",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 79.2,
                    "distance": 200
                },
                {
                    "damage": 79.2,
                    "distance": 1400
                },
                {
                    "damage": 38,
                    "distance": 2200
                },
                {
                    "damage": 28,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.25,
                    "distance": 1400
                },
                {
                    "multiplier": 0.84,
                    "distance": 2200
                },
                {
                    "multiplier": 0.72,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 7,
                "max": 9
            },
            "fireType": "Auto",
            "armorPenetration": 1.15,
            "roundsPerMinute": 800
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.2,
            "resetTime": 0.3,
            "decayRate": 0,
            "cap": 4,
            "stanceMultipliers": {
                "stand": {},
                "standMove": {
                    "start": 3,
                    "cap": 3,
                    "increment": 3
                },
                "crouch": {
                    "start": 0.25,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.5,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 40,
                "recoverSpeed": 35,
                "recoverWaitTime": 0.05,
                "recoilPattern": [
                    {
                        "x": 0.089999996,
                        "y": 0.089999996
                    },
                    {
                        "x": 0.1875,
                        "y": 0.3501
                    },
                    {
                        "x": 0.22500001,
                        "y": 0.71999997
                    },
                    {
                        "x": 0.45000002,
                        "y": 0.99
                    },
                    {
                        "x": 0.585,
                        "y": 1.4399999
                    },
                    {
                        "x": 0.90000004,
                        "y": 1.4399999
                    },
                    {
                        "x": 0.99,
                        "y": 1.89
                    },
                    {
                        "x": 1.0649999,
                        "y": 2.16
                    },
                    {
                        "x": 0.945,
                        "y": 2.43
                    },
                    {
                        "x": 0.90000004,
                        "y": 2.79
                    },
                    {
                        "x": 0.81000006,
                        "y": 2.9250002
                    },
                    {
                        "x": 0.54,
                        "y": 3.2400002
                    },
                    {
                        "x": 0.54,
                        "y": 3.6000001
                    },
                    {
                        "x": 0.6,
                        "y": 3.87
                    },
                    {
                        "x": 0.63,
                        "y": 4.23
                    },
                    {
                        "x": 0.945,
                        "y": 4.5
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 8,
                "initialNum": 2,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.3
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {
                    "start": 0.25,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "barrelExtension": {
                "defaultPart": "ATK7_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_WhisperWrap",
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "barrel": {
                "defaultPart": "ATK7_Barrel_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "ATK7_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "ATK7_ChargingHandle_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "ATK7_Mag_Default",
                "uniqueParts": [
                    "ATK7_Mag_Extended",
                    "ATK7_Mag_Quick",
                    "ATK7_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "ATK7_Stock_Default",
                "uniqueParts": [
                    "ATK7_Stock_HollowFrame",
                    "ATK7_Stock_RubberFramed"
                ]
            },
            "rearSight": {
                "defaultPart": "ATK7_RearSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "Ammo_9mm",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "ATK7_Bolt",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "ATK7_Grip_Default",
                "uniqueParts": [
                    "ATK7_Grip_Contoured",
                    "ATK7_Grip_Tac",
                    "ATK7_Grip_SmoothFluted"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            },
            "foreGrip": {
                "defaultPart": "ATK7_ForeGrip_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "ATK7_SightMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.1666665,
        "reloadEmptyTime": 2.3333335
    },
    "Bison": {
        "displayName": "Sforza Bison",
        "class": "Revolver",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 256
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 155.6,
                    "distance": 200
                },
                {
                    "damage": 155.6,
                    "distance": 700
                },
                {
                    "damage": 81,
                    "distance": 1200
                },
                {
                    "damage": 58,
                    "distance": 1800
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 6,
                    "distance": 700
                },
                {
                    "multiplier": 4.2,
                    "distance": 1200
                },
                {
                    "multiplier": 3,
                    "distance": 1800
                }
            ],
            "ammoLoaded": 6,
            "ammoInventory": 48,
            "ammoInventoryMax": 60,
            "ammoPickup": {
                "min": 2,
                "max": 4
            },
            "armorPenetration": 4,
            "roundsPerMinute": 400
        },
        "spreadData": {
            "start": 0.1,
            "increase": 0.6,
            "decayRate": 0,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "cap": 1.25
                },
                "standMove": {
                    "spread": 1.5,
                    "start": 1.25
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0.25
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 25,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.3,
                "recoilPattern": [
                    {
                        "x": -0.3,
                        "y": 1.2
                    },
                    {
                        "x": 1,
                        "y": 2.5
                    },
                    {
                        "x": -0.6,
                        "y": 4.5
                    },
                    {
                        "x": 0.3,
                        "y": 5.8
                    },
                    {
                        "x": -2.4,
                        "y": 7.2
                    },
                    {
                        "x": -1.5,
                        "y": 9.6
                    },
                    {
                        "x": -3,
                        "y": 10.4
                    },
                    {
                        "x": -1.5,
                        "y": 11.8
                    },
                    {
                        "x": -2.3,
                        "y": 13.832
                    }
                ],
                "resetTime": 0.14,
                "loopStart": 6,
                "initialNum": 0,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 100,
                "recoverSpeed": 50,
                "verticalTop": {
                    "max": 0.3
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Bison_Barrel_Default",
                "uniqueParts": [
                    "Bison_Barrel_Ranged",
                    "Bison_Barrel_CQC"
                ]
            },
            "bolt": {
                "defaultPart": "Bison_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Bison_Body_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Bison_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Bison_Mag_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "Bison_RearSight_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "ammo": {
                "defaultPart": "Ammo_357magnum",
                "uniqueParts": []
            },
            "firepin": {
                "defaultPart": "Bison_FirePin_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "Bison_Grip_Default",
                "uniqueParts": [
                    "Bison_Grip_Tac",
                    "Bison_Grip_Hardwood",
                    "Bison_Grip_Biofit"
                ]
            },
            "magRelease": {
                "defaultPart": "Bison_MagRelease_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "Bison_SightMount_Default",
                "uniqueParts": []
            },
            "speedloader": {
                "defaultPart": "Bison_Speedloader_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            }
        },
        "equipTime": 0.5,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.29999998,
        "reloadTime": 3.1666665,
        "reloadEmptyTime": 3.1666665
    },
    "Bullkick500": {
        "displayName": "Bullkick 500",
        "class": "Revolver",
        "dlc": "2",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 128
            },
            "source": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 260,
                    "distance": 1000
                },
                {
                    "damage": 260,
                    "distance": 1300
                },
                {
                    "damage": 180,
                    "distance": 1900
                },
                {
                    "damage": 145,
                    "distance": 2500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 5,
                    "distance": 1400
                },
                {
                    "multiplier": 4.5,
                    "distance": 1900
                },
                {
                    "multiplier": 3.5,
                    "distance": 2600
                }
            ],
            "ammoLoaded": 5,
            "ammoInventory": 40,
            "ammoInventoryMax": 50,
            "ammoPickup": {
                "min": 1,
                "max": 2
            },
            "armorPenetration": 6,
            "roundsPerMinute": 75
        },
        "spreadData": {
            "start": 2,
            "increase": 2,
            "resetTime": 0.65,
            "decayRate": 0,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.2,
                    "cap": 4,
                    "increment": 0.85
                },
                "standMove": {
                    "spread": 2,
                    "cap": 5
                },
                "crouch": {
                    "cap": 3.5,
                    "increment": 0.6
                },
                "crouchMove": {
                    "spread": 1.4,
                    "cap": 4,
                    "increment": 0.7
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "recoverSpeed": 12,
                "recoverWaitTime": 0.3,
                "recoilPattern": [
                    {
                        "x": -1.125,
                        "y": 4.5
                    },
                    {
                        "x": 1.6500001,
                        "y": 9.375
                    },
                    {
                        "x": -0.75,
                        "y": 16.875
                    },
                    {
                        "x": 2.25,
                        "y": 21.75
                    },
                    {
                        "x": -1.2,
                        "y": 27
                    },
                    {
                        "x": 1.5,
                        "y": 36
                    },
                    {
                        "x": 0,
                        "y": 39
                    }
                ],
                "resetTime": 1.3,
                "loopStart": 4,
                "initialNum": 0,
                "hipfireMultiplier": 1.1
            },
            "gunKick": {
                "deflectSpeed": 100,
                "recoverSpeed": 50,
                "verticalTop": {
                    "max": 1
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Bullkick500_Barrel_Default",
                "uniqueParts": [
                    "Bullkick500_Barrel_Ranged",
                    "Bullkick500_Barrel_CQC",
                    "Bullkick500_Barrel_Tactical"
                ]
            },
            "bolt": {
                "defaultPart": "Bullkick500_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Bullkick500_Body_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Bullkick500_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Bullkick500_Mag_Default",
                "uniqueParts": [
                    "Bullkick500_Mag_Unfluted"
                ]
            },
            "rearSight": {
                "defaultPart": "Bullkick500_RearSight_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Box",
                    "Sight_Snapshot",
                    "Sight_Tactical"
                ]
            },
            "ammo": {
                "defaultPart": "Ammo_500Magnum",
                "uniqueParts": []
            },
            "speedloader": {
                "defaultPart": "Bullkick500_Speedloader_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "Bullkick500_Grip_Default",
                "uniqueParts": [
                    "Bullkick500_Grip_Biofit",
                    "Bullkick500_Grip_Tac",
                    "Bullkick500_Grip_Hardwood"
                ]
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sightMount": {
                "defaultPart": "Bullkick500_SightMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.5,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.29999998,
        "reloadTime": 2.8333333,
        "reloadEmptyTime": 2.8333333
    },
    "CAR4": {
        "displayName": "CAR-4",
        "class": "Assault Rifle",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 64.6,
                    "distance": 200
                },
                {
                    "damage": 64.6,
                    "distance": 1700
                },
                {
                    "damage": 50,
                    "distance": 2700
                },
                {
                    "damage": 43,
                    "distance": 3700
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3.7,
                    "distance": 1700
                },
                {
                    "multiplier": 2.96,
                    "distance": 2700
                },
                {
                    "multiplier": 2.59,
                    "distance": 3700
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 6,
                "max": 8
            },
            "fireType": "Auto",
            "armorPenetration": 2,
            "roundsPerMinute": 720
        },
        "spreadData": {
            "start": 0.2,
            "increase": 0.35,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "start": 4,
                    "cap": 2
                },
                "standMove": {
                    "spread": 1.5,
                    "start": 4,
                    "cap": 3
                },
                "crouch": {
                    "spread": 0.5,
                    "start": 0.33
                },
                "crouchMove": {
                    "start": 0.33
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.15,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 30,
                "recoverSpeed": 20,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.05,
                        "y": 0.2
                    },
                    {
                        "x": 0.1,
                        "y": 0.7
                    },
                    {
                        "x": 0.05,
                        "y": 1.3
                    },
                    {
                        "x": 0.2,
                        "y": 1.8
                    },
                    {
                        "x": -0.15,
                        "y": 2.1
                    },
                    {
                        "x": 0.05,
                        "y": 2.7
                    },
                    {
                        "x": -0.35,
                        "y": 2.8
                    },
                    {
                        "x": -0.55,
                        "y": 3.2
                    },
                    {
                        "x": -0.85,
                        "y": 2.9
                    },
                    {
                        "x": -1.1,
                        "y": 3.4
                    },
                    {
                        "x": -1.5,
                        "y": 3.5
                    },
                    {
                        "x": -1.3,
                        "y": 4
                    },
                    {
                        "x": -1.55,
                        "y": 4.4
                    },
                    {
                        "x": -1.7,
                        "y": 4.9
                    },
                    {
                        "x": -1.45,
                        "y": 5.3
                    },
                    {
                        "x": -1.7,
                        "y": 5.7
                    },
                    {
                        "x": -2,
                        "y": 5.8
                    },
                    {
                        "x": -1.85,
                        "y": 6.4
                    },
                    {
                        "x": -2.2,
                        "y": 6.7
                    },
                    {
                        "x": -2.05,
                        "y": 7.3
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 13,
                "hipfireMultiplier": 2.2
            },
            "gunKick": {
                "deflectSpeed": 8.5,
                "recoverSpeed": 6,
                "verticalTop": {
                    "min": 0.04,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.04,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalMultiplier": {
                    "start": 0.45,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "barrelExtension": {
                "defaultPart": "CAR4_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "CAR4_Barrel_Default",
                "uniqueParts": [
                    "CAR4_Barrel_CQC",
                    "CAR4_Barrel_Ranged"
                ]
            },
            "body": {
                "defaultPart": "CAR4_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "CAR4_Bolt_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "CAR4_ChargingHandle_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "CAR4_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "CAR4_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "CAR4_Mag_Default",
                "uniqueParts": [
                    "CAR4_Mag_Quick",
                    "CAR4_Mag_Extended",
                    "CAR4_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "CAR4_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "CAR4_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "CAR4_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "CAR4_Ammo_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "CAR4_StockMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.3333333,
        "reloadEmptyTime": 2.6666667
    },
    "CHS3": {
        "displayName": "Chanit S3",
        "class": "Assault Rifle",
        "dlc": "3",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_Weapons_00030-DLC0003.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 67,
                    "distance": 100
                },
                {
                    "damage": 67,
                    "distance": 1500
                },
                {
                    "damage": 55,
                    "distance": 2500
                },
                {
                    "damage": 49,
                    "distance": 3500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 4.3,
                    "distance": 1500
                },
                {
                    "multiplier": 3.655,
                    "distance": 2500
                },
                {
                    "multiplier": 3,
                    "distance": 3500
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "max": 7
            },
            "fireType": "Burst",
            "timeBetweenBursts": 0.2,
            "armorPenetration": 2.4,
            "roundsPerMinute": 1000
        },
        "spreadData": {
            "start": 0.5,
            "increase": 0.45,
            "resetTime": 0.2,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {},
                "standMove": {
                    "start": 1.5,
                    "cap": 1.5,
                    "increment": 1.5
                },
                "crouch": {
                    "start": 0.5,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "start": 0.25,
                    "cap": 0.25,
                    "increment": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 30,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.0375,
                        "y": 0.075
                    },
                    {
                        "x": 0.075,
                        "y": 0.2625
                    },
                    {
                        "x": 0.0375,
                        "y": 0.4875
                    },
                    {
                        "x": 0.15,
                        "y": 0.675
                    },
                    {
                        "x": -0.112500004,
                        "y": 0.7875
                    },
                    {
                        "x": 0.0375,
                        "y": 1.0125
                    },
                    {
                        "x": -0.2625,
                        "y": 1.5
                    },
                    {
                        "x": -0.41250002,
                        "y": 2
                    },
                    {
                        "x": -0.63750005,
                        "y": 2.33
                    },
                    {
                        "x": -0.82500005,
                        "y": 2.55
                    },
                    {
                        "x": -1.125,
                        "y": 3.0625
                    },
                    {
                        "x": -0.97499996,
                        "y": 4.375
                    },
                    {
                        "x": -1.1624999,
                        "y": 4.8125
                    },
                    {
                        "x": -1.2750001,
                        "y": 5.359375
                    },
                    {
                        "x": -1.0875001,
                        "y": 6.625
                    },
                    {
                        "x": -1.2750001,
                        "y": 7.125166
                    },
                    {
                        "x": -1.5,
                        "y": 8.7
                    },
                    {
                        "x": -1.3875,
                        "y": 9.6
                    },
                    {
                        "x": -1.6500001,
                        "y": 10.05
                    },
                    {
                        "x": -1.5374999,
                        "y": 10.95
                    }
                ],
                "resetTime": 0.5,
                "loopStart": 12,
                "initialNum": 0,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 7.5,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath",
                    "Sight_SquareClaim"
                ]
            },
            "barrelExtension": {
                "defaultPart": "CHS3_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "CHS3_Barrel_Default",
                "uniqueParts": [
                    "CHS3_Barrel_CQC",
                    "CHS3_Barrel_Ranged"
                ]
            },
            "body": {
                "defaultPart": "CHS3_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "CHS3_Bolt_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "CHS3_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "CHS3_Grip_Default",
                "uniqueParts": [
                    "Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "CHS3_Mag_Default",
                "uniqueParts": [
                    "CHS3_Mag_Quick",
                    "CHS3_Mag_Compact",
                    "CHS3_Mag_Extended"
                ]
            },
            "stock": {
                "defaultPart": "CHS3_Stock_Default",
                "uniqueParts": [
                    "CHS3_Stock_Refined",
                    "CHS3_Stock_Fortified"
                ]
            },
            "rearSight": {
                "defaultPart": "CHS3_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "CHS3_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "CHS3_Ammo_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "CHS3_ChargingHandle_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.6666665,
        "reloadEmptyTime": 2.8333333
    },
    "Castigo44": {
        "displayName": "J&M Castigo 44",
        "class": "Revolver",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 384
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 160.1,
                    "distance": 700
                },
                {
                    "damage": 160.1,
                    "distance": 1200
                },
                {
                    "damage": 102,
                    "distance": 1700
                },
                {
                    "damage": 77,
                    "distance": 2300
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 4,
                    "distance": 1200
                },
                {
                    "multiplier": 3.2,
                    "distance": 1700
                },
                {
                    "multiplier": 2.4,
                    "distance": 2300
                }
            ],
            "ammoLoaded": 6,
            "ammoInventory": 48,
            "ammoInventoryMax": 60,
            "ammoPickup": {
                "min": 2,
                "max": 3
            },
            "armorPenetration": 2,
            "roundsPerMinute": 300
        },
        "spreadData": {
            "start": 0.1,
            "increase": 0.3,
            "decayRate": 0,
            "cap": 3,
            "stanceMultipliers": {
                "standMove": {
                    "spread": 1.5
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0.25
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 37.5,
                "recoverSpeed": 25,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": 0.626484,
                        "y": 0.569531
                    },
                    {
                        "x": 0.474609,
                        "y": 1.51875
                    },
                    {
                        "x": 0.189844,
                        "y": 3.739922
                    },
                    {
                        "x": -0.664453,
                        "y": 5.695312
                    },
                    {
                        "x": -0.037969,
                        "y": 7.59375
                    },
                    {
                        "x": 0.930234,
                        "y": 9.757969
                    },
                    {
                        "x": 0.721406,
                        "y": 12.11203
                    },
                    {
                        "x": 0.284766,
                        "y": 13.668749
                    },
                    {
                        "x": -0.873281,
                        "y": 15.1875
                    },
                    {
                        "x": -0.30375,
                        "y": 17.01
                    },
                    {
                        "x": 0.170859,
                        "y": 18.680624
                    },
                    {
                        "x": -0.284766,
                        "y": 20.579062
                    },
                    {
                        "x": -0.056953,
                        "y": 22.572424
                    },
                    {
                        "x": 0.265781,
                        "y": 24.489841
                    },
                    {
                        "x": -0.075937,
                        "y": 26.027578
                    },
                    {
                        "x": -0.398672,
                        "y": 27.603281
                    },
                    {
                        "x": 0.284766,
                        "y": 29.463753
                    },
                    {
                        "x": 0.816328,
                        "y": 31.001484
                    },
                    {
                        "x": -0.322734,
                        "y": 33.37453
                    },
                    {
                        "x": -0.094922,
                        "y": 35.064137
                    }
                ],
                "resetTime": 0.15,
                "hipfireMultiplier": 1.2
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {
                    "max": 0.3
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Castigo44_Barrel_Default",
                "uniqueParts": [
                    "Castigo44_Barrel_Ranged",
                    "Castigo44_Barrel_CQC",
                    "Castigo44_Barrel_Tac"
                ]
            },
            "bolt": {
                "defaultPart": "Castigo44_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Castigo44_Body_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Castigo44_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Castigo44_Mag_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "Castigo44_RearSight_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "ammo": {
                "defaultPart": "Ammo_44magnum",
                "uniqueParts": []
            },
            "speedloader": {
                "defaultPart": "Castigo44_Speedloader_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "Castigo44_Grip_Default",
                "uniqueParts": [
                    "Castigo44_Grip_Biofit",
                    "Castigo44_Grip_Tac",
                    "Castigo44_Grip_Hardwood"
                ]
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sightMount": {
                "defaultPart": "Castigo44_SightMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.466667,
        "unequipTime": 0.56666666,
        "sprintExitTime": 0.29999998,
        "reloadTime": 2.4999998,
        "reloadEmptyTime": 2.4999998
    },
    "Commando": {
        "displayName": "Ziv Commando",
        "class": "SMG",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 384
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 60,
                    "distance": 700
                },
                {
                    "damage": 55.2,
                    "distance": 1900
                },
                {
                    "damage": 42,
                    "distance": 2800
                },
                {
                    "damage": 36,
                    "distance": 3500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.3,
                    "distance": 1900
                },
                {
                    "multiplier": 0.91,
                    "distance": 2800
                },
                {
                    "multiplier": 0.78,
                    "distance": 3500
                }
            ],
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 8,
                "max": 11
            },
            "fireType": "Auto",
            "armorPenetration": 0.9,
            "roundsPerMinute": 1100
        },
        "spreadData": {
            "start": 0.2,
            "increase": 0.1,
            "resetTime": 0.2,
            "cap": 1,
            "stanceMultipliers": {
                "stand": {
                    "start": 4,
                    "cap": 2,
                    "increment": 1.5
                },
                "standMove": {
                    "spread": 1.5,
                    "start": 4,
                    "cap": 3,
                    "increment": 1.5
                },
                "crouch": {
                    "spread": 0.5,
                    "start": 0.33
                },
                "crouchMove": {
                    "start": 0.33
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.25,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 35,
                "recoverSpeed": 25,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.1,
                        "y": 0.1
                    },
                    {
                        "x": 0,
                        "y": 0.43
                    },
                    {
                        "x": -0.25,
                        "y": 0.55
                    },
                    {
                        "x": -0.35,
                        "y": 0.91
                    },
                    {
                        "x": -0.65,
                        "y": 1
                    },
                    {
                        "x": -0.5,
                        "y": 1.39
                    },
                    {
                        "x": -0.2,
                        "y": 1.5
                    },
                    {
                        "x": -0.1,
                        "y": 1.9
                    },
                    {
                        "x": 0.15,
                        "y": 2.4
                    },
                    {
                        "x": 0.45,
                        "y": 2.25
                    },
                    {
                        "x": 0.55,
                        "y": 2.59
                    },
                    {
                        "x": 0.8,
                        "y": 2.8
                    },
                    {
                        "x": 0.65,
                        "y": 3.3
                    },
                    {
                        "x": 0.55,
                        "y": 3.7
                    },
                    {
                        "x": 0.3,
                        "y": 3.6
                    },
                    {
                        "x": 0.25,
                        "y": 4
                    },
                    {
                        "x": 0.05,
                        "y": 4.2
                    },
                    {
                        "x": 0.2,
                        "y": 4.4
                    },
                    {
                        "x": 0,
                        "y": 4.7
                    },
                    {
                        "x": 0.1,
                        "y": 5
                    }
                ],
                "resetTime": 0.15,
                "loopStart": 14,
                "hipfireMultiplier": 1.7
            },
            "gunKick": {
                "deflectSpeed": 12,
                "recoverSpeed": 8,
                "verticalTop": {
                    "min": 0.06,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.06,
                    "max": 0.3
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalMultiplier": {
                    "start": 0.12,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "barrel": {
                "defaultPart": "Commando_Barrel_Default",
                "uniqueParts": []
            },
            "lowerReceiver": {
                "defaultPart": "Commando_Body_LowerReceiver_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "Commando_ChargingHandle_Default",
                "uniqueParts": []
            },
            "upperReceiver": {
                "defaultPart": "Commando_Body_UpperReceiver_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Commando_Mag_Default",
                "uniqueParts": [
                    "Commando_Mag_Extended",
                    "Commando_Mag_Compact",
                    "Commando_Mag_Quick"
                ]
            },
            "stock": {
                "defaultPart": "Commando_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_HQ",
                    "Stock_LightFrame"
                ]
            },
            "rearSight": {
                "defaultPart": "Commando_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Commando_FrontSight_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "Commando_SightMount_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "Commando_StockMount_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub"
                ]
            },
            "ammo": {
                "defaultPart": "Commando_Ammo_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.16666666,
        "unequipTime": 0.33333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.5000001,
        "reloadEmptyTime": 1.8333334
    },
    "Compact7": {
        "displayName": "SG Compact-7",
        "class": "SMG",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 768,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 59.2,
                    "distance": 1000
                },
                {
                    "damage": 59.2,
                    "distance": 2200
                },
                {
                    "damage": 38,
                    "distance": 2900
                },
                {
                    "damage": 32,
                    "distance": 3700
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.2,
                    "distance": 2200
                },
                {
                    "multiplier": 0.84,
                    "distance": 2900
                },
                {
                    "multiplier": 0.72,
                    "distance": 3700
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            },
            "fireType": "Auto",
            "armorPenetration": 1.4,
            "roundsPerMinute": 960
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.35,
            "resetTime": 0.3,
            "decayRate": 0.3,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "start": 3,
                    "cap": 2,
                    "increment": 1.5
                },
                "standMove": {
                    "spread": 1.45,
                    "start": 3,
                    "cap": 3,
                    "increment": 1.5
                },
                "crouch": {
                    "spread": 0.45,
                    "start": 0.3,
                    "cap": 2
                },
                "crouchMove": {
                    "spread": 0.95,
                    "start": 0.3,
                    "cap": 2
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.25,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 20,
                "recoverSpeed": 5,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": 0.1,
                        "y": 0.1
                    },
                    {
                        "x": 0.3,
                        "y": 0.389
                    },
                    {
                        "x": 0.25,
                        "y": 0.8
                    },
                    {
                        "x": 0.5,
                        "y": 1.1
                    },
                    {
                        "x": 0.65,
                        "y": 1.6
                    },
                    {
                        "x": 1,
                        "y": 1.6
                    },
                    {
                        "x": 1.1,
                        "y": 2.1
                    },
                    {
                        "x": 1.35,
                        "y": 2.4
                    },
                    {
                        "x": 1.05,
                        "y": 2.7
                    },
                    {
                        "x": 1.2,
                        "y": 3.1
                    },
                    {
                        "x": 0.9,
                        "y": 3.25
                    },
                    {
                        "x": 0.6,
                        "y": 3.6
                    },
                    {
                        "x": 0.6,
                        "y": 4
                    },
                    {
                        "x": 0.8,
                        "y": 4.3
                    },
                    {
                        "x": 0.7,
                        "y": 4.7
                    },
                    {
                        "x": 1.05,
                        "y": 5
                    },
                    {
                        "x": 1.35,
                        "y": 5.4
                    },
                    {
                        "x": 1.1,
                        "y": 5.8
                    },
                    {
                        "x": 1.4,
                        "y": 6.2
                    },
                    {
                        "x": 1.2,
                        "y": 6.7
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 12,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "recoverSpeed": 7,
                "verticalTop": {
                    "min": 0.06,
                    "max": 0.45
                },
                "verticalBottom": {
                    "min": 0.04,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalMultiplier": {
                    "start": 0.25,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "barrelExtension": {
                "defaultPart": "Compact7_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "barrel": {
                "defaultPart": "Compact7_Barrel_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Compact7_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "Compact7_ChargingHandle_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "Compact7_Foregrip_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Compact7_Mag_Default",
                "uniqueParts": [
                    "Compact7_Mag_Extended",
                    "Compact7_Mag_Quick",
                    "Compact7_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "Compact7_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "Compact7_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Compact7_FrontSight_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "Compact7_StockMount_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Stub",
                    "VerticalGrip_AngledGhost"
                ]
            },
            "ammo": {
                "defaultPart": "Compact7_Ammo_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.43333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.9000001,
        "reloadEmptyTime": 1.9945579
    },
    "FIK22": {
        "displayName": "FIK 22 TLR",
        "class": "Marksman",
        "dlc": "1",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 896
            },
            "source": "SS_UI_Weapon_Presets.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 54,
                    "distance": 900
                },
                {
                    "damage": 54,
                    "distance": 1900
                },
                {
                    "damage": 39,
                    "distance": 2400
                },
                {
                    "damage": 36,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3.8,
                    "distance": 1900
                },
                {
                    "multiplier": 4.2,
                    "distance": 2400
                },
                {
                    "multiplier": 4.76,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "max": 7
            },
            "armorPenetration": 1.5,
            "roundsPerMinute": 900
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.15,
            "resetTime": 0.25,
            "cap": 1,
            "stanceMultipliers": {
                "standMove": {
                    "start": 1.5,
                    "cap": 1.5,
                    "increment": 1.5
                },
                "crouch": {
                    "start": 0.5,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "start": 0.25,
                    "cap": 0.25,
                    "increment": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 40,
                "recoverSpeed": 25,
                "recoverWaitTime": 0.12,
                "recoilPattern": [
                    {
                        "x": 0.027697,
                        "y": 0.289967
                    },
                    {
                        "x": 0.044309,
                        "y": 0.6
                    },
                    {
                        "x": 0.052616,
                        "y": 1.2
                    },
                    {
                        "x": 0.160595,
                        "y": 2
                    },
                    {
                        "x": 0.351635,
                        "y": 4.084026
                    },
                    {
                        "x": 0.484533,
                        "y": 5.728118
                    },
                    {
                        "x": 0.509451,
                        "y": 7.214121
                    },
                    {
                        "x": 0.409778,
                        "y": 8.383949
                    },
                    {
                        "x": 0.50212,
                        "y": 9.713091
                    },
                    {
                        "x": 0.4158,
                        "y": 10.511424
                    },
                    {
                        "x": 0.35124,
                        "y": 11.841985
                    },
                    {
                        "x": 0.2772,
                        "y": 12.241155
                    },
                    {
                        "x": 0.16632,
                        "y": 13.70477
                    },
                    {
                        "x": -0.02772,
                        "y": 13.3056
                    },
                    {
                        "x": -0.1386,
                        "y": 14.370049
                    },
                    {
                        "x": -0.30492,
                        "y": 14.236992
                    },
                    {
                        "x": -0.35492,
                        "y": 15.296641
                    },
                    {
                        "x": -0.49896,
                        "y": 15.966721
                    },
                    {
                        "x": -0.49896,
                        "y": 16.898113
                    },
                    {
                        "x": -0.60984,
                        "y": 18.228676
                    }
                ],
                "resetTime": 0.18,
                "loopStart": 10,
                "initialNum": 0,
                "hipfireMultiplier": 1.25
            },
            "gunKick": {
                "deflectSpeed": 40,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.2
                },
                "verticalBottom": {
                    "max": 0.1
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "FIK22_Barrel_Default",
                "uniqueParts": [
                    "FIK22_Barrel_Ranged",
                    "FIK22_Barrel_CQC"
                ]
            },
            "body": {
                "defaultPart": "FIK22_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "FIK22_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "FIK22_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "FIK22_Mag_Default",
                "uniqueParts": [
                    "FIK22_Mag_Extended",
                    "FIK22_Mag_Compact",
                    "FIK22_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "FIK22_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "FIK22_BarrelExt_MuzzleBreak",
                "uniqueParts": [
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "ammo": {
                "defaultPart": "FIK22_Ammo_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "FIK22_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "foreGrip": {
                "defaultPart": "FIK22_ForeGrip_Default",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "FIK22_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "stockMount": {
                "defaultPart": "FIK22_StockMount_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Sheath",
                    "Sight_Tactical",
                    "Sight_Lined",
                    "Sight_LightHolographic"
                ]
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.43333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.333333,
        "reloadEmptyTime": 2.666667
    },
    "FSA12": {
        "displayName": "FSA-12G",
        "class": "Shotgun",
        "dlc": "1",
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 768
            },
            "source": "SS_UI_Weapon_Presets.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 44,
                    "distance": 200
                },
                {
                    "damage": 44,
                    "distance": 1300
                },
                {
                    "damage": 21,
                    "distance": 2100
                },
                {
                    "damage": 15,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.75,
                    "distance": 1300
                },
                {
                    "multiplier": 1.225,
                    "distance": 2100
                },
                {
                    "multiplier": 0.875,
                    "distance": 2900
                }
            ],
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            },
            "projectilesPerFiredRound": 8,
            "roundsPerMinute": 300
        },
        "spreadData": {
            "increase": 0.2,
            "resetTime": 0.25,
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 35,
                "recoverSpeed": 35,
                "recoverWaitTime": 0.15,
                "recoilPattern": [
                    {
                        "x": 0,
                        "y": 2
                    },
                    {
                        "x": 1,
                        "y": 4
                    },
                    {
                        "x": 0.25,
                        "y": 6
                    },
                    {
                        "x": -0.5,
                        "y": 8
                    },
                    {
                        "x": 0,
                        "y": 10
                    },
                    {
                        "x": -0.75,
                        "y": 11
                    },
                    {
                        "x": 0,
                        "y": 12
                    },
                    {
                        "x": 1,
                        "y": 13
                    },
                    {
                        "x": 2,
                        "y": 14
                    }
                ],
                "resetTime": 25,
                "loopStart": 5,
                "initialNum": 0,
                "hipfireMultiplier": 2.3
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.2
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "FSA12_Barrel_Default",
                "uniqueParts": [
                    "FSA12_Barrel_CQC",
                    "FSA12_Barrel_Ranged"
                ]
            },
            "rearSight": {
                "defaultPart": "FSA12_RearSight_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "FSA12_Body_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "FSA12_Foregrip_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "FSA12_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "FSA12_Mag_Default",
                "uniqueParts": [
                    "FSA12_Mag_Extended",
                    "FSA12_Mag_Compact",
                    "FSA12_Mag_Quick"
                ]
            },
            "stock": {
                "defaultPart": "FSA12_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "stockMount": {
                "defaultPart": "FSA12_StockMount_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath",
                    "Sight_Tagged"
                ]
            },
            "ammo": {
                "defaultPart": "FSA12_Ammo_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "FSA12_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke"
                ]
            },
            "chargingHandle": {
                "defaultPart": "FSA12_ChargingHandle_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "FSA12_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_FlatSide"
                ]
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.9999999,
        "reloadEmptyTime": 2.3333335
    },
    "GarstiniViper": {
        "displayName": "Garstini Viper .50AE",
        "class": "Pistol",
        "dlc": "4",
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 0
            },
            "source": "SS_UI_Weapons_00080-DLC0004.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 137,
                    "distance": 1000
                },
                {
                    "damage": 137,
                    "distance": 1500
                },
                {
                    "damage": 119,
                    "distance": 2000
                },
                {
                    "damage": 80,
                    "distance": 2600
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 7,
                    "distance": 1000
                },
                {
                    "multiplier": 5,
                    "distance": 2000
                },
                {
                    "multiplier": 2.5,
                    "distance": 2600
                }
            ],
            "ammoLoaded": 7,
            "ammoInventory": 56,
            "ammoInventoryMax": 70,
            "ammoPickup": {
                "min": 1,
                "max": 2
            },
            "armorPenetration": 5,
            "roundsPerMinute": 275
        },
        "spreadData": {
            "stanceMultipliers": {
                "standMove": {
                    "spread": 1.5
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 25,
                "recoverSpeed": 20,
                "recoverWaitTime": 0.15,
                "recoilPattern": [
                    {
                        "x": -0.3,
                        "y": 1.2
                    },
                    {
                        "x": 1,
                        "y": 2.5
                    },
                    {
                        "x": -0.6,
                        "y": 4.5
                    },
                    {
                        "x": 0.3,
                        "y": 5.8
                    },
                    {
                        "x": -2.4,
                        "y": 7.2
                    },
                    {
                        "x": -1.5,
                        "y": 9.6
                    },
                    {
                        "x": -3,
                        "y": 10.4
                    },
                    {
                        "x": -1.5,
                        "y": 11.8
                    },
                    {
                        "x": -2.3,
                        "y": 13.832
                    }
                ],
                "resetTime": 0.14,
                "loopStart": 6,
                "initialNum": 0,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 100,
                "recoverSpeed": 50,
                "verticalTop": {
                    "max": 10
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "GarstiniViper_Barrel_GarstiniViper_Barrel_Standard",
                "uniqueParts": [
                    "GarstiniViper_Barrel_GarstiniViper_Barrel_Extended",
                    "GarstiniViper_Barrel_GarstiniViper_Barrel_Fluted",
                    "GarstiniViper_Barrel_GarstiniViper_Barrel_Ported",
                    "GarstiniViper_Barrel_GarstiniViper_Barrel_Supressed"
                ]
            },
            "body": {
                "defaultPart": "GarstiniViper_Body_GarstiniViper_Body_Standard",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "GarstiniViper_Bolt_GarstiniViper_Bolt_Hammer_Standard",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "GarstiniViper_ChargingHandle_GarstiniViper_ChargingHandle_Standard",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "GarstiniViper_FrontSight_Standard",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "GarstiniViper_RearSight_Standard",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "GarstiniViper_Grip_GarstiniViper_Grip_Standard",
                "uniqueParts": [
                    "GarstiniViper_Grip_GarstiniViper_Grip_Ergonomic",
                    "GarstiniViper_Grip_GarstiniViper_Grip_Wood"
                ]
            },
            "mag": {
                "defaultPart": "GarstiniViper_Mag_GarstiniViper_Mag_Standard",
                "uniqueParts": [
                    "GarstiniViper_Mag_GarstiniViper_Mag_extended"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Box",
                    "Sight_Voyeur",
                    "Sight_LED",
                    "Sight_Slate"
                ]
            },
            "sightMount": {
                "defaultPart": "GarstiniViper_SightMount",
                "uniqueParts": []
            },
            "ammo": {
                "defaultPart": "Ammo_50AE",
                "uniqueParts": []
            }
        },
        "equipTime": 0.5,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.29999998,
        "reloadTime": 2.1000001,
        "reloadEmptyTime": 2.5000002
    },
    "Justicar": {
        "displayName": "Justicar",
        "class": "Shotgun",
        "dlc": "2",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_WeaponsSecondary_00110-DLCWEAP0002.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 49.125,
                    "distance": 200
                },
                {
                    "damage": 49.125,
                    "distance": 1300
                },
                {
                    "damage": 31,
                    "distance": 2100
                },
                {
                    "damage": 22,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2,
                    "distance": 1300
                },
                {
                    "multiplier": 1.4,
                    "distance": 2100
                },
                {
                    "multiplier": 1,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 5,
            "ammoInventory": 25,
            "ammoInventoryMax": 35,
            "ammoPickup": {
                "min": 1,
                "max": 1
            },
            "projectilesPerFiredRound": 8,
            "roundsPerMinute": 500
        },
        "spreadData": {
            "start": 0.66,
            "resetTime": 0.35,
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 75,
                "recoverSpeed": 22,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": -0.5,
                        "y": 3
                    },
                    {
                        "x": 1.5,
                        "y": 6
                    },
                    {
                        "x": 0.375,
                        "y": 9
                    },
                    {
                        "x": -0.75,
                        "y": 12
                    }
                ],
                "resetTime": 1.5,
                "initialNum": 0,
                "hipfireMultiplier": 2
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.2
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Justicar_Barrel_Default",
                "uniqueParts": [
                    "Justicar_Barrel_Short",
                    "Justicar_Barrel_Long",
                    "Justicar_Barrel_Extended"
                ]
            },
            "body": {
                "defaultPart": "Justicar_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "Justicar_Bolt_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Justicar_FrontSight_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "Justicar_RearSight_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "Justicar_Grip_Default",
                "uniqueParts": [
                    "Justicar_Grip_Tactical",
                    "Justicar_Grip_Wood",
                    "Justicar_Grip_WoodAgain"
                ]
            },
            "speedloader": {
                "defaultPart": "Justicar_Speedloader_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Justicar_Mag_Default",
                "uniqueParts": []
            },
            "ammo": {
                "defaultPart": "Ammo_410Bore",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_SilentKiller",
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "trigger": {
                "defaultPart": null,
                "uniqueParts": []
            }
        },
        "equipTime": 0.39999998,
        "unequipTime": 0.56666666,
        "sprintExitTime": 0.29999998,
        "reloadTime": 2.6666665,
        "reloadEmptyTime": 2.6666665
    },
    "KU59": {
        "displayName": "KU-59",
        "class": "Assault Rifle",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 128
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 98.5,
                    "distance": 500
                },
                {
                    "damage": 98.5,
                    "distance": 2000
                },
                {
                    "damage": 68,
                    "distance": 3000
                },
                {
                    "damage": 58,
                    "distance": 4000
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3.5,
                    "distance": 2000
                },
                {
                    "multiplier": 2.45,
                    "distance": 3000
                },
                {
                    "multiplier": 2.1,
                    "distance": 4000
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 4,
                "max": 6
            },
            "fireType": "Auto",
            "armorPenetration": 1
        },
        "spreadData": {
            "start": 0.25,
            "resetTime": 0.45,
            "decayRate": 0.45,
            "cap": 3.5,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.15,
                    "start": 4,
                    "cap": 2,
                    "increment": 1.2
                },
                "standMove": {
                    "spread": 1.35,
                    "start": 3.5,
                    "cap": 3,
                    "increment": 1.2
                },
                "crouch": {
                    "spread": 0.65,
                    "start": 0.33
                },
                "crouchMove": {
                    "spread": 1.15,
                    "start": 0.33
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.2,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 45,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.1,
                        "y": 0.2
                    },
                    {
                        "x": -0.3,
                        "y": 0.7
                    },
                    {
                        "x": -0.2,
                        "y": 1.25
                    },
                    {
                        "x": 0.05,
                        "y": 2.2
                    },
                    {
                        "x": 0.4,
                        "y": 2.8
                    },
                    {
                        "x": 1,
                        "y": 3.3
                    },
                    {
                        "x": 0.8,
                        "y": 4
                    },
                    {
                        "x": 1.15,
                        "y": 4.7
                    },
                    {
                        "x": 1.5,
                        "y": 5.2
                    },
                    {
                        "x": 1,
                        "y": 5.7
                    },
                    {
                        "x": 1.4,
                        "y": 6.2
                    },
                    {
                        "x": 0.85,
                        "y": 6.6
                    },
                    {
                        "x": 1.2,
                        "y": 7.4
                    },
                    {
                        "x": 1.5,
                        "y": 6.9
                    },
                    {
                        "x": 2,
                        "y": 7.1
                    },
                    {
                        "x": 1.8,
                        "y": 8
                    },
                    {
                        "x": 2.3,
                        "y": 7.5
                    },
                    {
                        "x": 2.4,
                        "y": 8.5
                    },
                    {
                        "x": 2.9,
                        "y": 7.9
                    },
                    {
                        "x": 3.1,
                        "y": 9.1
                    },
                    {
                        "x": 3.5,
                        "y": 9.2
                    }
                ],
                "resetTime": 0.35,
                "loopStart": 14,
                "hipfireMultiplier": 1.7
            },
            "gunKick": {
                "deflectSpeed": 12,
                "recoverSpeed": 6,
                "verticalTop": {
                    "min": 0.06,
                    "max": 0.4
                },
                "verticalBottom": {
                    "min": 0.04,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.6,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalMultiplier": {
                    "start": 0.55,
                    "max": 1.75,
                    "threshold": 1.5
                }
            }
        },
        "modularConfiguration": {
            "barrelExtension": {
                "defaultPart": "KU59_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "KU59_Barrel_Default",
                "uniqueParts": [
                    "KU59_Barrel_Rail",
                    "KU59_Barrel_TradGrip"
                ]
            },
            "body": {
                "defaultPart": "KU59_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "KU59_ChargingHandle_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "KU59_StockMount_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "KU59_Grip_Default",
                "uniqueParts": [
                    "KU59_Grip_Biofit",
                    "KU59_Grip_Tac",
                    "KU59_Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "KU59_Mag_Default",
                "uniqueParts": [
                    "KU59_Mag_Quick",
                    "KU59_Mag_Extended",
                    "KU59_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "KU59_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "KU59_RearSight_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "KU59_SightMount_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "KU59_Ammo_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.3333335,
        "reloadEmptyTime": 2.8350124
    },
    "M7P": {
        "displayName": "M7 Pursuivant",
        "class": "Shotgun",
        "dlc": "3",
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 0
            },
            "source": "SS_UI_Weapons_00030-DLC0003.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 43.6,
                    "distance": 200
                },
                {
                    "damage": 43.6,
                    "distance": 1200
                },
                {
                    "damage": 22,
                    "distance": 1900
                },
                {
                    "damage": 18,
                    "distance": 2500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.5,
                    "distance": 1200
                },
                {
                    "multiplier": 0.9,
                    "distance": 1900
                },
                {
                    "multiplier": 0.75,
                    "distance": 2500
                }
            ],
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            },
            "fireType": "Burst",
            "timeBetweenBursts": 0.175,
            "projectilesPerFiredRound": 10,
            "roundsPerMinute": 450
        },
        "spreadData": {
            "increase": 0.133333,
            "resetTime": 0.25,
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 125,
                "recoverSpeed": 50,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": 1,
                        "y": 1.5
                    },
                    {
                        "x": 0.75,
                        "y": 2.5
                    },
                    {
                        "x": -0.25,
                        "y": 3.5
                    },
                    {
                        "x": 0.15,
                        "y": 4.5
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 1,
                "initialNum": 1,
                "hipfireMultiplier": 2.1
            },
            "gunKick": {
                "verticalTop": {},
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {},
                "horizontalLeft": {},
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "M7P_Barrel_Default",
                "uniqueParts": [
                    "M7P_Barrel_CQC",
                    "M7P_Barrel_Ranged"
                ]
            },
            "rearSight": {
                "defaultPart": "M7P_RearSight_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "M7P_Body_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "M7P_Foregrip_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "M7P_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "M7P_Mag_Default",
                "uniqueParts": [
                    "M7P_Mag_Extended",
                    "M7P_Mag_Compact",
                    "M7P_Mag_Quick"
                ]
            },
            "stock": {
                "defaultPart": "M7P_Stock_Default",
                "uniqueParts": [
                    "M7P_Stock_Bolstered"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath"
                ]
            },
            "ammo": {
                "defaultPart": "M7P_Ammo_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "M7P_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke",
                    "BarrelExt_Ridgecyl"
                ]
            },
            "chargingHandle": {
                "defaultPart": "M7P_ChargingHandle_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "M7P_Grip_Default",
                "uniqueParts": [
                    "Grip_Perforated"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "bolt": {
                "defaultPart": "M7P_Bolt_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.3999999,
        "reloadEmptyTime": 2.6666667
    },
    "MX63": {
        "displayName": "Blyspruta MX63",
        "class": "LMG",
        "dlc": "2",
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 128
            },
            "source": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 66.7,
                    "distance": 700
                },
                {
                    "damage": 66.7,
                    "distance": 1200
                },
                {
                    "damage": 43,
                    "distance": 1900
                },
                {
                    "damage": 31,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2,
                    "distance": 1200
                },
                {
                    "multiplier": 1.4,
                    "distance": 1900
                },
                {
                    "multiplier": 1,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 100,
            "ammoInventory": 400,
            "ammoInventoryMax": 500,
            "ammoPickup": {
                "min": 7,
                "max": 9
            },
            "fireType": "Auto",
            "armorPenetration": 1.5,
            "roundsPerMinute": 720
        },
        "spreadData": {
            "start": 0.5,
            "increase": 0.45,
            "resetTime": 0.2,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {},
                "standMove": {
                    "start": 1.5,
                    "cap": 1.5,
                    "increment": 1.5
                },
                "crouch": {
                    "start": 0.5,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "start": 0.25,
                    "cap": 0.25,
                    "increment": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 30,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": 0.017638408,
                        "y": 0.3746248
                    },
                    {
                        "x": -0.42788485,
                        "y": 1.0628983
                    },
                    {
                        "x": -0.7816825,
                        "y": 1.6746969
                    },
                    {
                        "x": -0.9127189,
                        "y": 2.4776826
                    },
                    {
                        "x": -1.0044441,
                        "y": 3.1787019
                    },
                    {
                        "x": -1.0961697,
                        "y": 4.0964
                    },
                    {
                        "x": -1.1485841,
                        "y": 4.9886084
                    },
                    {
                        "x": -1.1092734,
                        "y": 5.651391
                    },
                    {
                        "x": -0.9520299,
                        "y": 6.479869
                    },
                    {
                        "x": -0.7947879,
                        "y": 7.1426525
                    },
                    {
                        "x": -0.689959,
                        "y": 7.8819113
                    },
                    {
                        "x": -0.5458191,
                        "y": 8.366253
                    },
                    {
                        "x": -0.24443582,
                        "y": 8.799611
                    },
                    {
                        "x": 0.05694749,
                        "y": 9.334938
                    },
                    {
                        "x": 0.410745,
                        "y": 9.832027
                    },
                    {
                        "x": 0.7645427,
                        "y": 10.329114
                    },
                    {
                        "x": 1.0528224,
                        "y": 11.030134
                    },
                    {
                        "x": 1.1445477,
                        "y": 11.769394
                    },
                    {
                        "x": 1.1707546,
                        "y": 12.534145
                    },
                    {
                        "x": 1.07903,
                        "y": 13.477344
                    },
                    {
                        "x": 0.93489015,
                        "y": 14.573484
                    },
                    {
                        "x": 0.77764696,
                        "y": 15.529424
                    },
                    {
                        "x": 0.47626358,
                        "y": 16.204952
                    },
                    {
                        "x": 0.04384396,
                        "y": 16.867737
                    },
                    {
                        "x": -0.13960646,
                        "y": 17.581507
                    },
                    {
                        "x": -0.4540934,
                        "y": 18.2188
                    },
                    {
                        "x": -0.5720255,
                        "y": 19.047283
                    },
                    {
                        "x": -0.42788553,
                        "y": 19.595352
                    },
                    {
                        "x": -0.15270948,
                        "y": 20.181662
                    },
                    {
                        "x": 0.25350296,
                        "y": 20.780714
                    },
                    {
                        "x": 0.5155755,
                        "y": 21.418005
                    },
                    {
                        "x": 0.5602629,
                        "y": 22.505444
                    },
                    {
                        "x": 0.07551156,
                        "y": 23.681309
                    },
                    {
                        "x": 0.10016039,
                        "y": 24.975986
                    },
                    {
                        "x": -0.047730982,
                        "y": 26.078865
                    },
                    {
                        "x": -0.04773058,
                        "y": 27.253675
                    },
                    {
                        "x": -0.09702784,
                        "y": 28.380527
                    },
                    {
                        "x": 0.10016039,
                        "y": 29.075817
                    },
                    {
                        "x": -0.14632389,
                        "y": 29.938942
                    },
                    {
                        "x": 0.07551277,
                        "y": 31.089771
                    }
                ],
                "resetTime": 0.2,
                "loopStart": 32,
                "initialNum": 0,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 7.5,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "barrelExtension": {
                "defaultPart": "MX63_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "MX63_Barrel_Default",
                "uniqueParts": [
                    "MX63_Barrel_CQC",
                    "MX63_Barrel_Ranged"
                ]
            },
            "body": {
                "defaultPart": "MX63_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "MX63_Bolt_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "MX63_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "MX63_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "MX63_Mag_Default",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "MX63_stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "MX63_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "MX63_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "MX63_Ammo_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "MX63_ChargingHandle_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "MX63_StockMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.6666665,
        "reloadEmptyTime": 2.8333333
    },
    "Mosconi12C": {
        "displayName": "Mosconi 12 Classic",
        "class": "Shotgun",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 768,
                "y": 128
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 67.125,
                    "distance": 200
                },
                {
                    "damage": 67.125,
                    "distance": 1300
                },
                {
                    "damage": 42,
                    "distance": 2100
                },
                {
                    "damage": 30,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 1300
                },
                {
                    "multiplier": 2.1,
                    "distance": 2100
                },
                {
                    "multiplier": 0.88,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 2,
            "ammoInventory": 32,
            "ammoInventoryMax": 40,
            "ammoPickup": {
                "min": 1,
                "max": 2
            },
            "projectilesPerFiredRound": 10,
            "maximumPenetrationCount": 2,
            "roundsPerMinute": 400
        },
        "spreadData": {
            "start": 0.66,
            "resetTime": 0.25,
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 150,
                "recoverSpeed": 30,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": 3.2,
                        "y": 4.8
                    },
                    {
                        "x": 2.4,
                        "y": 8
                    },
                    {
                        "x": -0.8,
                        "y": 11.2
                    },
                    {
                        "x": 0.48,
                        "y": 14.400001
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 1,
                "initialNum": 1,
                "hipfireMultiplier": 1.8
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 1,
                    "max": 1.5
                },
                "verticalBottom": {
                    "min": 0.02,
                    "max": 0.1
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Mosconi12C_Barrel_Default",
                "uniqueParts": [
                    "Mosconi12C_Barrel_CQC",
                    "Mosconi12C_Barrel_Ranged"
                ]
            },
            "foreGrip": {
                "defaultPart": "Mosconi12C_Foregrip_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Mosconi12C_Body_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Mosconi12C_FrontSight_Default",
                "uniqueParts": []
            },
            "magRelease": {
                "defaultPart": "Mosconi12C_MagRelease_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "Mosconi12C_RearSight_Default",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Tagged"
                ]
            },
            "ammo": {
                "defaultPart": "Ammo_12gauge",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "Mosconi12C_SightMount_Rail",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "Mosconi12C_Stock_Default",
                "uniqueParts": [
                    "Mosconi12C_Stock_CQC",
                    "Mosconi12C_Stock_Padded",
                    "Mosconi12C_Stock_Fortified"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            }
        },
        "equipTime": 0.41715267,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.3333333,
        "reloadEmptyTime": 1.9999999
    },
    "NWB9": {
        "displayName": "Northwest B-9",
        "class": "Assault Rifle",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 768,
                "y": 384
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 51.5,
                    "distance": 500
                },
                {
                    "damage": 51.5,
                    "distance": 2000
                },
                {
                    "damage": 35,
                    "distance": 3000
                },
                {
                    "damage": 30,
                    "distance": 4000
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 5,
                    "distance": 2000
                },
                {
                    "multiplier": 3.5,
                    "distance": 3000
                },
                {
                    "multiplier": 3,
                    "distance": 4000
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 7,
                "max": 9
            },
            "fireType": "Auto",
            "armorPenetration": 2.2,
            "roundsPerMinute": 750
        },
        "spreadData": {
            "start": 0.2,
            "increase": 0.25,
            "resetTime": 0.35,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "start": 4,
                    "cap": 2,
                    "increment": 1.5
                },
                "standMove": {
                    "spread": 1.5,
                    "start": 4,
                    "cap": 3,
                    "increment": 1.5
                },
                "crouch": {
                    "spread": 0.5,
                    "start": 0.33
                },
                "crouchMove": {
                    "start": 0.33
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.25,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 25,
                "recoverSpeed": 15,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": 0,
                        "y": 0.2
                    },
                    {
                        "x": 0.1,
                        "y": 0.5
                    },
                    {
                        "x": 0,
                        "y": 0.8
                    },
                    {
                        "x": -0.1,
                        "y": 1.3
                    },
                    {
                        "x": -0.25,
                        "y": 1.6
                    },
                    {
                        "x": -0.45,
                        "y": 1.96
                    },
                    {
                        "x": -0.6,
                        "y": 2.32
                    },
                    {
                        "x": -0.9,
                        "y": 2.68
                    },
                    {
                        "x": -1.1,
                        "y": 3.04
                    },
                    {
                        "x": -0.8,
                        "y": 3.4
                    },
                    {
                        "x": -1.1,
                        "y": 3.76
                    },
                    {
                        "x": -0.8,
                        "y": 4.12
                    },
                    {
                        "x": -1,
                        "y": 4.48
                    },
                    {
                        "x": -0.8,
                        "y": 4.84
                    },
                    {
                        "x": -0.5,
                        "y": 5.2
                    },
                    {
                        "x": -0.7,
                        "y": 5.56
                    },
                    {
                        "x": -0.5,
                        "y": 5.92
                    },
                    {
                        "x": -0.25,
                        "y": 6.28
                    },
                    {
                        "x": -0.5,
                        "y": 6.64
                    },
                    {
                        "x": -0.2,
                        "y": 7
                    }
                ],
                "resetTime": 0.15,
                "loopStart": 11,
                "hipfireMultiplier": 2.2
            },
            "gunKick": {
                "deflectSpeed": 5,
                "recoverSpeed": 2,
                "verticalTop": {
                    "min": 0.2,
                    "max": 0.5
                },
                "verticalBottom": {},
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {
                    "start": 0.45,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "barrelExtension": {
                "defaultPart": "NWB9_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "NWB9_Barrel_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "NWB9_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "NWB9_Bolt_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "NWB9_ChargingHandle_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "NWB9_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "NWB9_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "NWB9_Mag_Default",
                "uniqueParts": [
                    "NWB9_Mag_Quick",
                    "NWB9_Mag_Extended",
                    "NWB9_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "NWB9_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "NWB9_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "NWB9_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "NWB9_Ammo_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "NWB9_StockMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.43333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.8333334,
        "reloadEmptyTime": 2.1666665
    },
    "PC9": {
        "displayName": "FIK PC9",
        "class": "SMG",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 768,
                "y": 256
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 65.2,
                    "distance": 500
                },
                {
                    "damage": 65.2,
                    "distance": 1700
                },
                {
                    "damage": 35,
                    "distance": 2500
                },
                {
                    "damage": 29,
                    "distance": 3200
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.2,
                    "distance": 1700
                },
                {
                    "multiplier": 0.72,
                    "distance": 2500
                },
                {
                    "multiplier": 0.6,
                    "distance": 3200
                }
            ],
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            },
            "fireType": "Auto",
            "armorPenetration": 1.3,
            "roundsPerMinute": 860
        },
        "spreadData": {
            "start": 0.15,
            "increase": 0.2,
            "resetTime": 0.2,
            "decayRate": 0.3,
            "cap": 2,
            "stanceMultipliers": {
                "stand": {
                    "start": 3,
                    "cap": 2,
                    "increment": 1.25
                },
                "standMove": {
                    "spread": 1.35,
                    "start": 3,
                    "cap": 2,
                    "increment": 1.25
                },
                "crouch": {
                    "spread": 0.35,
                    "start": 0.3,
                    "cap": 2,
                    "increment": 1.25
                },
                "crouchMove": {
                    "spread": 0.85,
                    "start": 0.3,
                    "cap": 2,
                    "increment": 1.25
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.15,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 35,
                "recoverSpeed": 20,
                "recoverWaitTime": 0.065,
                "recoilPattern": [
                    {
                        "x": 0.05,
                        "y": 0.1
                    },
                    {
                        "x": -0.1,
                        "y": 0.6
                    },
                    {
                        "x": 0.1,
                        "y": 0.8
                    },
                    {
                        "x": -0.1,
                        "y": 1
                    },
                    {
                        "x": -0.15,
                        "y": 1.3
                    },
                    {
                        "x": -0.05,
                        "y": 1.6
                    },
                    {
                        "x": -0.3,
                        "y": 1.75
                    },
                    {
                        "x": -0.6,
                        "y": 2.1
                    },
                    {
                        "x": -0.9,
                        "y": 2
                    },
                    {
                        "x": -1.25,
                        "y": 2.3
                    },
                    {
                        "x": -0.95,
                        "y": 2.6
                    },
                    {
                        "x": -1.1,
                        "y": 3.05
                    },
                    {
                        "x": -0.8,
                        "y": 3.25
                    },
                    {
                        "x": -0.5,
                        "y": 3.6
                    },
                    {
                        "x": -0.75,
                        "y": 3.85
                    },
                    {
                        "x": -0.7,
                        "y": 4.3
                    },
                    {
                        "x": -0.95,
                        "y": 4.4
                    },
                    {
                        "x": -1.2,
                        "y": 4.8
                    },
                    {
                        "x": -1,
                        "y": 5
                    },
                    {
                        "x": -1.3,
                        "y": 5.4
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 13,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 12,
                "recoverSpeed": 8,
                "verticalTop": {
                    "min": 0.03,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.03,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.25,
                    "max": 0.55
                },
                "horizontalLeft": {
                    "min": 0.25,
                    "max": 0.55
                },
                "horizontalMultiplier": {
                    "start": 0.25,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            },
            "barrelExtension": {
                "defaultPart": "PC9_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "barrel": {
                "defaultPart": "PC9_Barrel_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "PC9_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "PC9_ChargingHandle_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "PC9_Foregrip_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "PC9_Mag_Default",
                "uniqueParts": [
                    "PC9_Mag_Extended",
                    "PC9_Mag_Compact",
                    "PC9_Mag_Quick"
                ]
            },
            "stock": {
                "defaultPart": "PC9_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_HQ",
                    "Stock_LightFrame"
                ]
            },
            "rearSight": {
                "defaultPart": "PC9_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "PC9_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost"
                ]
            },
            "grip": {
                "defaultPart": "PC9_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "ammo": {
                "defaultPart": "PC9_Ammo_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "PC9_StockMount_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "PC9_Bolt_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.43333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.8333334,
        "reloadEmptyTime": 2.1666667
    },
    "PD5": {
        "displayName": "Picchio Duro 5",
        "class": "Pistol",
        "dlc": "3",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 128
            },
            "source": "SS_UI_Weapons_00030-DLC0003.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 76.6,
                    "distance": 200
                },
                {
                    "damage": 76.6,
                    "distance": 700
                },
                {
                    "damage": 39,
                    "distance": 1200
                },
                {
                    "damage": 28,
                    "distance": 1800
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 1200
                },
                {
                    "multiplier": 2.1,
                    "distance": 1300
                },
                {
                    "multiplier": 1.5,
                    "distance": 2300
                }
            ],
            "ammoLoaded": 15,
            "ammoInventory": 120,
            "ammoInventoryMax": 150,
            "ammoPickup": {
                "max": 7
            },
            "fireType": "Burst",
            "timeBetweenBursts": 0.1,
            "armorPenetration": 1.3,
            "roundsPerMinute": 800
        },
        "spreadData": {
            "increase": 0.3,
            "decayRate": 0,
            "cap": 4,
            "stanceMultipliers": {
                "stand": {
                    "spread": 0.5
                },
                "standMove": {
                    "spread": 0.75
                },
                "crouch": {
                    "spread": 0.25
                },
                "crouchMove": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0.1
                },
                "targetMove": {
                    "spread": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 20,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.08,
                "recoilPattern": [
                    {
                        "x": 0.15,
                        "y": 0.0375
                    },
                    {
                        "x": 0.27,
                        "y": 0.39
                    },
                    {
                        "x": 0.345,
                        "y": 1.005
                    },
                    {
                        "x": 0.3075,
                        "y": 1.9725001
                    },
                    {
                        "x": 0.15,
                        "y": 2.43
                    },
                    {
                        "x": -0.052500002,
                        "y": 3.1799998
                    },
                    {
                        "x": 0.1275,
                        "y": 3.7124999
                    },
                    {
                        "x": 0.375,
                        "y": 4.5
                    },
                    {
                        "x": 0.39,
                        "y": 5.3849998
                    },
                    {
                        "x": 0.315,
                        "y": 6.0225
                    },
                    {
                        "x": 0.1275,
                        "y": 6.3525
                    },
                    {
                        "x": -0.075,
                        "y": 7.2225
                    },
                    {
                        "x": 0.255,
                        "y": 7.6575003
                    },
                    {
                        "x": 0.17999999,
                        "y": 8.43
                    },
                    {
                        "x": 0,
                        "y": 9
                    },
                    {
                        "x": -0.24,
                        "y": 9.93
                    },
                    {
                        "x": -0.0975,
                        "y": 11.055
                    }
                ],
                "resetTime": 0.25,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 7,
                "recoverSpeed": 3,
                "verticalTop": {
                    "max": 0.3
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.6
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "PD5_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "PD5_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "PD5_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "PD5_ChargingHandle_Default",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": null,
                "uniqueParts": [
                    "PD5_Stock_Combat"
                ]
            },
            "mag": {
                "defaultPart": "PD5_Mag_Default",
                "uniqueParts": [
                    "PD5_Mag_Extended",
                    "PD5_Mag_Quick"
                ]
            },
            "verticalGrip": {
                "defaultPart": "PD5_VertGrip_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "PD5_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp",
                    "BarrelExt_IDM2"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            },
            "ammo": {
                "defaultPart": "PD5_Ammo_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "PD5_Grip_Default",
                "uniqueParts": [
                    "PD5_Grip_Tac",
                    "PD5_Grip_Premier"
                ]
            },
            "sightMount": {
                "defaultPart": "PD5_SightMount_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "PD5_RearSight_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "PD5_StockMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.16666666,
        "unequipTime": 0.33333334,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.5000001,
        "reloadEmptyTime": 1.8333334
    },
    "R880": {
        "displayName": "Reinfeld 880",
        "class": "Shotgun",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 47.6,
                    "distance": 200
                },
                {
                    "damage": 47.6,
                    "distance": 1200
                },
                {
                    "damage": 24,
                    "distance": 1900
                },
                {
                    "damage": 20,
                    "distance": 2500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2.2,
                    "distance": 1200
                },
                {
                    "multiplier": 1.32,
                    "distance": 1900
                },
                {
                    "multiplier": 1.1,
                    "distance": 2500
                }
            ],
            "ammoLoaded": 7,
            "ammoInventory": 56,
            "ammoInventoryMax": 70,
            "ammoPickup": {
                "min": 2,
                "max": 4
            },
            "fireType": "Pump",
            "projectilesPerFiredRound": 10,
            "maximumPenetrationCount": 1,
            "roundsPerMinute": 75
        },
        "spreadData": {
            "resetTime": 0.3,
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 75,
                "recoverSpeed": 40,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": 0,
                        "y": 3
                    },
                    {
                        "x": 1.5,
                        "y": 6
                    },
                    {
                        "x": 0.375,
                        "y": 9
                    },
                    {
                        "x": -0.75,
                        "y": 12
                    }
                ],
                "resetTime": 1,
                "initialNum": 0,
                "hipfireMultiplier": 2
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.3
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.2
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.3
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "R880_Barrel_Default",
                "uniqueParts": [
                    "R880_Barrel_CQC",
                    "R880_Barrel_Ranged",
                    "R880_Barrel_Comp"
                ]
            },
            "bolt": {
                "defaultPart": "R880_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "R880_Body_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "R880_Foregrip_Default",
                "uniqueParts": [
                    "R880_Foregrip_Biofit",
                    "R880_Foregrip_Tactical"
                ]
            },
            "frontSight": {
                "defaultPart": "R880_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "R880_Mag_Default",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "R880_Stock_Default",
                "uniqueParts": [
                    "R880_Stock_CQC",
                    "R880_Stock_Padded",
                    "R880_Stock_Fortified"
                ]
            },
            "sightMount": {
                "defaultPart": "R880_SightMount_Rail",
                "uniqueParts": []
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath",
                    "Sight_Tagged"
                ]
            },
            "ammo": {
                "defaultPart": "R880_Ammo_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke"
                ]
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.3666668,
        "reloadEmptyTime": 1.8333334
    },
    "R900S": {
        "displayName": "Reinfeld 900S",
        "class": "Marksman",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 186,
                    "distance": 1600
                },
                {
                    "damage": 186,
                    "distance": 2600
                },
                {
                    "damage": 171,
                    "distance": 3100
                },
                {
                    "damage": 156,
                    "distance": 3600
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 5,
                    "distance": 2600
                },
                {
                    "multiplier": 6.5,
                    "distance": 3100
                },
                {
                    "multiplier": 7.5,
                    "distance": 4100
                }
            ],
            "ammoLoaded": 5,
            "ammoInventory": 40,
            "ammoInventoryMax": 50,
            "ammoPickup": {
                "min": 1,
                "max": 2
            },
            "fireType": "Bolt",
            "maximumPenetrationCount": 2,
            "armorPenetration": 7,
            "roundsPerMinute": 50
        },
        "spreadData": {
            "start": 3,
            "increase": 2,
            "resetTime": 1.2,
            "cap": 10,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.05
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 35,
                "recoverSpeed": 12,
                "recoverWaitTime": 0.15,
                "recoilPattern": [
                    {
                        "x": 1,
                        "y": 2.5
                    }
                ],
                "resetTime": 0.3,
                "hipfireMultiplier": 1.6
            },
            "gunKick": {
                "deflectSpeed": 5,
                "recoverSpeed": 4,
                "verticalTop": {},
                "verticalBottom": {},
                "verticalMultiplier": {
                    "start": 0.4,
                    "threshold": 2
                },
                "horizontalRight": {},
                "horizontalLeft": {},
                "horizontalMultiplier": {
                    "start": 0.4,
                    "threshold": 2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": "Sight_Long6X",
                "uniqueParts": [
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Fluted",
                    "Sight_Primed"
                ]
            },
            "barrel": {
                "defaultPart": "R900S_Barrel_Default",
                "uniqueParts": [
                    "R900S_Barrel_Ranged",
                    "R900S_Barrel_CQC"
                ]
            },
            "body": {
                "defaultPart": "R900S_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "R900S_Bolt_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "R900S_ChargingHandle_Default",
                "uniqueParts": []
            },
            "firepin": {
                "defaultPart": "R900S_FirePin_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "R900S_Mag_Default",
                "uniqueParts": [
                    "R900S_Mag_Extended"
                ]
            },
            "magRelease": {
                "defaultPart": "R900S_MagRelease_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "R900S_SightMount_Rail",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "R900S_Stock_Default",
                "uniqueParts": [
                    "R900S_Stock_HardWood",
                    "R900S_Stock_Lightweight"
                ]
            },
            "ammo": {
                "defaultPart": "R900S_Ammo_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_Torque",
                    "BarrelExt_Ridged"
                ]
            }
        },
        "equipTime": 0.41715267,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.4999998,
        "reloadEmptyTime": 2.9999998
    },
    "RG5": {
        "displayName": "Adelig RG5",
        "class": "Assault Rifle",
        "dlc": "2",
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary_00010-DLCHEIST0002.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 104.6,
                    "distance": 200
                },
                {
                    "damage": 104.6,
                    "distance": 1700
                },
                {
                    "damage": 82,
                    "distance": 2700
                },
                {
                    "damage": 71,
                    "distance": 3700
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2,
                    "distance": 1700
                },
                {
                    "multiplier": 1.6,
                    "distance": 2700
                },
                {
                    "multiplier": 1.4,
                    "distance": 3700
                }
            ],
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 4,
                "max": 5
            },
            "fireType": "Auto",
            "armorPenetration": 2
        },
        "spreadData": {
            "start": 0.5,
            "increase": 0.45,
            "resetTime": 0.2,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {},
                "standMove": {
                    "start": 1.5,
                    "cap": 1.5,
                    "increment": 1.5
                },
                "crouch": {
                    "start": 0.5,
                    "cap": 0.5,
                    "increment": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 0.75,
                    "increment": 0.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "start": 0.25,
                    "cap": 0.25,
                    "increment": 0.25
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 30,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.0375,
                        "y": 0.075
                    },
                    {
                        "x": 0.075,
                        "y": 0.2625
                    },
                    {
                        "x": 0.0375,
                        "y": 0.4875
                    },
                    {
                        "x": 0.15,
                        "y": 0.675
                    },
                    {
                        "x": -0.112500004,
                        "y": 0.7875
                    },
                    {
                        "x": 0.0375,
                        "y": 1.0125
                    },
                    {
                        "x": -0.2625,
                        "y": 1.5
                    },
                    {
                        "x": -0.41250002,
                        "y": 2
                    },
                    {
                        "x": -0.63750005,
                        "y": 2.33
                    },
                    {
                        "x": -0.82500005,
                        "y": 2.55
                    },
                    {
                        "x": -1.125,
                        "y": 3.0625
                    },
                    {
                        "x": -0.97499996,
                        "y": 4.375
                    },
                    {
                        "x": -1.1624999,
                        "y": 4.8125
                    },
                    {
                        "x": -1.2750001,
                        "y": 5.359375
                    },
                    {
                        "x": -1.0875001,
                        "y": 6.625
                    },
                    {
                        "x": -1.2750001,
                        "y": 7.125166
                    },
                    {
                        "x": -1.5,
                        "y": 8.7
                    },
                    {
                        "x": -1.3875,
                        "y": 9.6
                    },
                    {
                        "x": -1.6500001,
                        "y": 10.05
                    },
                    {
                        "x": -1.5374999,
                        "y": 10.95
                    }
                ],
                "resetTime": 0.2,
                "loopStart": 12,
                "initialNum": 0,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 7.5,
                "verticalTop": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "barrelExtension": {
                "defaultPart": "RG5_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "RG5_Barrel_Default",
                "uniqueParts": [
                    "RG5_Barrel_CQC",
                    "RG5_Barrel_Ranged"
                ]
            },
            "body": {
                "defaultPart": "RG5_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "RG5_Bolt_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "RG5_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "RG5_Grip_Default",
                "uniqueParts": [
                    "RG5_Grip_Contoured",
                    "RG5_Grip_SmoothFluted",
                    "RG5_Grip_Tac"
                ]
            },
            "mag": {
                "defaultPart": "RG5_Mag_Default",
                "uniqueParts": [
                    "RG5_Mag_Quick",
                    "RG5_Mag_Extended",
                    "RG5_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "RG5_Stock_Default",
                "uniqueParts": [
                    "RG5_Stock_Light",
                    "RG5_Stock_HQ",
                    "RG5_Stock_TQ"
                ]
            },
            "rearSight": {
                "defaultPart": "RG5_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "RG5_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold",
                    "VerticalGrip_RiggerHandstop"
                ]
            },
            "ammo": {
                "defaultPart": "RG5_Ammo_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "RG5_StockMount_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "RG5_SightMount_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "RG5_ChargingHandle_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.6666665,
        "reloadEmptyTime": 2.8333333
    },
    "S40": {
        "displayName": "Signature 40",
        "class": "Pistol",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 384
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 90.1,
                    "distance": 700
                },
                {
                    "damage": 90.1,
                    "distance": 1200
                },
                {
                    "damage": 56,
                    "distance": 1700
                },
                {
                    "damage": 42,
                    "distance": 2300
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 1200
                },
                {
                    "multiplier": 2.4,
                    "distance": 1700
                },
                {
                    "multiplier": 1.8,
                    "distance": 2300
                }
            ],
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 4,
                "max": 6
            },
            "armorPenetration": 1.6,
            "roundsPerMinute": 450
        },
        "spreadData": {
            "start": 0.2,
            "resetTime": 0.5,
            "decayRate": 0,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2
                },
                "crouch": {
                    "spread": 1.25
                },
                "crouchMove": {
                    "spread": 1.75
                },
                "target": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 20,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.12,
                "recoilPattern": [
                    {
                        "x": 0.33,
                        "y": 0.3
                    },
                    {
                        "x": 0.25,
                        "y": 0.8
                    },
                    {
                        "x": 0.1,
                        "y": 1.97
                    },
                    {
                        "x": -0.35,
                        "y": 3
                    },
                    {
                        "x": -0.02,
                        "y": 4
                    },
                    {
                        "x": 0.49,
                        "y": 5.14
                    },
                    {
                        "x": 0.38,
                        "y": 6.38
                    },
                    {
                        "x": 0.15,
                        "y": 7.2
                    },
                    {
                        "x": -0.46,
                        "y": 8
                    },
                    {
                        "x": -0.16,
                        "y": 8.96
                    },
                    {
                        "x": 0.09,
                        "y": 9.84
                    },
                    {
                        "x": -0.15,
                        "y": 10.84
                    },
                    {
                        "x": -0.03,
                        "y": 11.89
                    },
                    {
                        "x": 0.14,
                        "y": 12.9
                    },
                    {
                        "x": -0.04,
                        "y": 13.71
                    },
                    {
                        "x": -0.21,
                        "y": 14.54
                    },
                    {
                        "x": 0.15,
                        "y": 15.52
                    },
                    {
                        "x": 0.43,
                        "y": 16.33
                    },
                    {
                        "x": -0.17,
                        "y": 17.58
                    },
                    {
                        "x": -0.05,
                        "y": 18.47
                    }
                ],
                "resetTime": 0.4,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 9,
                "recoverSpeed": 5,
                "verticalTop": {
                    "max": 0.2
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.7
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.7
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "S40_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "S40_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "S40_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "S40_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "S40_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "S40_Mag_Default",
                "uniqueParts": [
                    "S40_Mag_Extended",
                    "S40_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "S40_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            },
            "ammo": {
                "defaultPart": "S40_Ammo_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "S40_SightMount_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "S40_Grip_Default",
                "uniqueParts": [
                    "S40_Grip_Hardwood",
                    "S40_Grip_Embossed",
                    "S40_Grip_Tac"
                ]
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.4,
        "sprintExitTime": 0.29999998,
        "reloadTime": 1.3333333,
        "reloadEmptyTime": 1.8333333
    },
    "S403": {
        "displayName": "Signature 403",
        "class": "Pistol",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 512,
                "y": 512
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 66,
                    "distance": 1000
                },
                {
                    "damage": 66,
                    "distance": 1500
                },
                {
                    "damage": 49,
                    "distance": 2000
                },
                {
                    "damage": 38,
                    "distance": 2600
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 4,
                    "distance": 1500
                },
                {
                    "multiplier": 3.7,
                    "distance": 2000
                },
                {
                    "multiplier": 2.8,
                    "distance": 2600
                }
            ],
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "min": 4,
                "max": 7
            },
            "armorPenetration": 1.6,
            "roundsPerMinute": 375
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.5,
            "decayRate": 0,
            "cap": 4,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2
                },
                "crouch": {
                    "spread": 1.25
                },
                "crouchMove": {
                    "spread": 1.75
                },
                "target": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 22,
                "recoverSpeed": 15,
                "recoverWaitTime": 0.18,
                "recoilPattern": [
                    {
                        "x": -0.05,
                        "y": 0.1
                    },
                    {
                        "x": -0.2,
                        "y": 0.8
                    },
                    {
                        "x": -0.4,
                        "y": 1.6
                    },
                    {
                        "x": 0,
                        "y": 2.3
                    },
                    {
                        "x": 0.3,
                        "y": 3
                    },
                    {
                        "x": 0.5,
                        "y": 4.14
                    },
                    {
                        "x": 0.55,
                        "y": 5.38
                    },
                    {
                        "x": 0.4,
                        "y": 6.2
                    },
                    {
                        "x": 0.1,
                        "y": 7
                    },
                    {
                        "x": 0,
                        "y": 7.96
                    },
                    {
                        "x": -0.2,
                        "y": 9
                    },
                    {
                        "x": 0.4,
                        "y": 9.8
                    },
                    {
                        "x": 0.35,
                        "y": 10.89
                    },
                    {
                        "x": 0.2,
                        "y": 11.9
                    },
                    {
                        "x": 0,
                        "y": 12.71
                    },
                    {
                        "x": -0.2,
                        "y": 13.54
                    },
                    {
                        "x": -0.25,
                        "y": 14.52
                    },
                    {
                        "x": -0.3,
                        "y": 15.33
                    },
                    {
                        "x": -0.25,
                        "y": 16.58
                    },
                    {
                        "x": -0.1,
                        "y": 17.47
                    }
                ],
                "resetTime": 0.2,
                "initialNum": 2,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 9,
                "recoverSpeed": 5,
                "verticalTop": {
                    "max": 0.3
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.8
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "S403_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": null,
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "S403_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "S403_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "S403_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "S403_Mag_Default",
                "uniqueParts": [
                    "S403_Mag_Extended",
                    "S403_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "S403_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "ammo": {
                "defaultPart": "S403_Ammo_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "S403_SightMount_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": null,
                "uniqueParts": [
                    "S403_Grip_Friction",
                    "S403_Grip_Ribbed",
                    "S403_Grip_Grained"
                ]
            }
        },
        "equipTime": 0.26666665,
        "unequipTime": 0.4,
        "sprintExitTime": 0.29999998,
        "reloadTime": 1.3333334,
        "reloadEmptyTime": 1.8333334
    },
    "SE5": {
        "displayName": "Jackknife SE5",
        "class": "Pistol",
        "dlc": "4",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 128
            },
            "source": "SS_UI_Weapons_00080-DLC0004.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 100.6,
                    "distance": 200
                },
                {
                    "damage": 100.6,
                    "distance": 700
                },
                {
                    "damage": 52,
                    "distance": 1200
                },
                {
                    "damage": 37,
                    "distance": 1800
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 700
                },
                {
                    "multiplier": 2.1,
                    "distance": 1200
                },
                {
                    "multiplier": 1.5,
                    "distance": 1800
                }
            ],
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 3,
                "max": 4
            },
            "armorPenetration": 1.4,
            "roundsPerMinute": 400
        },
        "spreadData": {
            "start": 0.7,
            "resetTime": 0.3,
            "cap": 4,
            "stanceMultipliers": {
                "standMove": {
                    "spread": 1.5
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 25,
                "recoverSpeed": 15,
                "recoverWaitTime": 0.15,
                "recoilPattern": [
                    {
                        "x": -0.075,
                        "y": 1.05
                    },
                    {
                        "x": -0.22500001,
                        "y": 2.6999998
                    },
                    {
                        "x": -0.45000002,
                        "y": 2.775
                    },
                    {
                        "x": -0.75,
                        "y": 4.125
                    },
                    {
                        "x": -0.525,
                        "y": 4.6499996
                    },
                    {
                        "x": -0.97499996,
                        "y": 5.7
                    },
                    {
                        "x": -0.75,
                        "y": 6.75
                    },
                    {
                        "x": -0.90000004,
                        "y": 7.7999997
                    },
                    {
                        "x": -0.7125,
                        "y": 8.85
                    },
                    {
                        "x": -1.05,
                        "y": 9.674999
                    },
                    {
                        "x": -1.05,
                        "y": 10.875
                    },
                    {
                        "x": -0.90000004,
                        "y": 11.625
                    },
                    {
                        "x": -1.2,
                        "y": 12.900001
                    },
                    {
                        "x": -0.90000004,
                        "y": 13.950001
                    },
                    {
                        "x": -1.05,
                        "y": 15
                    },
                    {
                        "x": -0.75,
                        "y": 15.900001
                    },
                    {
                        "x": -1.05,
                        "y": 16.95
                    },
                    {
                        "x": -0.86249995,
                        "y": 18.3
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 6,
                "initialNum": 2,
                "hipfireMultiplier": 1.3
            },
            "gunKick": {
                "deflectSpeed": 7,
                "recoverSpeed": 2.5,
                "verticalTop": {
                    "min": 0.2,
                    "max": 0.6
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalLeft": {
                    "min": 0.1,
                    "max": 0.3
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "SE5_Barrel_Standard",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "SE5_Body_standard",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "SE5_ChargingHandle_standard",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "SE5_FrontSight_Standard",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "SE5_RearSight_Standard",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "SE5_Grip_Standard",
                "uniqueParts": [
                    "SE5_Grip_Ergonomic",
                    "SE5_Grip_Simple",
                    "SE5_Grip_Tactical"
                ]
            },
            "mag": {
                "defaultPart": "SE5_Mag_Standard",
                "uniqueParts": [
                    "SE5_Mag_Extended",
                    "SE5_Mag_quickpull"
                ]
            },
            "sightMount": {
                "defaultPart": "SE5_SightMount_Standard",
                "uniqueParts": []
            },
            "ammo": {
                "defaultPart": "Ammo_9mm",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp",
                    "BarrelExt_CratedMuzzle"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "SE5_Sight_Custom",
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            }
        },
        "equipTime": 0.33333334,
        "unequipTime": 0.46666667,
        "sprintExitTime": 0.29999998,
        "reloadTime": 1.3999999,
        "reloadEmptyTime": 1.7
    },
    "SPM11": {
        "displayName": "SP Model 11",
        "class": "Pistol",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 512
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 116.1,
                    "distance": 700
                },
                {
                    "damage": 116.1,
                    "distance": 1200
                },
                {
                    "damage": 80,
                    "distance": 1700
                },
                {
                    "damage": 60,
                    "distance": 2300
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 5,
                    "distance": 1200
                },
                {
                    "multiplier": 4,
                    "distance": 1700
                },
                {
                    "multiplier": 3,
                    "distance": 2300
                }
            ],
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 3,
                "max": 4
            },
            "armorPenetration": 2.1,
            "roundsPerMinute": 350
        },
        "spreadData": {
            "start": 0.35,
            "increase": 0.55,
            "resetTime": 0.5,
            "decayRate": 0,
            "cap": 5,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2
                },
                "crouch": {
                    "spread": 1.25
                },
                "crouchMove": {
                    "spread": 1.75
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 18,
                "recoverSpeed": 13,
                "recoverWaitTime": 0.25,
                "recoilPattern": [
                    {
                        "x": -0.1,
                        "y": 1.4
                    },
                    {
                        "x": -0.3,
                        "y": 3.6
                    },
                    {
                        "x": -0.6,
                        "y": 3.7
                    },
                    {
                        "x": -1,
                        "y": 5.5
                    },
                    {
                        "x": -0.7,
                        "y": 6.2
                    },
                    {
                        "x": -1.3,
                        "y": 7.6
                    },
                    {
                        "x": -1,
                        "y": 9
                    },
                    {
                        "x": -1.2,
                        "y": 10.4
                    },
                    {
                        "x": -0.95,
                        "y": 11.8
                    },
                    {
                        "x": -1.4,
                        "y": 12.9
                    },
                    {
                        "x": -1.4,
                        "y": 14.5
                    },
                    {
                        "x": -1.2,
                        "y": 15.5
                    },
                    {
                        "x": -1.6,
                        "y": 17.2
                    },
                    {
                        "x": -1.2,
                        "y": 18.6
                    },
                    {
                        "x": -1.4,
                        "y": 20
                    },
                    {
                        "x": -1,
                        "y": 21.2
                    },
                    {
                        "x": -1.4,
                        "y": 22.6
                    },
                    {
                        "x": -1.15,
                        "y": 24.4
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 6,
                "initialNum": 2,
                "hipfireMultiplier": 1.3
            },
            "gunKick": {
                "deflectSpeed": 7,
                "recoverSpeed": 2.5,
                "verticalTop": {
                    "min": 0.2,
                    "max": 0.6
                },
                "verticalBottom": {
                    "min": 0.1,
                    "max": 0.4
                },
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.8
                },
                "horizontalMultiplier": {
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "SPM11_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "SPM11_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "SPM11_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "SPM11_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "SPM11_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "SPM11_Mag_Default",
                "uniqueParts": [
                    "SPM11_Mag_Extended",
                    "SPM11_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "SPM11_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            },
            "ammo": {
                "defaultPart": "SPM11_Ammo_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "SPM11_SightMount_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "SPM11_Grip_Default",
                "uniqueParts": [
                    "SPM11_Grip_Checkered",
                    "SPM11_Grip_Embossed",
                    "SPM11_Grip_Tac"
                ]
            }
        },
        "equipTime": 0.39999998,
        "unequipTime": 0.56666666,
        "sprintExitTime": 0.29999998,
        "reloadTime": 1.6666667,
        "reloadEmptyTime": 2.1666667
    },
    "Spearfish": {
        "displayName": "Spearfish 1895",
        "class": "Marksman",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_WeaponsPrimary_00170-Weapon3_Spearfish.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 134,
                    "distance": 900
                },
                {
                    "damage": 134,
                    "distance": 1900
                },
                {
                    "damage": 123,
                    "distance": 2400
                },
                {
                    "damage": 112.5,
                    "distance": 2900
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 1900
                },
                {
                    "multiplier": 4.5,
                    "distance": 2400
                },
                {
                    "multiplier": 5.1,
                    "distance": 2900
                }
            ],
            "ammoLoaded": 8,
            "ammoInventory": 40,
            "ammoInventoryMax": 56,
            "ammoPickup": {
                "min": 2,
                "max": 3
            },
            "fireType": "Bolt",
            "maximumPenetrationCount": 1,
            "armorPenetration": 2.6
        },
        "spreadData": {
            "start": 0.4,
            "increase": 0.6,
            "decayRate": 2.5,
            "cap": 4.2,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2.5,
                    "cap": 3
                },
                "crouch": {
                    "spread": 0.5
                },
                "crouchMove": {
                    "start": 0.75,
                    "cap": 1.5
                },
                "target": {
                    "spread": 0
                },
                "targetMove": {
                    "spread": 0.25,
                    "start": 0.4,
                    "cap": 0.4,
                    "increment": 0.4
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 45,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": -0.024132,
                        "y": -0.0155
                    },
                    {
                        "x": -0.322645,
                        "y": 1.50968
                    },
                    {
                        "x": -0.355813,
                        "y": 2.424788
                    },
                    {
                        "x": -0.621158,
                        "y": 3.688509
                    },
                    {
                        "x": -0.007548,
                        "y": 4.342157
                    },
                    {
                        "x": 0.539725,
                        "y": 3.775662
                    },
                    {
                        "x": 0.556309,
                        "y": 2.991283
                    },
                    {
                        "x": 0.829442,
                        "y": 5.542065
                    },
                    {
                        "x": -0.007913,
                        "y": 6.55299
                    },
                    {
                        "x": -0.528431,
                        "y": 7.682847
                    },
                    {
                        "x": 0.127874,
                        "y": 8.336975
                    },
                    {
                        "x": 0.253791,
                        "y": 10.732403
                    },
                    {
                        "x": 1.010491,
                        "y": 10.120961
                    },
                    {
                        "x": 1.405177,
                        "y": 12.516615
                    },
                    {
                        "x": 0.694712,
                        "y": 14.923946
                    },
                    {
                        "x": -0.140761,
                        "y": 16.389133
                    },
                    {
                        "x": -0.938459,
                        "y": 17.627708
                    },
                    {
                        "x": -0.285798,
                        "y": 18.48518
                    },
                    {
                        "x": 0.040533,
                        "y": 20.009575
                    },
                    {
                        "x": -0.720905,
                        "y": 20.390675
                    },
                    {
                        "x": -1.409826,
                        "y": 19.437927
                    }
                ],
                "resetTime": 0.3,
                "loopStart": 14,
                "hipfireMultiplier": 1.7
            },
            "gunKick": {
                "deflectSpeed": 12,
                "recoverSpeed": 6,
                "verticalTop": {
                    "min": 0.06,
                    "max": 0.4
                },
                "verticalBottom": {
                    "min": 0.04,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.6,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.3,
                    "max": 0.6
                },
                "horizontalMultiplier": {
                    "start": 0.55,
                    "max": 1.75,
                    "threshold": 1.5
                }
            }
        },
        "modularConfiguration": {
            "body": {
                "defaultPart": "Spearfish_Body_Default",
                "uniqueParts": []
            },
            "barrel": {
                "defaultPart": "Spearfish_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "Spearfish_Bolt_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "Spearfish_ForeGrip_Default",
                "uniqueParts": [
                    "Spearfish_ForeGrip_Slitted",
                    "Spearfish_ForeGrip_Vented"
                ]
            },
            "stock": {
                "defaultPart": "Spearfish_Stock_Default",
                "uniqueParts": [
                    "Spearfish_Stock_CQC",
                    "Spearfish_Stock_Padded",
                    "Spearfish_Stock_Supported"
                ]
            },
            "frontSight": {
                "defaultPart": "Spearfish_FrontSight_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "Spearfish_RearSight_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": null,
                "uniqueParts": [
                    "Spearfish_Grip_Artisan",
                    "Spearfish_Grip_Knotted"
                ]
            },
            "ammo": {
                "defaultPart": "Spearfish_Ammo_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "Spearfish_BarrelExtension_Default",
                "uniqueParts": [
                    "BarrelExt_Torque",
                    "BarrelExt_Ridged",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_PipedSilencer",
                    "BarrelExt_CylindricSilencer"
                ]
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Sheath",
                    "Sight_Tactical",
                    "Sight_Lined",
                    "Sight_Fluted",
                    "Sight_Primed",
                    "Sight_LPVO",
                    "Sight_Projection",
                    "Sight_ViewPoint"
                ]
            }
        },
        "equipTime": 0.41715267,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.5999999,
        "reloadEmptyTime": 2.5000002
    },
    "Stryk7": {
        "displayName": "Stryk 7",
        "class": "Pistol",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 256
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 60.6,
                    "distance": 200
                },
                {
                    "damage": 60.6,
                    "distance": 700
                },
                {
                    "damage": 30,
                    "distance": 1200
                },
                {
                    "damage": 22,
                    "distance": 1800
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 3,
                    "distance": 700
                },
                {
                    "multiplier": 2.1,
                    "distance": 1200
                },
                {
                    "multiplier": 1.4,
                    "distance": 1800
                }
            ],
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "max": 7
            },
            "armorPenetration": 1.8,
            "roundsPerMinute": 450
        },
        "spreadData": {
            "start": 0.15,
            "increase": 0.3,
            "decayRate": 0,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.5
                },
                "standMove": {
                    "spread": 2
                },
                "crouch": {
                    "spread": 1.25
                },
                "crouchMove": {
                    "spread": 1.75
                },
                "target": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 20,
                "recoverSpeed": 17,
                "recoverWaitTime": 0.08,
                "recoilPattern": [
                    {
                        "x": 0.2,
                        "y": 0.05
                    },
                    {
                        "x": 0.36,
                        "y": 0.52
                    },
                    {
                        "x": 0.46,
                        "y": 1.34
                    },
                    {
                        "x": 0.41,
                        "y": 2.63
                    },
                    {
                        "x": 0.2,
                        "y": 3.24
                    },
                    {
                        "x": -0.07,
                        "y": 4.24
                    },
                    {
                        "x": 0.17,
                        "y": 4.95
                    },
                    {
                        "x": 0.5,
                        "y": 6
                    },
                    {
                        "x": 0.52,
                        "y": 7.18
                    },
                    {
                        "x": 0.42,
                        "y": 8.03
                    },
                    {
                        "x": 0.17,
                        "y": 8.47
                    },
                    {
                        "x": -0.1,
                        "y": 9.63
                    },
                    {
                        "x": 0.34,
                        "y": 10.21
                    },
                    {
                        "x": 0.24,
                        "y": 11.24
                    },
                    {
                        "x": 0,
                        "y": 12
                    },
                    {
                        "x": -0.32,
                        "y": 13.24
                    },
                    {
                        "x": -0.13,
                        "y": 14.74
                    }
                ],
                "resetTime": 0.25,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 7,
                "recoverSpeed": 3,
                "verticalTop": {
                    "max": 0.3
                },
                "verticalBottom": {},
                "verticalMultiplier": {},
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.6
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.6
                },
                "horizontalMultiplier": {}
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "Stryk7_Barrel_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "Stryk7_Bolt_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "Stryk7_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "Stryk7_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "Stryk7_FrontSight_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "Stryk7_Mag_Default",
                "uniqueParts": [
                    "Stryk7_Mag_Extended",
                    "Stryk7_Mag_Quick"
                ]
            },
            "rearSight": {
                "defaultPart": "Stryk7_RearSight_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": null,
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_LED",
                    "Sight_Box"
                ]
            },
            "ammo": {
                "defaultPart": "Stryk7_Ammo_Default",
                "uniqueParts": []
            },
            "sightMount": {
                "defaultPart": "Stryk7_SightMount_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": null,
                "uniqueParts": [
                    "Stryk7_Grip_Ribbed",
                    "Stryk7_Grip_Friction",
                    "Stryk7_Grip_Grained"
                ]
            }
        },
        "equipTime": 0.16666666,
        "unequipTime": 0.3,
        "sprintExitTime": 0.29999998,
        "reloadTime": 1.3333335,
        "reloadEmptyTime": 1.5333333
    },
    "T32": {
        "displayName": "Tribune 32",
        "class": "Pistol",
        "dlc": "3",
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 128
            },
            "source": "SS_UI_Weapons_00030-DLC0003.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 49.3,
                    "distance": 300
                },
                {
                    "damage": 49.3,
                    "distance": 800
                },
                {
                    "damage": 30,
                    "distance": 1300
                },
                {
                    "damage": 22,
                    "distance": 2100
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2.5,
                    "distance": 800
                },
                {
                    "multiplier": 1.75,
                    "distance": 1100
                },
                {
                    "multiplier": 1.25,
                    "distance": 2100
                }
            ],
            "ammoLoaded": 33,
            "ammoInventory": 264,
            "ammoInventoryMax": 330,
            "ammoPickup": {
                "min": 9,
                "max": 11
            },
            "fireType": "Auto",
            "armorPenetration": 1.3,
            "roundsPerMinute": 900
        },
        "spreadData": {
            "resetTime": 0.25,
            "cap": 4,
            "stanceMultipliers": {
                "standMove": {
                    "spread": 1.5
                },
                "crouch": {
                    "spread": 0.5
                },
                "target": {
                    "spread": 0.25
                },
                "targetMove": {
                    "spread": 0.5
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "recoverSpeed": 50,
                "recoilPattern": [
                    {
                        "x": 0.1875,
                        "y": 0.15
                    },
                    {
                        "x": 0.3,
                        "y": 0.41250002
                    },
                    {
                        "x": 0.525,
                        "y": 0.7125
                    },
                    {
                        "x": 0.82500005,
                        "y": 0.75
                    },
                    {
                        "x": 0.9375,
                        "y": 1.2
                    },
                    {
                        "x": 1.2,
                        "y": 1.2750001
                    },
                    {
                        "x": 1.05,
                        "y": 1.7249999
                    },
                    {
                        "x": 1.3499999,
                        "y": 1.9124999
                    },
                    {
                        "x": 1.2,
                        "y": 2.25
                    },
                    {
                        "x": 1.03125,
                        "y": 2.53125
                    },
                    {
                        "x": 0.76874995,
                        "y": 2.625
                    },
                    {
                        "x": 0.6,
                        "y": 2.9250002
                    },
                    {
                        "x": 0.90000004,
                        "y": 3.0749998
                    },
                    {
                        "x": 0.7125,
                        "y": 3.375
                    },
                    {
                        "x": 0.78749996,
                        "y": 3.75
                    },
                    {
                        "x": 0.525,
                        "y": 3.8625002
                    },
                    {
                        "x": 0.7125,
                        "y": 4.125
                    },
                    {
                        "x": 0.91875005,
                        "y": 4.3500004
                    },
                    {
                        "x": 0.97499996,
                        "y": 4.7625
                    },
                    {
                        "x": 0.7125,
                        "y": 4.875
                    },
                    {
                        "x": 0.90000004,
                        "y": 5.25
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 12,
                "hipfireMultiplier": 2.1
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 7.5,
                "verticalTop": {
                    "min": 0.12,
                    "max": 0.6
                },
                "verticalBottom": {
                    "min": 0.08,
                    "max": 0.2
                },
                "verticalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.4,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.4,
                    "max": 0.8
                },
                "horizontalMultiplier": {
                    "start": 0.3,
                    "threshold": 1.6
                }
            }
        },
        "modularConfiguration": {
            "ammo": {
                "defaultPart": "T32_Ammo_Default",
                "uniqueParts": []
            },
            "barrel": {
                "defaultPart": "T32_Barrel_Default",
                "uniqueParts": []
            },
            "barrelExtension": {
                "defaultPart": "T32_BarrelExtension_Default",
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "body": {
                "defaultPart": "T32_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "T32_Bolt_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "T32_ChargingHandle_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "T32_FrontSight_Default",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "T32_RearSight_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "T32_Grip_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "T32_Mag_Default",
                "uniqueParts": [
                    "T32_Mag_Extended",
                    "T32_Mag_Compact",
                    "T32_Mag_QuickPull"
                ]
            },
            "sightMount": {
                "defaultPart": "T32_SightMount_Default",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "T32_Stock_NoStock",
                "uniqueParts": [
                    "T32_Stock_Underline",
                    "T32_Stock_Overline"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_Slate",
                    "Sight_Box",
                    "Sight_LED"
                ]
            }
        }
    },
    "TAS12": {
        "displayName": "TAS-12",
        "class": "Shotgun",
        "dlc": "4",
        "displayIcon": {
            "offset": {
                "x": 0,
                "y": 0
            },
            "source": "SS_UI_Weapons_00080-DLC0004.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 52,
                    "distance": 200
                },
                {
                    "damage": 52,
                    "distance": 1100
                },
                {
                    "damage": 22,
                    "distance": 1700
                },
                {
                    "damage": 18,
                    "distance": 2200
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 2,
                    "distance": 1100
                },
                {
                    "multiplier": 1,
                    "distance": 1700
                },
                {
                    "multiplier": 0.8,
                    "distance": 2200
                }
            ],
            "ammoLoaded": 7,
            "ammoInventory": 56,
            "ammoInventoryMax": 70,
            "ammoPickup": {
                "min": 2,
                "max": 3
            },
            "fireType": "Pump",
            "projectilesPerFiredRound": 10,
            "maximumPenetrationCount": 1,
            "roundsPerMinute": 65
        },
        "spreadData": {
            "stanceMultipliers": {
                "stand": {
                    "spread": 3
                },
                "standMove": {
                    "spread": 3.5
                },
                "crouch": {
                    "spread": 2.5
                },
                "crouchMove": {
                    "spread": 3
                },
                "target": {
                    "spread": 2
                },
                "targetMove": {
                    "spread": 2
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 150,
                "recoverSpeed": 50,
                "recoverWaitTime": 0.1,
                "recoilPattern": [
                    {
                        "x": 3.2,
                        "y": 4.8
                    },
                    {
                        "x": 2.4,
                        "y": 8
                    },
                    {
                        "x": -0.8,
                        "y": 11.2
                    },
                    {
                        "x": 0.48,
                        "y": 14.400001
                    }
                ],
                "resetTime": 2,
                "initialNum": 0,
                "hipfireMultiplier": 2.1
            },
            "gunKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 35,
                "verticalTop": {},
                "verticalBottom": {},
                "verticalMultiplier": {
                    "start": 2,
                    "max": 2
                },
                "horizontalRight": {},
                "horizontalLeft": {},
                "horizontalMultiplier": {
                    "start": 2,
                    "max": 2
                }
            }
        },
        "modularConfiguration": {
            "barrel": {
                "defaultPart": "TAS12_Barrel_TAS12_Barrel_Standard",
                "uniqueParts": [
                    "TAS12_Barrel_TAS12_Barrel_Short"
                ]
            },
            "barrelExtension": {
                "defaultPart": "TAS12_BarrelExtension_TAS12_Barrel_Extension",
                "uniqueParts": [
                    "BarrelExt_12GObelisk",
                    "BarrelExt_SedimentChoke",
                    "BarrelExt_12GVentComp",
                    "BarrelExt_JawChoke",
                    "BarrelExt_12GCoronetMuzzle"
                ]
            },
            "body": {
                "defaultPart": "TAS12_Body_TAS12_Body_Receiver",
                "uniqueParts": []
            },
            "ammo": {
                "defaultPart": "Ammo_12gauge",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "TAS12_Bolt_TAS12_Bolt_Standard",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "TAS12_ChargingHandle_TAS12_ChargingHandle",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "TAS12_FrontSight_TAS12_FrontSight_Standard",
                "uniqueParts": []
            },
            "rearSight": {
                "defaultPart": "TAS12_RearSight_TAS12_RearSight_Standard",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "TAS12_Grip_TAS12_Grip_Standard",
                "uniqueParts": [
                    "TAS12_Grip_TAS12_Grip_Ergonomic",
                    "TAS12_Grip_TAS12_Grip_Rubber",
                    "TAS12_Grip_TAS12_Grip_Tactical"
                ]
            },
            "sightMount": {
                "defaultPart": "TAS12_SightMount_TAS12_SightMount",
                "uniqueParts": []
            },
            "stock": {
                "defaultPart": "TAS12_Stock_TAS12_Stock_Standard",
                "uniqueParts": [
                    "TAS12_Stock_TAS12_Stock_Fixed",
                    "TAS12_Stock_TAS12_Stock_Foldable"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_Projection",
                    "Sight_Sheath"
                ]
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 1.5000001,
        "reloadEmptyTime": 2.3333335
    },
    "VF7S": {
        "displayName": "VF-7S",
        "class": "Assault Rifle",
        "dlc": null,
        "displayIcon": {
            "offset": {
                "x": 256,
                "y": 512
            },
            "source": "SS_UI_WeaponsPrimary.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 92,
                    "distance": 100
                },
                {
                    "damage": 92,
                    "distance": 1500
                },
                {
                    "damage": 86,
                    "distance": 2500
                },
                {
                    "damage": 75,
                    "distance": 3500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 4.6,
                    "distance": 1500
                },
                {
                    "multiplier": 4.1,
                    "distance": 2500
                },
                {
                    "multiplier": 3.4,
                    "distance": 3500
                }
            ],
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 4,
                "max": 5
            },
            "fireType": "Auto",
            "armorPenetration": 2.5,
            "roundsPerMinute": 550
        },
        "spreadData": {
            "start": 0.3,
            "increase": 0.45,
            "resetTime": 0.5,
            "decayRate": 0.5,
            "cap": 2,
            "stanceMultipliers": {
                "stand": {
                    "spread": 1.25,
                    "start": 3.5,
                    "cap": 2.1,
                    "increment": 1.3
                },
                "standMove": {
                    "spread": 1.45,
                    "start": 3.75,
                    "cap": 3,
                    "increment": 1.3
                },
                "crouch": {
                    "spread": 0.75,
                    "start": 0.33
                },
                "crouchMove": {
                    "spread": 1.25,
                    "start": 0.33
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.3,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 50,
                "recoverSpeed": 10,
                "recoverWaitTime": 0.075,
                "recoilPattern": [
                    {
                        "x": 0.5,
                        "y": 0.4
                    },
                    {
                        "x": 0.8,
                        "y": 1.1
                    },
                    {
                        "x": 1.4,
                        "y": 1.9
                    },
                    {
                        "x": 2.2,
                        "y": 2
                    },
                    {
                        "x": 2.5,
                        "y": 3.2
                    },
                    {
                        "x": 3.2,
                        "y": 3.4
                    },
                    {
                        "x": 2.8,
                        "y": 4.6
                    },
                    {
                        "x": 3.6,
                        "y": 5.1
                    },
                    {
                        "x": 3.2,
                        "y": 6
                    },
                    {
                        "x": 2.75,
                        "y": 6.75
                    },
                    {
                        "x": 2.05,
                        "y": 7
                    },
                    {
                        "x": 1.6,
                        "y": 7.8
                    },
                    {
                        "x": 2.4,
                        "y": 8.2
                    },
                    {
                        "x": 1.9,
                        "y": 9
                    },
                    {
                        "x": 2.1,
                        "y": 10
                    },
                    {
                        "x": 1.4,
                        "y": 10.3
                    },
                    {
                        "x": 1.9,
                        "y": 11
                    },
                    {
                        "x": 2.45,
                        "y": 11.6
                    },
                    {
                        "x": 2.6,
                        "y": 12.7
                    },
                    {
                        "x": 1.9,
                        "y": 13
                    },
                    {
                        "x": 2.4,
                        "y": 14
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 12,
                "hipfireMultiplier": 2.1
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 7.5,
                "verticalTop": {
                    "min": 0.12,
                    "max": 0.6
                },
                "verticalBottom": {
                    "min": 0.08,
                    "max": 0.2
                },
                "verticalMultiplier": {
                    "start": 0.3,
                    "max": 1.2,
                    "threshold": 1.2
                },
                "horizontalRight": {
                    "min": 0.4,
                    "max": 0.8
                },
                "horizontalLeft": {
                    "min": 0.4,
                    "max": 0.8
                },
                "horizontalMultiplier": {
                    "start": 0.3,
                    "max": 2.25,
                    "threshold": 1.6
                }
            }
        },
        "modularConfiguration": {
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection",
                    "Sight_Tactical",
                    "Sight_Sheath"
                ]
            },
            "barrelExtension": {
                "defaultPart": "VF7S_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_BeveledSilencer",
                    "BarrelExt_Express",
                    "BarrelExt_HybridMB",
                    "BarrelExt_IndentComp",
                    "BarrelExt_CylindricSilencer",
                    "BarrelExt_PipedSilencer"
                ]
            },
            "barrel": {
                "defaultPart": "VF7S_Barrel_Default",
                "uniqueParts": [
                    "VF7S_Barrel_CQC",
                    "VF7S_Barrel_Ranged"
                ]
            },
            "body": {
                "defaultPart": "VF7S_Body_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "VF7S_Bolt_Default",
                "uniqueParts": []
            },
            "foreGrip": {
                "defaultPart": "VF7S_Foregrip_Default",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "VF7S_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "mag": {
                "defaultPart": "VF7S_Mag_Default",
                "uniqueParts": [
                    "VF7S_Mag_Quick",
                    "VF7S_Mag_Extended",
                    "VF7S_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "VF7S_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ"
                ]
            },
            "rearSight": {
                "defaultPart": "VF7S_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "VF7S_FrontSight_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "VF7S_Ammo_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "VF7S_StockMount_Default",
                "uniqueParts": []
            }
        },
        "equipTime": 0.46666664,
        "unequipTime": 0.6666667,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.8333335,
        "reloadEmptyTime": 3.1666665
    },
    "WAR45": {
        "displayName": "WAR-45",
        "class": "SMG",
        "dlc": "1",
        "displayIcon": {
            "offset": {
                "x": 768,
                "y": 768
            },
            "source": "SS_UI_Weapon_Presets.png"
        },
        "fireData": {
            "damageDistanceArray": [
                {
                    "damage": 86.4,
                    "distance": 700
                },
                {
                    "damage": 86.4,
                    "distance": 1900
                },
                {
                    "damage": 51,
                    "distance": 2800
                },
                {
                    "damage": 43,
                    "distance": 3500
                }
            ],
            "criticalDamageMultiplierDistanceArray": [
                {
                    "multiplier": 1.1,
                    "distance": 1900
                },
                {
                    "multiplier": 0.66,
                    "distance": 2800
                },
                {
                    "multiplier": 0.55,
                    "distance": 3500
                }
            ],
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 7,
                "max": 9
            },
            "fireType": "Auto",
            "armorPenetration": 0.9,
            "roundsPerMinute": 650
        },
        "spreadData": {
            "start": 0.25,
            "increase": 0.25,
            "resetTime": 0.3,
            "decayRate": 0.3,
            "cap": 3,
            "stanceMultipliers": {
                "stand": {
                    "start": 3,
                    "cap": 2,
                    "increment": 1.5
                },
                "standMove": {
                    "spread": 1.45,
                    "start": 3,
                    "cap": 3,
                    "increment": 1.5
                },
                "crouch": {
                    "spread": 0.45,
                    "start": 0.3,
                    "cap": 2
                },
                "crouchMove": {
                    "spread": 0.95,
                    "start": 0.3,
                    "cap": 2
                },
                "target": {
                    "spread": 0,
                    "start": 0.33
                },
                "targetMove": {
                    "spread": 0.25,
                    "start": 0.33
                }
            },
            "radiusMultipliers": {}
        },
        "recoilData": {
            "viewKick": {
                "deflectSpeed": 40,
                "recoverSpeed": 35,
                "recoverWaitTime": 0.05,
                "recoilPattern": [
                    {
                        "x": 0.12,
                        "y": 0.12
                    },
                    {
                        "x": 0.25,
                        "y": 0.4668
                    },
                    {
                        "x": 0.3,
                        "y": 0.96
                    },
                    {
                        "x": 0.6,
                        "y": 1.32
                    },
                    {
                        "x": 0.78,
                        "y": 1.92
                    },
                    {
                        "x": 1.2,
                        "y": 1.92
                    },
                    {
                        "x": 1.32,
                        "y": 2.52
                    },
                    {
                        "x": 1.42,
                        "y": 2.88
                    },
                    {
                        "x": 1.26,
                        "y": 3.24
                    },
                    {
                        "x": 1.2,
                        "y": 3.72
                    },
                    {
                        "x": 1.08,
                        "y": 3.9
                    },
                    {
                        "x": 0.72,
                        "y": 4.32
                    },
                    {
                        "x": 0.72,
                        "y": 4.8
                    },
                    {
                        "x": 0.8,
                        "y": 5.16
                    },
                    {
                        "x": 0.84,
                        "y": 5.64
                    },
                    {
                        "x": 1.26,
                        "y": 6
                    }
                ],
                "resetTime": 0.25,
                "loopStart": 8,
                "initialNum": 2,
                "hipfireMultiplier": 1.5
            },
            "gunKick": {
                "deflectSpeed": 15,
                "recoverSpeed": 35,
                "verticalTop": {
                    "min": 0.06,
                    "max": 0.45
                },
                "verticalBottom": {
                    "min": 0.04,
                    "max": 0.1
                },
                "verticalMultiplier": {
                    "start": 0.4
                },
                "horizontalRight": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalLeft": {
                    "min": 0.2,
                    "max": 0.5
                },
                "horizontalMultiplier": {
                    "start": 0.25,
                    "max": 1.5,
                    "threshold": 1.2
                }
            }
        },
        "modularConfiguration": {
            "barrelExtension": {
                "defaultPart": "WAR45_BarrelExt_Default",
                "uniqueParts": [
                    "BarrelExt_ObeliskSilencer",
                    "BarrelExt_SnubSilencer",
                    "BarrelExt_CompactComp",
                    "BarrelExt_SkeletonizedComp",
                    "BarrelExt_PartedComp"
                ]
            },
            "barrel": {
                "defaultPart": "WAR45_Barrel_Default",
                "uniqueParts": []
            },
            "body": {
                "defaultPart": "WAR45_Body_Default",
                "uniqueParts": []
            },
            "chargingHandle": {
                "defaultPart": "WAR45_ChargingHandle_Default",
                "uniqueParts": []
            },
            "mag": {
                "defaultPart": "WAR45_Mag_Default",
                "uniqueParts": [
                    "WAR45_Mag_Extended",
                    "WAR45_Mag_Quick",
                    "WAR45_Mag_Compact"
                ]
            },
            "stock": {
                "defaultPart": "WAR45_Stock_Default",
                "uniqueParts": [
                    "Stock_PaddedTube",
                    "Stock_TQ",
                    "Stock_LightFrame",
                    "Stock_HQ",
                    "Stock_Minimized"
                ]
            },
            "rearSight": {
                "defaultPart": "WAR45_RearSight_Default",
                "uniqueParts": []
            },
            "frontSight": {
                "defaultPart": "WAR45_FrontSight_Default",
                "uniqueParts": []
            },
            "stockMount": {
                "defaultPart": "WAR45_StockMount_Default",
                "uniqueParts": []
            },
            "verticalGrip": {
                "defaultPart": null,
                "uniqueParts": [
                    "VerticalGrip_Cylinder",
                    "VerticalGrip_AngledGhost",
                    "VerticalGrip_Stub",
                    "VerticalGrip_QuickHold"
                ]
            },
            "ammo": {
                "defaultPart": "WAR45_Ammo_Default",
                "uniqueParts": []
            },
            "bolt": {
                "defaultPart": "WAR45_Bolt",
                "uniqueParts": []
            },
            "grip": {
                "defaultPart": "WAR45_Grip_Default",
                "uniqueParts": [
                    "Grip_Biofit",
                    "Grip_Tac",
                    "Grip_Perforated"
                ]
            },
            "sight": {
                "defaultPart": null,
                "uniqueParts": [
                    "Sight_ClassicRDS",
                    "Sight_Compact",
                    "Sight_ViewPoint",
                    "Sight_Lined",
                    "Sight_Projection"
                ]
            }
        },
        "equipTime": 0.40000004,
        "unequipTime": 0.53333336,
        "sprintExitTime": 0.3333333,
        "reloadTime": 2.1666667,
        "reloadEmptyTime": 2.5000002
    }
});