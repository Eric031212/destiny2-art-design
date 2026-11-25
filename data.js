/* Bilingual content for "Light & Shape". Every entry is { en, zh }. */

window.D = {};

/* ---------- Molly Bang principles ---------- */
D.principles = [
  { en: ["Horizontal = calm", "Smooth, flat, horizontal shapes give a sense of stability and rest.", "The long, level horizon of the Cosmodrome at dawn; the Last City's wall."],
    zh: ["水平 = 平静", "平滑、扁平的水平形状带来稳定与安宁。", "黎明时宇宙港那条长长的地平线；最后之城的城墙。"] },
  { en: ["Vertical = energy", "Vertical shapes feel active, reaching upward, toward power or the heavens.", "The spires of the Dreaming City; the Hive's needle-like Dreadnaught towers."],
    zh: ["垂直 = 能量", "垂直的形状显得活跃，向上伸展，指向力量或天空。", "梦境之城的尖塔；邪魔无畏舰上针一样的高塔。"] },
  { en: ["Diagonal = motion", "Diagonals imply movement or tension, because they look like something falling or rising.", "A Titan's shoulder charge; the tilted wreckage of the Tower after the Red War."],
    zh: ["斜线 = 运动", "斜线暗示运动或张力，因为它看起来像正在倒下或升起。", "泰坦的肩撞；红色战争后高塔倾斜的残骸。"] },
  { en: ["High = free, low = heavy", "The top of a picture feels free and triumphant; the bottom feels grounded, threatened or sad.", "The Traveler always hangs high in the frame. In Shadowkeep the Pyramid is buried beneath the Moon."],
    zh: ["上 = 自由，下 = 沉重", "画面上半部显得自由、胜利；下半部显得沉稳、受威胁或忧伤。", "旅者总是高悬在画面上方；而在《暗影要塞》里，金字塔被埋在月球地下。"] },
  { en: ["Center = attention", "The center of the page is the most effective focus.", "The Witness is almost always framed dead center, and it is almost always still."],
    zh: ["中心 = 注意力", "画面中心是最有效的视觉焦点。", "见证者几乎总被放在画面正中，而且几乎总是静止的。"] },
  { en: ["Light ground = safe", "White or light backgrounds feel safer than dark ones.", "Clovis Bray's white labs feel safe at first glance, and that is the trap."],
    zh: ["亮背景 = 安全", "白色或浅色背景比深色背景更让人感到安全。", "克洛维斯·布雷的白色实验室乍看很安全，而这正是陷阱。"] },
  { en: ["Pointed = fear, round = comfort", "We feel scared looking at pointed shapes and comforted by rounded ones.", "The Traveler is a sphere. The Pyramids are, well, pyramids."],
    zh: ["尖 = 恐惧，圆 = 安慰", "尖锐的形状让我们害怕，圆润的形状让我们安心。", "旅者是一个球体。而金字塔，就是金字塔。"] },
  { en: ["Bigger = stronger", "The larger an object is in the picture, the stronger it feels.", "Guardians are tiny against the Traveler, the Leviathan and the Witness's ships."],
    zh: ["越大 = 越强", "物体在画面中越大，就显得越强。", "在旅者、利维坦与见证者的舰船面前，守护者都非常渺小。"] },
  { en: ["Color groups", "We associate things by color much more strongly than by shape.", "Every Void power, from any class, is purple. You read the element before the ability."],
    zh: ["颜色归类", "我们按颜色联想事物的倾向远强于按形状。", "任何职业的虚空能力都是紫色。你先读出元素，再读出技能。"] },
  { en: ["Contrast lets us see", "Without contrast there is no picture; meaning lives at the edges.", "The Final Shape's whole look: living growth set against flawless black geometry."],
    zh: ["对比让我们看见", "没有对比就没有画面；意义存在于边界上。", "《终焉之形》的整体视觉：鲜活的生长，对照无瑕的黑色几何。"] }
];

/* ---------- Bang playground readings ---------- */
D.bang = {
  or: { h: { en: "calm and stable", zh: "平静、稳定" }, v: { en: "upright and charged", zh: "挺立、充满能量" }, d: { en: "in motion, unstable", zh: "运动中、不稳定" } },
  ed: { r: { en: "soft, safe to approach", zh: "柔和、可以靠近" }, p: { en: "sharp, a threat", zh: "尖锐、构成威胁" } },
  pl: { hi: { en: "lifted, free, almost holy", zh: "升起、自由，近乎神圣" }, mid: { en: "the undisputed focus", zh: "毫无争议的焦点" }, lo: { en: "weighed down, grounded or trapped", zh: "被压低，扎根或被困" } },
  gr: { light: { en: "in a safe world", zh: "身处安全的世界" }, dark: { en: "in a dangerous, unknown world", zh: "身处危险、未知的世界" } },
  sc: { s: { en: "and small, vulnerable", zh: "而且渺小、脆弱" }, l: { en: "and large, dominant", zh: "而且巨大、占据统治" } },
  ref: [
    { when: { ed: "r", pl: "hi" }, en: "Close to how the Traveler is framed over the Last City.", zh: "很接近旅者悬于最后之城上空的构图。" },
    { when: { ed: "p", gr: "dark", sc: "l" }, en: "This is the language of the Pyramid ships and the Witness.", zh: "这就是金字塔舰船与见证者的视觉语言。" },
    { when: { ed: "p", or: "v" }, en: "Hive architecture: vertical spikes, ribs and needles.", zh: "邪魔建筑：竖直的尖刺、肋骨与针塔。" },
    { when: { or: "h", gr: "light", ed: "r" }, en: "The quiet of a Clovis Bray corridor, or a Golden Age interior.", zh: "克洛维斯·布雷走廊的寂静，或黄金时代的室内。" },
    { when: { sc: "s", pl: "lo", gr: "dark" }, en: "How a lone Guardian looks at the start of every great mission.", zh: "每个伟大任务开头，孤身守护者的样子。" }
  ]
};

