var renderTickTime = 1000 / 15;
var logicTickTime = 1000 / 50;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cBuffer = document.createElement('canvas');
cBuffer.width = 800;
cBuffer.height = 600;
var ctxBuffer = cBuffer.getContext("2d");
ctx.imageSmoothingEnabled = false;
ctxBuffer.imageSmoothingEnabled = false;
var leftWindow = document.getElementById("tabScrollWrapper");
var tabNames = ['story', 'status', 'activity', 'areas', 'class', 'fame', 'prestige', 'info', 'options'];
var sidebar = document.getElementById('sidebar');

const customPortraitInput = document.getElementById("customPortraitInput");
customPortraitInput.addEventListener("change", function () {
    const reader = new FileReader();
    if (this.files[0].size > 2097152) { alert("File is too big!"); return; }
    reader.addEventListener("load", () => {

        document.getElementById("heroPortraitImage").src = reader.result;
        localStorage.setItem("heroPortraitImageData", reader.result);
        console.log(reader.result);
    })
    reader.readAsDataURL(this.files[0]);
})
const resetPortraitButton = document.getElementById("resetPortraitButton");
resetPortraitButton.addEventListener("click", function () {
        document.getElementById("heroPortraitImage").src = "joePortrait.png";
        localStorage.removeItem("heroPortraitImageData");
})
function updatePowerText() {
    document.getElementById('heroPowerText').innerHTML = format(arraySum([
        (Math.sqrt(getEffectiveValue("strength") + 1) - 1), (Math.sqrt(getEffectiveValue("toughness") + 1) - 1),
        (Math.sqrt(getEffectiveValue("mind") + 1) - 1), (Math.sqrt(getEffectiveValue("agility") + 1) - 1)]));
}
updatePowerText();
setInterval(updatePowerText, 15000);
let activeTab = 0;
for (let index = 0; index < tabNames.length; index++) {
    const tabName = tabNames[index]
    let b = document.createElement('div');
    b.setAttribute("class", "sidebarButton pickle");
    b.setAttribute("id", `${tabName}TabButton`);
    b.setAttribute("onclick", `changeTab(${index})`);
    b.innerHTML = tabName;
    sidebar.append(b);
}
changeTab(0);
if (playerStats.storyProgress >= 19) { document.getElementById("prestigeBox").style.visibility = 'visible' } else { document.getElementById("prestigeBox").style.visibility = 'hidden' }
if (playerStats.storyProgress >= 19) { document.getElementById(`${tabNames[6]}TabButton`).setAttribute("class", "sidebarButton pickle"); } else { document.getElementById(`${tabNames[6]}TabButton`).setAttribute("class", "sidebarButtonLocked pickle"); }
if (playerStats.storyProgress >= 8) { document.getElementById("fameBox").style.visibility = 'visible' } else { document.getElementById("fameBox").style.visibility = 'hidden' }
if (playerStats.storyProgress >= 8) { document.getElementById(`${tabNames[5]}TabButton`).setAttribute("class", "sidebarButton pickle"); } else { document.getElementById(`${tabNames[5]}TabButton`).setAttribute("class", "sidebarButtonLocked pickle"); }
var windowInFocus = true;
function checkTabFocused() {
    if (document.visibilityState === 'visible') {
        windowInFocus = true;
    } else {
        windowInFocus = false;
    }
}
var masterTooltip = document.createElement("div");
document.body.append(masterTooltip);
masterTooltip.id = 'masterTooltip';
masterTooltip.className = 'oxanium';
function showMasterTooltip(e) {
    let rect = e.target.getBoundingClientRect();
    let horizontal;
    let vertical;
    //console.log("1) Tooltip height: ", masterTooltip.offsetHeight)
    if (rect.right + 20 + masterTooltip.offsetWidth < window.innerWidth) {
        horizontal = true;
    } else {
        horizontal = false;
    }
    if (rect.bottom + 20 + masterTooltip.offsetHeight > window.innerHeight) {
        vertical = true;
    } else {
        vertical = false;
    }
    if (horizontal) {
        masterTooltip.style.left = (rect.right + 20) + 'px';
        masterTooltip.style.top = rect.top + 'px';
    } else {
        masterTooltip.style.left = (window.innerWidth - masterTooltip.offsetWidth - 20) + 'px';
        masterTooltip.style.top = (rect.bottom + 20) + 'px';
    }
    if (vertical) {
        masterTooltip.style.top = '';
        masterTooltip.style.bottom = (window.innerHeight - rect.bottom) + 'px';
    } else {
        masterTooltip.style.bottom = '';
    }


    // if (rect.right + 20 + masterTooltip.offsetWidth < window.innerWidth) {
    //     masterTooltip.style.left = (rect.right + 20) + 'px';
    //     masterTooltip.style.top = rect.top + 'px';
    // } else {
    //     masterTooltip.style.left = (window.innerWidth - masterTooltip.offsetWidth - 20) + 'px';
    //     masterTooltip.style.top = (rect.bottom + 20) + 'px';
    // }
    //console.log("2) Rect bottom: ", rect.bottom + 20, "Tooltip height: ", masterTooltip.offsetHeight)
    //console.log("Screen height: ", window.innerHeight)
    // if (rect.bottom + 20 + masterTooltip.offsetHeight > window.innerHeight) {
    //     masterTooltip.style.top = '';
    //     masterTooltip.style.bottom = (window.innerHeight - rect.bottom) + 'px';
    // } else {
    //     masterTooltip.style.bottom = '';
    // }
    masterTooltip.style.opacity = 1;
}
function generateAttributeTooltip(attributeId) {
    let secondaryText = "";
    switch (attributeId) {
        case "strength":
            secondaryText = `It also gives you a base damage reduction of ${format(100 * (1 - formulas.damageReduction(getEffectiveValue("strength"))))}%`
            break;
        case "toughness":
            secondaryText = `It also gives you a maximum health of ${format(PLAYER_BASE_HEALTH + formulas.maxHealth(getEffectiveValue("toughness")))}`
            break;
        case "mind":
            secondaryText = `It also modifies your base cooldowns to ${format(100 * formulas.cooldownReduction(getEffectiveValue("mind")))}%`
            break;
        case "agility":
            secondaryText = `It also gives you a base action speed of ${format(100 * formulas.actionSpeed(getEffectiveValue("agility")))}%`
            break;

        default:
            break;
    }
    return `Your ${attributeDisplayNames[attributeId]} base power is ${format(Math.sqrt(getEffectiveValue(attributeId) + 1) - 1)}<br>${secondaryText}`
}
document.addEventListener('mouseover', function (e) {
    if (e.target.classList.contains('tooltip')) {
        masterTooltip.innerHTML = e.target.getElementsByClassName("skilltooltiptext")[0].innerHTML;
        showMasterTooltip(e);
    }
    if ('attributeTooltip' in e.target.dataset) {
        masterTooltip.innerHTML = generateAttributeTooltip(e.target.dataset.attributeTooltip);
        showMasterTooltip(e);
    }
    if ('abilityTooltip' in e.target.dataset) {
        masterTooltip.innerHTML = generateAbilityRequirementTooltip(e.target.dataset.abilityTooltip);
        let rect = e.target.getBoundingClientRect();
        showMasterTooltip(e);
    }
    if ('resourceTooltip' in e.target.dataset) {
        switch (e.target.dataset.resourceTooltip) {
            case "money":
                masterTooltip.innerHTML = "You earn money by defeating enemies.<br> It can be spent on higher level activities!";
                break;
            case "reputation":
                masterTooltip.innerHTML = "You earn reputation by defeating enemies.<br> If you get enough of it you might earn some Fame!";
                break;

            default:
                masterTooltip.innerHTML = "None";
                break;
        }
        showMasterTooltip(e);

    }
});
document.addEventListener('mouseup', function (e) {
    setTimeout(()=>
    {if (e.target.classList.contains('tooltip')) {
        masterTooltip.innerHTML = e.target.getElementsByClassName("skilltooltiptext")[0].innerHTML;
        showMasterTooltip(e);
    }
    if ('abilityTooltip' in e.target.dataset) {
        masterTooltip.innerHTML = generateAbilityRequirementTooltip(e.target.dataset.abilityTooltip);
        let rect = e.target.getBoundingClientRect();
        showMasterTooltip(e);
    }},100);
});
document.addEventListener('mouseout', function (e) {
    if (e.relatedTarget == null) {
        masterTooltip.style.opacity = 0;
        return
    }
    if (e.relatedTarget.classList == undefined) {
        masterTooltip.style.opacity = 0;
    } else
        if (!e.relatedTarget.classList.contains('tooltip')) {
            masterTooltip.style.opacity = 0;
        }
});

