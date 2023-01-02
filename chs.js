/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Money:": "金钱:",
    "Load Game": "加载游戏",
    "SKILLS": "技能",
    "skills": "技能",
    "STORY": "故事",
    "story": "故事",
    "status": "状态",
    "STATUS": "状态",
    "Music": "音乐",
    "LEVEL": "等级",
    "STR": "力量",
    "STR:": "力量:",
    "Throwing Knife": "飞刀",
    "The Void": "虚空",
    "Streets": "街头",
    "strength": "力量",
    "Strength": "力量",
    "TRAINING": "训练",
    "training": "训练",
    "Upgrade:": "升级:",
    "Reset": "重置",
    "Requires:": "要求:",
    "Save Game": "保存游戏",
    "Max health:": "最大生命值：",
    "Jab": "刺拳",
    "HELP": "帮助",
    "HEALTH": "生命值",
    "human": "人",
    "Next move:": "下一步行动:",
    "Abilities": "能力",
    "abilities": "能力",
    "ABILITIES": "能力",
    "\\/ SCROLL DOWN \\/": "\\/ 向下滚动 \\/",
    "AREAS": "区域",
    "areas": "区域",
    "Bridge": "桥梁",
    "Crowbar": "撬棍",
    "Currently training:": "当前训练：",
    "Strength:": "力量:",
    "(Arrow keys or scroll down to 'Training').": "（箭头键或向下滚动到“训练”）。",
    "Agility": "敏捷",
    "Agility:": "敏捷:",
    "All that training has made you swole. That first hit really packs a punch": "所有的训练都让你气喘吁吁。 第一击真的很有冲击力",
    "Alley": "胡同",
    "And a cold one after work.": "下班后又感冒了。",
    "Attributes:": "属性:",
    "Class:": "种族:",
    "Coach said this would toughen you up.": "教练说这会让你变得坚强。",
    "Diary": "日记",
    "Firecackers": "鞭炮",
    "Haymaker": "重拳",
    "Health regeneration: health regeneration per second in combat.": "生命恢复：战斗中每秒生命恢复。",
    "It's funnier in the circus": "马戏团里更有趣",
    "It's just like hard candy.": "就像硬糖一样。",
    "Jays on my feet.": "松鸦在我脚上。",
    "Let's say, hypothetically....": "比方说，假设......",
    "MND": "头脑",
    "Mind": "头脑",
    "Mind:": "头脑:",
    "MND:": "头脑:",
    "Training (": "训练 (",
    "Park": "公园",
    "Underground Lab": "地下实验室",
    "Upgrade available!": "可升级！",
    "walk": "走路",
    "We used to do this as kids.": "我们小时候经常这样做。",
    "This does not seem fair?": "这似乎不公平？",
    "They weren't using them anyways.": "反正他们也没用。",
    "TGH": "耐力",
    "TGH:": "耐力:",
    "toughness": "耐力",
    "Toughness": "耐力",
    "Toughness:": "耐力:",
    "With all the beatings you've taken and lived through, it takes a lot to bring you down.": "你经历了那么多的打击，要让你崩溃是很困难的。",
    "You're more likely to blow off your own fingers than theirs.": "你更有可能炸飞自己的手指，而不是他们的。",
    "Your browser does not support the audio element.": "您的浏览器不支持音频元素。",
    "Your first move is Punch. Punch's damage ratio is 80%": "你的第一步就是出拳。重击的伤害比是80%",
    "Your hero automatically uses his skills in combat.": "你的英雄会自动在战斗中使用他的技能。",
    "Faster than a punch but weaker, good to knockout small fry and get out of the way.": "比一拳更快，但更弱，很好地击倒小鱼苗并让开。",
    "criticalChance": "暴击率",
    "Critical strike: chance to deal 50% more damage.": "致命一击：造成额外 50% 伤害的几率。",
    "Check it, mate, I won.": "看看吧，伙计，我赢了。",
    "Being faster than your foe gives you the opportunity to hit them in a vital spot.": "比你的敌人更快让你有机会击中他们的要害点。",
    "Base attributes from training": "来自训练的基本属性",
    "Attributes per session:": "每个会话的属性：",
    "Attributes can be increased by training.": "属性可以通过训练增加。",
    "AGI": "敏捷",
    "AGI:": "敏捷:",
    "Actually learn it. Don't memorize it.": "实际上学习它。 不要死记硬背。",
    "Active abilities:": "主动能力：",
    "A simple punch, everyone knows how to do it.": "简单的一拳，谁都会。",
    "Takedown: increases damage based on enemy current hp (lower hp = more damage).": "破釜沉舟：根据敌人当前的 生命值 增加伤害（较低的生命值 = 更多的伤害）。",
    "takedown": "破釜沉舟",
    "Story Progression": "故事进展",
    "The damage formula is:": "伤害公式为：",
    "The damage ratio of abilities can be found by hovering them on the \"Abilities\" tab.": "将技能悬停在“能力”选项卡上可以找到技能的伤害比率。",
    "Prison Courtyard": "监狱大院",
    "Prepare to deliver a massive blow to your foe. Slow.": "准备给你的敌人一个巨大的打击。缓慢的",
    "No target": "无目标",
    "None": "无",
    "Leverage your lower body strength to knock those criminals on their asses": "利用你的下半身力量来击倒那些罪犯",
    "OW. Ok. OW. Ok that wasn't so easy. Maybe you should train up a bit first.": "哦。好的，好的。好吧，那不是那么容易。也许你应该先训练一下。",
    "healthRegeneration": "生命恢复",
    "I WANT TO BE A HERO": "英雄是怎样炼成的",
    "Resources:": "资源:",
    "Reputation:": "声誉：",
    "Ratios:": "比率:",
    "punch": "拳击",
    "Punch": "拳击",
    "Points available:": "可用点数：",
    "overwhelm": "压倒",
    "No target (IN COMBAT)": "无目标（战斗中）",
    "mind": "头脑",
    "is the main component of damage in physical\n                        moves.": "是物理和招式伤害的主要组成\n部分。",
    "agility": "敏捷",
    "reduces your ability cooldowns.": "减少你的能力冷却时间。",
    "Roundhouse Kick": "回旋踢",
    "Select a diary entry to view.": "选择一个日记条目进行查看。",
    "Shadows to keep you light.": "阴影让你保持光明。",
    "Prison Underground": "地下监狱",
    "Overwhelm: increases damage based on enemy current hp (higher hp = more damage).": "压倒：根据敌人当前的 生命值 增加伤害（更高的 生命值 = 更多的伤害）。",
    "increases your action speed (affects patrol).": "提高你的行动速度（影响巡视）。",
    "Increase your Strength through the power of home workouts": "通过家庭锻炼的力量增加你的力量",
    "increases your health and damage\n                        reduction.": "增加你的生命值和伤害\n降低。",
    "Hey this area doesn't look so b-": "嘿，这个区域看起来不那么 b-",
    ",\n                        which is to say that,\n                        that\n                        percentage of the respective attribute value is used in the move's damage formula.": "，也就是说，移动的伤害公式中使用了各自属性值的百分比。",
    ",\n                        where the second part is evaluated and then summed from every contributing attribute.": "，\n其中对第二部分求值，然后从每个贡献属性求和。",
    "Your strategic mind allows you to setup your foe's swift defeat.": "您的战略思维使您能够迅速击败敌人。",
    "You've had enough. Every year crime is up and yet the city council does nothing about it.\n        The corruption runs deep. It's time for change.": "你受够了。 每年犯罪率都在上升，但市议会对此无动于衷。\n 腐败根深蒂固。 是时候改变了。",
    "(Change menus by scrolling on this area or arrow keys after clicking inside it.)": "（通过在此区域滚动或在其内部单击后使用箭头键来更改菜单。）",
    "Moving up to a tougher crowd. (Streets in Areas menu)": "向更强的人群移动。 （区域菜单中的街道）",
    "That guy had a freakin' crowbar. Back to the training board.": "那家伙有一把该死的撬棍。 回到训练面板。",
    "Cost: MAXED!": "成本: 已最大!",
    "Time to tkae out the whole gang.": "是时候干掉整个团伙了。",
    "I should work on my skills so I can take down criminals more effectively. (Skills menu below)": "我应该努力提高自己的技能，这样我才能更有效地打击罪犯。 （下面的技能菜单）",
    "Time to clean the streets.": "是时候清理街道了。",
    "Time to fight crime": "是时候打击犯罪了",
    "Effects:": "效果:",
    "Abilities also have a damage range, which modifies the final damage, a use time and a cooldown.\n                        Cooldowns only start AFTER the abiltiy is used. Some ranged skills have a minimum range, the screen is 100 units wide.\n                        ": "能力也有一个伤害范围，它会修改最终伤害、使用时间和冷却时间。\n 冷却时间仅在使用该能力后开始。 一些远程技能有最小范围，屏幕是 100 个单位宽。\n",
    "Training is done through activities. Each completion gives PlayerLevel*AttributeRatio attributes.\n                        The starting activities are free but more rewarding activities that you unlock as you progress cost money to perform.": "训练是通过活动来完成的。 每次完成都会提供 玩家等级 * 属性比率 的属性。\n 开始的活动是免费的，但随着您的进步解锁的更多奖励活动需要花钱才能执行。",
    "Your hero automatically uses his abilities in combat. Combat is action gauge based, once it fills the prepared ability is used.\n                        You can also set which abilities to use once you unlock more by clicking on the slots on the status tab.\n                        Finding criminals takes some time (patrolling, affected by agility) after which you'll enter an encounter.\n                        If you are defeated in combat you'll take some downtime to recover (10 seconds).": "您的英雄会自动在战斗中使用他的能力。 战斗是基于动作量表的，一旦它填满就使用准备好的能力。\n 你也可以通过单击状态选项卡上的插槽来设置解锁更多后要使用的能力。\n 找到罪犯需要一些时间（巡逻，受影响 通过敏捷）之后你将进入一场遭遇战。\n 如果你在战斗中被击败，你将需要一些停机时间来恢复（10 秒）。",
    "Additional mechanics": "附加机制",
    "As you complete the same activity, it gains experience and can rank up. Ranking up increases the reward multiplier.\n                        Ranking up needs more experience every time, but later ranks are successively more rewarding.": "当您完成相同的活动时，它会获得经验并可以升级。 排名上升会增加奖励倍数。\n 每次排名上升都需要更多经验，但更高的排名会依次获得更多奖励。",
    "Attributes": "属性",
    "Combat": "战斗",
    "Current activity: (": "当前活动：（",
    "Current: Do some pushups": "当前： 做一些俯卧撑",
    "Do some pushups": "做一些俯卧撑",
    "Do street juggling": "玩街头杂耍",
    "Dodge street traffic": "躲避街道交通",
    "Heal: heal for an amount.": "治疗：治疗一定量。",
    "Hit the gym": "去健身房",
    "Learn Chess": "学棋",
    "Load cargo at the port": "在港口装载货物",
    "New activities may not even be worth it until you gain some experience in doing them.": "在您获得一些经验之前，新活动甚至可能不值得。",
    "Participate in quarter-marathon": "参加四分之一马拉松",
    "Play competitive chess": "下棋",
    "Play dodgeball": "玩躲避球",
    "Run laps at the park": "在公园跑几圈",
    "Shield: gives temporary health points. Lost at the end of an encounter. Does not stack, stronger shields overwrite.": "盾牌：提供临时健康点。 在相遇的尽头迷失。 不叠加，更强的护盾覆盖。",
    "Solve Maxwell Equations": "求解麦克斯韦方程组",
    "The more of the activity's respective stat you have the more experience you earn doing it.": "活动的相应统计数据越多，您获得的经验就越多。",
    "Train with wrist+ankle weights": "手腕+脚踝负重训练",
    "Training": "训练",
    "You heard news of a loud bang coming from the maximum security prison. You should probaby check it out. As you get to the bridge you see dozens of prisoners running from the direction of the prison. Stop them!": "你听到最高戒备监狱传来一声巨响的消息。 你应该检查一下。 当你到达桥上时，你会看到数十名囚犯从监狱的方向跑来。 阻止他们！",
    "Your first ability is Punch. Punch's damage ratio is 80%": "你的第一个技能是重拳。 Punch的伤害率为80%",
    "I need to learn some new moves to take out the more dangerous criminals. (See details of unlocked moves in the 'Abilities' menu and equip them in the 'Status' menu slots.)": "我需要学习一些新动作来干掉更危险的罪犯。 （在“能力”菜单中查看解锁动作的详细信息，并在“状态”菜单栏中装备它们。）",
    "Time to take out the whole gang.": "是时候干掉整个团伙了。",
    "heal": "治疗",
    "After taking down the oversized brute, you follow the fumes to some exhaust chimneys and a hatch that leads underground.\n             The prisoners must have rioted and broken in. Eager to be the hero, you jump in. You find yourself in some sort of underground transit. Odd, you can't think why the prison needs such a large underground complex. Soon you spot more escaped prisoners, but they look strange.": "打倒这头超大野兽后，你顺着烟雾来到一些排气烟囱和通向地下的舱口。\n 囚犯一定是暴动并闯入的。渴望成为英雄，你跳了进去。你发现自己处于某种 地下交通。 奇怪，你想不通监狱为什么需要这么大的地下综合体。 很快你就会发现更多的逃犯，但他们看起来很奇怪。",
    "Ever since the prison incident, crime in the city has continued to grow. There are reports of bizarre accidents and unusual individuals. In the meanwhile, the mafia has continued to expand in your neighbourhood. You think that with these new powers you can put up a fight.": "自监狱事件以来，该市的犯罪活动持续增长。 有关于离奇事故和不寻常个人的报道。 与此同时，黑手党继续在你附近扩张。 你认为有了这些新的力量你就可以打架了。",
    "Escaping the prison before the police shows up, you return to your routine. You are weak but as you get into fight after fight you notice that your body is changing, faster, stronger than it should be.\n        And soon you start to notice even greater changes. What the hell were they doing in that lab, and where did that monster go? You need to start recovering your strength for next time he shows up.": "在警察出现之前逃离监狱，你回到了日常生活中。 你很虚弱，但当你一次又一次地参加战斗时，你会发现你的身体正在发生变化，比应有的变化更快、更强壮。\n 很快你就会开始注意到更大的变化。 他们到底在那个实验室里做什么，那个怪物去哪儿了？ 下次他出现的时候，你得开始恢复体力了。",
    "Finally you find a doorway that leads into a room. You seem to be in a lab. You see vats, some broken, with a similarly coloured green liquid splashed around them. Some, with- people? - still inside. In your shocked state you barely dodge out of the way as a massive blade swings from the side. From the shadows a massive disfigured prisoner appears. Did he cause all of this?": "最后你找到一个通往房间的门口。 你好像在实验室。 你看到大桶，有些破了，周围溅着类似颜色的绿色液体。 一些，和——人？ -还在里面。 在你震惊的状态下，你几乎没有躲闪，因为一个巨大的刀片从侧面摆动。 从阴影中出现了一个巨大的毁容囚犯。 这一切都是他造成的吗？",
    "You wake up on the floor of the lab. You remember fighting the monstrosity, and as you ducked under another blade swing it smashed\n         a vat next to you, and the liquid inside poured over you. You remember screaming in pain and not much else. Looking around,\n          the monstrosity seems to be gone. You feel weak, like all the training you've done the past months has been sapped from you.\n          But you also feel something else, new potential, like you fell off a tower, and when you look up, the tower is even higher.": "你在实验室的地板上醒来。 你还记得与怪物战斗的情景，当你躲到另一把刀刃下时，它砸碎\n 你旁边的一个大桶，里面的液体倒在你身上。 你只记得痛苦的尖叫声，其他的就不多了。 环顾四周，\n 怪物似乎已经消失了。 你感到虚弱，就像你过去几个月所做的所有训练都从你身上消失了。\n 但你也感受到了另一种东西，新的潜力，就像你从塔上掉下来一样，当你抬头看时，塔是平坦的 更高。",
    "wait": "等待",
    "After taking down some of the escaped prisoners you finally get near. Now you can see green fumes streaming from somewhere in the compoud. As you enter the courtyard a very large prisoner blocks your way.": "在干掉一些逃犯后，你终于接近了。 现在你可以看到从化合物的某处流出的绿色烟雾。 当你进入庭院时，一个非常大的囚犯挡住了你的路。",
    "Air Cannon": "空气炮",
    "airCannon": "空气炮",
    "Current: Do street juggling": "当前： 街头杂耍",
    "Current: Dodge street traffic": "当前： 道奇街道交通",
    "Current: Hit the gym": "当前： 去健身房",
    "Current: Learn Chess": "当前： 学习国际象棋",
    "Current: Load cargo at the port": "当前： 在港口装载货物",
    "Current: Participate in quarter-marathon": "当前：参加四分之一马拉松",
    "Current: Play competitive chess": "当前： 下国际象棋",
    "Current: Play dodgeball": "当前：玩躲避球",
    "Current: Run laps at the park": "当前： 在公园跑几圈",
    "Current: Solve Maxwell Equations": "当前：求解麦克斯韦方程组",
    "Current: Train with wrist+ankle weights": "当前： 用手腕+脚踝负重训练",
    "50/50 Defeat Rifle Thug: 20/20 Defeat The Don: 0/1": "50/50 击败步枪暴徒：20/20 击败唐：0/1",
    "Even without trying you're stronger than you've ever been before": "即使没有尝试，你也比以往任何时候都更强大",
    "Even without trying you're stronger than you've every been before": "即使没有尝试，你也比以往任何时候都更强大",
    "I fear not the man who has practiced 10,000 punches once, but I fear the man who has practiced one 10,000 punches, 10,000 times.": "我不怕练过一万拳的人，我怕练过一万拳、一万次的人。",
    "I fear not the man who has practiced 10,000 punches once, but I fear the man who has practiced one punch 10,000 times.": "我不怕练过一万拳的人，我怕一拳练过一万遍的人。",
    "I need to learn some new moves to take out the more dangerous criminals. (See details of unlocked moves in the 'Abilities' menu and equip them in the 'Status' menu slots.)": "我需要学习一些新动作来干掉更危险的罪犯。 （在“能力”菜单中查看解锁动作的详细信息，并在“状态”菜单栏中装备它们。）",
    "Multiple Simple Punches": "组合简易拳",
    "multipleSimplePunches": "组合简易拳",
    "PLACEHOLDER": "占位符",
    "Second Wind": "第二次风",
    "secondWind": "二次风",
    "Simple Punch": "简易拳",
    "superhuman": "超人",
    "Take a few breaths and let your supernatural constitution catch up.": "深吸几口气，让你的超自然体质迎头赶上。",
    "Time to take out the whole gang.": "是时候干掉整个团伙了。",
    "Titanic Swing": "泰坦尼克摇摆",
    "titanicSwing": "泰坦尼克摇摆",
    "Wind up to deliver the greatest blow your body allows": "发条以提供您身体允许的最大打击",
    "You keep beating up these thugs but there is a mastermind organizing them, if he doesn't go down this won't stop. If I keep taking down his henchmen closer to his territory he'll show up": "你一直在打这些暴徒，但有一个主谋在组织他们，他不倒下就不会罢休。 如果我继续在靠近他领地的地方干掉他的追随者，他就会现身",
    "You punch the air so hard that a shockwave is launched towards the enemy": "你猛击空气，向敌人发射冲击波",
    "You can set the engagement range, which is how close your hero will try to get to the enemy.\n                        He will only move this close and not further, so make sure your engagement range matches your abilities! By default your hero cannot move back after closing distance. However, if you have an ability with 'Retreat' he will try to use it to move back to his engagement range if an enemy closes in.": "您可以设置交战范围，即您的英雄将尝试接近敌人的距离。\n 他只会移动这么近而不会更远，因此请确保您的交战范围与您的能力相匹配！ 默认情况下，您的英雄在接近距离后无法后退。 然而，如果你有“撤退”的能力，他会在敌人逼近时尝试使用它回到他的交战范围。",
    "Movement": "移动",
    "Engagement distance:": "接合距离：",
    "hope": "希望",
    "CLASS": "种族",
    "class": "种族",
    "Experience/min:": "经验/分钟：",
    "Form and discharge a blast of ki from your hand": "从你的手中形成并释放一股气",
    "Ki Blast (Attack)": "Ki-Blast（攻击）",
    "Might": "强大",
    "prestige": "声望",
    "PRESTIGE": "声望",
    "Rest until HP:": "休息直到生命值：",
    "Titan": "泰坦",
    "You can take the Y you found to unlock more of your power.": "您可以使用找到的 Y 来释放更多的力量。",
    "You gain 1% of the softcap as permanent attributes when you reset this way. (They cannot be lowered below that value for activities)": "当您以这种方式重置时，您将获得 1% 的软上限作为永久属性。 （它们不能低于活动值）",
    "Your attribute softcaps will increase by 10% of their current value plus 50% of the effective value over the current softcap.": "您的属性软上限将增加其当前值的 10% 加上当前软上限有效值的 50%。",
    "This will reset your attributes.": "这将重置您的属性。",
    "Softcaps will only increase for attributes which have reached their current softcap!": "只有达到当前软上限的属性才会增加软上限！",
    "Simple Punch (Attack)": "简单拳（攻击）",
    "Second Wind (Support)": "复苏之风（支持）",
    "Rather than throw meek punches you put measured time into each strike": "与其轻柔地出拳，不如在每一次打击中都考虑到时间",
    "Softcaps": "软上限",
    "Trees": "树",
    "Spirit": "精神",
    "Multiple Simple Punches (Attack)": "多重简单拳击（攻击）",
    "powerMultiplier": "威力乘数",
    "ACTIVITIES": "活动",
    "actionSpeed": "动作速度",
    "Air Cannon (Attack)": "空气炮（攻击）",
    " (Attack)": " (攻击)",
    "activity": "活动",
    "Take Y": "得到 Y",
    "cooldownReduction": "冷却缩减",
    "damageMultiplier": "伤害乘数",
    "Does this invalidate your natty card?": "这会使您的 natty 卡失效吗？",
    "Join the": "加入",
    "Lesser foes cower at your insurmountable strength": "弱小的敌人畏惧你不可逾越的力量",
    "Physical strength that breaks through even spirit": "连精神都突破的肉体强度",
    "Requires skill(s):": "需要技能：",
    "You gain 1% of the softcap as permanent attributes when you reset this way. (They cannot be lowered below that value by activities)": "当您以这种方式重置时，您将获得 1% 的软上限作为永久属性。 （他们不能通过活动降低到该值以下）",
    "Abilities also have a damage range, which modifies the final damage, a use time and a\n                        cooldown.\n                        Cooldowns only start AFTER the abiltiy is used. Some ranged skills have a minimum range, the\n                        screen is 100 units wide.\n": "技能也有伤害范围，它会修改最终伤害、使用时间和\n 冷却时间。\n 冷却时间仅在使用技能后开始。 一些远程技能有最小范围，\n 屏幕是 100 个单位宽。\n",
    "As you complete the same activity, it gains experience and can rank up. Ranking up increases the\n                        reward multiplier.\n                        Ranking up needs more experience every time, but later ranks are successively more rewarding.": "当您完成相同的活动时，它会获得经验并可以升级。 排名上升会增加\n 奖励乘数。\n 每次排名上升都需要更多经验，但更高的排名会连续获得更多奖励。",
    "Confirm": "确认",
    "FAME": "声誉",
    "fame": "声誉",
    "Fame:": "声誉：",
    "Ground Stomp (Attack)": "地面践踏（攻击）",
    "Next at:": "下一个在：",
    "increases your damage reduction.": "增加你的伤害减免。",
    "increases your maximum health.": "增加你的最大生命值。",
    "Offline Progress": "离线进度",
    "Prison Underground Entry": "监狱地下入口",
    "Prison Underground Tunnel": "监狱地下隧道",
    "You can set the engagement range, which is how close your hero will try to get to the enemy.\n                        He will only move this close and not further, so make sure your engagement range matches your\n                        abilities! By default your hero cannot move back after closing distance. However, if you have an\n                        ability with 'Retreat' he will try to use it to move back to his engagement range if an enemy\n                        closes in.": "您可以设置交战范围，即您的英雄将尝试接近敌人的距离。\n 他只会移动这么近而不会更远，因此请确保您的交战范围与您的\n 能力相匹配！ 默认情况下，您的英雄在接近距离后无法后退。 但是，如果您具有“撤退”的\n 能力，他会在敌人逼近时尝试使用它回到他的交战范围。",
    "You can take the Y you found to unlock more of\n                            your power.": "您可以使用找到的 Y 来解锁更多\n 力量。",
    "You gain 1% of the softcap as permanent attributes when you reset this way. (They cannot be\n                            lowered below that value by activities)": "当您以这种方式重置时，您将获得 1% 的软上限作为永久属性。 （不能通过活动将它们\n 降低到该值以下）",
    "Your attribute softcaps will increase by 10% of their current value plus 50% of the\n                            effective value over the current softcap.": "您的属性软上限将增加其当前值的 10% 加上当前软上限\n 有效值的 50%。",
    "Your hero automatically uses his abilities in combat. Combat is action gauge based, once it\n                        fills the prepared ability is used.\n                        You can also set which abilities to use once you unlock more by clicking on the slots on the\n                        status tab.\n                        Finding criminals takes some time (patrolling, affected by agility) after which you'll enter an\n                        encounter.\n                        If you are defeated in combat you'll take some downtime to recover (10 seconds).": "您的英雄会自动在战斗中使用他的能力。 战斗是基于动作量表的，一旦它填满，\n 就会使用准备好的能力。\n 您还可以通过单击“状态”选项卡上的插槽来设置解锁更多后要使用的能力。\n 找到罪犯需要一些时间 （巡逻，受敏捷影响）之后你将进入\n 遭遇战。\n 如果你在战斗中被击败，你将需要一些停机时间来恢复（10 秒）。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "信息",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Use time: ": "用时：",
    "Range: ": "范围：",
    "Cooldown: ": "冷却: ",
    "\"Big Boy Pills\" ": "\"大童丸\" ",
    "\"Borrowed Dumbells\" ": "\"借来的哑铃\" ",
    "Attend debate club": "参加辩论俱乐部",
    "Construction Job": "建筑工作",
    "Defeat Thug: ": "击败暴徒: ",
    "Damage range: ": "伤害范围: ",
    "Training at: ": "训练地点：",
    "Win at street chess": "在街头象棋中获胜",
    "Get to": "得到",
    "Five Mile Run": "五英里跑",
    "Dodge the swing": "躲开秋千",
    "Built To Last": "经久耐用",
    "Calisthenics": "健美操",
    "Acquire J's": "收购J的",
    "Skilled Combatant": "熟练的战士",
    "Shadow boxing": "太极拳",
    "The Beginning": "起点",
    "Opportunity Seeker": "机会寻求者",
    "Read algebra book": "读代数书",
    "Heavy Hitter": "重量级选手",
    "8200 Postcode Night Run": "8200 邮编夜跑",
    "Streetfights ": "巷战 ",
    "Rank: ": "段位：",
    "Vigilante": "义警",
    "Defeat Prisoner: ": "击败囚犯：",
    "A New Beginning": "一个新的开始",
    "repeat: ": "重复：",
    "knockback: ": "击退：",
    "Defeat The Don: ": "击败唐：",
    "knockback": "",
    "Inhuman strength": "非人的力量",
    "Matter Over Mind": "物质胜于思想",
    "Overwhelming strength": "压倒性的力量",
    "Defeat Rifle Thug: ": "击败步枪暴徒：",
    "Streets ": "街头 ",
    "Training Effect": "训练效果",
    "Strength Training Boost": "力量训练提升",
    "Defeat Hardened Thug: ": "击败顽固的暴徒：",
    "Body & Soul": "身体 & 灵魂",
    "Circular Breathing": "循环呼吸",
    "Giant Training": "巨人训练",
    "Titanic Blows": "泰坦尼克打击",
    "Titanic Swing": "泰坦尼克摇摆",
    "Colossal Constitution": "",
    "Focused Breathing": "专注呼吸",
    "Utmost Might": "最强大的力量",
    "STR+TGH": "力量+TGH",
    "STR+MND": "力量+MND",
    "Raw Muscle": "原始肌肉",
    "Defeat Armed Thug: ": "击败武装暴徒：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^ ([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^(.+)已结束。$/,
    /^(.+)声誉$/,
    /^(.+)完毕。$/,
    /^(.+)战斗。$/,
    /^(.+)巡视。$/,
    /^(.+)伤害。$/,
    /^参加(.+)$/,
    /^范围(.+)$/,
    /^伤害范围(.+)$/,
    /^用时(.+)$/,
    /^范围(.+)$/,
    /^冷却(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.]+)s$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^(.+) Requirements are not met!$/, '$1 不满足要求！'],
    [/^(.+) Acquire J\'s is already max level!$/, '$1 获得J已经是最高等级了！'],
    [/^(.+) Opportunity Seeker is already max level!$/, '$1 寻机者已经满级了！'],
    [/^(.+) Entering combat.$/, '$1 进入战斗。'],
    [/^(.+) Encounter finished.$/, '$1 遭遇已结束。'],
    [/^(.+) Resting...$/, '$1 休息中...'],
    [/^(.+) Starting patrol.$/, '$1 开始巡视。'],
    [/^(.+) Hero healed for (.+)$/, '$1 英雄治愈了 $2'],
    [/^(.+) Hardened Thug was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 硬汉暴徒被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Prison Guard was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 监狱看守被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Rifle Thug was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 步枪暴徒被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Thug was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 暴徒被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Prisoner was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 囚犯被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Prisoner 9 was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 9号囚犯被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Purse thief was defeated! \+(.+)\$ \+(.+)EXP \+(.+)REP$/, '$1 钱包小偷被打败了！ \+$2\$ \+$3 经验 \+$4 声誉'],
    [/^(.+) Hero hit Thug with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 击中了 暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Armed Thug with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 击中了 武装暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Hardened Thug with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 击中了 硬汉暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Thug with Titanic Swing for (.+) damage.$/, '$1 英雄 使用 泰坦尼克摇摆 击中了 暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Armed Thug with Titanic Swing for (.+) damage.$/, '$1 英雄 使用 泰坦尼克摇摆 击中了 武装暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Rifle Thug with Titanic Swing for (.+) damage.$/, '$1 英雄 使用 泰坦尼克摇摆 击中了 步枪暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Hardened Thug with Titanic Swing for (.+) damage.$/, '$1 英雄 使用 泰坦尼克摇摆 击中了 硬汉暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Prisoner with Titanic Swing for (.+) damage.$/, '$1 英雄 使用 泰坦尼克摇摆 击中了 囚犯，造成 $2 伤害。'],
    [/^(.+) Hero hit Thug with Multiple Simple Punches for (.+) damage.$/, '$1 英雄 使用 组合简易拳 击中了 暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Prisoner with Multiple Simple Punches for (.+) damage.$/, '$1 英雄 使用 组合简易拳 击中了 囚犯，造成 $2 伤害。'],
    [/^(.+) Hero hit Rifle Thug with Multiple Simple Punches for (.+) damage.$/, '$1 英雄 使用 组合简易拳 击中了 步枪暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Armed Thug with Multiple Simple Punches for (.+) damage.$/, '$1 英雄 使用 组合简易拳 击中了 武装暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Hardened Thug with Multiple Simple Punches for (.+) damage.$/, '$1 英雄 使用 组合简易拳 击中了 硬汉暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Hardened Thug with Air Cannon for (.+) damage.$/, '$1 英雄 使用 空气炮 击中了 硬汉暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Thug with Air Cannon for (.+) damage.$/, '$1 英雄 使用 空气炮 击中了 暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Prisoner with Air Cannon for (.+) damage.$/, '$1 英雄 使用 空气炮 击中了 囚犯，造成 $2 伤害。'],
    [/^(.+) Hero hit Rifle Thug with Air Cannon for (.+) damage.$/, '$1 英雄 使用 空气炮 击中了 步枪暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Armed Thug with Air Cannon for (.+) damage.$/, '$1 英雄 使用 空气炮 击中了 武装暴徒，造成 $2 伤害。'],
    [/^(.+) Hero hit Purse thief with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 击中了 钱包小偷，造成 $2 伤害。'],
    [/^(.+) Hero hit Prison Guard with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 击中了 监狱看守，造成 $2 伤害。'],
    [/^(.+) Hero critically hit Purse thief with Punch for (.+) damage.$/, '$1 英雄 使用 拳击 暴击了 钱包小偷，造成 $2 伤害。'],
    [/^(.+) Prison Guard hit 英雄 with Baton for (.+) damage.$/, '$1 监狱看守 使用 警棍 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Prisoner hit 英雄 with Punch for (.+) damage.$/, '$1 囚犯 使用 拳击 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Prisoner hit 英雄 with Shank for (.+) damage.$/, '$1 囚犯 使用 小腿 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Prisoner 9 hit 英雄 with Punch for (.+) damage.$/, '$1 9号囚犯 使用 拳击 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Prisoner 9 hit 英雄 with Smash for (.+) damage.$/, '$1 9号囚犯 使用 粉碎 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Rifle Thug hit 英雄 with Rifle for (.+) damage.$/, '$1 步枪暴徒 使用 步枪 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Armed Thug hit 英雄 with Handgun for (.+) damage.$/, '$1 武装暴徒 使用 手枪 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Thug hit 英雄 with Crowbar for (.+) damage.$/, '$1 暴徒 使用 撬棍 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Hardened Thug hit 英雄 with Punch for (.+) damage.$/, '$1 硬汉暴徒 使用 拳击 击中了 英雄，造成 $2 伤害。'],
    [/^(.+) Thug hit 英雄 with Punch for (.+) damage.$/, '$1 暴徒 使用 拳击 击中了 英雄，造成 $2 伤害。'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^LEVEL ([\d\.,]+)$/, '等级 $1'],
    [/^Level ([\d\.,]+)$/, '等级 $1'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: ([\d\.,]+)$/, '成本：$1'],
    [/^Cost: (.+)\$$/, '成本：$1\$'],
    [/^Cost: (.+) Points$/, '成本：$1 点数'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);