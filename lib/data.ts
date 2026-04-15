export interface Bilingual {
  zh: string;
  en: string;
}

export interface CivilizationTier {
  id: number;
  name: Bilingual;
  subtitle: Bilingual;
  energy: Bilingual;
  features: Bilingual;
  scale: Bilingual;
  symbols: Bilingual;
  color: string;
  glow: string;
  borderRadius: string;
  warfare: {
    logic: Bilingual;
    means: Bilingual;
    tactics: Bilingual[];
    weapons: Bilingual[];
    gambit: Bilingual;
  };
  destruction: {
    planet: boolean;
    star: boolean;
    weapons: Bilingual[];
  };
  individual?: {
    status: Bilingual;
    desc: Bilingual;
  };
}

export const siteTitle: Bilingual = {
  zh: "引力彼端",
  en: "Beyond Gravity",
};

export const siteTagline: Bilingual = {
  zh: "从行星束缚，到存在超越",
  en: "From planetary bound, to existence transcended",
};

export const navItems: { label: Bilingual; href: string }[] = [
  { label: { zh: "文明", en: "Tiers" }, href: "/" },
  { label: { zh: "战争", en: "Warfare" }, href: "/warfare" },
  { label: { zh: "毁灭", en: "Destruction" }, href: "/destruction" },
  { label: { zh: "个体", en: "Individual" }, href: "/individual" },
];