document.addEventListener('visibilitychange', checkTabFocused);
function changeTab(index) {
    if (index < 0 || index >= tabNames.length) return;
    leftWindow.scrollTo({ left: index * leftWindow.clientWidth, behaviour: 'smooth', });
    document.getElementById(`${tabNames[activeTab]}TabButton`).setAttribute("class", "sidebarButton pickle");
    document.getElementById(`${tabNames[index]}TabButton`).setAttribute("class", "sidebarButton sidebarButtonActive pickle");
    activeTab = index;

}
var log = document.getElementById("logBox");
var pageY = 0;
function disableScroll() {
    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(0, pageY);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}
document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => { document.getElementById("splashScreen").className += ' splashScreenFadeOut' }, 1000)
    setTimeout(() => { document.getElementById("splashScreen").style.display = 'none' }, 2000)
});
// let isMouseHover = false
// leftWindow.addEventListener("mouseleave", function (event) {
//     pageY = 0;
//     isMouseHover = false
//     enableScroll();
// }, false);
// leftWindow.addEventListener("mouseover", function (event) {
//     if (pageY == 0) pageY = window.pageYOffset;
//     isMouseHover = true
//     disableScroll();
// }, false);

// window.addEventListener("wheel", function (e) {
//     if (!isMouseHover) return;
//     if (e.deltaY > 0) changeTab(activeTab + 1);
//     else changeTab(activeTab - 1);;
// });
function logConsole(text) {
    let lines = log.innerHTML.split(/<br>/);
    if (lines.length > 100) { log.innerHTML = lines.slice(30).join('<br>'); }
    log.innerHTML += "[" + new Date().toLocaleTimeString() + "] " + text + "<br \r>";
    log.scrollTop = log.scrollHeight;
}
class CombatEntity {
    constructor() {
        this.maxHealth = 0;
        this.health = 0;
        this.distance = 0;
        this.initiative = 0;
        this.interrupt = 0;
        this.nextMove = null;
        this.nextMoveInitiative = 0;
        this.damageReduction = 0;
        this.target = null;
        this.spriteSize = { x: 32, y: 32 }
        this.actionSpeed = 1;
    }
    setTarget(target) {
        this.target = target;
    }
    takeDamage(amount) {
        let d = Math.max(0, amount * this.damageReduction); //- this.flatReduction);
        if (this.shield > 0) {
            if (d >= this.shield) {
                d -= this.shield;
                this.shield = 0;
            } else {
                this.shield -= d;
                d = 0;
            }
        }
        this.health -= d;
        let died = (this.health <= 0);
        if (died) {
            this.onDeath();
        }
        return { died, d };
    }
    onDeath() {
        return;
    }
    tick() {
        if (this.health <= 0) {
            return false;
        } else {
            this.health = Math.min(this.health + this.maxHealth * this.healthRegeneration * logicTickTime / 1000, this.maxHealth);
        }
        if (this.nextMove != null) {
            let tickTime = logicTickTime;
            if (this.interrupt > 0) { this.interrupt -= tickTime };
            if (this.interrupt <= 0) {
                this.initiative += 1000 * tickTime / 1000 * this.actionSpeed;
            }

        } else {
            this.think();
        }
        this.tickCooldowns();
        if (this.initiative >= this.nextMoveInitiative) {
            this.initiative -= this.nextMoveInitiative;
            if (this.act(this.target)) { this.think() };
        }
        return true;
    }
    tickCooldowns() {
        console.error("Do not use CombatEntity directly.");
    }
    act(target) {
        console.error("Do not use CombatEntity directly.");
    }
    think() {
        console.error("Do not use CombatEntity directly.");
    }
    draw(context) {
        return;
    }
}
var environmentDistance = 0;

let restRate = 5;
class Player extends CombatEntity {
    constructor(data) {
        super();
        this.data = data;
        this.patrolSpeed = getFameEffect("patrolSpeed");
        this.name = "英雄";
        this.maxHealth = PLAYER_BASE_HEALTH + formulas.maxHealth(getEffectiveValue("toughness"));
        this.health = this.maxHealth;
        this.shield = 0;
        this.flatReduction = formulas.flatReduction(this);
        this.image = new Image(32, 32);
        this.image.src = PLAYER_SPRITES[playerStats.class];
        this.portraitImage = new Image();
        this.portraitImage.src = "joePortrait.png";
        this.damageReduction = formulas.damageReduction(getEffectiveValue("strength"));
        this.damageReduction *= getSecondaryAttribute("damageTaken");
        this.actionSpeed = formulas.actionSpeed(getEffectiveValue("agility"));
        this.actionSpeed *= getSecondaryAttribute("actionSpeed");
        this.powerMultiplier = getSecondaryAttribute("powerMultiplier");
        this.healthRegeneration = getSecondaryAttribute("healthRegeneration");
        this.criticalChance = getSecondaryAttribute("criticalChance");
        this.overwhelm = getSecondaryAttribute("overwhelm");
        this.takedown = getSecondaryAttribute("takedown");
        this.dodgeChance = getSecondaryAttribute("dodgeChance");
        this.cooldownReduction = formulas.cooldownReduction(getEffectiveValue("mind"));
        this.cooldownReduction /= getSecondaryAttribute("cooldownReduction");
        this.moveIntention = 1;
        this.nextMoveKey = null;
        this.equippedAbilities = [...playerStats.equippedAbilities];
        this.equippedAbilities.forEach(ability => {
            if (ability != null) {
                if (!playerStats.abilityCooldowns.hasOwnProperty(ability)) {
                    playerStats.abilityCooldowns[ability] = 0;
                }
            }
        });

    }
    tickCooldowns() {
        playerStats.equippedAbilities.forEach(ability => {
            playerStats.abilityCooldowns[ability] -= logicTickTime;
        });
    }

