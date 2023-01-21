playerMoves = {
    //ALLIES TEMP
    'allyWalk': {
        type: 1,
        category: 'movement',
        name: "Move",
        description: "1. 2. 1. 2.",
        iconName: "move",
        damage: 0,
        time: 1000,
        cooldownTime: 0,
        range: [5, 5],
    },
    'shadowWalk': {
        type: 1,
        category: 'movement',
        name: "Move",
        description: "1. 2. 1. 2.",
        iconName: "move",
        damage: 0,
        time: 500,
        cooldownTime: 0,
        range: [5, 5],
    },
    'slowWalk': {
        type: 1,
        category: 'movement',
        name: "Move",
        description: "1. 2. 1. 2.",
        iconName: "move",
        damage: 0,
        time: 2000,
        cooldownTime: 0,
        range: [5, 5],
    },
    //
    'punch': {
        type: 0,
        category: 'melee',
        name: "Punch",
        description: "A simple punch, everyone knows how to do it.",
        iconName: "punch",
        damage: 1,
        damageRatios: [.8, 0, 0, 0.2],
        damageRange: [0.9, 1.1],
        time: 3000,
        cooldownTime: 0,
        range: [5, 5],
    },
    'kick': {
        class: 'human',
        sub: 0,
        position: { row: 1, column: 1 },
        type: 0,
        category: 'melee',
        name: "Roundhouse Kick",
        description: "Leverage your lower body strength to knock those criminals on their asses",
        iconName: "kick",
        damage: 2,
        damageRatios: [1.2, 0, 0, 0.4],
        damageRange: [1, 1.2],
        effects: {
            'aoe': 5,
        },
        time: 4000,
        cooldownTime: 5000,
        range: [5, 5],
        cost: 0,
    },
    'jab': {
        class: 'human',
        type: 0,
        sub: 0,
        position: { row: 2, column: 1 },
        category: 'melee',
        name: "Throat Jab",
        description: "A fast jab to the throat momentarily stuns your foe.",
        iconName: "jab",
        damage: 1,
        damageRatios: [.4, 0, 0, 1],
        damageRange: [.95, 1.05],
        effects: {
            'stun': 1,
        },
        time: 1000,
        cooldownTime: 7000,
        range: [5, 5],
        cost: 0,
    },
    'haymaker': {
        class: 'human',
        type: 0,
        sub: 0,
        position: { row: 3, column: 1 },
        category: 'melee',
        name: "Haymaker",
        description: "Prepare to deliver a massive blow to your foe. Slow.",
        iconName: "smash",
        damage: 1,
        damageRatios: [2, 1, 0, 0],
        damageRange: [1.1, 1.4],
        time: 6000,
        cooldownTime: 10000,
        range: [5, 5],
        cost: 0,
    },
    'crowbar': {
        class: 'human',
        type: 0,
        sub: 0,
        position: { row: 4, column: 1 },
        category: 'melee',
        name: "Crowbar",
        description: "This does not seem fair?",
        iconName: "crowbar",
        damage: 1,
        damageRatios: [2.5, 0, 0, 0],
        damageRange: [1, 2],
        time: 3000,
        cooldownTime: 15000,
        range: [6, 6],
        cost: 0,
    },
    'throwingKnife': {
        class: 'human',
        sub: 0,
        position: { row: 5, column: 1 },
        class: 'human',
        type: 0,
        category: 'ranged',
        name: "Throwing Knife",
        description: "It's funnier in the circus",
        iconName: "throwingKnife",
        damage: 1,
        damageRatios: [0, 0, .4, .8],
        damageRange: [0.8, 1],
        time: 2000,
        cooldownTime: 4000,
        range: [0, 60],
        cost: 0,
    },
    'firecrackers': {
        class: 'human',
        type: 0,
        sub: 0,
        position: { row: 6, column: 1 },
        category: 'ranged',
        name: "Firecackers",
        description: "You're more likely to blow off your own fingers than theirs.",
        iconName: "firecrackers",
        damage: 1,
        damageRatios: [0, 0, 1.8, .6],
        damageRange: [1, 2],
        effects: {
            'aoe': 5,
        },
        time: 3000,
        cooldownTime: 9000,
        range: [0, 30],
        cost: 0,
    },
    //Esper
    'spiritFist': {
        class: 'esper',
        type: 0,
        sub: 2,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Spirit Fist",
        description: "Punch though your foe's very life essence.",
        iconName: "spiritFist",
        damage: 1,
        damageRatios: [0, .4, 1, 0],
        damageRange: [0.9, 1.1],
        time: 3000,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'haunting': {
        class: 'esper',
        type: 0,
        sub: 2,
        position: { row: 2, column: 5 },
        category: 'ranged',
        name: "Haunting",
        description: "",
        iconName: "placeholder",
        damage: 1,
        damageRatios: [0, 1, 3, 0],
        damageRange: [0.9, 1.1],
        effects: {
            'stun': 4
        },
        time: 3000,
        cooldownTime: 15000,
        range: [0, 60],
        cost: 0,
    },
    'spiritBurst': {
        class: 'esper',
        type: 0,
        sub: 2,
        position: { row: 4, column: 5 },
        category: 'melee',
        name: "Spirit Burst",
        description: "A short wave of spirit energy erupts from you",
        iconName: "placeholder",
        damage: 1,
        damageRatios: [0, .5, 1, 0],
        damageRange: [0.8, 1.2],
        effects: {
            'aoe': 10
        },
        time: 1000,
        cooldownTime: 4000,
        range: [10, 10],
        cost: 0,
    },
    'spiritMending': {
        class: 'esper',
        type: 2,
        sub: 2,
        position: { row: 4, column: 1 },
        category: 'melee',
        name: "Spirit Mending",
        description: "Enter the spirit world for a moment to recover",
        iconName: "secondWind",
        damage: 1,
        damageRatios: [0, .5, .5, 0],
        damageRange: [0.8, 1.2],
        effects: {
            'heal': 0
        },
        time: 3000,
        cooldownTime: 10000,
        range: [5, 5],
        cost: 0,
    },
    'immaterialStrike': {
        class: 'esper',
        type: 0,
        sub: 0,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Immaterial Strike",
        description: "They don't even know what's hitting them.",
        iconName: "spiritFist",
        damage: 1,
        damageRatios: [0, 0, 1.1, 0],
        damageRange: [0.9, 1.1],
        time: 3000,
        cooldownTime: 0,
        range: [10, 10],
        cost: 0,
    },
    'telekineticProjectile': {
        class: 'esper',
        type: 0,
        sub: 0,
        position: { row: 2, column: 1 },
        category: 'ranged',
        name: "Telekinetic Projectile",
        description: "Use your psionic powers to thrust nearby matter towards your enemy.",
        iconName: "telekineticProjectile",
        damage: 1,
        damageRatios: [0, 0, 1.8, 0],
        damageRange: [0.8, 1.1],
        time: 3000,
        cooldownTime: 5000,
        range: [0, 60],
        cost: 0,
    },
    'psionicPulse': {
        class: 'esper',
        type: 0,
        sub: 0,
        position: { row: 3, column: 1 },
        category: 'melee',
        name: "Psionic Pulse",
        description: "Emit a short-range pulse that damages and knocks back nearby enemies.",
        iconName: "psionicPulse",
        damage: 1,
        damageRatios: [0, .5, 1.5, 0],
        damageRange: [1, 1.2],
        effects: {
            'knockback': 10,
            'aoe': 20,
        },
        time: 3000,
        cooldownTime: 10000,
        range: [20, 20],
        cost: 0,
    },
    'psionicBarrier': {
        class: 'esper',
        type: 2,
        sub: 0,
        position: { row: 3, column: 5 },
        category: 'ranged',
        name: "Psionic Barrier",
        description: "Form a temporary barrier to block attacks.",
        iconName: "psionicBarrier",
        damage: 0,
        damageRatios: [0, 0, 0.5, 0],
        damageRange: [1, 1],
        effects: {
            'shield': 0,
        },
        time: 1000,
        cooldownTime: 20000,
        range: [0, 0],
        cost: 0,
    },
    'mindMelt': {
        class: 'esper',
        type: 0,
        sub: 0,
        position: { row: 5, column: 1 },
        category: 'melee',
        name: "Mind Melt",
        description: "Overwhelm your foe's mind with infinite thoughts.",
        iconName: "placeholder",
        damage: 1,
        damageRatios: [0, 0, 10, 0],
        damageRange: [1, 1],
        time: 6000,
        cooldownTime: 30000,
        range: [60, 60],
        cost: 0,
    },
    'acceleratedPunch': {
        class: 'esper',
        type: 0,
        sub: 1,
        position: { row: 1, column: 2 },
        category: 'melee',
        name: "Accelerated Punch",
        description: "A punch with added impact from sourceless kinetic energy",
        iconName: "punch",
        damage: 0,
        damageRatios: [0, 0, .5, .5],
        damageRange: [1, 1],
        time: 2500,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'repulsionWave': {
        class: 'esper',
        type: 0,
        sub: 1,
        position: { row: 2, column: 1 },
        category: 'melee',
        name: "Repulsion Wave",
        description: "Emit reality-altering waves to give you some space",
        iconName: "repulsionWave",
        damage: 0,
        damageRatios: [0, .1, .2, 0],
        damageRange: [1, 1],
        effects: {
            'knockback': 15,
            'aoe': 30,
            'repeat': 0.75,
        },
        time: 500,
        cooldownTime: 30000,
        range: [30, 30],
        cost: 0,
    },
    'aflamingpunch': {
        class: 'esper',
        type: 0,
        sub: 1,
        position: { row: 3, column: 5 },
        category: 'melee',
        name: "Augment: Flaming Punch",
        description: "Increase the kinetic energy around your fist to produce flames that erupt on impact",
        iconName: "aflamingpunch",
        damage: 0,
        damageRatios: [1, 0, 1, 1],
        damageRange: [1, 1],
        effects: {
            'aoe': 5,
        },
        time: 2500,
        cooldownTime: 3000,
        range: [5, 5],
        cost: 0,
    },
    'afreezingpunch': {
        class: 'esper',
        type: 0,
        sub: 1,
        position: { row: 3, column: 1 },
        category: 'melee',
        name: "Augment: Freezing Punch",
        description: "Sap the kinetic energy around your fist to produce ice that erupts on impact",
        iconName: "afreezingpunch",
        damage: 0,
        damageRatios: [1, 0, 1, 1],
        damageRange: [1, 1],
        effects: {
            'stun': 0.5,
        },
        time: 2500,
        cooldownTime: 3000,
        range: [5, 5],
        cost: 0,
    },
    'conjureLightning': {
        class: 'esper',
        type: 0,
        sub: 1,
        position: { row: 5, column: 1 },
        category: 'ranged',
        name: "Conjure: Lightning",
        description: "Alter the charge in the air to conjure a bolt of lightning",
        iconName: "conjureLightning",
        damage: 0,
        damageRatios: [0, 0, 2, 1.4],
        damageRange: [1, 3],
        effects: {
            'criticalChance': 25,
        },
        time: 3000,
        cooldownTime: 20000,
        range: [0, 100],
        cost: 0,
    },
    //Mutant
    //BIOLOGICAL
    'bulkFist': {
        class: 'mutant',
        type: 0,
        sub: 0,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Bulk Fist",
        description: "Enlarge your fist to deliver a solid blow.",
        iconName: "bulkFist",
        damage: 1,
        damageRatios: [.7, .8, 0, 0],
        damageRange: [1, 1.1],
        time: 4000,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },

    'corrosiveBurst': {
        class: 'mutant',
        type: 0,
        sub: 0,
        position: { row: 2, column: 5 },
        category: 'melee',
        name: "Corrosive Burst",
        description: "Your skin explodes, covering nearby foes in acid.",
        iconName: "corrosiveBurst",
        damage: 1,
        damageRatios: [0, 2, 1.5, 0],
        damageRange: [0.8, 1.2],
        effects: {
            'aoe': 10
        },
        time: 4000,
        cooldownTime: 10000,
        range: [10, 10],
        cost: 0,
    },
    'engulf': {
        class: 'mutant',
        type: 0,
        sub: 0,
        position: { row: 5, column: 1 },
        category: 'melee',
        name: "Engulf",
        description: "Try to completely subdue your target by englufing them. Deals extra damage to damaged enemies.",
        iconName: "engulf",
        damage: 1,
        damageRatios: [0, 7, 0, 0],
        damageRange: [0.9, 1],
        effects: {
            'takedown': 1,
        },
        time: 6000,
        cooldownTime: 30000,
        range: [5, 5],
        cost: 0,
        requiresPassive: { 'mu_0_4': 1 }
    },
    'acidBlob': {
        class: 'mutant',
        type: 0,
        sub: 0,
        position: { row: 4, column: 5 },
        category: 'ranged',
        name: "Acid Blob",
        description: "",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [0, 4, 2, 0],
        damageRange: [0.8, 1.2],
        effects: {
            'aoe': 10
        },
        time: 3000,
        cooldownTime: 15000,
        range: [0, 60],
        cost: 0,
    },
    'summonTentacle': {
        class: 'mutant', type: 4, sub: 1, prestige: 1, position: { row: 8, column: 5 },
        category: 'summon',
        name: "Summon Tentacle",
        description: "",
        iconName: "placeholder",
        damageRatios: [0.1, 0.1, 0.1, 0.1],
        duration: 10000,
        effects: {
            "summon": {"allyTentacle":1},
        },
        time: 1000,
        cooldownTime: 10000,
        range: [5, 30],
        cost: 0,
    },

    //ABOMINATION
    'tendrilWhip': {
        class: 'mutant',
        type: 0,
        sub: 1,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Whiplash",
        description: "Morph your arm out into a tentacle whip to strike",
        iconName: "tentaclePull",
        damage: 1,
        damageRatios: [0, .6, .6, 0],
        damageRange: [1, 1],
        time: 3000,
        cooldownTime: 0,
        range: [10, 10],
        cost: 0,
    },
    'tentaclePull': {
        class: 'mutant',
        type: 0,
        sub: 1,
        position: { row: 2, column: 2 },
        category: 'melee',
        name: "Tendril Pull",
        description: "Morph your arm out into a tentacle and pull your foe closer",
        iconName: "tentaclePull",
        damage: 1,
        damageRatios: [0, 1, .6, 0],
        damageRange: [1, 1],
        effects: {
            'pull': 30
        },
        time: 1500,
        cooldownTime: 5000,
        range: [60, 60],
        cost: 0,
    },
    'distortedVisage': {
        class: 'mutant',
        type: 0,
        sub: 1,
        position: { row: 3, column: 5 },
        category: 'melee',
        name: "Distorted Visage",
        description: "Twist your face into an abominable sight, disgusting nearby enemies to the point of fear.",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [0, 1, 1, 0],
        damageRange: [0.8, 1],
        effects: {
            'stun': 1,
            'aoe': 10,
        },
        time: 2000,
        cooldownTime: 12000,
        range: [10, 10],
        cost: 0,
    },
    'abominableTentacle': {
        class: 'mutant',
        type: 0,
        sub: 1,
        position: { row: 5, column: 1 },
        category: 'melee',
        name: "Abominable Tentacle",
        description: "  ",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [0, 3, 1.5, 0],
        damageRange: [1, 1.5],
        effects: {
            'aoe': 60,
        },
        time: 6000,
        cooldownTime: 30000,
        range: [60, 60],
        cost: 0,
    },
    'summonTentacle': {
        class: 'mutant', type: 4, sub: 1, prestige: 1, position: { row: 8, column: 5 },
        category: 'summon',
        name: "Summon Tentacle",
        description: "",
        iconName: "placeholder",
        damageRatios: [0.1, 0.1, 0.1, 0.1],
        duration: 10000,
        effects: {
            "summon": {"allyTentacle":1},
        },
        time: 1000,
        cooldownTime: 10000,
        range: [5, 30],
        cost: 0,
    },
    //BESTIAL
    'clawStrike': {
        class: 'mutant',
        type: 0,
        sub: 2,
        position: { row: 1, column: 5 },
        category: 'melee',
        name: "Clawstrike",
        description: "Rapidly grow claws out of your fist for a feral strike.",
        iconName: "clawStrike",
        damage: 0,
        damageRatios: [.25, .1, 0, 0.25],
        damageRange: [.8, 1.2],
        time: 1500,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'monkeySmash': {
        class: 'mutant',
        type: 0,
        sub: 2,
        position: { row: 4, column: 5 },
        category: 'melee',
        name: "Monkey Smash",
        description: "With the power of monke strength, smash your foe over the head, stunning him.",
        iconName: "monkeySmash",
        damage: 0,
        damageRatios: [3, 1, 0, 0],
        damageRange: [0.8, 1],
        effects: {
            'stun': 3,
        },
        time: 6000,
        cooldownTime: 12000,
        range: [5, 5],
        cost: 0,
    },
    'tigerPounce': {
        class: 'mutant',
        type: 0,
        sub: 2,
        position: { row: 2, column: 5 },
        category: 'melee',
        name: "Tiger Pounce",
        description: "Leap to you enemy, slashing with your claws.",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [2, 1, 0, 1],
        damageRange: [0.8, 1],
        effects: {
            'rush': 0,
        },
        time: 2000,
        cooldownTime: 12000,
        range: [40, 40],
        cost: 0,
    },
    'quillSalvo': {
        class: 'mutant',
        type: 0,
        sub: 2,
        position: { row: 2, column: 1 },
        category: 'ranged',
        name: "Quill Salvo",
        description: "Rapidly grow and launch a barrage of spikes.",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [0, .5, 0, .5],
        damageRange: [0.8, 1],
        effects: {
            'repeat': 0.75,
        },
        time: 500,
        cooldownTime: 15000,
        range: [0, 50],
        cost: 0,
    },
    'summonWolfpack': {
        class: 'mutant', type: 4, sub: 2, prestige: 1, position: { row: 8, column: 5 },
        category: 'summon',
        name: "Call Wolves",
        description: "",
        iconName: "placeholder",
        damageRatios: [0.02, 0.02, 0.02, 0.02],
        duration: 3000,
        effects: {
            "summon": {"allyWolf":3},
        },
        time: 1000,
        cooldownTime: 15000,
        range: [5, 5],
        cost: 0,
    },
    //Superhuman
    //Might
    'simplePunch': {
        class: 'superhuman',
        type: 0,
        sub: 0,
        position: { row: 1, column: 2 },
        category: 'melee',
        name: "Simple Punch",
        description: "I fear not the man who has practiced 10,000 punches once, but I fear the man who has practiced one punch 10,000 times.",
        iconName: "punch",
        damage: 1,
        damageRatios: [1.2, 0, 0, 0.3],
        damageRange: [0.8, 1.2],
        time: 3000,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
        requiresPassive: { 'sh_0_0': 1 },
    },
    'multipleSimplePunches': {
        class: 'superhuman',
        type: 0,
        sub: 0,
        position: { row: 2, column: 2 },
        category: 'melee',
        name: "Multiple Simple Punches",
        description: "I fear not the man who has practiced 10,000 punches once, but I fear the man who has practiced one 10,000 punches, 10,000 times.",
        iconName: "multipleSimplePunches",
        damage: 1,
        damageRatios: [.3, 0, 0, .3],
        damageRange: [0.8, 1.2],
        effects: {
            'repeat': 0.5,
        },
        time: 500,
        cooldownTime: 2000,
        range: [5, 5],
        cost: 0,
        requiresAbility: { 'simplePunch': 1 },

    },
    'solarPlexusStrike': {
        class: 'superhuman',
        type: 0,
        sub: 0,
        position: { row: 4, column: 5 },
        category: 'melee',
        name: "Solar Plexus Strike",
        description: "Knock the wind out of your foe with an unexpected blow",
        iconName: "solarPlexusStrike",
        damage: 1,
        damageRatios: [2.5, 0, 0, 1.5],
        damageRange: [0.8, 1.2],
        effects: {
            'stun': 4,
        },
        time: 3000,
        cooldownTime: 20000,
        range: [5, 5],
        unlockPoints: 10,
        cost: 0,
        requiresPassive: { 'sh_0_8': 1 }
    },
    'templeCrush': {
        class: 'superhuman',
        type: 0,
        sub: 0,
        position: { row: 5, column: 1 },
        category: 'melee',
        name: "Temple Breaker",
        description: "An atrocious blow that can kill out-right",
        iconName: "solarPlexusStrike",
        damage: 1,
        damageRatios: [6, 0, 0, 0],
        damageRange: [1, 1.2],
        effects: {
            'overwhelm': 0.5,
        },
        time: 3000,
        cooldownTime: 30000,
        range: [5, 5],
        unlockPoints: 10,
        cost: 0,
        requiresPassive: { 'sh_0_3': 1 }
    },
    'simplerPunch': {
        class: 'superhuman', type: 0, sub: 0, prestige: 1, position: { row: 8, column: 2 },
        name: "Simpler Punch", category: 'melee',
        description: "You are so good at punching",
        iconName: "punch",
        damage: 1, damageRatios: [1.44, 0, 0, 0.36], damageRange: [0.8, 1.2],
        time: 2850, cooldownTime: 0, range: [5, 5],
        cost: 0, requiresPassive: { 'sh_0_7': 1 },
    },
    'seriousMode': {
        class: 'superhuman', prestige: 1, type: 3, sub: 0, position: { row: 8, column: 1 },
        category: 'buff', name: "Serious Mode",
        description: "", iconName: "placeHolder",
        duration: 3000,
        effects: {
            damageDealt: ["mult", 2],
        },
        time: 1000, cooldownTime: 20000, range: [5, 5], cost: 0,
    },
    //Titan
    'wideSwing': {
        class: 'superhuman',
        type: 0,
        sub: 1,
        position: { row: 1, column: 2 },
        category: 'melee',
        name: "Wide Swing",
        description: "Abuse your massive size to do the hitting without aiming",
        iconName: "punch",
        damage: 1,
        damageRatios: [1.2, .8, 0, 0],
        damageRange: [1, 1],
        effects: {
            'aoe': 5,
        },
        time: 5000,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
        requiresPassive: { 'sh_1_0': 1 }
    },
    'titanicSwing': {
        class: 'superhuman',
        type: 0,
        sub: 1,
        position: { row: 4, column: 1 },
        category: 'melee',
        name: "Titanic Swing",
        description: "Wind up to deliver the greatest blow your body allows",
        iconName: "smash",
        damage: 1,
        damageRatios: [5, 2, 0, 0],
        damageRange: [1, 1.5],
        effects: {
            'knockback': 20,
        },
        time: 5000,
        cooldownTime: 20000,
        range: [10, 10],
        cost: 0,
        requiresPassive: { 'sh_1_3': 1 }
    },
    'airCannon': {
        class: 'superhuman',
        type: 0,
        sub: 1,
        position: { row: 2, column: 2 },
        category: 'ranged',
        name: "Air Cannon",
        description: "You punch the air so hard that a shockwave is launched towards the enemy",
        iconName: "airCannon",
        damage: 1,
        damageRatios: [1, 0, 0, 0],
        damageRange: [1, 1],
        effects: {
            'aoe': 5,
            'knockback': 5
        },
        time: 3000,
        cooldownTime: 5000,
        range: [5, 50],
        cost: 0,
        requiresPassive: { 'sh_1_0': 1 }
    },
    'groundStomp': {
        class: 'superhuman',
        type: 0,
        sub: 1,
        position: { row: 3, column: 4 },
        category: 'melee',
        name: "Ground Stomp",
        description: "Slam your foot down causing a tremor around you that destabilizes nearby foes",
        iconName: "groundStomp",
        damage: 0,
        damageRatios: [2, 1, 0, 0],
        damageRange: [1, 1],
        effects: {
            'stun': 2,
            'aoe': 10,
        },
        time: 3000,
        cooldownTime: 12000,
        range: [5, 5],
        cost: 0,
    },
    'shockwaveCannon': {
        class: 'superhuman',
        type: 0,
        sub: 1,
        position: { row: 8, column: 2 },
        category: 'ranged',
        name: "Shockwave Cannon",
        description: "You punch the air so hard that a shockwave pierces through everything in its way",
        iconName: "airCannon",
        damage: 1,
        damageRatios: [2, 0.4, 0, 0],
        damageRange: [1, 1],
        effects: {
            'aoe': 50,
            'knockback': 10,
        },
        time: 3000,
        cooldownTime: 10000,
        range: [5, 50],
        cost: 0,
        requiresPassive: { 'sh_1_7': 1 }
    },
    'titansGrit': {
        class: 'superhuman', prestige: 1, type: 3, sub: 0, position: { row: 8, column: 1 },
        category: 'buff', name: "Titan's Grit",
        description: "", iconName: "placeHolder",
        duration: 6000,
        effects: {
            damageTaken: ["mult", 0.5],
        },
        time: 1000, cooldownTime: 20000, range: [5, 5], cost: 0,
    },
    //Spirit
    'kiStrike': {
        class: 'superhuman',
        type: 0,
        sub: 2,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Ki Strike",
        description: "Strike with a ki infused fist, \n which has a chance of dealing great internal damage",
        iconName: "kiBlast",
        damage: 0,
        damageRatios: [.5, 0, .3, 0],
        damageRange: [1, 2],
        time: 2500,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'kiBlast': {
        class: 'superhuman',
        type: 0,
        sub: 2,
        position: { row: 2, column: 1 },
        category: 'ranged',
        name: "Ki Blast",
        description: "Form and discharge a blast of ki from your hand",
        iconName: "kiBlast",
        damage: 0,
        damageRatios: [1, 0, 1, 0],
        damageRange: [1, 1.1],
        effects: {},
        time: 3000,
        cooldownTime: 5000,
        range: [0, 20],
        cost: 0,
    },
    'energyKick': {
        class: 'superhuman',
        sub: 2,
        position: { row: 3, column: 1 },
        type: 0,
        category: 'melee',
        name: "Energy Kick",
        description: "Leverage your lower body strength and ki manipulation to kick a wave of energy",
        iconName: "energyKick",
        damage: 0,
        damageRatios: [1.2, 0, 1, 0.4],
        damageRange: [1, 1.2],
        effects: {
            'aoe': 10,
        },
        time: 3000,
        cooldownTime: 5000,
        range: [5, 5],
        cost: 0,
        requiresPassive: { 'sh_2_4': 5 },
    },
    'secondWind': {
        class: 'superhuman',
        type: 2,
        sub: 2,
        position: { row: 3, column: 5 },
        category: 'ranged',
        name: "Second Wind",
        description: "Take a few breaths and let your supernatural constitution catch up.",
        iconName: "secondWind",
        damage: 0,
        damageRatios: [0.06, .6, 0, 0],
        damageRange: [1, 1],
        effects: {
            'heal': 0,
            'hope': 1,
        },
        time: 1000,
        cooldownTime: 14000,
        range: [0, 0],
        cost: 0,
    },
    'kiRelease': {
        class: 'superhuman', prestige: 1, type: 3, sub: 2, position: { row: 8, column: 1 },
        category: 'buff', name: "Ki Release: First Stage",
        description: "", iconName: "placeHolder",
        duration: 10000,
        effects: {
            strength: ["mult", 1.1],
            agility: ["mult", 1.1],
        },
        time: 1000, cooldownTime: 20000, range: [5, 5], cost: 0,
    },
    //NINJA
    //BLADELORE
    'katana': {
        class: 'ninja',
        type: 0,
        sub: 0,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Katana",
        description: "A ninja's weapon (?).",
        iconName: "katana",
        damage: 0,
        damageRatios: [.4, 0, 0, .6],
        damageRange: [0.9, 1.1],
        time: 2500,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'deflect': {
        class: 'ninja',
        type: 2,
        sub: 0,
        position: { row: 2, column: 5 },
        category: 'melee',
        name: "Deflect",
        description: "Be ready to lessen the blow of the next attack.",
        iconName: "deflect",
        damage: 0,
        damageRatios: [0.1, 0, 0, 0.05],
        damageRange: [1, 1],
        effects: {
            'shield': 0,
            'closeCombat': 0,
        },
        cost: 0,
        time: 500,
        cooldownTime: 5000,
        range: [0, 0],
        cost: 0,
    },
    'bladeStorm': {
        class: 'ninja',
        type: 0,
        sub: 0,
        position: { row: 3, column: 1 },
        category: 'melee',
        name: "Blade Storm",
        description: "Unleash a flurry of slashes in a surge of energy.",
        iconName: "bladeStorm",
        damage: 0,
        damageRatios: [0.13, 0, 0, 0.15],
        damageRange: [0.7, 1.3],
        effects: {
            'repeat': 0.9,
        },
        time: 100,
        cooldownTime: 10000,
        range: [5, 5],
        cost: 0,
    },
    'windSlash': {
        class: 'ninja',
        type: 0,
        sub: 0,
        position: { row: 4, column: 5 },
        category: 'ranged',
        name: "Wind Slash",
        description: "You prepare, and swing your katana so quickly that a blade of wind forms",
        iconName: "windSlash",
        damage: 0,
        damageRatios: [2, 0, 0, 2.5],
        damageRange: [0.9, 1.4],
        effects: {
            criticalChance: 0.2,
        },
        time: 4000,
        cooldownTime: 20000,
        range: [0, 50],
        cost: 0,
    },
    'katana2': {
        class: 'ninja',
        prestige: 1,
        type: 0,
        sub: 0,
        position: { row: 7, column: 1 },
        category: 'melee',
        name: "Katana: Lightning Style",
        description: "You swing your blade so quickly that <br> static electricity builds on every swing",
        iconName: "katana2",
        damage: 0,
        damageRatios: [.48, 0, 0, .72],
        damageRange: [0.9, 1.1],
        effects: {
            criticalChance: 0.05,
        },
        time: 2500,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'lightningStance': {
        class: 'ninja',
        prestige: 1,
        type: 3,
        sub: 0,
        position: { row: 8, column: 1 },
        category: 'buff',
        name: "Lightning Stance: First Form",
        description: "",
        iconName: "placeHolder",
        duration: 10000,
        effects: {
            actionSpeed: ["mult", 3],
        },
        time: 1000,
        cooldownTime: 60000,
        range: [5, 5],
        cost: 0,
    },
    //NINJUTSU
    'kunai': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Kunai",
        description: "Fighting style using a kunai",
        iconName: "throwingKnife",
        damage: 0,
        damageRatios: [0, 0, 0.2, .6],
        damageRange: [1, 1.1],
        time: 2000,
        cooldownTime: 0,
        range: [5, 5],
        cost: 0,
    },
    'shuriken': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 2, column: 1 },
        category: 'ranged',
        name: "Shuriken",
        description: "Rapdily launch a shuriken at your foe.",
        iconName: "shuriken",
        damage: 1,
        damageRatios: [0, 0, 0.1, .3],
        damageRange: [1, 1.1],
        effects: {
            'repeat': 0.75,
        },
        time: 500,
        cooldownTime: 2000,
        range: [10, 60],
        cost: 0,
    },
    'ninjaFireBreath': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 3, column: 5 },
        category: 'melee',
        name: "Technique: Fire Breath",
        description: "Perform the ninja signs allowing you to breath a cone of fire at your foes.",
        iconName: "ninjaFireBreath",
        damage: 0,
        damageRatios: [0, 0, 3, 1],
        damageRange: [1, 1.1],
        effects: {
            'aoe': 20,
        },
        time: 4000,
        cooldownTime: 15000,
        range: [20, 20],
        cost: 0,
    },
    'healingSlave': {
        class: 'ninja',
        type: 2,
        sub: 1,
        position: { row: 2, column: 5 },
        category: 'melee',
        name: "Herbal Salve",
        description: "Apply a salve to your wounds to speed up recovery.",
        iconName: "placeholder",
        damage: 0,
        damageRatios: [0, 0, 0, 0],
        damageRange: [1, 1],
        effects: {
            'heal': 0.1,
        },
        time: 2000,
        cooldownTime: 20000,
        range: [0, 0],
        cost: 0,
    },
    'flashStep': {
        class: 'ninja',
        type: 1,
        sub: 1,
        position: { row: 4, column: 5 },
        category: 'movement',
        name: "Flash Step",
        description: "Use the secret techniques to rapidly travel a greater distance \n or move away from an attack.",
        iconName: "move",
        damage: 0,
        time: 500,
        cooldownTime: 5000,
        range: [20, 10],
        cost: 0,
    },
    'diversion': {
        class: 'ninja',
        type: 1,
        sub: 1,
        position: { row: 4, column: 1 },
        category: 'movement',
        name: "Diversion",
        description: "Drop a smoke cloud and use the opportunity to reappear a distance away",
        iconName: "placeholder",
        damage: 0,
        time: 1000,
        cooldownTime: 15000,
        range: [0, 30],
        cost: 0,
    },
    'ninjaLightningPierce': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 5, column: 1 },
        category: 'melee',
        name: "Technique: Lightning Piercer",
        description: "Enshroud your hand in lightning and then dash to the enemy to strike.",
        iconName: "conjureLightning",
        damage: 0,
        damageRatios: [0, 0, 3, 3],
        damageRange: [1, 1.3],
        effects: {
            'rush': 20,
        },
        time: 2000,
        cooldownTime: 30000,
        range: [20, 20],
        cost: 0,
    },
    'shurikenBarrage': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 8, column: 1 },
        category: 'ranged',
        name: "Shuriken Barrage",
        description: "Launch a number of shuriken at your foes.",
        iconName: "shuriken",
        damage: 1,
        damageRatios: [0, 0, 0.1, .3],
        damageRange: [1, 1.1],
        effects: {
            'repeat': 0.75,
            'aoe': 5,
        },
        time: 500,
        cooldownTime: 2000,
        range: [10, 60],
        cost: 0,
    },
    'ninjaFlooding': {
        class: 'ninja',
        type: 0,
        sub: 1,
        position: { row: 8, column: 1 },
        category: 'melee',
        name: "Technique: Sudden Flooding",
        description: "Summon a great amount of water, flooding the battlefield and slowing enemies.",
        iconName: "placeholder",
        damage: 1,
        damageRatios: [0, 0, 3, 1.5],
        damageRange: [1, 1],
        effects: {
            'aoe': 100,
            'stun': 2,
        },
        time: 4000,
        cooldownTime: 30000,
        range: [100, 100],
        cost: 0,
    },
    //SHADOWCRAFT
    'drainingPalm': {
        class: 'ninja',
        type: 0,
        sub: 2,
        position: { row: 1, column: 1 },
        category: 'melee',
        name: "Draining Palm",
        description: "Learning occult techniques, you use shadow powers to drain your enemies' lifeforce",
        iconName: "drainingPalm",
        damage: 0,
        damageRatios: [0, 2, 2, 0],
        damageRange: [1, 1.2],
        effects: {
            lifesteal: 0.20,
        },
        time: 3000,
        cooldownTime: 10000,
        range: [5, 5],
        cost: 0,
    },
    'shadowStrike': {
        class: 'ninja',
        type: 0,
        sub: 2,
        position: { row: 3, column: 1 },
        category: 'melee',
        name: "Shadow Strike",
        description: "Instantly appear near you enemy and strike them before reappearing at your position.",
        iconName: "jab",
        damage: 1,
        damageRatios: [0, 0, 1, 2],
        damageRange: [1, 1.2],
        time: 2000,
        cooldownTime: 10000,
        range: [30, 30],
        cost: 0,
    },
    'shadowFeint': {
        class: 'ninja',
        type: 0,
        sub: 2,
        position: { row: 2, column: 5 },
        category: 'melee',
        name: "Shadow Feint",
        description: "Mislead your opponent, while striking him simultaneously",
        iconName: "jab",
        damage: 1,
        damageRatios: [0, 0.5, 0.5, 2],
        damageRange: [1, 1.2],
        effects: {
            'stun': 2
        },
        time: 2000,
        cooldownTime: 15000,
        range: [5, 5],
        cost: 0,
    },
    'shadowShroud': {
        class: 'ninja',
        type: 3,
        sub: 2,
        position: { row: 5, column: 3 },
        category: 'buff',
        name: "Shadow Shroud",
        description: "Envelop yourself in shadows",
        iconName: "placeholder",
        damage: 1,
        damageRatios: [0, 1.5, 0.5, 0],
        damageRange: [1, 1.2],
        duration: 10000,
        effects: {
            "damageDealt": ["mult", 1.25],
            "damageTaken": ["mult", 0.75],
        },
        time: 2000,
        cooldownTime: 30000,
        range: [5, 5],
        cost: 0,
    },
    'shadowClone': {
        class: 'ninja', type: 4, sub: 2, prestige: 1, position: { row: 8, column: 5 },
        category: 'summon',
        name: "Manifest Shadow",
        description: "Using your budding mastery over the forbidden arts, you summon a shadow copy of yourself.",
        iconName: "placeholder",
        damageRatios: [0.45, 0.45, 0.45, 0.45],
        duration: 10000,
        effects: {
            "summon": {"shadowClone":1},
        },
        time: 1000,
        cooldownTime: 20000,
        range: [5, 5],
        cost: 0,
    },
    //GENERAL
    'walk': {
        type: 1,
        category: 'movement',
        name: "Move",
        description: "1. 2. 1. 2.",
        iconName: "move",
        damage: 0,
        time: 1000,
        cooldownTime: 0,
        range: [5, 0],
    },
    'wait': {
        type: 1,
        category: 'movement',
        name: "Wait",
        description: "Got nothing to do.",
        iconName: "wait",
        damage: 0,
        time: 1000,
        cooldownTime: 0,
        range: [0, 0],
    }
}