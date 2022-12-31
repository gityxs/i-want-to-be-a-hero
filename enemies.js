var abilityLibrary = {
    'wait': {
        type: 1,
        category: 'movement',
        name: "Wait",
        description: "Got nothing to do.",
        iconName: "placeholder",
        baseDamage: 0,
        time: 1000,
        cooldownTime: 0,
        range: [0, 0],
    },
    'punch': {
        type: 0,
        category:'melee',
        name: "Punch",
        iconName: "punch",
        baseDamage: 1,
        damageRatios: [.8,0,0,0.2],
        time: 3000,
        cooldownTime: 0,
        range: [5,5],

    },
    'smash': {
        type: 0,
        category:'melee',
        name: "Smash",
        iconName: "smash",
        baseDamage: 5,
        damageRatios: [2.5,1,0,0],
        time: 7000,
        cooldownTime: 10000,
        range: [5,5],

    },
    'crowbar': {
        type: 0,
        category:'melee',
        name: "Crowbar",
        iconName: "crowbar",
        baseDamage: 1,
        damageRatios: [3, 0, 0, 0],
        damageRange: [1, 1.1],
        time: 4000,
        cooldownTime: 20000,
        range: [5,5],
    },
    'prisonBaton': {
        type: 0,
        category:'melee',
        name: "Baton",
        iconName: "crowbar",
        baseDamage: 0,
        damageRatios: [1.2, 0, 0, 0],
        damageRange: [1, 1.1],
        time: 3500,
        cooldownTime: 0,
        range: [5,5],
    },
    'taser': {
        type: 0,
        category:'melee',
        name: "Taser",
        iconName: "jab",
        baseDamage: 1,
        damageRatios: [0, 0, 0.5, 0.5],
        damageRange: [1, 1.1],
        effects: {
            'stun': 1,
        },
        time: 3000,
        cooldownTime: 20000,
        range: [5,5],
    },
    'shank': {
        type: 0,
        category:'melee',
        name: "Shank",
        iconName: "throwingKnife",
        baseDamage: 1,
        damageRatios: [2, 0, 0, 1],
        damageRange: [1, 1.1],
        time: 4000,
        cooldownTime: 5000,
        range: [5,5],
    },
    'vomit': {
        type: 0,
        category:'ranged',
        name: "Vomit",
        iconName: "vomit",
        baseDamage: 1,
        damageRatios: [0, 2.5, 0, 0],
        damageRange: [0.9, 1.1],
        time: 3000,
        cooldownTime: 7000,
        range: [0,10],
    },
    'crabWaterJet': {
        type: 0,
        category:'ranged',
        name: "Water Jet",
        iconName: "vomit",
        baseDamage: 0,
        damageRatios: [0, 5, 0, 0],
        damageRange: [0.9, 1.1],
        time: 5000,
        cooldownTime: 7000,
        range: [0,50],
    },
    'mutantSlash': {
        type: 0,
        category:'melee',
        name: "Slash",
        iconName: "mutantSlash",
        baseDamage: 1,
        damageRatios: [1.5, 1, 0, 0],
        damageRange: [1, 1.5],
        time: 4000,
        cooldownTime: 12000,
        range: [10,10],
    },
    'regenerationExperiment': {
        type: 2,
        category:'melee',
        name: "Slash",
        iconName: "secondWind",
        baseDamage: 10,
        damageRatios: [0, 0, 0, 0],
        damageRange: [1, 1],
        effects: {
            'heal': 1,
        },
        time: 2000,
        cooldownTime: 20000,
        range: [10,10],
    },
    'handgun': {
        type: 0,
        category:'ranged',
        name: "Handgun",
        iconName: "handgun",
        baseDamage: 1,
        damageRatios: [0, 0, 1, 1],
        damageRange: [1, 1.2],
        time: 5000,
        cooldownTime: 0,
        range: [10,50],
    },
    'rifle': {
        type: 0,
        category:'ranged',
        name: "Rifle",
        iconName: "handgun",
        baseDamage: 1,
        damageRatios: [0, 0, .6, .6],
        damageRange: [1, 1.2],
        time: 2500,
        cooldownTime: 0,
        range: [10,50],
    },
    'tommy': {
        type: 0,
        category:'ranged',
        name: "Tommy Gun",
        iconName: "handgun",
        baseDamage: 1,
        damageRatios: [.3, 0, 0, .1],
        damageRange: [0.9, 1.1],
        time: 1000,
        cooldownTime: 0,
        range: [10,50],
    },
    'knuckleDuster': {
        type: 0,
        category:'melee',
        name: "Knuckle Duster",
        iconName: "knuckleDuster",
        baseDamage: 1,
        damageRatios: [1.2,0.5,0,0],
        time: 4000,
        cooldownTime: 0,
        range: [5,5],

    },
    'chokeHold': {
        type: 0,
        category:'melee',
        name: "Chokehold",
        iconName: "placeholder",
        baseDamage: 0,
        damageRatios: [2,0,0,0],
        effects: {
            'stun': 3,
        },
        time: 5000,
        cooldownTime: 20000,
        range: [5,5],

    },
    'gutPunch': {
        type: 0,
        category:'melee',
        name: "Gut Punch",
        iconName: "placeHolder",
        baseDamage: 1,
        damageRatios: [1.2,0.5,0,0],
        effects: {
            'stun': 3,
        },
        time: 4000,
        cooldownTime: 20000,
        range: [5,5],

    },
    'walk': {
        type: 1,
        category:'movement',
        name: "Move",
        iconName: "move",
        baseDamage: 0,
        time: 1000,
        cooldownTime: 0,
        range: [5,5],
    }
};