    act(target) {
        if (target == null) {
            return;
        }
        let dist = target.distance;
        let repeat = false;
        switch (this.nextMove.type) {
            case 0:
                let inRange = false;

                switch (this.nextMove.category) {
                    case 'melee':
                        inRange = (this.nextMove.range[0] >= dist);
                        break;
                    case 'ranged':
                        inRange = (this.nextMove.range[1] >= dist && this.nextMove.range[0] <= dist);
                        break;
                    default:
                        console.log("UNKOWN ABILITY CATEGORY")
                        break;
                }
                if (this.nextMove.hasOwnProperty("effects")){
                    if(this.nextMove.effects.hasOwnProperty("rush")){
                        if (this.moveIntention >= 0){
                        let deltaPlus = Math.min(Math.abs(dist - 5), this.nextMove.range[0]);
                        encounter.enemyArray.forEach((enemy) => { if (enemy != null) enemy.distance = Math.max(5, enemy.distance - deltaPlus); })
                        environmentDistance -= deltaPlus;
                        }
                    }
                }
                if (inRange) {

                    let moveTakedown = this.takedown;
                    let moveCritChance = this.criticalChance;
                    let moveLifesteal = 0;
                    let moveStun = 0;
                    if (this.nextMove.hasOwnProperty("effects")) {
                        Object.keys(this.nextMove.effects).forEach(effect => {
                            switch (effect) {
                                case "stun":
                                    moveStun += this.nextMove.effects[effect];
                                    break;
                                case "lifesteal":
                                    moveLifesteal += this.nextMove.effects[effect];
                                    break;
                                case "criticalChance":
                                    moveCritChance += this.nextMove.effects[effect];
                                    break;
                                case "takedown":
                                    moveTakedown += this.nextMove.effects[effect];
                                    break;
                                case "repeat":
                                    if (Math.random() < this.nextMove.effects[effect]) {
                                        repeat = true;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        });
                    }
                    let isCrit = (Math.random() < moveCritChance);
                    let d1 = this.nextMove.damage
                        + this.nextMove.damageRatios[0] * (Math.sqrt(getEffectiveValue("strength") + 1) - 1)
                        + this.nextMove.damageRatios[1] * (Math.sqrt(getEffectiveValue("toughness") + 1) - 1)
                        + this.nextMove.damageRatios[2] * (Math.sqrt(getEffectiveValue("mind") + 1) - 1)
                        + this.nextMove.damageRatios[3] * (Math.sqrt(getEffectiveValue("agility") + 1) - 1);
                    d1 = d1 * (this.nextMove.damageRange[0] + Math.random() * (this.nextMove.damageRange[1] - this.nextMove.damageRange[0]));
                    let d2 = (isCrit ? 1.5 : 1) * d1;
                    let d3 = d2 * (1 + target.health / target.maxHealth * this.overwhelm) * (1 + (1 - target.health / target.maxHealth) * moveTakedown);

                    if (this.nextMove.hasOwnProperty("effects")) {
                        Object.keys(this.nextMove.effects).forEach(effect => {
                            switch (effect) {
                                case "stun":
                                    target.interrupt += moveStun * 1000;
                                case "repeat":
                                    break;
                                case "takedown":
                                    break;
                                case "knockback":
                                    target.distance += this.nextMove.effects[effect];
                                    break;
                                case "pull":
                                    target.distance = Math.max(5, target.distance - this.nextMove.effects[effect]);
                                    break;
                                case "aoe":
                                    encounter.enemyArray.forEach(enemy => {
                                        if (enemy == null) return;
                                        if (enemy == target) return;
                                        let originDistance;
                                        switch (this.nextMove.category) {
                                            case "melee":
                                                originDistance = this.distance;
                                                break;
                                            case "ranged":
                                                originDistance = target.distance;
                                                break;
                                            default:
                                                console.error("SKILL CATEGORY NOT COMPATIBLE WITH AOE");
                                                break;
                                        }
                                        if (Math.abs(originDistance - enemy.distance) <= this.nextMove.effects[effect]) {
                                            if (this.nextMove.effects.hasOwnProperty("knockback")) {
                                                enemy.distance += this.nextMove.effects['knockback'];
                                            }
                                            if (moveStun > 0) {
                                                enemy.interrupt += moveStun * 1000;
                                            }
                                            let { died: killingBlow, d: dr } = enemy.takeDamage(d3);
                                            logConsole(`Hero <span style="color:red">${isCrit ? "critically " : ""}</span>hit ${this.target.name} with <span style="color:white">${playerMoves[this.nextMoveKey].name}</span> for <span style="color:white">${format(dr)}</span>(${format(d3)}) damage.`);
                                        }
                                    })
                                    break;

                                default:
                                    break;
                            }
                        });
                    }

                    let { died: killingBlow, d: dr } = target.takeDamage(d3);
                    logConsole(`Hero <span style="color:red">${isCrit ? "critically " : ""}</span>hit ${this.target.name} with <span style="color:white">${playerMoves[this.nextMoveKey].name}</span> for <span style="color:white">${format(dr)}</span>(${format(d3)}) damage.`);
                    if (moveLifesteal > 0) { this.health = Math.min(this.health + dr * moveLifesteal, this.maxHealth); logConsole(`Hero healed for ${format(dr * moveLifesteal)}`); }
                    if (killingBlow) this.target = null;
                }
                
                break;
            case 1:
                let deltaMinus = Math.min(playerStats.engagementRange - dist, this.nextMove.range[1]);
                let deltaPlus = Math.min(Math.abs(dist - playerStats.engagementRange), this.nextMove.range[0]);
                if (this.moveIntention > 0) {
                    encounter.enemyArray.forEach((enemy) => { if (enemy != null) enemy.distance = Math.max(5, enemy.distance - deltaPlus); })
                    //this.target.distance -= deltaPlus;
                    environmentDistance -= deltaPlus;
                } else {
                    encounter.enemyArray.forEach((enemy) => { if (enemy != null) enemy.distance = Math.max(5, enemy.distance + deltaMinus) })
                    //this.target.distance += deltaMinus;
                    environmentDistance += deltaMinus;
                }
                break;
            case 2:
                if (this.nextMove.hasOwnProperty("effects")) {
                    Object.keys(this.nextMove.effects).forEach(effect => {
                        let amount;
                        switch (effect) {
                            case "heal":
                                amount = this.maxHealth * this.nextMove.effects.heal
                                    + this.nextMove.damage
                                    + this.nextMove.damageRatios[0] * (Math.pow(getEffectiveValue("strength") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[1] * (Math.pow(getEffectiveValue("toughness") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[2] * (Math.pow(getEffectiveValue("mind") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[3] * (Math.pow(getEffectiveValue("agility") + 1, HEALTH_GROWTH_EXPONENT) - 1);
                                if (this.nextMove.effects.hasOwnProperty("hope")) { amount *= (1 + (1 - this.health / this.maxHealth) * this.nextMove.effects.hope); }
                                this.health = Math.min(this.health + amount, this.maxHealth);
                                logConsole(`Hero healed for ${format(amount)}`);
                                break;
                            case "shield":
                                amount = this.nextMove.damage
                                    + this.nextMove.damageRatios[0] * (Math.pow(getEffectiveValue("strength") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[1] * (Math.pow(getEffectiveValue("toughness") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[2] * (Math.pow(getEffectiveValue("mind") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[3] * (Math.pow(getEffectiveValue("agility") + 1, HEALTH_GROWTH_EXPONENT) - 1);
                                if (this.nextMove.effects.hasOwnProperty("closeCombat")) {
                                    if (dist <= 5) amount *= 1 + this.nextMove.effects.closeCombat;
                                }
                                if (amount > this.shield){
                                     this.shield = amount;
                                     logConsole(`Hero shielded for ${format(amount)} from ${this.nextMove.name}`);}
                                break;
                            default:
                                break;
                        }
                    });
                }
                break;
            default:
                logConsole("ERROR: Not a valid move type");
                break;
        }
        if (repeat) {
            if (target.health <= 0 || target == null) {
                return true;
            } else {
                return false;
            }

        } else {
            playerStats.abilityCooldowns[this.nextMoveKey] = this.nextMove.cooldownTime * this.cooldownReduction;
            return true;
        }
    }
    think() {
        if (this.target == null) {
            switch (gameState) {
                case "InCombat":
                    let closest = -1;
                    let distance = Infinity;
                    for (let index = 0; index < encounter.enemyArray.length; index++) {
                        const enemy = encounter.enemyArray[index];
                        if (enemy == null || enemy.health <= 0) { continue }
                        else {
                            if (enemy.distance < distance) {
                                distance = enemy.distance;
                                closest = index;
                            }
                        }
                    }
                    if (closest != -1) { this.target = encounter.enemyArray[closest]; }
                    else {
                        document.getElementById("playerMoveText").innerHTML = "No target (IN COMBAT)";
                        return;
                    }
                    break;
                default:
                    document.getElementById("playerMoveText").innerHTML = "No target";
                    return;
                    break;
            }

        }
        let dist = this.target.distance;
        if (dist > playerStats.engagementRange) { this.moveIntention = 1; }
        else if (dist < playerStats.engagementRange) { this.moveIntention = -1; }
        else { this.moveIntention = 0; }
        let weights = Array(this.equippedAbilities.length).fill(0);
        for (let index = 0; index < this.equippedAbilities.length; index++) {
            let k = this.equippedAbilities[index];
            let ability = playerMoves[k];
            if (k == null) { weights[index] = -1; continue; }
            if (playerStats.abilityCooldowns[k] > 0) { weights[index] = -1; continue; }
            if (ability.type == 0) {
                switch (ability.category) {
                    case 'melee':
                        weights[index] = (ability.range[0] >= dist ? arraySum(ability.damageRatios) / ability.time * 100000 : 0);
                        break;
                    case 'ranged':
                        weights[index] = ((ability.range[1] >= dist && ability.range[0] <= dist) ? arraySum(ability.damageRatios) / ability.time * 100000 : 0);
                        break;
                    default:
                        console.log("UNKOWN ABILITY CATEGORY")
                        break;
                }
                if (ability.hasOwnProperty("effects")) {
                    if (ability.effects.hasOwnProperty('pull')) {
                        if (this.target.distance > 5) { weights[index] *= 10; }
                    }
                }
            }
            if (ability.type == 1) {
                let delta = dist - playerStats.engagementRange;
                weights[index] = delta * this.moveIntention * (this.moveIntention > 0 ? ability.range[0] / 100 : ability.range[1]);
            }
            if (ability.type == 2) {
                if (ability.hasOwnProperty("effects")) {
                    if (ability.effects.hasOwnProperty('heal')) {
                        let amount = this.maxHealth * ability.effects.heal
                            + ability.damageRatios[0] * (Math.pow(getEffectiveValue("strength") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[1] * (Math.pow(getEffectiveValue("toughness") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[2] * (Math.pow(getEffectiveValue("mind") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[3] * (Math.pow(getEffectiveValue("agility") + 1, HEALTH_GROWTH_EXPONENT) - 1);
                        if (this.maxHealth - this.health > amount) {
                            weights[index] = 100;
                        }
                    }
                    if (ability.effects.hasOwnProperty('shield')) {
                        let amount = ability.damage
                            + ability.damageRatios[0] * (Math.pow(getEffectiveValue("strength") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[1] * (Math.pow(getEffectiveValue("toughness") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[2] * (Math.pow(getEffectiveValue("mind") + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[3] * (Math.pow(getEffectiveValue("agility") + 1, HEALTH_GROWTH_EXPONENT) - 1);
                        if (this.shield <= 0.2 * amount) {
                            weights[index] = 100;
                        }
                    }
                }
            }
        }

        const max = Math.max(...weights);
        //console.log("Weights:",weights," Max:",max)
        let indexes = [];
        let moveKey;
        if (max > 0) {
            for (let index = 0; index < weights.length; index++) {
                if (weights[index] === max) {
                    indexes.push(index);
                }
            }
            let pick;
            if (indexes.length == 1) {
                pick = 0;
            } else {
                pick = Math.floor(Math.random() * indexes.length);
            }
            moveKey = this.equippedAbilities[indexes[pick]];
        }

        if (moveKey == undefined) moveKey = 'wait';
        this.nextMove = playerMoves[moveKey];
        this.nextMoveKey = moveKey;
        this.nextMoveInitiative = this.nextMove.time;
        document.getElementById("playerMoveText").innerHTML = moveKey;

    }

    draw(context) {
        let canvasX = scaleDistance(this.distance);
        let canvasY = cBuffer.height - 40;
        context.drawImage(this.image, canvasX - 128 / 2, canvasY - 128, 128, 128);
        if (this.nextMove != null) drawSkillIcon(context, this.nextMove.iconName, canvasX, canvasY);
    }
    rest() {
        let restRate = 0;
        switch (gameState) {
            case 'InRest':
                restRate = this.data.restRate / 2;
                break;
            case 'InDead':
                restRate = this.data.restRate;
                break;
            default:
                console.error('UNRECOGNIZED GAME STATE FOR rest()');
                break;
        }
        this.health = Math.min(this.health + this.maxHealth * restRate * logicTickTime / 1000, this.maxHealth);
    }
    takeDamage(amount) {
        let d = Math.max(0, amount * this.damageReduction - this.flatReduction);
        if (this.dodgeChance > Math.random()) {
            logConsole(`${this.name} dodged ${format(amount)} damage!`)
            return 0;
        }
        if (this.shield > 0) {
            if (d >= this.shield) {
                d -= this.shield;
                this.shield = 0;
            } else {
                this.shield -= d;
                d = 0;
            }
        }
        this.health -= d;
        return d;
    }
}
class Enemy extends CombatEntity {
    constructor(enemyData, distance, drawIndex = 0) {
        super();
        this.data = enemyData;
        this.abilityCooldowns = {};
        enemyData.moves.forEach(ability => {
            this.abilityCooldowns[ability] = 0;
        });
        this.name = enemyData.name;
        this.drawIndex = drawIndex;
        this.engagementRange = 5;
        this.moveIntention = 1;
        if (enemyData.hasOwnProperty("engagementRange")) this.engagementRange = enemyData.engagementRange;
        this.maxHealth = enemyData.maxHealth;
        this.health = this.maxHealth
        this.shield = 0;
        this.damageReduction = formulas.damageReduction(enemyData.attributes[1]);
        this.actionSpeed = formulas.actionSpeed(enemyData.attributes[3]);
        this.healthRegeneration = enemyData.healthRegen;
        this.cooldownReduction = 1;
        this.distance = distance;
        this.name = enemyData.name;
        this.image = new Image();
        this.image.src = enemyData.spriteFile;
        this.portraitImage = new Image(32, 32);
        this.portraitImage.src = enemyData.portraitFile;
        this.nextMoveKey = null;
    }
    tickCooldowns() {
        this.data.moves.forEach(ability => {
            this.abilityCooldowns[ability] -= logicTickTime;
        });
    }
    act(target) {
        if (target == null) {
            return;
        }
        let repeat = false;
        switch (this.nextMove.type) {
            case 0:
                let inRange = false;
                let dist = this.distance;
                switch (this.nextMove.category) {
                    case 'melee':
                        inRange = (this.nextMove.range[0] >= dist);
                        break;
                    case 'ranged':
                        inRange = (this.nextMove.range[1] >= dist && this.nextMove.range[0] <= dist);
                        break;
                    default:
                        console.log("UNKOWN ABILITY CATEGORY")
                        break;
                }
                if (inRange) {
                    let moveTakedown = 0;
                    let moveCritChance = 0;
                    let moveLifesteal = 0;
                    let moveStun = 0;
                    if (this.nextMove.hasOwnProperty("effects")) {
                        Object.keys(this.nextMove.effects).forEach(effect => {
                            switch (effect) {
                                case "stun":
                                    moveStun += this.nextMove.effects[effect];
                                    break;
                                case "lifesteal":
                                    moveLifesteal += this.nextMove.effects[effect];
                                    break;
                                case "criticalChance":
                                    moveCritChance += this.nextMove.effects[effect];
                                    break;
                                case "takedown":
                                    moveTakedown += this.nextMove.effects[effect];
                                    break;
                                case "repeat":
                                    if (Math.random() < this.nextMove.effects[effect]) {
                                        repeat = true;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        });
                    }
                    let isCrit = (Math.random() < moveCritChance);
                    let d1 = this.nextMove.baseDamage
                        + this.nextMove.damageRatios[0] * (Math.sqrt(this.data.attributes[0] + 1) - 1)
                        + this.nextMove.damageRatios[1] * (Math.sqrt(this.data.attributes[1] + 1) - 1)
                        + this.nextMove.damageRatios[2] * (Math.sqrt(this.data.attributes[2] + 1) - 1)
                        + this.nextMove.damageRatios[3] * (Math.sqrt(this.data.attributes[3] + 1) - 1);
                    d1 = d1 * (this.nextMove.damageRange[0] + Math.random() * (this.nextMove.damageRange[1] - this.nextMove.damageRange[0]));
                    let d2 = (isCrit ? 1.5 : 1) * d1;
                    let dr = target.takeDamage(d2);
                    if (this.nextMove.hasOwnProperty("effects")) {
                        Object.keys(this.nextMove.effects).forEach(effect => {
                            switch (effect) {
                                case "stun":
                                    target.interrupt = moveStun * 1000;
                                case "repeat":
                                    break;
                                case "takedown":
                                    break;
                                case "knockback":
                                    encounter.enemyArray.forEach(enemy => {
                                        if (enemy == null) return;
                                        enemy.distance += this.nextMove.effects[effect];
                                    });
                                    environmentDistance += this.nextMove.effects[effect];
                                    break;
                                case "pull":
                                    this.distance = Math.max(5, this.distance - this.nextMove.effects[effect]);
                                    break;
                                case "aoe":
                                    //console.log("NOT IMPLEMENTED");
                                    break;

                                default:
                                    break;
                            }
                        });
                    }
                    logConsole(`${this.name} <span style="color:red">${isCrit ? "critically " : ""}</span> hit ${this.target.name} with <span style="color:yellow">${this.nextMove.name}</span> for <span style="color:yellow">${format(dr)}</span>(${format(d1)}) damage.`);
                }
                break;
            case 1:
                let deltaMinus = Math.min(this.engagementRange - this.distance, this.nextMove.range[1]);
                let deltaPlus = Math.min(Math.abs(this.distance - this.engagementRange), this.nextMove.range[0]);
                if (this.moveIntention > 0) {
                    this.distance -= deltaPlus;
                } else {
                    this.distance += deltaMinus;
                }

                if (!['Move', 'Wait'].includes(this.nextMove.name)) logConsole(`${this.name} used ${this.nextMove.name}!`);
                break;
            case 2:
                if (this.nextMove.hasOwnProperty("effects")) {
                    Object.keys(this.nextMove.effects).forEach(effect => {
                        let amount;
                        switch (effect) {
                            case "heal":
                                amount = this.nextMove.baseDamage / 100 * this.maxHealth;
                                if (this.nextMove.effects.hasOwnProperty("hope")) { amount *= (1 + (1 - this.health / this.maxHealth) * this.nextMove.effects.hope); }
                                this.health = Math.min(this.health + amount, this.maxHealth);
                                logConsole(`${this.name} healed for ${format(amount)} from ${this.nextMove.name}`);
                                break;
                            case "shield":
                                amount = this.nextMove.baseDamage / 100 * this.maxHealth;
                                if (amount > this.shield) this.shield = amount;
                                break;
                            case "allyshield":
                                amount =
                                    this.nextMove.damageRatios[0] * (Math.pow(this.data.attributes[0] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[1] * (Math.pow(this.data.attributes[1] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[2] * (Math.pow(this.data.attributes[2] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                                    + this.nextMove.damageRatios[3] * (Math.pow(this.data.attributes[3] + 1, HEALTH_GROWTH_EXPONENT) - 1);
                                if ((player.target != null) && (player.target != this))
                                    if (amount > player.target.shield) player.target.shield = amount;
                                logConsole(`${this.name} used ${this.nextMove.name} on ${player.target.name}`);
                                break;
                            default:
                                break;
                        }
                    });
                }
                break;
            default:
                logConsole("ERROR: Not a valid move type");
                break;
        }
        if (repeat) {
            if (target.health <= 0 || target == null) {
                return true;
            } else {
                return false;
            }

        } else {
            this.abilityCooldowns[this.nextMoveKey] = this.nextMove.cooldownTime * this.cooldownReduction;
            return true;
        }
    }
    think() {
        if (this.target == null) {
            document.getElementById("enemyMoveText").innerHTML = "No target";
            return;
        }
        if (this.distance > this.engagementRange) { this.moveIntention = 1; }
        else if (this.distance < this.engagementRange) { this.moveIntention = -1; }
        else { this.moveIntention = 0; }
        let dist = this.distance;
        let weights = Array(this.data.moves.length).fill(0);
        for (let index = 0; index < this.data.moves.length; index++) {
            let k = this.data.moves[index];
            let ability = abilityLibrary[k];
            if (this.abilityCooldowns[k] > 0) { weights[index] = -1; continue; }
            if (ability.type == 0) {
                switch (ability.category) {
                    case 'melee':
                        weights[index] = (ability.range[0] >= dist ? arraySum(ability.damageRatios) / ability.time * 100000 : 0);
                        break;
                    case 'ranged':
                        weights[index] = ((ability.range[1] >= dist && ability.range[0] <= dist) ? arraySum(ability.damageRatios) / ability.time * 100000 : 0);
                        break;
                    default:
                        console.log("UNKOWN ABILITY CATEGORY")
                        break;
                }
            }
            if (ability.type == 1) {
                let delta = this.distance - this.engagementRange;
                weights[index] = delta * this.moveIntention * (this.moveIntention > 0 ? ability.range[0] / 100 : ability.range[1]);
            }
            if (ability.type == 2) {
                if (ability.hasOwnProperty("effects")) {
                    let amount;
                    if (ability.effects.hasOwnProperty('heal')) {
                        amount = ability.baseDamage / 100 * this.maxHealth;
                        if (this.maxHealth - this.health > amount) {
                            weights[index] = 100;
                        }
                    }
                    if (ability.effects.hasOwnProperty('shield')) {
                        amount = ability.baseDamage / 100 * this.maxHealth;
                        if (this.shield <= 0.2 * amount) {
                            weights[index] = 100;
                        }
                    }
                    if (ability.effects.hasOwnProperty('allyshield')) {
                        amount =
                            ability.damageRatios[0] * (Math.pow(this.data.attributes[0] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[1] * (Math.pow(this.data.attributes[1] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[2] * (Math.pow(this.data.attributes[2] + 1, HEALTH_GROWTH_EXPONENT) - 1)
                            + ability.damageRatios[3] * (Math.pow(this.data.attributes[3] + 1, HEALTH_GROWTH_EXPONENT) - 1);
                        if ((player.target.shield <= 0.2 * amount) && (player.target != this)) {
                            weights[index] = 100;
                        }
                    }
                }
            }
        }
        const max = Math.max(...weights);
        const indexes = [];
        let moveKey;
        if (max > 0) {
            for (let index = 0; index < weights.length; index++) {
                if (weights[index] === max) {
                    indexes.push(index);
                }
            }
            let pick;
            if (indexes.length == 1) {
                pick = 0;
            } else {
                pick = Math.floor(Math.random() * indexes.length);
            }
            moveKey = this.data.moves[indexes[pick]];
        }

        if (moveKey == undefined) { moveKey = 'wait'; }
        this.nextMoveKey = moveKey;
        this.nextMove = abilityLibrary[this.nextMoveKey];
        this.nextMoveInitiative = this.nextMove.time;
    }
    draw(context) {
        let canvasX = scaleDistance(this.distance);
        let canvasY = cBuffer.height - 40 - (this.drawIndex) * 10;

        context.drawImage(this.image, canvasX - this.image.width * 2, canvasY - this.image.height * 4, this.image.width * 4, this.image.height * 4);
        drawInfoBars(context, this, canvasX, canvasY);
        if (this.nextMove != null) drawSkillIcon(context, this.nextMove.iconName, canvasX, canvasY);
        if (player.target == this) {
            let offset = 6 * Math.sin(Date.now() / 150);
            context.lineWidth = 7;
            context.strokeStyle = 'black';
            context.beginPath();
            context.moveTo(canvasX - 13, canvasY - 173 - offset);
            context.lineTo(canvasX, canvasY - 160 - offset);
            context.lineTo(canvasX + 13, canvasY - 173 - offset);
            context.stroke();
            context.lineWidth = 4;
            context.strokeStyle = 'yellow';
            context.stroke();
        }
    }
    onDeath() {
        let exp = addPlayerExp(this.data.expReward);
        let money = addPlayerMoney(this.data.moneyReward);
        addPlayerReputation(this.data.reputationReward);
        checkDefeatQuest(this.data.id);
        logConsole(`<span style="color: cyan;">${this.name} was defeated! +${format(money)}$ +${format(exp)}EXP +${this.data.reputationReward}REP</span>`)
    }
}
class Encounter {
    constructor(area) {
        this.enemyArray = [];
        this.enemiesToSpawn = area.getEnemies();
        let lastHealth = player.health
        this.area = area;
        player = new Player(playerStats);
        if (lastHealth > 0) { player.health = lastHealth; }
        for (let index = 0; index < this.enemiesToSpawn.length; index++) {
            //let picked = Math.floor(Math.random() * this.area.enemies.length);
            let picked = this.enemiesToSpawn[index];
            let drawIndex = mod(index, 2) == 0 ? Math.floor(index / 2) : -Math.floor(index + 1 / 2);
            let spawnDistance = 50;
            if (enemyData[picked].hasOwnProperty("spawnDistance")) {
                spawnDistance = enemyData[picked].spawnDistance;
            }
            let newEnemy = new Enemy(enemyData[picked], Math.round(2 * (Math.random() - 0.5)) * 5 + spawnDistance, drawIndex = drawIndex);
            this.enemyArray.push(newEnemy);
            this.enemyArray[index].setTarget(player);
        }
        let closest = -1;
        let distance = Infinity;
        for (let index = 0; index < this.enemyArray.length; index++) {
            const enemy = this.enemyArray[index];
            if (enemy == null || enemy.health <= 0) { continue }
            else {
                if (enemy.distance < distance) {
                    distance = enemy.distance;
                    closest = index;
                }
            }
        }
        player.setTarget(this.enemyArray[closest]);
    }
    tick() {
        player.tick();
        for (let index = 0; index < encounter.enemyArray.length; index++) {
            let e = encounter.enemyArray[index];
            if (e == null) { continue; }
            let active = e.tick();
            if (!active) {
                encounter.enemyArray[index] = null;
            }
        }
    }

    isActive() {
        if (player.health <= 0) { return 2; }
        for (let index = 0; index < this.enemyArray.length; index++) {
            if (this.enemyArray[index] != null) { return 0; }
        }
        return 1;
    }
}



//console.log(document.querySelector('input[name="selectArea"]:checked').value);
currentArea = areas[playerStats.currentArea];
areaSelect.value = playerStats.currentArea;

var player = new Player(playerStats);
//var encounter = new Encounter(currentArea, 1);
var bgImage = new Image();
var gameState = "InPatrol";
var engagementRangeInput = document.getElementById("engagementDistanceInput");
engagementRangeInput.addEventListener("keydown", e => e.preventDefault());
engagementRangeInput.value = playerStats.engagementRange;
var restPercentageInput = document.getElementById("restPercentageInput");
restPercentageInput.addEventListener("keydown", e => e.preventDefault());
restPercentageInput.value = playerStats.restToPercentage * 100;
var expCount = 0;
var expCountBuffer = 0;
function updateExperienceEstimate() {
    if (expCount == 0) {
        expCount = expCountBuffer;
    }
    expCount += (expCountBuffer - expCount) / 10;
    expCountBuffer = 0;
    document.getElementById("expEstimateText").innerHTML = format(expCount * 4);
}
var moneyCount = 0;
var moneyCountBuffer = 0;
function updateMoneyEstimate() {
    if (moneyCount == 0) {
        moneyCount = moneyCountBuffer;
    }
    moneyCount += (moneyCountBuffer - moneyCount) / 10;
    moneyCountBuffer = 0;
    document.getElementById("moneyEstimateText").innerHTML = format(moneyCount * 4);
}
window.setInterval(updateExperienceEstimate, 15000);
window.setInterval(updateMoneyEstimate, 15000);
//window.setInterval(function () { mainLoop(); }, logicTickTime);
function changeEngagementRange() {
    playerStats.engagementRange = Math.ceil(Number(engagementRangeInput.value) / 5) * 5;
}
function changeRestPercentage() {
    playerStats.restToPercentage = Math.ceil(Number(restPercentageInput.value) / 5) * 5 * 0.01;
}

//const worker = new Worker('./worker.js');
const worker = new Worker(URL.createObjectURL(new Blob(["(" + worker_function.toString() + ")()"], { type: 'text/javascript' })));
worker.onmessage = (event) =>
    mainLoop();

worker.postMessage({
    interval: logicTickTime,
})

function mainLoop() {
    logicLoop();
    renderLoop();

}
function renderLoop() {
    if (!windowInFocus) return;
    ctxBuffer.clearRect(0, 0, cBuffer.width, cBuffer.height);
    switch (gameState) {
        case "InCombat":
            drawBackground();
            drawEnemies();
            drawPlayer();
            drawCharacterPortrait(ctxBuffer, player, 'l');
            if (player.target != null) {
                drawCharacterPortrait(ctxBuffer, player.target, "r");
            }
            break;
        case "InRest":
            drawBackground();
            drawPlayer();
            drawCharacterPortrait(ctxBuffer, player, 'l');
            ctxBuffer.fillStyle = "black";
            ctxBuffer.fillRect(0, cBuffer.height / 2 - 80, cBuffer.width, 140);
            ctxBuffer.font = `80px Pickle Pushing`;
            ctxBuffer.fillStyle = "white";
            ctxBuffer.textAlign = 'center';
            ctxBuffer.fillText("休息中...", cBuffer.width / 2, cBuffer.height / 2);
            ctxBuffer.font = `24px Pickle Pushing`;
            ctxBuffer.fillText("只是...给我几秒钟...", cBuffer.width / 2, cBuffer.height / 2 + 50);
            ctxBuffer.textAlign = 'left';
            break;
        case "InDead":
            ctxBuffer.fillStyle = "black";
            ctxBuffer.fillRect(0, 0, cBuffer.width, cBuffer.height);
            ctxBuffer.font = `80px Pickle Pushing`;
            ctxBuffer.fillStyle = "white";
            ctxBuffer.textAlign = 'center';
            ctxBuffer.fillText("被击败!", cBuffer.width / 2, cBuffer.height / 2);
            ctxBuffer.font = `24px Pickle Pushing`;
            ctxBuffer.fillText("爬起来再试一次...", cBuffer.width / 2, cBuffer.height / 2 + 50);
            ctxBuffer.textAlign = 'left';
            break;
        case "InPatrol":
            environmentDistance -= logicTickTime / 1000 * 10;
            drawBackground();
            drawPlayer();
            drawCharacterPortrait(ctxBuffer, player, 'l');
            ctxBuffer.fillStyle = "black";
            ctxBuffer.fillRect(0, cBuffer.height / 2 - 40, cBuffer.width, 100);
            ctxBuffer.font = `50px Pickle Pushing`;
            ctxBuffer.fillStyle = "white";
            ctxBuffer.textAlign = 'center';

            ctxBuffer.fillText((currentArea.patrolTime - currentArea.patrolCounter > 500) ? "巡视..." : "战斗!", cBuffer.width / 2, cBuffer.height / 2 + 30);
            ctxBuffer.textAlign = 'left';
            break;
        default:
            console.error("UNKOWN GAME STATE TO DRAW");
            break;
    }
    //Draw to render canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    c.height = c.clientHeight;
    c.width = c.clientWidth;
    //console.log("Buffer dimension:"+ cBuffer.width + " " + cBuffer.height + "\n"+ "Canvas dimensions" + c.width + " " + c.height);
    ctx.scale(c.height / cBuffer.height, c.height / cBuffer.height);
    ctx.drawImage(cBuffer, 0, 0);
    //Update html values
    document.getElementById("playerLevelText").innerHTML = "LEVEL " + playerStats.level;
    document.getElementById("playerExperienceText").innerHTML = format(playerStats.experience) + "/" + playerStats.experienceToNext;
    document.getElementById("playerExperienceBar").max = playerStats.experienceToNext;
    document.getElementById("playerExperienceBar").value = playerStats.experience;
    document.getElementById("playerHealthText").innerHTML = format(player.health) + "/" + format(player.maxHealth);
    document.getElementById("playerExperienceText").innerHTML = format(playerStats.experience) + "/" + format(playerStats.experienceToNext);
    document.getElementById("playerHealthBar").max = player.maxHealth;
    document.getElementById("playerHealthBar").value = player.health;
    document.getElementById("playerInitiativeText").innerHTML = format(player.initiative / 1000 / player.actionSpeed) + "/" + format(player.nextMoveInitiative / 1000 / player.actionSpeed) + "s";
    document.getElementById("playerInitiativeBar").max = player.nextMoveInitiative;
    document.getElementById("playerInitiativeBar").value = player.initiative;
    document.getElementById("trainingAreaName").innerHTML = "Current: " + currentTrainingArea.name;
    document.getElementById("trainingProgressBar").max = currentTrainingArea.timeToComplete;
    document.getElementById("trainingProgressBar").value = currentTrainingArea.progress;
    document.getElementById("trainingProgressBarOverview").max = currentTrainingArea.timeToComplete;
    document.getElementById("trainingProgressBarOverview").value = currentTrainingArea.progress;
    document.getElementById("classText").innerHTML = playerStats.class;
    document.getElementById("passivePointsText").innerHTML = getTotalPassivePoints() - getAvailablePassivePoints();
    document.getElementById("moneyText").innerHTML = format(playerStats.money);
    document.getElementById("reputationText").innerHTML = format(playerStats.reputation);
    Object.values(attribute).forEach(attributeName => {
        let baseAttributeValue = playerStats[attributeName];
        let effectiveValue = format(getEffectiveValue(attributeName))
        let softCappedValue = format(formulas.softcappedAttribute(attributeIdToIndex[attributeName]));
        let softCap = playerStats.attributeSoftcaps[attributeIdToIndex[attributeName]] + playerStats.permanentSoftcaps[attributeIdToIndex[attributeName]];
        let softCapText = (baseAttributeValue > softCap) ? `EFFECTIVE BASE: ${softCappedValue}` : `${softCappedValue}`;
        if (baseAttributeValue > softCap) {
            softCapText += `<br>(RAW: ${format(baseAttributeValue)})`
            softCapText += `<br>[SOFTCAP: ${format(softCap)}]`;
            effectiveValue = effectiveValue + "(!)";
        }
        document.getElementById(attributeName + "Text").innerHTML = effectiveValue;
        document.getElementById(attributeName + "SoftcapText").innerHTML = softCapText;
    });
}
function logicLoop() {
    switch (gameState) {
        case "InCombat":
            switch (encounter.isActive()) {
                case 0:
                    encounter.tick();
                    break;
                case 1:
                    logConsole("Encounter finished.")
                    player.target = null;
                    player.nextMove = null;
                    currentArea.patrolCounter = 0;
                    if (player.health / player.maxHealth < playerStats.restToPercentage) {
                        gameState = "InRest";
                        logConsole("Resting...")
                    } else {
                        gameState = "InPatrol";
                        logConsole("Starting patrol.")
                    }
                    break;
                case 2:
                    logConsole("<span style='color: red'>Player defeated, resting.</span>")
                    gameState = "InDead";
                    player = new Player(playerStats);
                    player.health = 0;
                    break;
                default:
                    break;
            }
            break;
        case "InRest":
            player.rest();
            if (player.health >= player.maxHealth * playerStats.restToPercentage) {
                gameState = "InPatrol";
                logConsole("Starting patrol.")
            }
            break;
        case "InDead":
            player.rest();
            if (player.health == player.maxHealth) {
                gameState = "InPatrol";
                logConsole("Starting patrol.")
            }
            break;
        case "InPatrol":
            switch (currentArea.tick()) {
                case 0:
                    player.tick();
                    break;
                case 1:
                    encounter = new Encounter(currentArea, currentArea.enemyNum);
                    gameState = "InCombat";
                    logConsole("Entering combat.")
                    break;
                default:
                    console.error("UNKNOWN PATROL RETURN STATE");
                    break;
            }
        default:
            break;
    }
    currentTrainingArea.tick();
}
function changeInterval(interval) {
    window.clearInterval(ticker);
    renderTickTime = 1000 / interval
    ticker = window.setInterval(function () { renderLoop(); }, renderTickTime);
    console.log(`Changing refresh rate to ${interval}`);
}
function scaleDistance(distance) {
    let dist = Math.min(100, Math.max(0, distance)) / 100;
    let padding = 50;
    let lower = padding;
    let upper = cBuffer.width - padding;
    return lower + dist * (upper - lower);
}
function drawCharacterPortrait(context, character, side) {
    let anchor = { x: 0, y: 0 };
    let portraitDimensions = 120;
    let portraitBorder = 4;
    let mirror = 1;
    if (side == "r") { anchor.x = context.canvas.width - portraitDimensions - 2 * portraitBorder; anchor.y = 0; mirror = -1; }
    //Portrait Image
    // if(side == 'l'){
    // context.fillStyle = "black";
    // context.fillRect(anchor.x, anchor.y, portraitDimensions + 2 * portraitBorder, portraitDimensions + 2 * portraitBorder);
    // context.drawImage(character.portraitImage, anchor.x + portraitBorder, anchor.y + portraitBorder, portraitDimensions, portraitDimensions);
    // }
    //Healthbar
    let hanchor = { x: 0, y: 0 };
    if (side == "r") { hanchor.x = context.canvas.width; }
    //Name
    if (side == 'l') { context.textAlign = 'center' } else { context.textAlign = 'center' }
    let nameHeight = 30;
    context.fillStyle = "rgba(0,0,0,.5)";
    context.fillRect(hanchor.x, anchor.y, mirror * 370, nameHeight + 12);
    context.font = `${nameHeight}px Pickle Pushing`;
    context.fillStyle = "white";
    context.fillText(character.name, hanchor.x + (mirror) * (360 / 2), hanchor.y + nameHeight);
    hanchor.y += nameHeight + 12;
    //MAIN BAR BACKGROUND SETUP
    let barHeight = 32;
    let barLength = 370;

    let barBorder = 4;
    context.fillStyle = "grey";
    context.beginPath();
    context.moveTo(hanchor.x, hanchor.y);
    context.lineTo(hanchor.x + mirror * barLength, hanchor.y);
    context.lineTo(hanchor.x + mirror * (barLength - barHeight), hanchor.y + barHeight);
    context.lineTo(hanchor.x, hanchor.y + barHeight);
    context.fill();
    context.fillStyle = "rgb(200, 35, 35)";
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength - 2 * barBorder), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength - barHeight), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    let grdHealth = context.createLinearGradient(hanchor.x + mirror * 2, 0, hanchor.x + mirror * (196), 0);
    grdHealth.addColorStop(0, "rgb(21, 153, 41)");
    grdHealth.addColorStop(1, "rgb(0, 255, 38)");
    let grdShield = context.createLinearGradient(hanchor.x + mirror * 2, 0, hanchor.x + mirror * (196), 0);
    grdShield.addColorStop(0, "rgb(21, 41, 153)");
    grdShield.addColorStop(1, "rgb(0, 38, 255)");
    let grdShading = context.createLinearGradient(0, hanchor.y + 2, 0, hanchor.y + 14);
    grdShading.addColorStop(0, "rgba(255, 255, 255, .25)");
    grdShading.addColorStop(1, "rgba(0, 0, 0, .25)");
    let healthPct;
    let shieldPct;
    if (character.health + character.shield > character.maxHealth) {
        healthPct = character.health / (character.health + character.shield);
        shieldPct = character.shield / (character.health + character.shield);
    } else {
        healthPct = character.health / character.maxHealth;
        shieldPct = character.shield / character.maxHealth;
    }
    //SHIELD
    context.fillStyle = grdShield;
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * ((barLength - 2 * barBorder) * (healthPct + shieldPct)), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength * (healthPct + shieldPct) - barHeight * (healthPct + shieldPct)), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    //HEALTH
    context.fillStyle = grdHealth;
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * ((barLength - 2 * barBorder) * healthPct), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength * healthPct - barHeight * (healthPct)), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    //SHADING
    context.fillStyle = grdShading;
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * ((barLength - 2 * barBorder) * (healthPct + shieldPct)), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength * (healthPct + shieldPct) - barHeight * (healthPct + shieldPct)), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    context.font = `italic bold 18px Oxanium`;
    context.fillStyle = "white";
    context.textAlign = (side == "l") ? "left" : "right";
    context.textBaseline = "middle";
    context.fillText(`${format(100 * (character.health + character.shield) / character.maxHealth)}%`, hanchor.x + mirror * barBorder * 2, hanchor.y + barHeight / 2 + barBorder / 2);
    hanchor.y += barHeight - barBorder;
    //Action bar
    barLength -= 2 * barHeight;
    barBorder = 4;
    barHeight = 30;
    context.fillStyle = "grey";
    context.beginPath();
    context.moveTo(hanchor.x, hanchor.y);
    context.lineTo(hanchor.x + mirror * barLength, hanchor.y);
    context.lineTo(hanchor.x + mirror * (barLength - barHeight), hanchor.y + barHeight);
    context.lineTo(hanchor.x, hanchor.y + barHeight);
    context.fill();
    context.fillStyle = "rgb(220,220,220)";
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength - 2 * barBorder), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength - barHeight), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    if (character.initiative == NaN) console.log("NaN error");
    let initiativePct = (character.initiative / character.nextMoveInitiative);
    let grdAction = context.createLinearGradient(hanchor.x, 0, hanchor.x + mirror * 196 * (character.initiative / (character.nextMove != null) ? character.nextMoveInitiative : character.initiative), 0);
    grdAction.addColorStop(0.5, "rgb(0,255,255)");
    grdAction.addColorStop(1, "rgb(0,110,220)");
    context.fillStyle = grdAction;
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * ((barLength - 2 * barBorder) * initiativePct), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength * initiativePct - barHeight * (initiativePct)), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    let grdAction2 = context.createLinearGradient(0, hanchor.y + 2, 0, hanchor.y + 8);
    grdAction2.addColorStop(0, "rgba(255, 255, 255, .25)");
    grdAction2.addColorStop(1, "rgba(0, 0, 0, .25)");
    context.fillStyle = grdAction2;
    context.beginPath();
    context.moveTo(hanchor.x + mirror * barBorder, hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * ((barLength - 2 * barBorder) * initiativePct), hanchor.y + barBorder);
    context.lineTo(hanchor.x + mirror * (barLength * initiativePct - barHeight * (initiativePct)), hanchor.y + barHeight - barBorder);
    context.lineTo(hanchor.x + mirror * barBorder, hanchor.y + barHeight - barBorder);
    context.fill();
    context.font = `16px Pickle Pushing`;
    context.fillStyle = "black";
    context.textAlign = "center";
    context.textBaseline = "middle";
    if (character.nextMove != null) context.fillText(character.nextMove.name, hanchor.x + mirror * (barLength / 2 + barBorder - barHeight / 2), hanchor.y + barHeight / 2 + barBorder / 2);
    context.textBaseline = "alphabetic";
    //hanchor.y += 8;
    //EXP bar   
    // if (side == "l") {
    //     context.fillStyle = "grey";
    //     context.fillRect(hanchor.x, hanchor.y, 200, 6);
    //     context.fillStyle = "white";
    //     context.fillRect(hanchor.x + 4, hanchor.y + 2, 192, 2);
    //     let grdExp = context.createLinearGradient(132, 0, 132 + 192 * (playerStats.experience / playerStats.experienceToNext), 0);
    //     grdExp.addColorStop(0.5, "rgb(255,0,255)");
    //     grdExp.addColorStop(1, "rgb(200,0,200)");
    //     context.fillStyle = grdExp;
    //     context.fillRect(hanchor.x + 4, hanchor.y + 2, 192 * (playerStats.experience / playerStats.experienceToNext), 2);
    // }

}
function changeArea(index) {
    playerStats.currentArea = index;
    currentArea = areas[playerStats.currentArea];
    currentArea.patrolCounter = 0;
    if (gameState != "InDead") {
        gameState = "InRest";
    }
    player.target = null;
    player.nextMove = null;
}

function drawSkillIcon(context, skillname, x, y) {
    let heightAbove = 110;
    let img = new Image();
    img.src = skillname + "Icon.png";
    context.drawImage(img, x - img.width / 2, y - img.height - heightAbove);
}
function drawInfoBars(context, entity, rootx, rooty) {
    let heightAbove = 100;
    context.fillStyle = "black";
    context.fillRect(rootx - 20, rooty - heightAbove, 42, 8);
    context.fillStyle = "red";
    context.fillRect(rootx - 20, rooty - heightAbove, 40, 5);
    context.fillStyle = "green";
    context.fillRect(rootx - 20, rooty - heightAbove, 40 * (entity.health / entity.maxHealth), 5);
    context.fillStyle = "cyan";
    context.fillRect(rootx - 20, rooty - heightAbove + 6, 40 * (entity.initiative / entity.nextMoveInitiative), 1);
}
function drawBackground() {
    let bgImage = currentArea.backgroundImage;
    let scrollFactor = cBuffer.height / cBuffer.width * bgImage.width / bgImage.height;
    let environmentScrollBase = (mod(environmentDistance, (100 * scrollFactor))) / 100;
    //console.log(environmentScrollBase+" "+scrollFactor);
    ctxBuffer.drawImage(bgImage, environmentScrollBase * cBuffer.width, 0, cBuffer.height / bgImage.height * bgImage.width, cBuffer.height);
    ctxBuffer.drawImage(bgImage, (environmentScrollBase - 1 * scrollFactor) * cBuffer.width, 0, cBuffer.height / bgImage.height * bgImage.width, cBuffer.height);
}
function drawPlayer() {
    player.draw(ctxBuffer);
}
function drawEnemies() {
    encounter.enemyArray.forEach(enemy => {
        if (enemy == null) { return; }
        enemy.draw(ctxBuffer);
    });
}
function mod(n, m) {
    return ((n % m) + m) % m;
}