/* ---------- Context demo ---------- */
D.ctx = {
  city: { en: ["Protector", "Low, warm city lights under a pale sphere set high. The sphere is above, round and lit: Bang's recipe for safety. Lore: the Traveler hovers over the Last City, humanity's last refuge, and its presence alone means home."],
          zh: ["守护者", "低矮温暖的城市灯光，上方高悬着苍白的球体。高、圆、明亮：这正是 Bang 的“安全感”配方。设定上，旅者悬浮在人类最后的避难所“最后之城”之上，它的存在本身就意味着家。"] },
  cage: { en: ["Prisoner", "The same sphere, now inside sharp red diagonals and claws. Nothing about the sphere changed; its meaning flipped from protector to victim. This is Destiny 2's opening: Ghaul's Red Legion clamps a cage onto the Traveler and cuts the Guardians off from the Light."],
          zh: ["囚徒", "同一个球体，被尖锐的红色斜线与爪形包围。球体本身没有任何变化，它的意义却从守护者翻转成了受害者。这就是《命运2》的开场：盖尔的红色军团把囚笼扣在旅者身上，切断了守护者与光的联系。"] },
  void: { en: ["Patient", "Now it hangs small and low against huge, black, pointed shapes. Smaller, lower, darker. The sphere reads as fragile, almost ill. This is the late saga: the Darkness's fleet arrives, the Witness reaches the Traveler, and the story moves inside it, to the Pale Heart."],
          zh: ["病人", "现在它又小又低，悬在巨大、漆黑、尖锐的形状前。更小、更低、更暗。球体显得脆弱，甚至像是病了。这就是后期的故事：黑暗舰队到来，见证者触及旅者，故事随之进入旅者内部，来到苍白之心。"] }
};

