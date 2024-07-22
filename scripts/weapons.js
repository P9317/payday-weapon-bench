const weaponData = {
    "Mosconi12C": {
        "DisplayName": "Mosconi 12 Classic",
        "TypeClassText": "Shotgun",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 32.5,
                    "Distance": 2000
                },
                {
                    "Damage": 12.5,
                    "Distance": 3000
                },
                {
                    "Damage": 4,
                    "Distance": 4000
                },
                {
                    "Damage": 2,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 2,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 1,
                "Max": 2
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ProjectilesPerFiredRound": 7,
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 200
        },
        "ReloadNotifyTime": 1.3333333,
        "ReloadEmptyNotifyTime": 1.9999999
    },
    "R880": {
        "DisplayName": "Reinfeld 880",
        "TypeClassText": "Shotgun",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 25,
                    "Distance": 1500
                },
                {
                    "Damage": 10,
                    "Distance": 2500
                },
                {
                    "Damage": 6.7,
                    "Distance": 3500
                },
                {
                    "Damage": 4,
                    "Distance": 5000
                },
                {
                    "Damage": 2.9,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 7,
            "AmmoInventoryMax": 48,
            "AmmoInventory": 32,
            "AmmoPickup": {
                "Min": 1,
                "Max": 1
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 2500
                },
                {
                    "Multiplier": 1,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Pump",
            "ProjectilesPerFiredRound": 7,
            "RoundsPerMinute": 75
        },
        "ReloadNotifyTime": 1.3666668,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "Commando": {
        "DisplayName": "Ziv Commando",
        "TypeClassText": "SMG",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 42,
                    "Distance": 500
                },
                {
                    "Damage": 35,
                    "Distance": 1000
                },
                {
                    "Damage": 25,
                    "Distance": 1500
                },
                {
                    "Damage": 22,
                    "Distance": 2000
                },
                {
                    "Damage": 16,
                    "Distance": 3000
                },
                {
                    "Damage": 12,
                    "Distance": 5000
                },
                {
                    "Damage": 10,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 25,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 9,
                "Max": 12
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 1100
        },
        "ReloadNotifyTime": 1.5000001,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "Compact7": {
        "DisplayName": "SG Compact-7",
        "TypeClassText": "SMG",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 24,
                    "Distance": 2500
                },
                {
                    "Damage": 22,
                    "Distance": 4000
                },
                {
                    "Damage": 20,
                    "Distance": 5000
                },
                {
                    "Damage": 14,
                    "Distance": 10000
                },
                {
                    "Damage": 10,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 8
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 960
        },
        "ReloadNotifyTime": 1.9000001,
        "ReloadEmptyNotifyTime": 1.9945579
    },
    "PC9": {
        "DisplayName": "FIK PC9",
        "TypeClassText": "SMG",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 32.5,
                    "Distance": 1500
                },
                {
                    "Damage": 25,
                    "Distance": 3000
                },
                {
                    "Damage": 22,
                    "Distance": 5000
                },
                {
                    "Damage": 13,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 200,
            "AmmoPickup": {
                "Min": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 2,
                    "Distance": 3500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 6000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.75,
            "RoundsPerMinute": 860
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666667
    },
    "Bison": {
        "DisplayName": "Sforza Bison",
        "TypeClassText": "Revolver",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 65,
                    "Distance": 1500
                },
                {
                    "Damage": 30,
                    "Distance": 2500
                },
                {
                    "Damage": 25,
                    "Distance": 4500
                },
                {
                    "Damage": 18.5,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 6,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 400
        },
        "ReloadNotifyTime": 3.1666665,
        "ReloadEmptyNotifyTime": 3.1666665
    },
    "Castigo44": {
        "DisplayName": "J&M Castigo 44",
        "TypeClassText": "Revolver",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 90,
                    "Distance": 1500
                },
                {
                    "Damage": 48,
                    "Distance": 3000
                },
                {
                    "Damage": 33.300003,
                    "Distance": 4500
                },
                {
                    "Damage": 20,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 6,
            "AmmoInventoryMax": 36,
            "AmmoInventory": 24,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4500
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1,
            "RoundsPerMinute": 300
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.4999998
    },
    "S40": {
        "DisplayName": "Signature 40",
        "TypeClassText": "Pistol",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 27,
                    "Distance": 2500
                },
                {
                    "Damage": 16.7,
                    "Distance": 4000
                },
                {
                    "Damage": 14.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 12,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 450
        },
        "ReloadNotifyTime": 1.3333333,
        "ReloadEmptyNotifyTime": 1.8333333
    },
    "S403": {
        "DisplayName": "Signature 403",
        "TypeClassText": "Pistol",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 1000
                },
                {
                    "Damage": 35,
                    "Distance": 2500
                },
                {
                    "Damage": 20,
                    "Distance": 4500
                },
                {
                    "Damage": 14.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 17,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 375
        },
        "ReloadNotifyTime": 1.3333334,
        "ReloadEmptyNotifyTime": 1.8333334
    },
    "SPM11": {
        "DisplayName": "SP Model 11",
        "TypeClassText": "Pistol",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 80,
                    "Distance": 1000
                },
                {
                    "Damage": 42.6,
                    "Distance": 2500
                },
                {
                    "Damage": 21.5,
                    "Distance": 4500
                },
                {
                    "Damage": 17,
                    "Distance": 10000
                }
            ],
            "AmmoInventoryMax": 60,
            "AmmoInventory": 48,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 4,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 0.5,
            "RoundsPerMinute": 300
        },
        "ReloadNotifyTime": 1.6666667,
        "ReloadEmptyNotifyTime": 2.1666667
    },
    "Stryk7": {
        "DisplayName": "Stryk 7",
        "TypeClassText": "Pistol",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 44,
                    "Distance": 1000
                },
                {
                    "Damage": 25,
                    "Distance": 2000
                },
                {
                    "Damage": 14.3,
                    "Distance": 4000
                },
                {
                    "Damage": 12.5,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 17,
            "AmmoInventoryMax": 85,
            "AmmoInventory": 68,
            "AmmoPickup": {
                "Min": 4,
                "Max": 5
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "RoundsPerMinute": 450
        },
        "ReloadNotifyTime": 1.3333335,
        "ReloadEmptyNotifyTime": 1.5333333
    },
    "A114": {
        "DisplayName": "SA A144",
        "TypeClassText": "Marksman",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 50,
                    "Distance": 3500
                },
                {
                    "Damage": 31,
                    "Distance": 7000
                },
                {
                    "Damage": 25,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 12,
            "AmmoInventoryMax": 60,
            "AmmoInventory": 36,
            "AmmoPickup": {
                "Min": 2,
                "Max": 3
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 2000
                },
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "ArmorPenetration": 1.3,
            "RoundsPerMinute": 450
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.6666665
    },
    "R900S": {
        "DisplayName": "Reinfeld 900S",
        "TypeClassText": "Marksman",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 160,
                    "Distance": 4000
                },
                {
                    "Damage": 77,
                    "Distance": 6000
                },
                {
                    "Damage": 51.3,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 5,
            "AmmoInventoryMax": 50,
            "AmmoInventory": 25,
            "AmmoPickup": {
                "Min": 0,
                "Max": 2
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 10000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 15000
                }
            ],
            "FireType": "ESBZFireType::Bolt",
            "MaximumPenetrationCount": 1,
            "ArmorPenetration": 2,
            "RoundsPerMinute": 50
        },
        "ReloadNotifyTime": 2.4999998,
        "ReloadEmptyNotifyTime": 2.9999998
    },
    "CAR4": {
        "DisplayName": "CAR-4",
        "TypeClassText": "Assault Rifle",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 30.4,
                    "Distance": 3000
                },
                {
                    "Damage": 25,
                    "Distance": 5000
                },
                {
                    "Damage": 16.7,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Min": 3,
                "Max": 5
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.92,
            "RoundsPerMinute": 720
        },
        "ReloadNotifyTime": 2.3333333,
        "ReloadEmptyNotifyTime": 2.6666667
    },
    "KU59": {
        "DisplayName": "KU-59",
        "TypeClassText": "Assault Rifle",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 40.2,
                    "Distance": 1500
                },
                {
                    "Damage": 36.4,
                    "Distance": 3000
                },
                {
                    "Damage": 30.3,
                    "Distance": 5000
                },
                {
                    "Damage": 20,
                    "Distance": 10000
                },
                {
                    "Damage": 16.7,
                    "Distance": 1000000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Min": 3,
                "Max": 4
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 2000
                },
                {
                    "Multiplier": 3,
                    "Distance": 4000
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.9
        },
        "ReloadNotifyTime": 2.3333335,
        "ReloadEmptyNotifyTime": 2.8350124
    },
    "NWB9": {
        "DisplayName": "Northwest B-9",
        "TypeClassText": "Assault Rifle",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 28,
                    "Distance": 2500
                },
                {
                    "Damage": 24,
                    "Distance": 4500
                },
                {
                    "Damage": 14,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 30,
            "AmmoInventoryMax": 300,
            "AmmoInventory": 120,
            "AmmoPickup": {
                "Max": 7
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1000
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 0.75,
            "RoundsPerMinute": 750
        },
        "ReloadNotifyTime": 1.8333334,
        "ReloadEmptyNotifyTime": 2.1666665
    },
    "VF7S": {
        "DisplayName": "VF-7S",
        "TypeClassText": "Assault Rifle",
        "FireData": {
            "DamageDistanceArray": [
                {
                    "Damage": 36.4,
                    "Distance": 2000
                },
                {
                    "Damage": 33.333336,
                    "Distance": 4000
                },
                {
                    "Damage": 27,
                    "Distance": 7000
                },
                {
                    "Damage": 22.2,
                    "Distance": 10000
                }
            ],
            "AmmoLoaded": 20,
            "AmmoInventoryMax": 200,
            "AmmoInventory": 80,
            "AmmoPickup": {
                "Min": 2,
                "Max": 4
            },
            "CriticalDamageMultiplierDistanceArray": [
                {
                    "Multiplier": 5,
                    "Distance": 1500
                },
                {
                    "Multiplier": 3,
                    "Distance": 3500
                },
                {
                    "Multiplier": 2,
                    "Distance": 6000
                },
                {
                    "Multiplier": 1.5,
                    "Distance": 10000
                }
            ],
            "FireType": "ESBZFireType::Auto",
            "ArmorPenetration": 1.25,
            "RoundsPerMinute": 550
        },
        "ReloadNotifyTime": 2.8333335,
        "ReloadEmptyNotifyTime": 3.1666665
    }
}