var enemyData = {};

enemyData.criminal = {
    id:"criminal",
    name: "Purse thief",
    maxHealth: 2.5,
    attributes: [.5,.5,0,1],
    healthRegen: 0,
    expReward: 1,
    moneyReward: 0.03,
    reputationReward: 1,
    spriteFile: "crim.png",
    portraitFile: "crimPortrait.png",
    moves: ['punch','walk'],
};
enemyData.thug = {
    id:"thug",
    name: "Thug",
    maxHealth: 15,
    attributes: [5,3,1,2],
    healthRegen: 0,
    expReward: 5,
    moneyReward: 0.05,
    reputationReward: 1,
    spriteFile: "thug.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','walk','crowbar'],
};

enemyData.prisoner = {
    id:"prisoner",
    name: "Prisoner",
    maxHealth: 40,
    attributes: [10,10,1,10],
    healthRegen: 0,
    expReward: 20,
    moneyReward: 0.1,
    reputationReward: 1,
    spriteFile: "prisoner.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','walk','shank'],
};
enemyData.prisoner9 = {
    id:"prisoner9",
    name: "Prisoner 9",
    maxHealth: 120,
    attributes: [50,50,1,5],
    healthRegen: 0.005,
    expReward: 40,
    moneyReward: 0.5,
    reputationReward: 1,
    spriteFile: "prisoner9.png",
    portraitFile: "prisoner9Portrait.png",
    moves: ['punch','smash','walk'],
};
enemyData.prisonguard = {
    id:"prisonguard",
    name: "Prison Guard",
    maxHealth: 100,
    attributes: [30,50,30,50],
    healthRegen: 0,
    expReward: 50,
    moneyReward: 1,
    reputationReward: 1,
    spriteFile: "prisonguard.png",
    portraitFile: "thugPortrait.png",
    moves: ['taser','walk','prisonBaton'],
};
enemyData.infectedPrisoner = {
    id:"infectedPrisoner",
    name: "Strange Prisoner",
    maxHealth: 100,
    attributes: [70,90,1,30],
    healthRegen: 0.005,
    expReward: 100,
    moneyReward: 2,
    reputationReward: 1,
    spriteFile: "infectedPrisoner.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','walk','vomit'],
};
enemyData.experiment999 = {
    id:"experiment999",
    name: "Experiment #999",
    maxHealth: 350,
    attributes: [200,200,10,100],
    healthRegen: 0.005,
    expReward: 250,
    moneyReward: 5,
    reputationReward: 1,
    spriteFile: "experiment999.png",
    portraitFile: "thugPortrait.png",
    moves: ['walk','punch','mutantSlash','vomit','regenerationExperiment'],
};
enemyData.thug2 = {
    id:"thug2",
    name: "Hardened Thug",
    maxHealth: 300,
    attributes: [200,200,25,150],
    healthRegen: 0,
    expReward: 125,
    moneyReward: 3,
    reputationReward: 1,
    spriteFile: "thug.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','walk','crowbar'],
};
enemyData.thug3 = {
    id:"thug3",
    name: "Armed Thug",
    maxHealth: 150,
    attributes: [25,50,200,300],
    healthRegen: 0,
    expReward: 125,
    moneyReward: 3,
    reputationReward: 1,
    spriteFile: "armedThug.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','handgun','walk'],
};
enemyData.thug4 = {
    id:"thug4",
    name: "Hardened Thug",
    maxHealth: 200,
    attributes: [400,200,25,150],
    healthRegen: 0,
    expReward: 150,
    moneyReward: 5,
    reputationReward: 1,
    spriteFile: "thug.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','crowbar','walk'],
};
enemyData.thug5 = {
    id:"thug5",
    name: "Rifle Thug",
    maxHealth: 200,
    attributes: [50,100,400,600],
    healthRegen: 0,
    expReward: 150,
    moneyReward: 4,
    reputationReward: 1,
    spriteFile: "rifleThug.png",
    portraitFile: "thugPortrait.png",
    moves: ['punch','rifle','walk'],
};
enemyData.don = {
    id:"don",
    name: "The Don",
    maxHealth: 1000,
    attributes: [1200,1500,1000,300],
    healthRegen: 0,
    expReward: 1000,
    moneyReward: 50,
    reputationReward: 1,
    spriteFile: "don.png",
    portraitFile: "thugPortrait.png",
    moves: ['tommy','knuckleDuster','walk'],
};
enemyData.donbodyguard = {
    id:"donbodyguard",
    name: "Don's Right Hand",
    maxHealth: 4000,
    attributes: [3000,5000,500,2500],
    healthRegen: 0.005,
    expReward: 3000,
    moneyReward: 50,
    reputationReward: 1,
    spriteFile: "donbodyguard.png",
    portraitFile: "prisoner9Portrait.png",
    moves: ['knuckleDuster','smash','gutPunch','walk'],
};
enemyData.don2 = {
    id:"don2",
    name: "The Don",
    maxHealth: 2000,
    attributes: [2400,3000,2000,3000],
    healthRegen: 0,
    expReward: 3000,
    moneyReward: 150,
    reputationReward: 1,
    spriteFile: "don.png",
    portraitFile: "thugPortrait.png",
    moves: ['tommy','knuckleDuster','walk'],
};
enemyData.experiment9999 = {
    id:"experiment9999",
    name: "Experiment #9999",
    maxHealth: 5000,
    attributes: [5000,2000,100,500],
    healthRegen: 0.005,
    expReward: 2500,
    moneyReward: 200,
    reputationReward: 1,
    spriteFile: "experiment999.png",
    portraitFile: "prisoner9Portrait.png",
    moves: ['walk','punch','smash','mutantSlash','vomit'],
};
enemyData.crabman = {
    id:"crabman",
    name: "The Crabman",
    maxHealth: 10000,
    attributes: [25000,20000,100,3000],
    healthRegen: 0.0025,
    expReward: 25000,
    moneyReward: 2000,
    reputationReward: 1,
    spriteFile: "crabman.png",
    portraitFile: "prisoner9Portrait.png",
    moves: ['walk','punch','smash','mutantSlash','crabWaterJet'],
};
enemyData.ultracrabman = {
    id:"ultracrabman",
    name: "The Ultra Crabman",
    maxHealth: 50000,
    attributes: [250000,200000,1000,30000],
    healthRegen: 0.0025,
    expReward: 25000,
    moneyReward: 2000,
    reputationReward: 1,
    spriteFile: "crabman.png",
    portraitFile: "prisoner9Portrait.png",
    moves: ['walk','punch','smash','mutantSlash','vomit'],
};