/* ---------- Expansions ---------- */
D.xp = [
  { id: "redwar", year: "2017 · 09", pal: ["#2b0f0c", "#8e2a1c", "#d9662b", "#e8c77a"],
    en: { name: "Destiny 2: The Red War", where: "EDZ · Titan · Nessus · Io", thesis: "Losing the Light", story: "Dominus Ghaul and the Cabal Red Legion attack the Last City, cage the Traveler and strip Guardians of their Light. Powerless and mortal, you journey across the system to recover it, and the Traveler finally wakes and shatters the cage.", look: "Watch how the palette tells the story: the campaign opens in ash and Cabal red, the European Dead Zone is green, pastoral and overgrown, and the ending floods the frame with white-gold Light. Nessus shows the Vex slowly converting a planet into red, machine-flora geometry." },
    zh: { name: "命运2：红色战争", where: "欧洲无人区 · 泰坦 · 涅索斯 · 艾奥", thesis: "失去光", story: "多米纳斯·盖尔率领卡巴尔红色军团袭击最后之城，囚禁旅者，剥夺守护者的光。失去力量、重新变得会死的你，穿越星系寻回力量，最终旅者苏醒，震碎了牢笼。", look: "注意配色如何讲故事：战役以灰烬与卡巴尔的红开场；欧洲无人区是绿色的、田园般被植被覆盖的；结局用白金色的光填满画面。涅索斯展示了维克斯如何慢慢把一颗星球改造成红色的、机械植物般的几何体。" } },
  { id: "osiris", year: "2017 · 12", pal: ["#1b1a14", "#8a6a2e", "#e3c27a", "#f5f0e0"],
    en: { name: "Curse of Osiris", where: "Mercury · the Infinite Forest", thesis: "Infinity as a machine", story: "The exiled Warlock Osiris has been studying the Vex inside the Infinite Forest, a simulation engine beneath Mercury's surface that computes every possible past and future. You stop the Vex mind Panoptes from making a future where it rules everything.", look: "The Infinite Forest is procedural by design: platforms and trees assemble out of white, glowing Vex geometry as you move. It is nature as computed, a forest that is really a calculation." },
    zh: { name: "奥西里斯的诅咒", where: "水星 · 无限森林", thesis: "作为机器的无限", story: "被放逐的术士奥西里斯一直在无限森林中研究维克斯。那是水星地表下的一台模拟引擎，计算着所有可能的过去与未来。你要阻止维克斯心智“潘诺普忒斯”创造一个由它统治一切的未来。", look: "无限森林本身就是“程序化生成”的：平台与树木在你前进时由白色发光的维克斯几何拼合而成。这是被计算出来的自然，一座本质上是一次运算的森林。" } },
  { id: "warmind", year: "2018 · 05", pal: ["#0f141b", "#5b6f84", "#c8d4df", "#c4472c"],
    en: { name: "Warmind", where: "Mars · Hellas Basin", thesis: "Brutalist memory", story: "A thaw on Mars uncovers the bunkers of Rasputin, the Golden Age defense AI, and Xol, a Hive Worm God. Ana Bray, a Guardian with a past tied to Clovis Bray, helps you wake the Warmind.", look: "Massive concrete and steel Golden Age military architecture emerging from glaciers. The contrast is red Martian dust against white ice and grey infrastructure: human scale dwarfed by its own past." },
    zh: { name: "战争心灵", where: "火星 · 赫拉斯盆地", thesis: "粗野主义的记忆", story: "火星冰川融化，露出黄金时代防御 AI 拉斯普京的地堡，以及邪魔虫神佐尔。与克洛维斯·布雷家族有着渊源的守护者安娜·布雷，帮助你唤醒这位战争心灵。", look: "从冰川中显露出的庞大黄金时代军事建筑：混凝土与钢铁。红色的火星尘土对照白冰与灰色设施：人的尺度被自己的过去所压倒。" } },
  { id: "forsaken", year: "2018 · 09", pal: ["#1a0f22", "#5a2c6e", "#c86fd1", "#6fe3d2"],
    en: { name: "Forsaken", where: "Tangled Shore · Dreaming City", thesis: "Western meets fairy tale", story: "Cayde-6, the Hunter Vanguard, is killed by Prince Uldren Sov. Your revenge leads through the lawless Tangled Shore to the Dreaming City, the hidden home of the Awoken, where a wish-granting Ahamkara named Riven sets a curse that loops the city every three weeks.", look: "Two looks in one box: the Tangled Shore is a dusty frontier western in asteroid rubble; the Dreaming City is violet, teal and gilded, all impossibly tall spires. The curse is a visual time loop, visibly darkening week by week. It's widely seen as the moment Destiny 2's identity clicked." },
    zh: { name: "遗落之族", where: "纠缠海岸 · 梦境之城", thesis: "西部片遇上童话", story: "猎人先锋凯德-6被乌尔德伦·索夫王子杀死。你的复仇之路穿过无法无天的纠缠海岸，来到觉醒者隐秘的故乡梦境之城。在那里，能实现愿望的阿罕卡拉“里文”降下诅咒，让城市每三周循环一次。", look: "一盒两种风格：纠缠海岸是小行星碎石中尘土飞扬的边疆西部片；梦境之城是紫、青、鎏金，满是高得不可思议的尖塔。诅咒是一个可见的时间循环，一周比一周更暗。普遍认为，这是《命运2》找到自我的时刻。" } },
  { id: "shadowkeep", year: "2019 · 10", pal: ["#0b0b0d", "#4a0e14", "#c2202b", "#e7dccb"],
    en: { name: "Shadowkeep", where: "The Moon · Scarlet Keep", thesis: "The past returns as a nightmare", story: "Eris Morn calls you back to the Moon. A Hive fortress, the Scarlet Keep, has risen, and red Nightmares of old enemies walk again. Beneath the surface, you find a Pyramid: a Darkness ship buried for ages. Inside it, the Darkness speaks to you in your own reflection.", look: "Crimson fog and bone-white Hive architecture, then the first true Darkness interior: smooth, black, quiet, nearly empty. It is the first place where 'clean' becomes frightening. This is also the year Destiny 2 went free-to-play and Bungie became independent from Activision." },
    zh: { name: "暗影要塞", where: "月球 · 猩红要塞", thesis: "过去以噩梦的形式归来", story: "埃里斯·莫恩召唤你重返月球。一座名为猩红要塞的邪魔堡垒拔地而起，旧敌的红色梦魇再次游荡。在地表之下，你发现了一座金字塔：一艘被埋藏了漫长岁月的黑暗之舰。在它内部，黑暗化作你自己的倒影与你对话。", look: "猩红的雾气、骨白色的邪魔建筑，然后是第一个真正的黑暗内部空间：光滑、漆黑、寂静、几乎空无一物。这是“干净”第一次变得可怕的地方。也是在这一年，《命运2》转为免费游戏，Bungie 从动视独立。" } },
  { id: "beyond", year: "2020 · 11", pal: ["#07131c", "#2a5a7a", "#9fd4f0", "#f2f6f8"],
    en: { name: "Beyond Light", where: "Europa · Deep Stone Crypt", thesis: "Sterile perfection", story: "On Jupiter's ice moon, the Eliksni leader Eramis embraces the Darkness and becomes its Kell. Guided by the mysterious Exo Stranger, Guardians take up Stasis, the first Darkness power, and uncover Clovis Bray's labs, where the Exos were made.", look: "Blizzards outside, empty white labs inside. Stasis turns enemies into crystal, which is geometry that grows. A good place to talk about how emptiness and cleanliness can carry dread. The same year, older planets were 'vaulted' (removed), a controversial design decision." },
    zh: { name: "凡人之外", where: "欧罗巴 · 深岩墓室", thesis: "无菌的完美", story: "在木星的冰卫星上，埃利克斯尼领袖埃拉米斯拥抱黑暗，成为黑暗的凯尔。在神秘的 Exo 陌客引导下，守护者第一次掌握了黑暗之力“冰影”，并发现了克洛维斯·布雷的实验室，Exo 就是在那里被制造出来的。", look: "室外暴风雪，室内是空无一人的白色实验室。冰影把敌人变成晶体，而晶体就是“会生长的几何”。这里很适合讨论空旷与洁净如何承载恐惧。同年，旧的星球被“封存”（移出游戏），这是一个颇具争议的设计决定。" } },
  { id: "thirty", year: "2021 · 12", pal: ["#161208", "#6d5a22", "#e8c77a", "#f6e9c4"],
    en: { name: "Bungie 30th Anniversary Pack", where: "Eternity · Grasp of Avarice", thesis: "A studio looks back", story: "A celebration of Bungie's history, with Xûr hosting a chaotic game-show activity, Dares of Eternity, and the pirate-themed Grasp of Avarice dungeon.", look: "Self-referential design: playful nods to Bungie's earlier games, including Marathon and Halo, inside Destiny's world. A rare moment where the art team is allowed to be silly." },
    zh: { name: "Bungie 30 周年纪念包", where: "永恒 · 贪婪之握", thesis: "工作室的回望", story: "庆祝 Bungie 的历史：由仄尔主持的混乱综艺式活动“永恒挑战”，以及海盗主题的地牢“贪婪之握”。", look: "自我指涉的设计：在《命运》世界里俏皮地致敬 Bungie 早期作品，包括《马拉松》和《光环》。难得一次，美术团队被允许尽情胡闹。" } },
  { id: "witchqueen", year: "2022 · 02", pal: ["#0d1410", "#2f5a3a", "#c9b45a", "#f4ecd2"],
    en: { name: "The Witch Queen", where: "Savathûn's Throne World", thesis: "The Light in the wrong hands", story: "Savathûn, the Hive god of cunning, has stolen the Light: her Hive are now resurrected Lightbearers, the Lucent Brood. Inside her Throne World, a realm built from her own mind, you investigate how. The answer reaches back to her origin, and reveals the Witness.", look: "The best case study for 'meaning comes from context.' Half the Throne World is a radiant palace in gold, ivory and green: the Light's own palette. The other half is a swamp of rot. Savathûn's design pairs moth wings and a crown, 'eeriness and elegance put together,' against Oryx's bat wings.³" },
    zh: { name: "邪姬魅影", where: "萨瓦图恩的王座世界", thesis: "落入他人之手的光", story: "邪魔诡计之神萨瓦图恩窃取了光：她的邪魔现在是能复活的光能使用者，即“光辉巢群”。在她以自己的心智建造的王座世界里，你调查这一切是怎么发生的。答案追溯到她的起源，并揭露了见证者。", look: "“意义来自语境”的最佳案例。王座世界一半是金色、象牙白与绿色的光辉宫殿，那正是光自己的配色；另一半是腐朽的沼泽。萨瓦图恩的设计用蛾翼与王冠，“诡异与优雅相结合”，对照欧瑞克斯的蝙蝠翼。³" } },
  { id: "lightfall", year: "2023 · 02", pal: ["#0a0a1f", "#3b1f6e", "#ff4fa0", "#38e0d0"],
    en: { name: "Lightfall", where: "Neomuna · Neptune", thesis: "A utopia that survived", story: "The Witness arrives at the Traveler. You go to Neomuna, a hidden human city on Neptune that escaped the Collapse, protected by digital-minded Cloud Striders, to find the Veil, an artifact the Witness wants. Guardians learn Strand, the Darkness power of the weave.", look: "A bright neon cyber-utopia, magenta and cyan, clean and optimistic. Many players felt it was tonally off for Destiny. That reaction itself is a lesson in context: an image can be well made and still feel wrong in its story." },
    zh: { name: "光陨之秋", where: "新蒙纳 · 海王星", thesis: "幸存下来的乌托邦", story: "见证者抵达旅者。你前往新蒙纳，一座躲过大崩溃、隐藏在海王星上的人类城市，由意识数字化的“云行者”守护，去寻找见证者想要的神器“帷幕”。守护者习得了黑暗之力“缚丝”，即编织之力。", look: "明亮的霓虹赛博乌托邦，品红与青色，干净而乐观。许多玩家觉得它与《命运》的调性不符。这种反应本身就是关于语境的一课：一张图可以画得很好，却依然在它的故事里显得不对。" } },
  { id: "finalshape", year: "2024 · 06", pal: ["#050507", "#2c2a3a", "#e9e3d4", "#e8c77a"],
    en: { name: "The Final Shape", where: "The Pale Heart of the Traveler", thesis: "Organic life against perfect geometry", story: "Ten years of story end inside the Traveler. The Pale Heart is a landscape built from memory: places Guardians remember, overgrown and dreamlike, pierced by the Witness's black monolith. Cayde-6 returns. Guardians combine Light and Darkness as Prismatic, and stop the Witness from imposing its final, unchanging shape on the universe.", look: "Everything in your email is here: living forms meeting impossibly clean edges. Lead environments are built from familiar Destiny locations, framed as memories, and the campaign is designed as a linear hero's journey rather than a new planet.⁴ The Witness's new army, the Dread, show how its order reshapes life: enemies remade with smooth, alien geometry." },
    zh: { name: "终焉之形", where: "旅者内部 · 苍白之心", thesis: "有机生命对抗完美几何", story: "十年的故事在旅者内部迎来终局。苍白之心是一片由记忆构成的风景：守护者记得的地方，草木蔓生、如梦似幻，被见证者的黑色巨碑刺穿。凯德-6回归。守护者把光与暗合为“棱镜”，阻止见证者把它那终极的、永不改变的形状强加给宇宙。", look: "你邮件里写的一切都在这里：鲜活的形态撞上干净得不可能的边。主要环境由《命运》中熟悉的地点构成，并被呈现为记忆；整个战役被设计成一段线性的英雄之旅，而不是一颗新星球。⁴ 见证者的新军队“恐惧（Dread）”展示了它的秩序如何重塑生命：敌人被改造出光滑而陌生的几何形态。" } },
  { id: "episodes", year: "2024–25", pal: ["#0b0f14", "#7a2f2f", "#5e6bd8", "#c9c0a8"],
    en: { name: "Episodes: Echoes · Revenant · Heresy", where: "Nessus · Tangled Shore · the Dreadnaught", thesis: "Aftermath", story: "After the Final Shape, Bungie replaced seasons with three larger Episodes: Echoes returns to Nessus and the Vex; Revenant follows the Scorn and the Eliksni; Heresy brings back the Hive's Dreadnaught and the Taken.", look: "Revisiting old places with new eyes. Episodes are a good way to see how the art team re-lights and re-dresses a familiar space to change its mood." },
    zh: { name: "篇章：回响 · 亡魂 · 异端", where: "涅索斯 · 纠缠海岸 · 无畏舰", thesis: "余波", story: "《终焉之形》之后，Bungie 用三个规模更大的“篇章”取代了赛季：《回响》回到涅索斯与维克斯；《亡魂》聚焦恶魂与埃利克斯尼人；《异端》让邪魔的无畏舰与被掳者重返。", look: "用新的眼光重访旧地。篇章很适合观察美术团队如何通过重新打光与重新布景来改变一个熟悉空间的情绪。" } },
  { id: "edgeoffate", year: "2025 · 07", pal: ["#0b0912", "#3b2b5e", "#a68bff", "#f1d7a0"],
    en: { name: "The Edge of Fate", where: "Kepler", thesis: "After the saga", story: "The first chapter of a new 'Fate' saga. Guardians travel to Kepler, a strange world at the edge of the solar system tied to the enigmatic Nine, with new traversal built around mass and gravity.", look: "A reset. With the Light and Darkness saga closed, look at how the team establishes a new visual identity for a new mystery, and what it keeps from the old one." },
    zh: { name: "命运边缘", where: "开普勒", thesis: "传奇之后", story: "全新“命运”传奇的第一章。守护者前往开普勒，一个位于太阳系边缘、与神秘的“九者”有关的奇异世界，并带来围绕质量与引力设计的新移动玩法。", look: "一次重启。光暗传奇已经落幕，可以观察团队如何为一个新的谜团建立新的视觉身份，又从旧的身份里保留了什么。" } },
  { id: "renegades", year: "2025 · 12", pal: ["#0a0a0a", "#5a4632", "#d6a35a", "#e8e2d0"],
    en: { name: "Renegades", where: "A collaboration with Lucasfilm", thesis: "Two mythologies meet", story: "An expansion made in collaboration with Lucasfilm, drawing on the visual vocabulary of Star Wars inside Destiny's universe.", look: "A rare chance to compare two sci-fi myth languages directly: Destiny's painterly, ancient-feeling sci-fi against Star Wars's 'used future.'" },
    zh: { name: "Renegades（叛逆者）", where: "与卢卡斯影业的合作", thesis: "两种神话相遇", story: "与卢卡斯影业合作推出的资料片，在《命运》的宇宙中借用《星球大战》的视觉语汇。", look: "难得的机会，可以直接比较两种科幻神话语言：《命运》绘画感强、带有古老气息的科幻，与《星球大战》的“用旧了的未来”。" } }
];

