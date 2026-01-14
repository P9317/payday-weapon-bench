const ATTACHMENT_DATA = Object.freeze({
    "A114_Ammo_Default": {},
    "A114_BarrelExt_Default": {},
    "A114_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "A114_Barrel_Default": {},
    "A114_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "A114_Body_Default": {},
    "A114_Body_UpperReceiver": {},
    "A114_Bolt_Default": {},
    "A114_ChargingHandle_Default": {},
    "A114_FrontSight_Default": {},
    "A114_Grip_Default": {},
    "A114_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "A114_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 80,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "A114_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "A114_RearSight_Default": {},
    "A114_SightMount_Default": {},
    "A114_StockMount_Default": {},
    "A114_Stock_Default": {},
    "A114_Trigger_Default": {},
    "ARGES_Ammo_Default": {},
    "ARGES_Barrel_Default": {},
    "ARGES_Body_Default": {},
    "ARGES_Grip_Default": {},
    "ARGES_SpeedLoader_Default": {},
    "ATK7_BarrelExt_Default": {},
    "ATK7_Barrel_Default": {},
    "ATK7_Body_Default": {},
    "ATK7_Bolt": {},
    "ATK7_ChargingHandle_Default": {},
    "ATK7_ForeGrip_Default": {},
    "ATK7_Grip_Contoured": {
        "displayName": "Contoured Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "ATK7_Grip_Default": {},
    "ATK7_Grip_SmoothFluted": {
        "displayName": "Smooth Fluted Grip",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "ATK7_Grip_Tac": {
        "displayName": "Cut-Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "ATK7_Mag_Compact": {
        "displayName": "Compact Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "ATK7_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "ATK7_Mag_Extended": {
        "displayName": "Extended Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 40,
            "ammoInventory": 160,
            "ammoInventoryMax": 240,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "ATK7_Mag_Quick": {
        "displayName": "Quick-Pull Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "ATK7_RearSight_Default": {},
    "ATK7_SightMount_Default": {},
    "ATK7_Stock_Default": {},
    "ATK7_Stock_HollowFrame": {
        "displayName": "Hollow Frame",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "ATK7_Stock_RubberFramed": {
        "displayName": "Rubber Framed Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "Ammo_12gauge": {},
    "Ammo_357magnum": {},
    "Ammo_40mm": {},
    "Ammo_410Bore": {},
    "Ammo_44magnum": {},
    "Ammo_500Magnum": {},
    "Ammo_50AE": {},
    "Ammo_9mm": {},
    "BarrelExt_12GCoronetMuzzle": {
        "displayName": "Coronet Muzzle",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 15
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_12GObelisk": {
        "displayName": "12G Obelisk Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "BarrelExt_12GVentComp": {
        "displayName": "12G Vent Compensator",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": -10
            }
        ]
    },
    "BarrelExt_BeveledSilencer": {
        "displayName": "Beveled Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_CompactComp": {
        "displayName": "Compact Compensator",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -10
            }
        ]
    },
    "BarrelExt_CratedMuzzle": {
        "displayName": "Crated Muzzle",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 15
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_CylindricSilencer": {
        "displayName": "Cylindric Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "BarrelExt_Express": {
        "displayName": "Express Muzzle Break",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalGunkick",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_HybridMB": {
        "displayName": "Hybrid Muzzle Break",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_IDM2": {
        "displayName": "Vent Catch IDM2",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -10
            }
        ]
    },
    "BarrelExt_IndentComp": {
        "displayName": "Indent Compensator",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 15
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_JawChoke": {
        "displayName": "12G Jaw Choke",
        "attributeModifierMap": [
            {
                "attribute": "VerticalSpreadRadius",
                "value": 15
            },
            {
                "attribute": "HorizontalSpreadRadius",
                "value": -10
            }
        ]
    },
    "BarrelExt_ObeliskSilencer": {
        "displayName": "Obelisk Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "BarrelExt_PartedComp": {
        "displayName": "Parted Compensator",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "BarrelExt_PipedSilencer": {
        "displayName": "Piped Silencer",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "BarrelExt_Ridgecyl": {
        "displayName": "Ridgecyl Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "BarrelExt_Ridged": {
        "displayName": "Edge Ridged Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "BarrelExt_SedimentChoke": {
        "displayName": "12G Sediment Choke",
        "attributeModifierMap": [
            {
                "attribute": "OverallPelletDeviation",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "BarrelExt_SilentKiller": {
        "displayName": "The Silent Killer",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "BarrelExt_SkeletonizedComp": {
        "displayName": "Skeletonized Compensator",
        "attributeModifierMap": [
            {
                "attribute": "HorizontalRecoil",
                "value": 15
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "BarrelExt_SnubSilencer": {
        "displayName": "Snub Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "BarrelExt_Torque": {
        "displayName": "Torque Silencer",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": -5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ]
    },
    "BarrelExt_WhisperWrap": {
        "displayName": "Whisper Wrap Silencer",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            }
        ]
    },
    "Bison_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "Bison_Barrel_Default": {},
    "Bison_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Bison_Body_Default": {},
    "Bison_Bolt_Default": {},
    "Bison_FirePin_Default": {},
    "Bison_FrontSight_Default": {},
    "Bison_Grip_Biofit": {
        "displayName": "Biofit Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Bison_Grip_Default": {},
    "Bison_Grip_Hardwood": {
        "displayName": "Hardwood Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "Bison_Grip_Tac": {
        "displayName": "Tac Grip ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "Bison_MagRelease_Default": {},
    "Bison_Mag_Default": {},
    "Bison_RearSight_Default": {},
    "Bison_SightMount_Default": {},
    "Bison_Speedloader_Default": {},
    "Bullkick500_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "Bullkick500_Barrel_Default": {},
    "Bullkick500_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Bullkick500_Barrel_Tactical": {
        "displayName": "Tactical Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "Bullkick500_Body_Default": {},
    "Bullkick500_Bolt_Default": {},
    "Bullkick500_FrontSight_Default": {},
    "Bullkick500_Grip_Biofit": {
        "displayName": "Biofit Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Bullkick500_Grip_Default": {},
    "Bullkick500_Grip_Hardwood": {
        "displayName": "Hardwood Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "Bullkick500_Grip_Tac": {
        "displayName": "Tactical Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "Bullkick500_Mag_Default": {},
    "Bullkick500_Mag_Unfluted": {
        "displayName": "Unfluted Cylinder",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallReloadPlayRate",
                "value": -5
            }
        ]
    },
    "Bullkick500_RearSight_Default": {},
    "Bullkick500_SightMount_Default": {},
    "Bullkick500_Speedloader_Default": {},
    "CAR4_Ammo_Default": {},
    "CAR4_BarrelExt_Default": {},
    "CAR4_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "CAR4_Barrel_Default": {},
    "CAR4_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "CAR4_Body_Default": {},
    "CAR4_Bolt_Default": {},
    "CAR4_ChargingHandle_Default": {},
    "CAR4_Foregrip_Default": {},
    "CAR4_FrontSight_Default": {},
    "CAR4_Grip_Default": {},
    "CAR4_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 6,
                "max": 8
            }
        }
    },
    "CAR4_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 6,
                "max": 8
            }
        }
    },
    "CAR4_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 45,
            "ammoInventory": 180,
            "ammoInventoryMax": 270,
            "ammoPickup": {
                "min": 6,
                "max": 8
            }
        }
    },
    "CAR4_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 6,
                "max": 8
            }
        }
    },
    "CAR4_RearSight_Default": {},
    "CAR4_StockMount_Default": {},
    "CAR4_stock_Default": {},
    "CHS3_Ammo_Default": {},
    "CHS3_BarrelExt_Default": {},
    "CHS3_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "CHS3_Barrel_Default": {},
    "CHS3_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "CHS3_Body_Default": {},
    "CHS3_Bolt_Default": {},
    "CHS3_ChargingHandle_Default": {},
    "CHS3_Foregrip_Default": {},
    "CHS3_FrontSight_Default": {},
    "CHS3_Grip_Default": {},
    "CHS3_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 400,
            "ammoInventoryMax": 500,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "CHS3_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "CHS3_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 42,
            "ammoInventory": 168,
            "ammoInventoryMax": 252,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "CHS3_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "CHS3_RearSight_Default": {},
    "CHS3_Stock_Fortified": {
        "displayName": "Fortified Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "CHS3_Stock_Refined": {
        "displayName": "Refined Stock",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "CHS3_stock_Default": {},
    "Castigo44_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "Castigo44_Barrel_Default": {},
    "Castigo44_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Castigo44_Barrel_Tac": {
        "displayName": "Tac Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Castigo44_Body_Default": {},
    "Castigo44_Bolt_Default": {},
    "Castigo44_FrontSight_Default": {},
    "Castigo44_Grip_Biofit": {
        "displayName": "Biofit Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Castigo44_Grip_Default": {},
    "Castigo44_Grip_Hardwood": {
        "displayName": "Hardwood Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "Castigo44_Grip_Tac": {
        "displayName": "Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "Castigo44_Mag_Default": {},
    "Castigo44_RearSight_Default": {},
    "Castigo44_SightMount_Default": {},
    "Castigo44_Speedloader_Default": {},
    "Commando_Ammo_Default": {},
    "Commando_Barrel_Default": {},
    "Commando_Body_LowerReceiver_Default": {},
    "Commando_Body_UpperReceiver_Default": {},
    "Commando_ChargingHandle_Default": {},
    "Commando_FrontSight_Default": {},
    "Commando_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Commando_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Commando_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 35,
            "ammoInventory": 140,
            "ammoInventoryMax": 210,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Commando_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Commando_RearSight_Default": {},
    "Commando_SightMount_Default": {},
    "Commando_StockMount_Default": {},
    "Commando_Stock_Default": {},
    "Compact7_Ammo_Default": {},
    "Compact7_BarrelExt_Default": {},
    "Compact7_Barrel_Default": {},
    "Compact7_Body_Default": {},
    "Compact7_ChargingHandle_Default": {},
    "Compact7_Foregrip_Default": {},
    "Compact7_FrontSight_Default": {},
    "Compact7_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Compact7_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Compact7_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 40,
            "ammoInventory": 160,
            "ammoInventoryMax": 240,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Compact7_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "Compact7_RearSight_Default": {},
    "Compact7_StockMount_Default": {},
    "Compact7_Stock_Default": {},
    "FIK22_Ammo_Default": {},
    "FIK22_BarrelExt_MuzzleBreak": {},
    "FIK22_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "FIK22_Barrel_Default": {},
    "FIK22_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "FIK22_Body_Default": {},
    "FIK22_ChargingHandle_Default": {},
    "FIK22_ForeGrip_Default": {},
    "FIK22_FrontSight_Default": {},
    "FIK22_Grip_Default": {},
    "FIK22_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "FIK22_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "FIK22_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 35,
            "ammoInventory": 140,
            "ammoInventoryMax": 210,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "FIK22_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "FIK22_RearSight_Default": {},
    "FIK22_StockMount_Default": {},
    "FIK22_Stock_Default": {},
    "FSA12_Ammo_Default": {},
    "FSA12_BarrelExt_Default": {},
    "FSA12_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "FSA12_Barrel_Default": {},
    "FSA12_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "FSA12_Body_Default": {},
    "FSA12_ChargingHandle_Default": {},
    "FSA12_Foregrip_Default": {},
    "FSA12_FrontSight_Default": {},
    "FSA12_Grip_Default": {},
    "FSA12_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 5,
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "FSA12_Mag_Default": {
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "FSA12_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 60,
            "ammoInventoryMax": 90,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "FSA12_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "FSA12_RearSight_Default": {},
    "FSA12_StockMount_Default": {},
    "FSA12_Stock_Default": {},
    "GarstiniViper_Barrel_GarstiniViper_Barrel_Extended": {
        "displayName": "Lead Reach",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "GarstiniViper_Barrel_GarstiniViper_Barrel_Fluted": {
        "displayName": " Whittled Fit",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "GarstiniViper_Barrel_GarstiniViper_Barrel_Ported": {
        "displayName": " Force Vent Cut",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "GarstiniViper_Barrel_GarstiniViper_Barrel_Standard": {},
    "GarstiniViper_Barrel_GarstiniViper_Barrel_Supressed": {
        "displayName": "S-Ballers",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            }
        ]
    },
    "GarstiniViper_Body_GarstiniViper_Body_Standard": {},
    "GarstiniViper_Bolt_GarstiniViper_Bolt_Hammer_Standard": {},
    "GarstiniViper_ChargingHandle_GarstiniViper_ChargingHandle_Standard": {},
    "GarstiniViper_FrontSight_Standard": {},
    "GarstiniViper_Grip_GarstiniViper_Grip_Ergonomic": {
        "displayName": "Coarse Ergo",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "GarstiniViper_Grip_GarstiniViper_Grip_Standard": {},
    "GarstiniViper_Grip_GarstiniViper_Grip_Wood": {
        "displayName": "Redwood Classic",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "GarstiniViper_Mag_GarstiniViper_Mag_Standard": {
        "magazineData": {
            "ammoLoaded": 7,
            "ammoInventory": 56,
            "ammoInventoryMax": 70,
            "ammoPickup": {
                "min": 1,
                "max": 2
            }
        }
    },
    "GarstiniViper_Mag_GarstiniViper_Mag_extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoInventory": 40,
            "ammoInventoryMax": 60,
            "ammoPickup": {
                "min": 1,
                "max": 2
            }
        }
    },
    "GarstiniViper_RearSight_Standard": {},
    "GarstiniViper_SightMount": {},
    "Grip_Biofit": {
        "displayName": "Biofit Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Grip_Perforated": {
        "displayName": "Perforated Grip",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Grip_Tac": {
        "displayName": "Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "HET5_Ammo_Default": {},
    "HET5_BarrelExt_Default": {},
    "HET5_Barrel_Default": {},
    "HET5_Bipod_Default": {},
    "HET5_Body_LowerReceiver_Default": {},
    "HET5_Body_UpperReceiver": {},
    "HET5_Bolt_Default": {},
    "HET5_ChargingHandle_Default": {},
    "HET5_Foregrip_Default": {},
    "HET5_Grip_Default": {},
    "HET5_Mag_Default": {},
    "HET5_Sight_Default": {
        "targetingData": {
            "targetingMagnification": 2.3,
            "targetingOnTopMagnification": 2.3
        }
    },
    "HET5_Stock_Default": {},
    "Justicar_Barrel_Default": {},
    "Justicar_Barrel_Extended": {
        "displayName": "Potshot Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "Justicar_Barrel_Long": {
        "displayName": "Big Game Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "Justicar_Barrel_Short": {
        "displayName": "12G Snub Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "Justicar_Body_Default": {},
    "Justicar_Bolt_Default": {},
    "Justicar_FrontSight_Default": {},
    "Justicar_Grip_Default": {},
    "Justicar_Grip_Tactical": {
        "displayName": "Gorge Grip ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "Justicar_Grip_Wood": {
        "displayName": "Greenwood Grip ",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "Justicar_Grip_WoodAgain": {
        "displayName": "Bluewood Grip ",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Justicar_Mag_Default": {},
    "Justicar_RearSight_Default": {},
    "Justicar_Speedloader_Default": {},
    "KU59_Ammo_Default": {},
    "KU59_BarrelExt_Default": {},
    "KU59_Barrel_Default": {},
    "KU59_Barrel_Rail": {
        "displayName": "Rail Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "KU59_Barrel_TradGrip": {
        "displayName": "Trad Grip Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "KU59_Body_Default": {},
    "KU59_ChargingHandle_Default": {},
    "KU59_Grip_Biofit": {
        "displayName": "Biofit Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "KU59_Grip_Default": {},
    "KU59_Grip_Perforated": {
        "displayName": "Perforated Grip",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "KU59_Grip_Tac": {
        "displayName": "Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "KU59_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 5,
                "max": 6
            }
        }
    },
    "KU59_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 6
            }
        }
    },
    "KU59_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 45,
            "ammoInventory": 180,
            "ammoInventoryMax": 270,
            "ammoPickup": {
                "min": 5,
                "max": 6
            }
        }
    },
    "KU59_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 5,
                "max": 6
            }
        }
    },
    "KU59_RearSight_Default": {},
    "KU59_SightMount_Default": {},
    "KU59_StockMount_Default": {},
    "KU59_Stock_Default": {},
    "M7P_Ammo_Default": {},
    "M7P_BarrelExt_Default": {},
    "M7P_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "M7P_Barrel_Default": {},
    "M7P_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "M7P_Body_Default": {},
    "M7P_Bolt_Default": {},
    "M7P_ChargingHandle_Default": {},
    "M7P_Foregrip_Default": {},
    "M7P_FrontSight_Default": {},
    "M7P_Grip_Default": {},
    "M7P_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 9,
            "ammoInventory": 144,
            "ammoInventoryMax": 180,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "M7P_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "M7P_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 21,
            "ammoInventory": 84,
            "ammoInventoryMax": 126,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "M7P_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "M7P_RearSight_Default": {},
    "M7P_Stock_Bolstered": {
        "displayName": "Bolstered Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "M7P_Stock_Default": {},
    "MX63_Ammo_Default": {},
    "MX63_BarrelExt_Default": {},
    "MX63_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "MX63_Barrel_Default": {},
    "MX63_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "MX63_Body_Default": {},
    "MX63_Bolt_Default": {},
    "MX63_ChargingHandle_Default": {},
    "MX63_Foregrip_Default": {},
    "MX63_FrontSight_Default": {},
    "MX63_Grip_Default": {},
    "MX63_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 100,
            "ammoInventory": 400,
            "ammoInventoryMax": 500,
            "ammoPickup": {
                "min": 6,
                "max": 8
            }
        }
    },
    "MX63_RearSight_Default": {},
    "MX63_StockMount_Default": {},
    "MX63_stock_Default": {},
    "Mamba_Barrel_Default": {},
    "Mamba_Body_Default": {},
    "Mamba_Bolt_Default": {},
    "Mamba_ChargingHandle_Default": {},
    "Mamba_Foregrip_Default": {},
    "Mamba_Grip_Default": {},
    "Mamba_MagRelease_Default": {},
    "Mamba_Mag_Default": {},
    "Mamba_SightMount_Rail": {},
    "Mamba_StockMount_Default": {},
    "Mamba_Stock_Default": {},
    "Mamba_Trigger_Default": {},
    "Mosconi12C_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "Mosconi12C_Barrel_Default": {},
    "Mosconi12C_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "Mosconi12C_Body_Default": {},
    "Mosconi12C_Foregrip_Default": {},
    "Mosconi12C_FrontSight_Default": {},
    "Mosconi12C_MagRelease_Default": {},
    "Mosconi12C_RearSight_Default": {},
    "Mosconi12C_SightMount_Rail": {},
    "Mosconi12C_Stock_CQC": {
        "displayName": "CQC",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": 15
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -10
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "Mosconi12C_Stock_Default": {},
    "Mosconi12C_Stock_Fortified": {
        "displayName": "Fortified",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ]
    },
    "Mosconi12C_Stock_Padded": {
        "displayName": "Padded",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": -5
            }
        ]
    },
    "NWB9_Ammo_Default": {},
    "NWB9_BarrelExt_Default": {},
    "NWB9_Barrel_Default": {},
    "NWB9_Body_Default": {},
    "NWB9_Bolt_Default": {},
    "NWB9_ChargingHandle_Default": {},
    "NWB9_Foregrip_Default": {},
    "NWB9_FrontSight_Default": {},
    "NWB9_Grip_Default": {},
    "NWB9_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 8,
                "max": 10
            }
        }
    },
    "NWB9_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 10
            }
        }
    },
    "NWB9_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 45,
            "ammoInventory": 180,
            "ammoInventoryMax": 270,
            "ammoPickup": {
                "min": 8,
                "max": 10
            }
        }
    },
    "NWB9_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 10
            }
        }
    },
    "NWB9_RearSight_Default": {},
    "NWB9_StockMount_Default": {},
    "NWB9_stock_Default": {},
    "PC9_Ammo_Default": {},
    "PC9_BarrelExt_Default": {},
    "PC9_Barrel_Default": {},
    "PC9_Body_Default": {},
    "PC9_Bolt_Default": {},
    "PC9_ChargingHandle_Default": {},
    "PC9_Foregrip_Default": {},
    "PC9_FrontSight_Default": {},
    "PC9_Grip_Default": {},
    "PC9_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 320,
            "ammoInventoryMax": 400,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "PC9_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "PC9_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 35,
            "ammoInventory": 140,
            "ammoInventoryMax": 210,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "PC9_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 8,
                "max": 11
            }
        }
    },
    "PC9_RearSight_Default": {},
    "PC9_StockMount_Default": {},
    "PC9_Stock_Default": {},
    "PD5_Ammo_Default": {},
    "PD5_BarrelExt_Default": {},
    "PD5_Barrel_Default": {},
    "PD5_Body_Default": {},
    "PD5_Bolt_Default": {},
    "PD5_ChargingHandle_Default": {},
    "PD5_Grip_Default": {
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "PD5_Grip_Premier": {
        "displayName": "Premier Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "PD5_Grip_Tac": {
        "displayName": "Tactical Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "PD5_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 120,
            "ammoInventoryMax": 150,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "PD5_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 120,
            "ammoInventoryMax": 180,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "PD5_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 120,
            "ammoInventoryMax": 150,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "PD5_RearSight_Default": {},
    "PD5_SightMount_Default": {
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "PD5_StockMount_Default": {},
    "PD5_Stock_Combat": {
        "displayName": "Combat Stock",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "PD5_VertGrip_Default": {
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "R880_Ammo_Default": {},
    "R880_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "R880_Barrel_Comp": {
        "displayName": "Comp Barrel",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "R880_Barrel_Default": {},
    "R880_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "R880_Body_Default": {},
    "R880_Bolt_Default": {},
    "R880_Foregrip_Biofit": {
        "displayName": "Biofit Fore-End",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 5
            },
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "R880_Foregrip_Default": {},
    "R880_Foregrip_Tactical": {
        "displayName": "Tactical Fore-End",
        "attributeModifierMap": [
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": 10
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ]
    },
    "R880_FrontSight_Default": {},
    "R880_Mag_Default": {},
    "R880_SightMount_Rail": {},
    "R880_Stock_CQC": {
        "displayName": "CQC",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": 15
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -10
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "R880_Stock_Default": {},
    "R880_Stock_Fortified": {
        "displayName": "Fortified",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ]
    },
    "R880_Stock_Padded": {
        "displayName": "Padded",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": -5
            }
        ]
    },
    "R900S_Ammo_Default": {},
    "R900S_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "R900S_Barrel_Default": {},
    "R900S_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "R900S_Body_Default": {},
    "R900S_Bolt_Default": {},
    "R900S_ChargingHandle_Default": {},
    "R900S_FirePin_Default": {},
    "R900S_MagRelease_Default": {},
    "R900S_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 5,
            "ammoInventory": 40,
            "ammoInventoryMax": 50,
            "ammoPickup": {
                "min": 1,
                "max": 2
            }
        }
    },
    "R900S_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoInventory": 40,
            "ammoInventoryMax": 60,
            "ammoPickup": {
                "min": 1,
                "max": 2
            }
        }
    },
    "R900S_SightMount_Rail": {},
    "R900S_Stock_Default": {},
    "R900S_Stock_HardWood": {
        "displayName": "Hardwood",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 15
            },
            {
                "attribute": "OverallSpread",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            }
        ]
    },
    "R900S_Stock_Lightweight": {
        "displayName": "Lightweight",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            }
        ]
    },
    "RG5_Ammo_Default": {},
    "RG5_BarrelExt_Default": {},
    "RG5_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "RG5_Barrel_Default": {},
    "RG5_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "RG5_Body_Default": {},
    "RG5_Bolt_Default": {},
    "RG5_ChargingHandle_Default": {},
    "RG5_Foregrip_Default": {},
    "RG5_FrontSight_Default": {},
    "RG5_Grip_Contoured": {
        "displayName": "Contoured Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "RG5_Grip_Default": {},
    "RG5_Grip_SmoothFluted": {
        "displayName": "Smooth Fluted Grip",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "RG5_Grip_Tac": {
        "displayName": "Cut-Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "RG5_Mag_Compact": {
        "displayName": "Compact Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "RG5_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 3,
                "max": 5
            }
        }
    },
    "RG5_Mag_Extended": {
        "displayName": "Extended Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 35,
            "ammoInventory": 140,
            "ammoInventoryMax": 210,
            "ammoPickup": {
                "min": 3,
                "max": 5
            }
        }
    },
    "RG5_Mag_Quick": {
        "displayName": "Quick-Pull Magazine",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 3,
                "max": 5
            }
        }
    },
    "RG5_RearSight_Default": {},
    "RG5_SightMount_Default": {},
    "RG5_StockMount_Default": {},
    "RG5_Stock_HQ": {
        "displayName": "HQ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "RG5_Stock_Light": {
        "displayName": "Light Frame",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "RG5_Stock_TQ": {
        "displayName": "TQ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "RG5_stock_Default": {},
    "S403_Ammo_Default": {},
    "S403_Barrel_Default": {},
    "S403_Body_Default": {},
    "S403_ChargingHandle_Default": {},
    "S403_FrontSight_Default": {},
    "S403_Grip_Friction": {
        "displayName": "Friction Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "S403_Grip_Grained": {
        "displayName": "Grained Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "S403_Grip_Ribbed": {
        "displayName": "Ribbed Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "S403_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "S403_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 21,
            "ammoInventory": 84,
            "ammoInventoryMax": 126,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "S403_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "S403_RearSight_Default": {},
    "S403_SightMount_Default": {},
    "S40_Ammo_Default": {},
    "S40_Barrel_Default": {},
    "S40_Body_Default": {},
    "S40_Bolt_Default": {},
    "S40_ChargingHandle_Default": {},
    "S40_FrontSight_Default": {},
    "S40_Grip_Default": {},
    "S40_Grip_Embossed": {
        "displayName": "Embossed Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "S40_Grip_Hardwood": {
        "displayName": "Hardwood Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "S40_Grip_Tac": {
        "displayName": "Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "S40_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "S40_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 80,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "S40_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 12,
            "ammoInventory": 96,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "S40_RearSight_Default": {},
    "S40_SightMount_Default": {},
    "SE5_Barrel_Standard": {},
    "SE5_Body_standard": {},
    "SE5_ChargingHandle_standard": {},
    "SE5_FrontSight_Standard": {},
    "SE5_Grip_Ergonomic": {
        "displayName": "Sigma Pane",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "SE5_Grip_Simple": {
        "displayName": "Strafed Handle ",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "SE5_Grip_Standard": {},
    "SE5_Grip_Tactical": {
        "displayName": "Shock Panel",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "SE5_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 80,
            "ammoInventoryMax": 120,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "SE5_Mag_Standard": {
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "SE5_Mag_quickpull": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 2,
                "max": 4
            }
        }
    },
    "SE5_RearSight_Standard": {},
    "SE5_SightMount_Standard": {},
    "SE5_Sight_Custom": {
        "displayName": "Trench Iron",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ]
    },
    "SPM11_Ammo_Default": {},
    "SPM11_Barrel_Default": {},
    "SPM11_Body_Default": {},
    "SPM11_Bolt_Default": {},
    "SPM11_ChargingHandle_Default": {},
    "SPM11_FrontSight_Default": {},
    "SPM11_Grip_Checkered": {
        "displayName": "Checkered Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "SPM11_Grip_Default": {},
    "SPM11_Grip_Embossed": {
        "displayName": "Embossed Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "SPM11_Grip_Tac": {
        "displayName": "Tac Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "SPM11_Mag_Default": {
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 3,
                "max": 4
            }
        }
    },
    "SPM11_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 18,
            "ammoInventory": 72,
            "ammoInventoryMax": 108,
            "ammoPickup": {
                "min": 3,
                "max": 4
            }
        }
    },
    "SPM11_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoInventory": 80,
            "ammoPickup": {
                "min": 3,
                "max": 4
            }
        }
    },
    "SPM11_RearSight_Default": {},
    "SPM11_SightMount_Default": {},
    "Sight_Box": {
        "displayName": "Box RDS",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15
        }
    },
    "Sight_ClassicRDS": {
        "displayName": "Classic RDS",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15,
            "targetingOnTopMagnification": 1.15
        }
    },
    "Sight_Compact": {
        "displayName": "Compact RDS",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15,
            "targetingOnTopMagnification": 1.15
        }
    },
    "Sight_Fluted": {
        "displayName": "Fluted Marksman Scope",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -10
            }
        ],
        "targetingData": {
            "targetingMagnification": 5,
            "targetingOnTopMagnification": 6
        }
    },
    "Sight_GL": {
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15,
            "targetingOnTopMagnification": 1.15
        }
    },
    "Sight_LED": {
        "displayName": "LED RDS",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.1
        }
    },
    "Sight_LPVO": {
        "displayName": "Magi Sight",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -15
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            }
        ],
        "targetingData": {
            "targetingMagnification": 2,
            "targetingOnTopMagnification": 2
        }
    },
    "Sight_LightHolographic": {
        "displayName": "Light Holographic Sight",
        "attributeModifierMap": [
            {
                "attribute": "InitialRecoil",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -15
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.2,
            "targetingOnTopMagnification": 1.2
        }
    },
    "Sight_Lined": {
        "displayName": "Lined Sight",
        "attributeModifierMap": [
            {
                "attribute": "ScreenShakeAmplitude",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.8,
            "targetingOnTopMagnification": 1.15
        }
    },
    "Sight_Long6X": {
        "targetingData": {
            "targetingMagnification": 5,
            "targetingOnTopMagnification": 6
        }
    },
    "Sight_Primed": {
        "displayName": "Primed Marksman Scope",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ],
        "targetingData": {
            "targetingMagnification": 6,
            "targetingOnTopMagnification": 7
        }
    },
    "Sight_Projection": {
        "displayName": "Projection RDS",
        "attributeModifierMap": [
            {
                "attribute": "InitialRecoil",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.5,
            "targetingOnTopMagnification": 2.3
        }
    },
    "Sight_Sheath": {
        "displayName": "Sheath RDS",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15
        }
    },
    "Sight_Slate": {
        "displayName": "Slate RDS",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.1
        }
    },
    "Sight_Snapshot": {
        "displayName": "Snapshot Clear-Tag",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15,
            "targetingOnTopMagnification": 1.15
        }
    },
    "Sight_SquareClaim": {
        "displayName": "Square Claim",
        "attributeModifierMap": [
            {
                "attribute": "InitialRecoil",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -15
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.2,
            "targetingOnTopMagnification": 1.2
        }
    },
    "Sight_Tactical": {
        "displayName": "Tactical Sight",
        "attributeModifierMap": [
            {
                "attribute": "ScreenShakeAmplitude",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 2,
            "targetingOnTopMagnification": 2
        }
    },
    "Sight_Tagged": {
        "displayName": "Tagged Iron Sight",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.15
        }
    },
    "Sight_ViewPoint": {
        "displayName": "Viewpoint Sight",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "ScreenShakeAmplitude",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.3,
            "targetingOnTopMagnification": 1.3
        }
    },
    "Sight_Voyeur": {
        "displayName": "Voyeur Scope",
        "attributeModifierMap": [
            {
                "attribute": "ScreenShakeAmplitude",
                "value": 5
            },
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -5
            }
        ],
        "targetingData": {
            "targetingMagnification": 1.5,
            "targetingOnTopMagnification": 2.3
        }
    },
    "Spearfish_Ammo_Default": {},
    "Spearfish_BarrelExtension_Default": {},
    "Spearfish_Barrel_Default": {},
    "Spearfish_Body_Default": {},
    "Spearfish_Bolt_Default": {},
    "Spearfish_ForeGrip_Default": {},
    "Spearfish_ForeGrip_Slitted": {
        "displayName": "Slitted Rail Guard",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": -15
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": 15
            },
            {
                "attribute": "TargetingSpread",
                "value": 15
            }
        ]
    },
    "Spearfish_ForeGrip_Vented": {
        "displayName": "Vented Rail Guard",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 15
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -15
            },
            {
                "attribute": "TargetingSpread",
                "value": -15
            }
        ]
    },
    "Spearfish_FrontSight_Default": {},
    "Spearfish_Grip_Artisan": {
        "displayName": "Artisan Grip",
        "attributeModifierMap": [
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": -20
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -20
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 20
            },
            {
                "attribute": "OverallReloadPlayRate",
                "value": 20
            }
        ]
    },
    "Spearfish_Grip_Knotted": {
        "displayName": "Knotted Grip",
        "attributeModifierMap": [
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": 40
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 20
            }
        ]
    },
    "Spearfish_RearSight_Default": {},
    "Spearfish_Stock_CQC": {
        "displayName": "CQC Slant Stock",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": 40
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": 30
            },
            {
                "attribute": "OverallRecoil",
                "value": -30
            },
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": 20
            },
            {
                "attribute": "OverallGunkick",
                "value": -40
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 30
            }
        ]
    },
    "Spearfish_Stock_Default": {},
    "Spearfish_Stock_Padded": {
        "displayName": "Padded Stock",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": -25
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -20
            },
            {
                "attribute": "OverallRecoil",
                "value": 50
            },
            {
                "attribute": "OverallGunkick",
                "value": 30
            },
            {
                "attribute": "EndCycleReloadPlayRate",
                "value": -20
            }
        ]
    },
    "Spearfish_Stock_Supported": {
        "displayName": "Supported Stock",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": -20
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": 15
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingSpread",
                "value": 20
            }
        ],
        "magazineData": {
            "ammoLoaded": 8,
            "ammoInventory": 46,
            "ammoInventoryMax": 62,
            "ammoPickup": {
                "min": 1,
                "max": 2
            }
        }
    },
    "Stock_HQ": {
        "displayName": "HQ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "Stock_LightFrame": {
        "displayName": "Light Frame",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "Stock_Minimized": {
        "displayName": "Minimized Hook Stock",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 15
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 15
            },
            {
                "attribute": "HipfireSpread",
                "value": -15
            },
            {
                "attribute": "OverallRecoil",
                "value": -10
            }
        ]
    },
    "Stock_PaddedTube": {
        "displayName": "Padded Tube",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": 15
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -10
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "Stock_TQ": {
        "displayName": "TQ",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "Stryk7_Ammo_Default": {},
    "Stryk7_Barrel_Default": {},
    "Stryk7_Body_Default": {},
    "Stryk7_Bolt_Default": {},
    "Stryk7_ChargingHandle_Default": {},
    "Stryk7_FrontSight_Default": {},
    "Stryk7_Grip_Friction": {
        "displayName": "Friction Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "Stryk7_Grip_Grained": {
        "displayName": "Grained Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            }
        ]
    },
    "Stryk7_Grip_Ribbed": {
        "displayName": "Ribbed Grip",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "Stryk7_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "Stryk7_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 31,
            "ammoInventory": 124,
            "ammoInventoryMax": 186,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "Stryk7_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 17,
            "ammoInventory": 136,
            "ammoInventoryMax": 170,
            "ammoPickup": {
                "min": 5,
                "max": 7
            }
        }
    },
    "Stryk7_RearSight_Default": {},
    "Stryk7_SightMount_Default": {},
    "T32_Ammo_Default": {},
    "T32_BarrelExtension_Default": {},
    "T32_Barrel_Default": {},
    "T32_Body_Default": {},
    "T32_Bolt_Default": {},
    "T32_ChargingHandle_Default": {},
    "T32_FrontSight_Default": {},
    "T32_Grip_Default": {},
    "T32_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 17,
            "ammoInventory": 272,
            "ammoInventoryMax": 340,
            "ammoPickup": {
                "min": 9,
                "max": 11
            }
        }
    },
    "T32_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 33,
            "ammoInventory": 264,
            "ammoInventoryMax": 330,
            "ammoPickup": {
                "min": 9,
                "max": 11
            }
        }
    },
    "T32_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 45,
            "ammoInventory": 180,
            "ammoInventoryMax": 270,
            "ammoPickup": {
                "min": 9,
                "max": 11
            }
        }
    },
    "T32_Mag_QuickPull": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 33,
            "ammoInventory": 264,
            "ammoInventoryMax": 330,
            "ammoPickup": {
                "min": 9,
                "max": 11
            }
        }
    },
    "T32_RearSight_Default": {},
    "T32_SightMount_Default": {},
    "T32_Stock_NoStock": {},
    "T32_Stock_Overline": {
        "displayName": "Overline Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 10
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "T32_Stock_Underline": {
        "displayName": "Underline Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 10
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "TAS12_BarrelExtension_TAS12_Barrel_Extension": {},
    "TAS12_Barrel_TAS12_Barrel_Short": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            },
            {
                "attribute": "ViewKickRecoverySpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            },
            {
                "attribute": "OverallSpread",
                "value": -5
            }
        ]
    },
    "TAS12_Barrel_TAS12_Barrel_Standard": {},
    "TAS12_Body_TAS12_Body_Receiver": {},
    "TAS12_Bolt_TAS12_Bolt_Standard": {},
    "TAS12_ChargingHandle_TAS12_ChargingHandle": {},
    "TAS12_FrontSight_TAS12_FrontSight_Standard": {},
    "TAS12_Grip_TAS12_Grip_Ergonomic": {
        "displayName": "Friction Wrapped",
        "attributeModifierMap": [
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalGunkick",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "TAS12_Grip_TAS12_Grip_Rubber": {
        "displayName": "Diamond Friction",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "TAS12_Grip_TAS12_Grip_Standard": {},
    "TAS12_Grip_TAS12_Grip_Tactical": {
        "displayName": "Patterned Friction",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 5
            },
            {
                "attribute": "HipfireSpread",
                "value": -5
            }
        ]
    },
    "TAS12_RearSight_TAS12_RearSight_Standard": {},
    "TAS12_SightMount_TAS12_SightMount": {},
    "TAS12_Stock_TAS12_Stock_Fixed": {
        "displayName": "Widened Breach Stock",
        "attributeModifierMap": [
            {
                "attribute": "OverallRecoil",
                "value": 15
            },
            {
                "attribute": "OverallSpread",
                "value": 10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "SprintExitPlayRate",
                "value": -10
            }
        ]
    },
    "TAS12_Stock_TAS12_Stock_Foldable": {
        "displayName": "Skeleton Folding Stock",
        "attributeModifierMap": [
            {
                "attribute": "SprintExitPlayRate",
                "value": 15
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": -10
            },
            {
                "attribute": "OverallGunkick",
                "value": -10
            }
        ]
    },
    "TAS12_Stock_TAS12_Stock_Standard": {},
    "VF7S_Ammo_Default": {},
    "VF7S_BarrelExt_Default": {},
    "VF7S_Barrel_CQC": {
        "displayName": "CQC Barrel",
        "attributeModifierMap": [
            {
                "attribute": "TargetingTransitionTime",
                "value": 5
            },
            {
                "attribute": "OverallGunkick",
                "value": 10
            },
            {
                "attribute": "DamageDistance",
                "value": -5
            },
            {
                "attribute": "OverallRecoil",
                "value": -5
            }
        ]
    },
    "VF7S_Barrel_Default": {},
    "VF7S_Barrel_Ranged": {
        "displayName": "Ranged Barrel",
        "attributeModifierMap": [
            {
                "attribute": "DamageDistance",
                "value": 10
            },
            {
                "attribute": "OverallRecoil",
                "value": 5
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -5
            },
            {
                "attribute": "OverallGunkick",
                "value": -5
            }
        ]
    },
    "VF7S_Body_Default": {},
    "VF7S_Bolt_Default": {},
    "VF7S_Foregrip_Default": {},
    "VF7S_FrontSight_Default": {},
    "VF7S_Grip_Default": {},
    "VF7S_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "VF7S_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "VF7S_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 30,
            "ammoInventory": 120,
            "ammoInventoryMax": 180,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "VF7S_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 20,
            "ammoInventory": 160,
            "ammoInventoryMax": 200,
            "ammoPickup": {
                "min": 4,
                "max": 6
            }
        }
    },
    "VF7S_RearSight_Default": {},
    "VF7S_StockMount_Default": {},
    "VF7S_stock_Default": {},
    "VerticalGrip_AngledGhost": {
        "displayName": "Angled Ghost Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            }
        ]
    },
    "VerticalGrip_Cylinder": {
        "displayName": "Cylinder Grip",
        "attributeModifierMap": [
            {
                "attribute": "HipfireSpread",
                "value": 10
            },
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "OverallSwapSpeed",
                "value": -10
            },
            {
                "attribute": "TargetingTransitionTime",
                "value": -10
            }
        ]
    },
    "VerticalGrip_FlatSide": {
        "displayName": "Flat-Side STAB Grip",
        "attributeModifierMap": [
            {
                "attribute": "HipfireSpread",
                "value": 10
            },
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -15
            }
        ]
    },
    "VerticalGrip_QuickHold": {
        "displayName": "Quick Hold Grip",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": 10
            },
            {
                "attribute": "VerticalRecoil",
                "value": -5
            },
            {
                "attribute": "InitialRecoil",
                "value": -5
            }
        ]
    },
    "VerticalGrip_RiggerHandstop": {
        "displayName": "Rigger Handstop",
        "attributeModifierMap": [
            {
                "attribute": "OverallSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": 10
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            },
            {
                "attribute": "InitialRecoil",
                "value": -5
            }
        ]
    },
    "VerticalGrip_Stub": {
        "displayName": "Stub Grip",
        "attributeModifierMap": [
            {
                "attribute": "HipfireSpread",
                "value": 5
            },
            {
                "attribute": "VerticalRecoil",
                "value": 5
            },
            {
                "attribute": "HorizontalRecoil",
                "value": -5
            }
        ]
    },
    "WAR45_Ammo_Default": {},
    "WAR45_BarrelExt_Default": {},
    "WAR45_Barrel_Default": {},
    "WAR45_Body_Default": {},
    "WAR45_Bolt": {},
    "WAR45_ChargingHandle_Default": {},
    "WAR45_FrontSight_Default": {},
    "WAR45_Grip_Default": {},
    "WAR45_Mag_Compact": {
        "displayName": "Compact Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 5
            }
        ],
        "magazineData": {
            "ammoLoaded": 15,
            "ammoInventory": 240,
            "ammoInventoryMax": 300,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "WAR45_Mag_Default": {
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "WAR45_Mag_Extended": {
        "displayName": "Extended Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": -10
            }
        ],
        "magazineData": {
            "ammoLoaded": 35,
            "ammoInventory": 140,
            "ammoInventoryMax": 210,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "WAR45_Mag_Quick": {
        "displayName": "Quick-Pull Mag",
        "attributeModifierMap": [
            {
                "attribute": "OverallReloadPlayRate",
                "value": 15
            }
        ],
        "magazineData": {
            "ammoLoaded": 25,
            "ammoInventory": 200,
            "ammoInventoryMax": 250,
            "ammoPickup": {
                "min": 7,
                "max": 9
            }
        }
    },
    "WAR45_RearSight_Default": {},
    "WAR45_StockMount_Default": {},
    "WAR45_Stock_Default": {}
});