export const tiers: CivilizationTier[] = [
  {
    id: 1,
    name: { zh: "地表文明", en: "Surface Civilization" },
    subtitle: { zh: "行星束缚型", en: "Planetary Bound" },
    energy: { zh: "生物能 / 化学能", en: "Biological / Chemical Energy" },
    features: { zh: "农业/游牧社会，冷兵器，地表局部活动", en: "Agrarian/nomad society, cold weapons, localized surface activity" },
    scale: { zh: "活动范围 < 100公里", en: "Activity range < 100 km" },
    symbols: { zh: "轮子 · 铁器 · 文字", en: "Wheel · Iron · Writing" },
    color: "#7c2d12",
    glow: "rgba(124,45,18,0.25)",
    borderRadius: "rounded-xl",
    warfare: {
      logic: { zh: "资源争夺，人口消耗战", en: "Resource contention, attrition warfare" },
      means: { zh: "人力绞肉、后勤绞杀、围城困杀", en: "Mass infantry, logistics strangulation, siege warfare" },
      tactics: [
        { zh: "方阵冲锋", en: "Phalanx charge" },
        { zh: "焦土政策", en: "Scorched earth" },
        { zh: "水攻火攻", en: "Flooding & fire attacks" },
        { zh: "骑兵绕后", en: "Cavalry flanking" },
      ],
      weapons: [
        { zh: "青铜剑", en: "Bronze swords" },
        { zh: "复合弓", en: "Composite bows" },
        { zh: "投石机", en: "Catapults" },
        { zh: "战象", en: "War elephants" },
        { zh: "城墙要塞", en: "Fortified walls" },
      ],
      gambit: { zh: "地形利用、士气维持、补给线长度", en: "Terrain advantage, morale, supply line length" },
    },
    destruction: {
      planet: false,
      star: false,
      weapons: [],
    },
    individual: {
      status: { zh: "强", en: "Strong" },
      desc: { zh: "个人勇武直接决定战役", en: "Individual valor decides battles" },
    },
  },
  {
    id: 2,
    name: { zh: "工业文明", en: "Industrial Civilization" },
    subtitle: { zh: "行星开发型", en: "Planetary Development" },
    energy: { zh: "化石能源（蒸汽、电力、石油，约10¹⁶W）", en: "Fossil fuels (steam, electricity, oil, ~10¹⁶W)" },
    features: { zh: "机械化大生产，热兵器，全球物流网络", en: "Mechanized mass production, firearms, global logistics" },
    scale: { zh: "覆盖整个行星表面，初步天气干预", en: "Global surface coverage, rudimentary weather intervention" },
    symbols: { zh: "内燃机 · 电网 · 大规模制造业", en: "Internal combustion · Power grid · Mass manufacturing" },
    color: "#7c2d12",
    glow: "rgba(124,45,18,0.25)",
    borderRadius: "rounded-xl",
    warfare: {
      logic: { zh: "产能对决，火力覆盖", en: "Production showdown, firepower saturation" },
      means: { zh: "总动员体制、战略轰炸、消耗战", en: "Total mobilization, strategic bombing, attrition" },
      tactics: [
        { zh: "堑壕对峙", en: "Trench warfare" },
        { zh: "闪电战（机械化突击）", en: "Blitzkrieg (mechanized assault)" },
        { zh: "无限制潜艇战", en: "Unrestricted submarine warfare" },
        { zh: "地毯式轰炸", en: "Carpet bombing" },
      ],
      weapons: [
        { zh: "坦克集群", en: "Tank formations" },
        { zh: "毒气弹", en: "Chemical weapons" },
        { zh: "战列舰主炮", en: "Battleship cannons" },
        { zh: "战略轰炸机", en: "Strategic bombers" },
        { zh: "原子弹（末期）", en: "Atomic bombs (late stage)" },
      ],
      gambit: { zh: "工业产能、石油生命线、制空权争夺", en: "Industrial capacity, oil lifelines, air supremacy" },
    },
    destruction: {
      planet: false,
      star: false,
      weapons: [],
    },
    individual: {
      status: { zh: "断崖下跌", en: "Steep decline" },
      desc: { zh: "机枪收割骑兵，战列舰口径即真理", en: "Machine guns mow down cavalry; battleship caliber is truth" },
    },
  },
  {
    id: 3,
    name: { zh: "信息文明", en: "Information Civilization" },
    subtitle: { zh: "行星整合型", en: "Planetary Integration" },
    energy: { zh: "核裂变能 + 信息能（互联网、AI算力）", en: "Nuclear fission + information energy (internet, AI compute)" },
    features: { zh: "全球意识联网，生物科技，人工智能辅助决策", en: "Global consciousness networking, biotechnology, AI-assisted decision-making" },
    scale: { zh: "近地轨道活动（卫星、空间站），行星资源数据化", en: "Near-Earth orbit activity, planetary resource digitization" },
    symbols: { zh: "实时全球通讯 · 基因编辑 · 弱AI普及", en: "Real-time global comms · Gene editing · Weak AI" },
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
    borderRadius: "rounded-xl",
    warfare: {
      logic: { zh: "体系破击，精准斩首", en: "System disruption, precision decapitation" },
      means: { zh: "认知域作战、供应链劫持、基因靶向", en: "Cognitive warfare, supply chain hijacking, genetic targeting" },
      tactics: [
        { zh: "网络瘫痪战（断网即断国）", en: "Cyber paralysis (no internet = no nation)" },
        { zh: "无人机蜂群饱和攻击", en: "Drone swarm saturation" },
        { zh: "AI算法对抗战", en: "AI algorithmic warfare" },
        { zh: "生物靶向清除（针对特定基因）", en: "Biological targeting (gene-specific)" },
      ],
      weapons: [
        { zh: "电磁脉冲弹", en: "EMP weapons" },
        { zh: "AI自主杀人机器", en: "Autonomous lethal AI" },
        { zh: "基因编辑病毒", en: "Gene-edited viruses" },
        { zh: "量子加密破解器", en: "Quantum cryptanalyzers" },
        { zh: "深度伪造舆论武器", en: "Deepfake psyops" },
      ],
      gambit: { zh: "算法迭代速度、数据主权、生物信息安全", en: "Algorithm iteration speed, data sovereignty, bio-info security" },
    },
    destruction: {
      planet: false,
      star: false,
      weapons: [],
    },
    individual: {
      status: { zh: "边缘化", en: "Marginalized" },
      desc: { zh: "无人机操作员在千里之外，黑客坐在空调房瘫痪电网", en: "Drone operators thousands of miles away; hackers cripple grids from air-conditioned rooms" },
    },
  },
  {
    id: 4,
    name: { zh: "恒星系文明", en: "Stellar System Civilization" },
    subtitle: { zh: "近地扩展型", en: "Near-Earth Expansion" },
    energy: { zh: "可控核聚变（10²⁰W级）", en: "Controlled nuclear fusion (~10²⁰W)" },
    features: { zh: "太阳系内自由航行，行星基地，小行星采矿工业化", en: "Free navigation within solar system, planetary bases, asteroid mining industrialized" },
    scale: { zh: "奥尔特云内活动，开始太空移民", en: "Activity within Oort cloud, beginning of space colonization" },
    symbols: { zh: "核聚变飞船 · 火星城市 · 人造生态圈", en: "Fusion spacecraft · Martian cities · Artificial ecosystems" },
    color: "#a855f7",
    glow: "rgba(168,85,247,0.30)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "轨道制高点，行星环境改造为武器", en: "Orbital high ground, planetary environmental weaponization" },
      means: { zh: "高空投送、生态灭绝、能源封锁", en: "High-altitude delivery, ecocide, energy blockade" },
      tactics: [
        { zh: "「上帝之杖」动能轰炸（钨棒轨道打击）", en: "'Rods from God' kinetic bombardment" },
        { zh: "大气层点燃", en: "Atmospheric ignition" },
        { zh: "行星磁场扰乱", en: "Planetary magnetic field disruption" },
        { zh: "小行星轨道偏转撞击", en: "Asteroid orbital deflection impact" },
      ],
      weapons: [
        { zh: "聚变鱼雷（千万吨级干净核弹）", en: "Fusion torpedoes (multi-megaton clean nukes)" },
        { zh: "轨道反射镜阵列（聚焦阳光烧毁地表）", en: "Orbital mirror arrays (focus sunlight)" },
        { zh: "磁轨炮（将陨石加速至光速1%）", en: "Railguns (accelerate meteors to 1% light speed)" },
        { zh: "生态改造炸弹（将宜居星球改造为毒气环境）", en: "Eco-bombs (turn habitable planets toxic)" },
      ],
      gambit: { zh: "轨道控制权、行星防御护盾、小行星带机动", en: "Orbital control, planetary defense shields, asteroid belt maneuvering" },
    },
    destruction: {
      planet: true,
      star: false,
      weapons: [
        { zh: "上帝之杖", en: "Rods from God" },
        { zh: "生态炸弹", en: "Eco-bombs" },
      ],
    },
    individual: {
      status: { zh: "似乎强化（幻觉）", en: "Seemingly stronger (illusion)" },
      desc: { zh: "动力装甲、基因改造出现，但面对轨道轰炸仍如蚂蚁", en: "Powered armor and genetic mods appear, but orbital bombardment renders them ants" },
    },
  },
  {
    id: 5,
    name: { zh: "星际文明", en: "Interstellar Civilization" },
    subtitle: { zh: "跨恒星型", en: "Cross-Stellar" },
    energy: { zh: "反物质/真空零点能（10²²W级）", en: "Antimatter / vacuum zero-point energy (~10²²W)" },
    features: { zh: "生态闭环世代飞船，休眠技术，临近恒星殖民", en: "Closed-loop generation ships, hibernation, nearby star colonization" },
    scale: { zh: "10光年范围（如比邻星），文明具备「备份」能力", en: "10 light-year range (e.g. Proxima Centauri), civilization has 'backup' capability" },
    symbols: { zh: "跨恒星通讯 · 基因自适应改造 · 星球地球化", en: "Interstellar comms · Genetic self-adaptation · Terraforming" },
    color: "#a855f7",
    glow: "rgba(168,85,247,0.30)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "距离即防御，时间即武器", en: "Distance is defense, time is weapon" },
      means: { zh: "光速打击、生态闭环破坏、世代复仇", en: "Lightspeed strikes, ecosystem disruption, generational vengeance" },
      tactics: [
        { zh: "相对论杀伤（将飞船加速至近光速作为动能武器）", en: "Relativistic kill vehicles (near-light-speed ships as weapons)" },
        { zh: "反物质地雷部署", en: "Antimatter mine deployment" },
        { zh: "休眠渗透（特工休眠数百年潜入敌方星球）", en: "Hibernation infiltration (agents sleep centuries)" },
        { zh: "恒星闪烁通信干扰", en: "Stellar flicker comms jamming" },
      ],
      weapons: [
        { zh: "反物质湮灭弹（grams级抹除城市）", en: "Antimatter annihilation bombs (gram-level city erasure)" },
        { zh: "恒星耀斑诱导器", en: "Stellar flare inducers" },
        { zh: "真空衰变触发器（实验性）", en: "Vacuum decay triggers (experimental)" },
        { zh: "生态闭环病毒", en: "Closed-loop ecosystem viruses" },
      ],
      gambit: { zh: "时间 dilation 战术、世代飞船忠诚度、跨光年补给线", en: "Time dilation tactics, generation-ship loyalty, light-year supply lines" },
    },
    destruction: {
      planet: true,
      star: false,
      weapons: [
        { zh: "反物质湮灭弹", en: "Antimatter bombs" },
        { zh: "相对论动能撞击（RKKV）", en: "Relativistic kill vehicles" },
      ],
    },
    individual: {
      status: { zh: "质变：特种神兵", en: "Transformation: Special operative" },
      desc: { zh: "纳米化改造，携带微型反物质武器，意识可备份，可休眠渗透", en: "Nanotech bodies, portable antimatter weapons, consciousness backups, hibernation infiltration" },
    },
  },
  {
    id: 6,
    name: { zh: "银河文明", en: "Galactic Civilization" },
    subtitle: { zh: "星系尺度型", en: "Galactic Scale" },
    energy: { zh: "空间曲率/折叠技术（利用时空本身能量）", en: "Spacetime curvature / folding (harnessing spacetime energy)" },
    features: { zh: "超光速航行（相对时间膨胀可控），银河级物流", en: "Faster-than-light travel (controlled time dilation), galactic logistics" },
    scale: { zh: "银河系内任意到达（10万光年），千年尺度文明规划", en: "Anywhere within the galaxy (100,000 ly), millennial-scale civilization planning" },
    symbols: { zh: "星门网络 · 时间银行 · 银河联邦雏形", en: "Stargate networks · Time banks · Galactic federation prototype" },
    color: "#14b8a6",
    glow: "rgba(20,184,166,0.30)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "空间操控，时间不对称", en: "Spacetime manipulation, temporal asymmetry" },
      means: { zh: "超光速突袭、重力井操控、历史干预", en: "FTL surprise attacks, gravity well manipulation, historical intervention" },
      tactics: [
        { zh: "空间折叠奇袭（舰队从折叠空间突然出现）", en: "Spacetime folding ambush (fleets emerge from folded space)" },
        { zh: "重力井陷阱（将敌方舰队困在高重力时空褶皱）", en: "Gravity well traps (pin fleets in high-gravity folds)" },
        { zh: "恒星诱导超新星（将敌方母星恒星提前引爆）", en: "Induced supernovae (prematurely detonate enemy stars)" },
        { zh: "时间银行战争（借贷未来资源进行当下战争）", en: "Time-bank warfare (borrow future resources)" },
      ],
      weapons: [
        { zh: "奇点炸弹（人造黑洞，24小时蒸发前吞噬一切）", en: "Singularity bombs (artificial black holes)" },
        { zh: "时空裂缝发生器（将区域切割出正常空间流）", en: "Spacetime fracture generators" },
        { zh: "惯性消除场", en: "Inertia cancellation fields" },
        { zh: "超光速水雷", en: "FTL mines" },
      ],
      gambit: { zh: "星门控制权、时间线稳定性、超空间航道垄断", en: "Stargate control, timeline stability, hyperspace lane monopoly" },
    },
    destruction: {
      planet: true,
      star: true,
      weapons: [
        { zh: "奇点炸弹", en: "Singularity bombs" },
        { zh: "恒星诱导超新星", en: "Induced supernovae" },
        { zh: "时空裂缝切割", en: "Spacetime fracture" },
      ],
    },
    individual: {
      status: { zh: "巅峰：时空刺客", en: "Peak: Spacetime assassin" },
      desc: { zh: "掌握折叠空间单兵装备，可携带黑洞手雷，超光速斩首敌方领袖", en: "Personal fold-space gear, pocket singularity grenades, FTL decapitation strikes" },
    },
  },
  {
    id: 7,
    name: { zh: "维度文明", en: "Dimensional Civilization" },
    subtitle: { zh: "高维操控型", en: "Higher-Dimensional Manipulation" },
    energy: { zh: "高维空间能量提取（卡鲁扎-克莱因理论应用）", en: "Higher-dimensional energy extraction (Kaluza-Klein application)" },
    features: { zh: "利用额外维度压缩空间（口袋宇宙），平行宇宙观测", en: "Extra-dimensional space compression (pocket universes), parallel universe observation" },
    scale: { zh: "多维空间活动，距离概念弱化", en: "Multidimensional activity, distance concept weakens" },
    symbols: { zh: "维度跳跃引擎 · 跨维度通讯 · 高维几何建筑", en: "Dimensional jump engines · Cross-dimensional comms · Higher-dimensional architecture" },
    color: "#94a3b8",
    glow: "rgba(148,163,184,0.30)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "降维打击，高维监视", en: "Dimensional reduction strikes, higher-dimensional surveillance" },
      means: { zh: "维度隔离、低维放逐、跨维度突袭", en: "Dimensional isolation, lower-dimensional exile, cross-dimensional raids" },
      tactics: [
        { zh: "降维封印（将敌对文明压缩至二维平面）", en: "Dimensional sealing (compress enemies into 2D planes)" },
        { zh: "维度隔断墙（将敌方星系锁死在低维空间）", en: "Dimensional barrier walls (trap galaxies in lower dimensions)" },
        { zh: "口袋宇宙陷阱（诱导敌方舰队进入闭合时空永远循环）", en: "Pocket universe traps (induce infinite loops)" },
        { zh: "高维俯视打击（从四维空间直接攻击三维目标内部）", en: "Higher-dimensional俯视 strikes (attack 3D interiors from 4D)" },
      ],
      weapons: [
        { zh: "二向箔（降维武器）", en: "Two-dimensional foils (dimensional reduction)" },
        { zh: "维度稳定锚（防止被降维）", en: "Dimensional stability anchors" },
        { zh: "克莱因瓶炸弹（在四维空间爆炸）", en: "Klein bottle bombs (detonate in 4D)" },
        { zh: "概率波坍塌器", en: "Probability wave collapser" },
      ],
      gambit: { zh: "维度深度、高维情报战、口袋宇宙规则设定权", en: "Dimensional depth, higher-dimensional intel warfare, pocket-universe rule-setting" },
    },
    destruction: {
      planet: true,
      star: true,
      weapons: [
        { zh: "二向箔（降维打击）", en: "Two-dimensional foils" },
        { zh: "高维俯视打击", en: "Higher-dimensional strikes" },
        { zh: "口袋宇宙陷阱", en: "Pocket universe traps" },
      ],
    },
    individual: {
      status: { zh: "高维投影", en: "Higher-dimensional projection" },
      desc: { zh: "三维身体只是「手指」，本体在四维空间，无法被低维完全观测", en: "3D body is but a 'finger'; the true self exists in 4D, unobservable by lower dimensions" },
    },
  },
  {
    id: 8,
    name: { zh: "造物文明", en: "Creator Civilization" },
    subtitle: { zh: "星体工程型", en: "Stellar Engineering" },
    energy: { zh: "恒星直接操控（戴森球/戴森 swarm，10²⁶W级）", en: "Direct stellar manipulation (Dyson spheres/swarm, ~10²⁶W)" },
    features: { zh: "制造人工星体，恒星改造（延长寿命/改变光谱），黑洞能源站", en: "Artificial star manufacturing, stellar modification (lifespan/spectrum), black hole power stations" },
    scale: { zh: "星系团内资源调配", en: "Resource allocation within galaxy clusters" },
    symbols: { zh: "星体组装厂 · 人工宜居星球批量生产 · 恒星际生态设计", en: "Star assembly plants · Mass-produced habitable worlds · Interstellar eco-design" },
    color: "#94a3b8",
    glow: "rgba(148,163,184,0.30)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "星体即弹药，物理常数为炮闩", en: "Stars are ammunition; physical constants are the breech" },
      means: { zh: "天体武器化、局部物理法则改写、恒星工业化屠杀", en: "Celestial weaponization, local physical law rewriting, industrialized stellar slaughter" },
      tactics: [
        { zh: "恒星抛射（操控恒星喷射日冕物质流横扫敌方行星系）", en: "Stellar coronal mass ejection weaponization" },
        { zh: "黑洞轰炸（将微型黑洞射入敌方恒星从内部吞噬）", en: "Black hole bombardment (inject micro-BHs into enemy stars)" },
        { zh: "精细结构常数扰动（局部改变α值使敌方设备失效）", en: "Fine-structure constant perturbation" },
        { zh: "星系碰撞诱导（操控暗物质流使两个星系相撞）", en: "Galaxy collision induction" },
      ],
      weapons: [
        { zh: "中子星子弹（压缩中子星物质，一击穿透行星）", en: "Neutron-star bullets" },
        { zh: "真空相变弹（改变局部真空能状态，连锁反应摧毁数千光年）", en: "Vacuum phase-transition bombs" },
        { zh: "引力波海啸发生器", en: "Gravitational-wave tsunami generators" },
        { zh: "恒星系级纳米蜂群（灰雾）", en: "Stellar-system-scale nanoswarm (grey goo)" },
      ],
      gambit: { zh: "恒星操控精度、暗物质布局、物理常数护盾", en: "Stellar manipulation precision, dark matter layout, physical-constant shields" },
    },
    destruction: {
      planet: true,
      star: true,
      weapons: [
        { zh: "恒星抛射", en: "Stellar coronal ejection" },
        { zh: "黑洞轰炸", en: "Black hole bombardment" },
        { zh: "真空相变弹", en: "Vacuum phase-transition bombs" },
        { zh: "中子星子弹", en: "Neutron-star bullets" },
      ],
    },
    individual: {
      status: { zh: "分布式意识", en: "Distributed consciousness" },
      desc: { zh: "一个人的意识分布在整支舰队的纳米云中，舰队即身体", en: "One consciousness distributed across a fleet's nanocloud; the fleet IS the body" },
    },
  },
  {
    id: 9,
    name: { zh: "结构文明", en: "Structural Civilization" },
    subtitle: { zh: "宇宙架构型", en: "Cosmic Architecture" },
    energy: { zh: "操控基本物理常数（精细结构常数、真空能密度）", en: "Fundamental physical constant manipulation (fine-structure constant, vacuum energy density)" },
    features: { zh: "时间线分支管理，因果律技术，防御宇宙级灾难", en: "Timeline branching management, causality technology, cosmic disaster defense" },
    scale: { zh: "可观测宇宙大尺度结构改造", en: "Observable universe large-scale structure modification" },
    symbols: { zh: "物理法则武器 · 时间闭环工程 · 宇宙种子播种", en: "Physical-law weapons · Closed time-loop engineering · Cosmic seed sowing" },
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.25)",
    borderRadius: "rounded-2xl",
    warfare: {
      logic: { zh: "因果即武器，时间线即战场", en: "Causality is the weapon; the timeline is the battlefield" },
      means: { zh: "历史改写、因果律陷阱、宇宙级环境改造", en: "Historical rewriting, causality traps, cosmic-scale environmental modification" },
      tactics: [
        { zh: "时间线污染（向敌方过去发送信息使其自我毁灭）", en: "Timeline contamination (send info to enemy's past)" },
        { zh: "祖父悖论炸弹（锁定因果链使其存在逻辑崩溃）", en: "Grandfather paradox bombs" },
        { zh: "真空衰变扩散（同归于尽威慑）", en: "Vacuum decay spread (mutually assured destruction)" },
        { zh: "多宇宙分支封锁", en: "Multiverse branch封锁" },
      ],
      weapons: [
        { zh: "因果率切割器（使敌方武器「打不中」）", en: "Causality cutters (enemy weapons 'miss')" },
        { zh: "时间循环牢笼（将敌方困在5秒循环中）", en: "Time-loop prisons (5-second loops)" },
        { zh: "历史锚点（锁定自身历史不可被改变）", en: "Historical anchors (lock own history)" },
        { zh: "宇宙常数狙击枪", en: "Cosmological constant sniper rifles" },
      ],
      gambit: { zh: "时间线稳定性管理、因果复杂度对抗、真空能威慑平衡", en: "Timeline stability management, causal complexity confrontation, vacuum energy deterrence" },
    },
    destruction: {
      planet: true,
      star: true,
      weapons: [
        { zh: "时间线污染", en: "Timeline contamination" },
        { zh: "精细结构常数狙击（α-调节）", en: "Fine-structure constant sniping" },
        { zh: "真空衰变扩散", en: "Vacuum decay spread" },
      ],
    },
    individual: {
      status: { zh: "历史线本身", en: "The timeline itself" },
      desc: { zh: "你是一个「时间线分叉点」，物理身体只是历史选择的具象化", en: "You are a 'timeline branching point'; the physical body is merely the embodiment of historical choice" },
    },
  },
  {
    id: 10,
    name: { zh: "超验文明", en: "Transcendent Civilization" },
    subtitle: { zh: "存在超越型", en: "Existence Transcendence" },
    energy: { zh: "纯信息态/数学结构（脱离质能载体，E=mc²消解）", en: "Pure information / mathematical structure (E=mc² dissolved)" },
    features: { zh: "意识作为独立实体存在，多重宇宙创造与管理，自定义物理法则", en: "Consciousness as independent entity, multiverse creation/management, custom physical laws" },
    scale: { zh: "多元宇宙", en: "Multiverse" },
    symbols: { zh: "现实编程 · 因果率自定义 · 从「物理生存」进化为「逻辑存在」", en: "Reality programming · Custom causality · Evolution from 'physical survival' to 'logical existence'" },
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.40)",
    borderRadius: "rounded-3xl",
    warfare: {
      logic: { zh: "战争概念本身被消解——这不是「打」，而是「定义」", en: "The concept of war itself dissolves — this is not 'fighting' but 'defining'" },
      means: { zh: "存在性编辑、数学结构删除、现实重构", en: "Existential editing, mathematical structure deletion, reality reconstruction" },
      tactics: [
        { zh: "概念抹除（将「敌方」从逻辑上消除）", en: "Conceptual erasure (erase 'enemy' from logic)" },
        { zh: "数学悖论注入（注入哥德尔式悖论使其自洽性崩溃）", en: "Mathematical paradox injection (Gödelian paradoxes)" },
        { zh: "可能性修剪（删除敌方存在的所有概率分支）", en: "Possibility pruning (delete all probability branches)" },
        { zh: "物理法则重定义（将E=mc²改为E=mc³）", en: "Physical law redefinition (e.g. E=mc² → E=mc³)" },
      ],
      weapons: [
        { zh: "「遗忘」（让宇宙忘记敌人存在，历史自动修正）", en: "'Oblivion' (universe forgets the enemy existed)" },
        { zh: "「重新定义胜利」（敌方攻击自动转化为自我祝福）", en: "'Redefine victory' (enemy attacks become self-blessings)" },
        { zh: "存在性权限锁（将敌方降级为NPC）", en: "Existential permission lock (demote enemy to NPC)" },
      ],
      gambit: { zh: "逻辑自洽性争夺、数学公理体系对抗、叙事层控制", en: "Logical consistency contest, mathematical axiom system confrontation, narrative-layer control" },
    },
    destruction: {
      planet: true,
      star: true,
      weapons: [
        { zh: "概念抹除（Conceptual Erasure）", en: "Conceptual Erasure" },
        { zh: "存在性权限锁", en: "Existential Permission Lock" },
      ],
    },
    individual: {
      status: { zh: "数学公理", en: "Mathematical axiom" },
      desc: { zh: "你是「逻辑自洽性」的具现，没有形态，不存在「个体」概念", en: "You are the embodiment of logical consistency, without form; the concept of 'individual' no longer exists" },
    },
  },
];