/* ---------- Factions ---------- */
D.fac = [
  { id: "fallen", c: "#6fa8ff", sw: ["#1d2b45", "#4a6fa8", "#9bc0ff", "#d9d2c1"],
    en: { name: "Fallen · Eliksni", tag: "Scavenger · cloth & scrap", shape: "Four arms, hunched silhouettes, cloaks and banners. Tech assembled from salvage.", feel: "A dispossessed people. Their look says 'once great, now surviving': tattered cloth over machined parts.", arc: "Across the saga they move from enemies to neighbors. Mithrax and his House of Light settle in the Last City." },
    zh: { name: "堕落者 · 埃利克斯尼", tag: "拾荒者 · 布料与废料", shape: "四条手臂、弓着的剪影、斗篷与旗帜；用捡来的零件拼装的科技。", feel: "一个失去家园的民族。他们的造型在说“曾经伟大，如今求生”：破烂的布料覆盖在机械部件上。", arc: "在整个传奇中，他们从敌人变成邻居：米斯拉克斯和他的“光之家族”在最后之城定居。" } },
  { id: "hive", c: "#9bd36a", sw: ["#0e100b", "#3c4a2a", "#9bd36a", "#e3dcc8"],
    en: { name: "Hive", tag: "Gothic · bone & spikes", shape: "Ribs, needles, chitin, cathedral spires. Vertical and pointed.", feel: "Bang's fear recipe: vertical, pointed, dark, with sickly green light. Their architecture looks grown from bone, like a cathedral made by insects.", arc: "Their gods, Oryx, Savathûn and Xivu Arath, follow the Sword Logic: you only deserve to exist if you can kill. A theology turned into architecture." },
    zh: { name: "邪魔", tag: "哥特 · 骨与刺", shape: "肋骨、针刺、甲壳、教堂尖塔。竖直而尖锐。", feel: "Bang 的恐惧配方：竖直、尖锐、黑暗，配上病态的绿光。他们的建筑仿佛由骨头长成，像是昆虫建造的大教堂。", arc: "他们的神，欧瑞克斯、萨瓦图恩与希芙·阿拉斯，奉行“剑之逻辑”：只有能杀戮的才配存在。一种被做成建筑的神学。" } },
  { id: "vex", c: "#e8c77a", sw: ["#14110a", "#5e5029", "#e8c77a", "#f6f2e4"],
    en: { name: "Vex", tag: "Brass · milk · time", shape: "Brass bodies, a single glowing eye, pale fluid inside. Built from repeated modules.", feel: "Machines that look ancient. Their geometry is classical, almost Greek, which makes a time-traveling machine collective feel like a religion.", arc: "They try to convert reality itself into Vex. Nessus and Mercury are planets being slowly turned into Vex machinery." },
    zh: { name: "维克斯", tag: "黄铜 · 乳白液 · 时间", shape: "黄铜躯体、一只发光的眼、体内流动的乳白液体，由重复的模块组成。", feel: "看起来很古老的机器。它们的几何是古典的，近乎希腊式，让这个能穿越时间的机械集体显得像一种宗教。", arc: "它们试图把现实本身转化为维克斯。涅索斯与水星就是正被慢慢改造成维克斯机械的星球。" } },
  { id: "cabal", c: "#d9662b", sw: ["#1c0f0a", "#5a2a18", "#d9662b", "#c9c0a8"],
    en: { name: "Cabal", tag: "Imperial · slabs & bulk", shape: "Huge rounded masses, heavy armor plates, industrial war machines.", feel: "Big means strong. Their silhouettes are wide and low, like tanks: stable, unstoppable, bureaucratic.", arc: "An empire with a Roman flavor, led by Emperor Calus and later by Caiatl. Destiny 2 opens with their Red Legion's invasion." },
    zh: { name: "卡巴尔", tag: "帝国 · 厚板与体量", shape: "巨大圆润的体块、厚重的装甲板、工业战争机器。", feel: "大即是强。他们的剪影又宽又低，像坦克：稳定、不可阻挡、官僚。", arc: "带有罗马帝国气质的帝国，由皇帝卡卢斯、之后由凯亚特统领。《命运2》就以他们红色军团的入侵开场。" } },
  { id: "taken", c: "#e9e3d4", sw: ["#050505", "#2a2a2a", "#e9e3d4", "#ffffff"],
    en: { name: "Taken", tag: "Negative space · inverted", shape: "Any enemy, turned into a silhouette: black bodies with white, flickering outlines.", feel: "The purest example of form without detail. Taking away texture makes something familiar alien. It is like a photo negative of life.", arc: "Created when Oryx, the Taken King, stole creatures from reality and bent them to his will." },
    zh: { name: "被掳者", tag: "负空间 · 反相", shape: "任何敌人都可能变成剪影：黑色躯体，白色闪烁的轮廓。", feel: "没有细节、只有形的最纯粹例子。抽走质感之后，熟悉的东西就变得陌生，就像生命的底片。", arc: "由被掳之王欧瑞克斯从现实中掳走生物、扭曲成自己的仆从而诞生。" } },
  { id: "scorn", c: "#4fd1c5", sw: ["#0b1413", "#294a47", "#4fd1c5", "#c9b08a"],
    en: { name: "Scorn", tag: "Undead · ether-burnt", shape: "Eliksni bodies resurrected by Dark Ether: patched, jittering, glowing teal.", feel: "The Fallen silhouette made wrong. Familiar shapes in unnatural poses are scarier than new monsters.", arc: "Raised by Uldren Sov's Barons in Forsaken; later led by Fikrul and the Scorn chieftains." },
    zh: { name: "恶魂", tag: "不死 · 被以太灼烧", shape: "被黑暗以太复活的埃利克斯尼躯体：缝补、抽搐、发出青光。", feel: "被扭曲的堕落者剪影。熟悉的形状摆出不自然的姿态，比全新的怪物更可怕。", arc: "在《遗落之族》中由乌尔德伦·索夫的男爵们复活；后来由菲克鲁尔等恶魂首领带领。" } },
  { id: "dread", c: "#8f86ff", sw: ["#06060a", "#26233f", "#8f86ff", "#e9e3d4"],
    en: { name: "Dread · the Witness", tag: "Absolute · smooth · final", shape: "Monoliths, Pyramids, smooth carapaces. The Witness itself is a tall form with a void cut through it.", feel: "Pointed, centered, dark and huge: every fear principle at once. But also elegant. The danger is how beautiful a perfect thing can be.", arc: "Lightfall introduced the Witness's Tormentors; The Final Shape introduced the Dread, life remade into its order." },
    zh: { name: "恐惧 · 见证者", tag: "绝对 · 光滑 · 终结", shape: "巨碑、金字塔、光滑的甲壳。见证者本身是一个高大的形体，中间被挖出一道虚空。", feel: "尖锐、居中、黑暗、巨大：同时触发所有恐惧原则。但它也很优雅。真正的危险，在于一个完美的东西可以有多美。", arc: "《光陨之秋》引入了见证者的“折磨者”；《终焉之形》引入了“恐惧”，即被改造进它的秩序中的生命。" } }
];

