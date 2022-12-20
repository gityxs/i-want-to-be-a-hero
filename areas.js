class Area {
    constructor(data) {
        this.name = data.name;
        this.storyUnlock = data.storyUnlock;
        this.background = data.background;
        this.backgroundImage = new Image();
        this.backgroundImage.src = this.background;
        this.enemies = data.enemies;
        this.enemyNum = data.enemyNum;
        this.encounters = data.encounters;
        //this.patrolDifficulty = data.patrolDifficulty;
        this.patrolTime = data.patrolTime;
        this.patrolCounter = 0;
    }
    getEnemies(){
        let arr = [];
        if(this.encounters == undefined){return this.enemies}
        let sumWeights = 0;
        let encounterPicked;
        this.encounters.forEach(encounter => {
            sumWeights += encounter.weight;
        });
        sumWeights = Math.random()*sumWeights;
        for (let index = 0; index < this.encounters.length; index++) {
            const encounter = this.encounters[index];
            sumWeights -= encounter.weight;
            if(sumWeights < 0){
                encounterPicked = encounter;
                break;
            }
        }
        //console.log(encounterPicked);
        let enemies = encounterPicked.enemies;
        Object.keys(enemies).forEach(enemyKey => {
            let weights = enemies[enemyKey];
            sumWeights = arraySum(Object.values(weights));
            //console.log("Total weights: ",sumWeights);
            sumWeights = Math.random()*sumWeights;
            //console.log("Rolled weight:", sumWeights);
            //console.log(Object.keys(weights));
            let numberPicked = 0;
            for (const key of Object.keys(weights)) {
                sumWeights -= weights[key];
                console.log(key);
                if(sumWeights < 0){numberPicked = key;break;}
            }
            console.log("Enemies to spawn: ",numberPicked);
            for (let index = 0; index < numberPicked; index++) {
                arr.push(enemyKey);  
            }
        });
        return arr;
    }
    tick() {
        this.patrolCounter += logicTickTime * player.actionSpeed;
        if (this.patrolCounter >= this.patrolTime) {
            this.patrolCounter = 0;
            return 1;
        } else {
            return 0;
        }
    }
}

const areas = [
    new Area({
        name: "Alley", background: "alleyBackground.png",
        enemies: ["criminal"], enemyNum: 10,
        patrolTime: 3000, storyUnlock: 0,
    }),
    new Area({
        name: "Streets", background: "cyberpunk-street.png",
        enemies: ["thug"], enemyNum: 2, storyUnlock: 5,
        patrolTime: 3000, storyUnlock: 0,
        encounters: [{weight:100,enemies:{"thug":{1:2,2:1,3:1}}}]
    }),
    new Area({
        name: "Bridge", background: "bridgeAreaBackground-1.png",
        enemies: ["prisoner"], enemyNum: 2, storyUnlock: 9,
        patrolTime: 5000, storyUnlock: 0,
        encounters: [{weight:100,enemies:{"prisoner":{1:3,2:2,3:1}}}]
    }),
    new Area({
        name: "Prison Courtyard", background: "prisonCourtyardBackground.png",
        enemies: ["prisoner9"], enemyNum: 2, storyUnlock: 10,
        patrolTime: 6000, storyUnlock: 0,
        
    }),
    new Area({
        name: "Prison Underground", background: "bulkheadBackground.png",
        enemies: ["infectedPrisoner"], enemyNum: 2, storyUnlock: 11,
        patrolTime: 7000, storyUnlock: 0,
        encounters: [{weight:100,enemies:{"infectedPrisoner":{1:5,2:1}}}]
    }),
    new Area({
        name: "Underground Lab", background: "scifilabBackground.png",
        enemies: ["experiment999"], enemyNum: 2, storyUnlock: 12,
        patrolTime: 6000, storyUnlock: 0,
    }),
    new Area({
        name: "The Void", background: "voidBackground.png",
        enemies: ["experiment9999"], enemyNum: 2, storyUnlock: 13,
        patrolTime: 10000, storyUnlock: 0,
    })];