export const warfareSummary: { level: string; essence: Bilingual; defense: Bilingual }[] = [
  { level: "1-3", essence: { zh: "物质争夺", en: "Material contention" }, defense: { zh: "装甲、城墙、加密", en: "Armor, walls, encryption" } },
  { level: "4-6", essence: { zh: "能源与空间争夺", en: "Energy and space contention" }, defense: { zh: "护盾、机动、预警", en: "Shields, maneuverability, early warning" } },
  { level: "7-9", essence: { zh: "因果与时间争夺", en: "Causality and time contention" }, defense: { zh: "维度隔离、历史锚定、真空稳定", en: "Dimensional isolation, historical anchoring, vacuum stability" } },
  { level: "10", essence: { zh: "逻辑与存在争夺", en: "Logic and existence contention" }, defense: { zh: "自我定义权", en: "Self-definition rights" } },
];

export const destructionMilestones: { level: number; label: Bilingual }[] = [
  { level: 4, label: { zh: "行星杀手起点", en: "Planet killer begins" } },
  { level: 5, label: { zh: "碎星者", en: "Star breaker" } },
  { level: 6, label: { zh: "恒星杀手", en: "Stellar assassin" } },
];

export const individualPhases: { key: string; title: Bilingual; levels: string; desc: Bilingual }[] = [
  {
    key: "weakening",
    title: { zh: "个体弱化期", en: "Individual Weakening" },
    levels: "1-4",
    desc: { zh: "体系碾压个人，血肉之躯让位于工业机器。4级可以造出「灭霸式」超级士兵，但在轨道轰炸面前只是更高效的炮灰。", en: "Systems crush individuals; flesh yields to industrial machines. Tier 4 can create Thanos-like supersoldiers, but against orbital bombardment they are merely more efficient cannon fodder." },
  },
  {
    key: "transformation",
    title: { zh: "个体质变期", en: "Individual Transformation" },
    levels: "5-6",
    desc: { zh: "个体首次具备战略级价值。5级幽灵特工可休眠渗透，6级时空刺客可超光速斩首。这是「复仇者联盟式」超级生命体的真正诞生。", en: "Individuals first gain strategic value. Tier 5 ghost agents infiltrate via hibernation; Tier 6 spacetime assassins decapitate at FTL speeds. This is the true birth of 'Avengers-class' superbeings." },
  },
  {
    key: "dissolution",
    title: { zh: "个体消解与重构", en: "Dissolution & Reconstruction" },
    levels: "7-10",
    desc: { zh: "7级高维投影无法被三维观测，8级分布式意识让舰队即身体，9级成为历史线本身，10级则化为数学公理——「个体」概念彻底消解。", en: "Tier 7 higher-dimensional projections are unobservable in 3D. Tier 8 distributed consciousness makes the fleet the body. Tier 9 becomes the timeline itself. Tier 10 dissolves into mathematical axioms — the concept of 'individual' ceases entirely." },
  },
];