/* ---------- Elements ---------- */
D.el = [
  { id: "solar", c: "#f08a24", side: "light",
    en: { name: "Solar", verb: "Light · burn · restore · radiance", text: "The Light as fire and renewal. Solar heals as often as it burns, and its visual language is the sun: warm orange, rising sparks, wings of flame." },
    zh: { name: "烈日", verb: "光 · 灼烧 · 恢复 · 光辉", text: "以火与重生呈现的光。烈日能治愈，也能焚烧；它的视觉语言就是太阳：温暖的橙色、上升的火星、火焰之翼。" } },
  { id: "arc", c: "#7fd6ff", side: "light",
    en: { name: "Arc", verb: "Light · speed · chain · jolt", text: "The Light as raw energy and momentum. Jagged, branching lines that link one target to the next: diagonals everywhere, which is why Arc always feels fast." },
    zh: { name: "电弧", verb: "光 · 速度 · 连锁 · 电击", text: "以纯粹能量与动量呈现的光。锯齿状、分叉的线条把一个目标连到下一个：到处都是斜线，这就是电弧总让人觉得很快的原因。" } },
  { id: "void", c: "#b36cff", side: "light",
    en: { name: "Void", verb: "Light · absence · suppress · weaken", text: "The strangest Light: power drawn from nothingness. Its purple implosions pull inward, the opposite of Solar's outward burst." },
    zh: { name: "虚空", verb: "光 · 虚无 · 压制 · 削弱", text: "最奇特的光：从虚无中汲取的力量。它紫色的内爆向内收缩，与烈日向外的爆发正好相反。" } },
  { id: "stasis", c: "#4f7cff", side: "dark",
    en: { name: "Stasis", verb: "Darkness · freeze · slow · shatter", text: "The first Darkness power (Beyond Light). Crystal, ice, stillness: control by stopping time in place. Geometry that grows, and the clearest early sign that the Darkness wants order." },
    zh: { name: "冰影", verb: "暗 · 冻结 · 减速 · 粉碎", text: "第一种黑暗之力（凡人之外）。晶体、冰、静止：通过让时间停在原地来实现控制。会生长的几何，也是最早、最清楚的信号：黑暗想要的是秩序。" } },
  { id: "strand", c: "#3ee08f", side: "dark",
    en: { name: "Strand", verb: "Darkness · weave · suspend · sever", text: "The Darkness power of the weave that connects all living things (Lightfall). Green threads and grapples. Interesting because it complicates the story: a Darkness power about connection and life." },
    zh: { name: "缚丝", verb: "暗 · 编织 · 悬吊 · 切断", text: "连接一切生命之“织网”的黑暗之力（光陨之秋）。绿色的丝线与钩索。它有意思的地方在于让故事更复杂：一种关于连接与生命的黑暗之力。" } },
  { id: "prism", c: "#e9e3d4", side: "both",
    en: { name: "Prismatic", verb: "Light + Darkness · transcendence", text: "The Final Shape's answer: Guardians combine Light and Darkness. Visually, a prism splits white light into every color, so the series ends with a refusal of the binary." },
    zh: { name: "棱镜", verb: "光 + 暗 · 超越", text: "《终焉之形》给出的答案：守护者把光与暗结合起来。在视觉上，棱镜把白光分解成所有颜色，所以整个系列以“拒绝二元对立”作结。" } }
];

/* ---------- Lore timeline ---------- */
D.tl = [
  { c: "#8f86ff",
    en: { when: "Before time", what: "The Gardener and the Winnower", text: "Two cosmic powers play a game. The Gardener wants a universe where anything can grow; the Winnower believes only what survives the culling should exist. In the lore book Unveiling, the Winnower presents itself as the honest one.", art: "Every faction and power later picks a side of this argument, in shape and color." },
    zh: { when: "时间之前", what: "园丁与筛选者", text: "两种宇宙力量在下一盘棋。园丁希望宇宙中任何东西都能生长；筛选者认为只有经过筛选而幸存的东西才配存在。在传说书《揭示》中，筛选者把自己描述为诚实的一方。", art: "此后的每个种族、每种力量，都以形状和颜色在这场辩论中选边站。" } },
  { c: "#9bd36a",
    en: { when: "Ages ago", what: "The Books of Sorrow", text: "Three Krill sisters on a doomed ocean world make a pact with the Worm gods and become the Hive gods Oryx, Savathûn and Xivu Arath, bound to the Sword Logic.", art: "Hive design grows from this: cathedrals of bone built by a religion of killing." },
    zh: { when: "远古", what: "哀伤之书", text: "在一颗注定毁灭的海洋星球上，三位克里尔姐妹与虫神立约，成为邪魔之神欧瑞克斯、萨瓦图恩与希芙·阿拉斯，从此受“剑之逻辑”约束。", art: "邪魔的设计由此而来：一种杀戮宗教用骨头建成的大教堂。" } },
  { c: "#e8c77a",
    en: { when: "The Golden Age", what: "The Traveler arrives", text: "A vast pale sphere appears at Mars. It terraforms the solar system and humanity flourishes: lifespans triple, Exos and Warminds are built, colonies spread.", art: "Golden Age design is clean, optimistic, rounded: the ruins Guardians later walk through." },
    zh: { when: "黄金时代", what: "旅者降临", text: "一个巨大的苍白球体出现在火星。它改造了整个太阳系，人类迎来繁荣：寿命增至三倍，Exo 与战争心灵被制造出来，殖民地遍布星系。", art: "黄金时代的设计干净、乐观、圆润：也就是守护者日后穿行其中的废墟。" } },
  { c: "#c2202b",
    en: { when: "The Collapse", what: "The Darkness comes", text: "The Darkness arrives and civilization falls. The Traveler makes a last stand, then goes silent and broken over Earth.", art: "This is why the Traveler is cracked. Its imperfection is a wound, and a sign it fought." },
    zh: { when: "大崩溃", what: "黑暗降临", text: "黑暗到来，文明崩塌。旅者做了最后的抵抗，然后在地球上空陷入沉寂，破碎不堪。", art: "这就是旅者破碎的原因。它的不完美是一道伤口，也是它曾经战斗过的证明。" } },
  { c: "#d9662b",
    en: { when: "The Dark Age", what: "The first Risen", text: "Ghosts, small machines of the Traveler, raise the dead as Lightbearers. Some become warlords; the Iron Lords choose to protect people instead.", art: "Guardian gear draws on this era: knightly, mismatched, handmade, worn." },
    zh: { when: "黑暗时代", what: "最初的复生者", text: "旅者的小型机械“机灵”把死者复活为光能使用者。有的人成了军阀；铁卫选择保护人民。", art: "守护者的装备设计源于这个时代：骑士般的、拼凑的、手工的、磨损的。" } },
  { c: "#f4efe2",
    en: { when: "The City Age", what: "The Last City", text: "Humanity's survivors build the Last City under the Traveler, guarded by the Vanguard: Commander Zavala, Ikora Rey and Cayde-6. Destiny 1 (2014) and its expansions take place here.", art: "The city is low and horizontal, the Traveler high and round: Bang's composition of safety." },
    zh: { when: "城市时代", what: "最后之城", text: "幸存的人类在旅者之下建起最后之城，由先锋守卫：指挥官扎瓦拉、艾科拉·雷和凯德-6。初代《命运》（2014）及其资料片都发生在这里。", art: "城市低矮而水平，旅者高悬而圆润：这是 Bang 的“安全感”构图。" } },
  { c: "#8e2a1c",
    en: { when: "2017 →", what: "Destiny 2", text: "The Red War, Forsaken, Shadowkeep, Beyond Light, The Witch Queen, Lightfall. The Darkness returns, Guardians learn to wield it, and the Witness takes shape as the enemy.", art: "See the Expansions section above for each chapter's visual thesis." },
    zh: { when: "2017 →", what: "命运2", text: "红色战争、遗落之族、暗影要塞、凡人之外、邪姬魅影、光陨之秋。黑暗归来，守护者学会驾驭它，而见证者逐渐成形为真正的敌人。", art: "每一章的视觉命题，见上方“全部资料片”部分。" } },
  { c: "#e9e3d4",
    en: { when: "2024", what: "The Final Shape", text: "Inside the Traveler, Guardians stop the Witness. The universe stays unfinished, which is the point.", art: "The series ends on contrast, not purity: Prismatic, Light and Dark together." },
    zh: { when: "2024", what: "终焉之形", text: "在旅者内部，守护者阻止了见证者。宇宙保持着“未完成”的状态，而这正是意义所在。", art: "整个系列以对比而非纯粹作结：棱镜，光与暗同在。" } }
];