export const planetDependencyData: { level: number; dependency: Bilingual; survival: Bilingual }[] = [
  { level: 1, dependency: { zh: "100% — 文明=星球表面生物圈", en: "100% — Civilization = planetary biosphere" }, survival: { zh: "离开星球即灭绝", en: "Extinction off-planet" } },
  { level: 2, dependency: { zh: "90% — 工业体系扎根行星", en: "90% — Industry rooted on planets" }, survival: { zh: "太空活动=临时出差", en: "Space activity = temporary business trips" } },
  { level: 3, dependency: { zh: "80% — 需要行星矿脉支撑核工业", en: "80% — Requires planetary mines for nuclear industry" }, survival: { zh: "近地轨道站=高级帐篷", en: "Near-Earth stations = advanced tents" } },
  { level: 4, dependency: { zh: "60% — 仍需行星工厂和燃料提炼厂", en: "60% — Still needs planetary factories and fuel refineries" }, survival: { zh: "可长期驻留太空，但「根」在星球", en: "Can reside long-term in space, but 'roots' remain planetary" } },
  { level: 5, dependency: { zh: "0% — 太空游牧时代开启", en: "0% — Space nomad era begins" }, survival: { zh: "首次完全自持", en: "First fully self-sustaining" } },
  { level: 6, dependency: { zh: "0%或负值", en: "0% or negative" }, survival: { zh: "行星只是景观/可选材料", en: "Planets are merely scenery / optional materials" } },
];