/* ---------- Glossary ---------- */
D.gloss = [
  { en: ["Guardian", "A Lightbearer, raised from death by a Ghost. You."], zh: ["守护者", "被机灵从死亡中复活的光能使用者。也就是你。"] },
  { en: ["Ghost", "A small machine created by the Traveler; your companion."], zh: ["机灵", "旅者创造的小型机械，你的伙伴。"] },
  { en: ["The Traveler", "The pale, broken sphere above the Last City, source of the Light."], zh: ["旅者", "悬于最后之城上空、苍白而破碎的球体，光的源头。"] },
  { en: ["Paracausal", "Forces, like Light and Darkness, that break cause and effect."], zh: ["超因果", "像光与暗这样打破因果律的力量。"] },
  { en: ["The Witness", "The intelligence behind the Darkness, seeking a final shape."], zh: ["见证者", "黑暗背后的意志，追求一个终极之形。"] },
  { en: ["Vanguard", "The leaders of the Guardians: Zavala, Ikora, Cayde-6."], zh: ["先锋", "守护者的领导者：扎瓦拉、艾科拉、凯德-6。"] },
  { en: ["Exo", "A human mind copied into a machine body, made by Clovis Bray."], zh: ["Exo", "被复制进机械身体的人类意识，由克洛维斯·布雷制造。"] },
  { en: ["Awoken", "Humans changed by the Collapse, living in the Reef and Dreaming City."], zh: ["觉醒者", "在大崩溃中发生变异的人类，居住在暗礁与梦境之城。"] },
  { en: ["Sword Logic", "The Hive belief that existence is earned by killing."], zh: ["剑之逻辑", "邪魔的信条：存在的资格需要通过杀戮来赢得。"] },
  { en: ["Lore books", "In-game texts that hold most of Destiny's deep story."], zh: ["传说书", "游戏内的文本，承载了《命运》大部分深层故事。"] },
  { en: ["ViDoc", "Bungie's short making-of documentaries for each release."], zh: ["ViDoc", "Bungie 为每次发布制作的简短开发纪录片。"] },
  { en: ["Raid", "A six-player endgame activity; often the most ambitious art in each expansion."], zh: ["突袭", "六人终局活动，往往是每部资料片中最具野心的美术。"] }
];
