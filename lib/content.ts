export interface Milestone {
  year: string;
  role: { zh: string; en: string };
  desc: { zh: string; en: string };
}

export interface SkillProject {
  id: string;
  slug: string;
  index: string;
  title: { zh: string; en: string };
  category: "Amazon" | "AI & Work OS" | "Content & Wiki";
  summary: { zh: string; en: string };
  problem: { zh: string; en: string };
  method: { zh: string; en: string };
  input: { zh: string; en: string };
  output: { zh: string; en: string };
  boundary: { zh: string; en: string };
  status: "verified" | "iterating" | "prototype";
  statusText: { zh: string; en: string };
  tags: string[];
}

export interface ArticleSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  quote?: string;
  code?: {
    lang: string;
    code: string;
  };
}

export interface Article {
  slug: string;
  index: string;
  category: "AI & Work OS" | "Amazon 实战" | "创业复盘" | "思考与认知";
  categoryEn: "AI & Work OS" | "Amazon Field Notes" | "Startup Review" | "Cognition & Thoughts";
  title: { zh: string; en: string };
  excerpt: { zh: string; en: string };
  date: string;
  readTime: { zh: string; en: string };
  tags: string[];
  thesis: { zh: string; en: string };
  sections: ArticleSection[];
}

export interface SiteProfile {
  name: { zh: string; en: string };
  eyebrow: { zh: string; en: string };
  motto: { zh: string; en: string };
  mottoCite: { zh: string; en: string };
  lede: { zh: string; en: string };
  bioShort: { zh: string; en: string };
  avatar: string;
  heroImage: string;
  socials: {
    github: string;
    x: string;
    linkedin: string;
    email: string;
    xiaohongshu: string;
  };
}

export const siteProfile: SiteProfile = {
  name: {
    zh: "梁晓玲 · Xiaoling",
    en: "Xiaoling Liang",
  },
  eyebrow: {
    zh: "AI 工作流探索者 · 跨境电商实践者",
    en: "AI Workflow Builder · Amazon OPC Practitioner",
  },
  motto: {
    zh: "“在真实业务里，把经验沉淀为可复现的智能体与工作流。”",
    en: "“Extend human judgment with verifiable agent workflows.”",
  },
  mottoCite: {
    zh: "— 工作现场原则",
    en: "— Operating Principle",
  },
  lede: {
    zh: "英语口译硕士，曾深入 Amazon 一线运营，现为独立 OPC 与 AI 工作流构建者。我不推崇把 AI 当作玩具或提示词收藏，而是致力于将选品、竞品、数据看板与内容生产变成有边界、有证据、可验证的系统。",
    en: "Master of Translation and Interpreting turned Amazon operator & AI workflow architect. Transforming product discovery, competitor intel, ops dashboards, and content OS into verifiable, boundary-aware agents.",
  },
  bioShort: {
    zh: "记录真实业务中的 AI 实践、踩坑与边界思考。",
    en: "Field notes on AI agents, e-commerce ops, and verifiable workflows.",
  },
  avatar: "/avatar.jpg",
  heroImage: "/hero-portrait.jpg",
  socials: {
    github: "https://github.com/liangxiaoling",
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    email: "contact@liangxiaoling.com",
    xiaohongshu: "https://www.xiaohongshu.com",
  },
};

export const milestones: Milestone[] = [
  {
    year: "2026",
    role: { zh: "AI & Work OS", en: "AI & Work OS" },
    desc: {
      zh: "多智能体编排与工作流设计，构建个人知识库与运营自动化调度层。",
      en: "Multi-agent orchestration and workflow design for e-commerce ops.",
    },
  },
  {
    year: "2025",
    role: { zh: "Amazon OPC", en: "Amazon OPC" },
    desc: {
      zh: "独立一人公司实践，打通从新品研发、供应链、头程合规到站内运营闭环。",
      en: "One-Person Company practice: 0-to-1 launch, supply chain, and ad ranking.",
    },
  },
  {
    year: "2024",
    role: { zh: "英语口译硕士", en: "Master in Interpreting" },
    desc: {
      zh: "高强度双语信息转换训练，转化为跨文化洞察与精准的人机提示词工程能力。",
      en: "High-precision bilingual synthesis turned into prompt architecture.",
    },
  },
  {
    year: "2023",
    role: { zh: "个人维基系统", en: "Personal Wiki System" },
    desc: {
      zh: "基于 Obsidian 搭建个人第二大脑，融合芒格多学科思维模型与持续复盘。",
      en: "Obsidian-based second brain integrating mental models & ops logs.",
    },
  },
];

export const skillsProjects: SkillProject[] = [
  {
    id: "01",
    slug: "amazon-new-product-launch-kit",
    index: "01",
    title: {
      zh: "Amazon 新品启动总控 (Launch Kit)",
      en: "Amazon New Product Launch Kit",
    },
    category: "Amazon",
    summary: {
      zh: "把产品事实、竞品与市场、关键词、Listing 和启动计划串成一条有先后顺序的工作链。",
      en: "Chaining product facts, competitors, keyword targets, and listings into a sequential workflow.",
    },
    problem: {
      zh: "新品上线流程碎片化，选品、文案、测图、首批补货脱节，容易遗漏关键约束。",
      en: "Fragmented launch steps often cause misalignment between inventory, listing, and ad spend.",
    },
    method: {
      zh: "总控 Skill 依据研发阶段自动路由：事实核验 → 候选竞品池 → 关键词矩阵 → 阶段动作闸门。",
      en: "A central controller routes tasks based on milestone gates with clear evidence checks.",
    },
    input: {
      zh: "产品研发事实表、目标站点、首批货量与预算约束",
      en: "Product specification, marketplace target, and budget constraints",
    },
    output: {
      zh: "分阶段研究报告、阶段待办清单与下一步放行信号",
      en: "Milestone reports, action checklists, and gate approvals",
    },
    boundary: {
      zh: "不替代人工商业判断，不直接进入或修改 Amazon 卖家后台",
      en: "Does not bypass human review or make direct changes to seller central.",
    },
    status: "iterating",
    statusText: { zh: "持续迭代", en: "Iterating" },
    tags: ["Amazon", "新品SOP", "工作流编排"],
  },
  {
    id: "02",
    slug: "find-amazon-competitors",
    index: "02",
    title: {
      zh: "Amazon 竞品发现与持续监控",
      en: "Amazon Competitor Intelligence",
    },
    category: "Amazon",
    summary: {
      zh: "从产品事实出发寻找真正可比较的对象，定期抓取快照，并保留原始证据与差异线索。",
      en: "Discover genuine direct competitors, track weekly changes, and preserve snapshot evidence.",
    },
    problem: {
      zh: "很多卖家只是抄一排热门 ASIN，忽视了规格、客单价和核心卖点的不可比性。",
      en: "Copying random bestsellers creates false signals due to mismatched price tiers or specs.",
    },
    method: {
      zh: "将“竞品发现”与“长期监控”分为两个独立 Skill：发现负责筛池，监控负责盯变化，互不干扰。",
      en: "Decoupled into discovery (candidate filtering) and monitoring (tracking verified pool).",
    },
    input: {
      zh: "产品核心参数、类目节点、已核验竞品 ASIN 清单",
      en: "Core product specs, category browse nodes, verified ASIN pool",
    },
    output: {
      zh: "结构化竞品快照表、价格/BSR 波动线索与异常警报",
      en: "Structured snapshot sheets, price/BSR change logs, and alerts",
    },
    boundary: {
      zh: "候选不自动等于已确认竞品；监控到排名波动不等于证明因果关系",
      en: "Candidates require human verification; observed fluctuations do not imply causation.",
    },
    status: "verified",
    statusText: { zh: "已验证", en: "Verified" },
    tags: ["竞品分析", "自动化监控", "证据链"],
  },
  {
    id: "03",
    slug: "amazon-keyword-rank-tracker",
    index: "03",
    title: {
      zh: "关键词排名导出与追踪",
      en: "Keyword Rank Tracker & Exporter",
    },
    category: "Amazon",
    summary: {
      zh: "严格读取既有观察清单，依次导出、校验并记录同步状态，让失败停在该停的位置。",
      en: "Strictly loads verified watchlists, validates data fresh date, and flags import states.",
    },
    problem: {
      zh: "手查关键词耗时低效，第三方工具导出格式杂乱，经常出现用旧数据冒充今日排名的误导。",
      en: "Manual checking is tedious; dirty exports often pollute analytics with stale timestamps.",
    },
    method: {
      zh: "固定输入源文件；引入 imported / partial / blocked 状态机；保留校验日志。",
      en: "Immutable source watchlist combined with strict states: imported, partial, or blocked.",
    },
    input: {
      zh: "标准观察词库、日期口径、源搜索排查数据",
      en: "Standard target keyword pool, date range, search query raw dumps",
    },
    output: {
      zh: "规范化自然位与广告位排名对比表、异动明细",
      en: "Standardized organic vs. sponsored rank comparison reports",
    },
    boundary: {
      zh: "不在运行时手动篡改词库；不将网络超时掩盖为零排名",
      en: "No dynamic modification of watchlist; network errors never recorded as zero ranks.",
    },
    status: "iterating",
    statusText: { zh: "持续迭代", en: "Iterating" },
    tags: ["SEO", "关键词库", "数据状态机"],
  },
  {
    id: "04",
    slug: "amazon-local-ops-review",
    index: "04",
    title: {
      zh: "本地跨境运营数据看板 (Local Ops Review)",
      en: "Local E-commerce Ops Dashboard",
    },
    category: "Amazon",
    summary: {
      zh: "把流量、广告、财务和动作记录放在统一证据框架里，先检查数据时效，再讨论运营动作。",
      en: "Unifies traffic, ads, margins, and operational actions into a verified temporal framework.",
    },
    problem: {
      zh: "看板打开了但底层报表没更新，导致运营人员基于昨天的滞后数据错误调整今天的广告预算。",
      en: "Dashboards displaying stale data lead operators to adjust bids based on false signals.",
    },
    method: {
      zh: "设置技术健康（HTTP 200）与业务新鲜度的严格闸门，数据不全时直接亮起 waiting 信号。",
      en: "Distinguishes technical health from data freshness, freezing recommendations if stale.",
    },
    input: {
      zh: "Business Report 日报、Sponsored Products 广告报表、退换货与结算汇总",
      en: "Business reports, ad search term reports, settlement & returns data",
    },
    output: {
      zh: "真实经营健康度视图、待补齐数据清单、调价/调词动作建议闸门",
      en: "Verified operating cockpit, data freshness gaps, and action gates",
    },
    boundary: {
      zh: "缺失或过期数据绝不生成当日运营结论；广告调整须保留人工确认确认单",
      en: "Stale data never generates recommendations; all actions require human sign-off.",
    },
    status: "verified",
    statusText: { zh: "已验证", en: "Verified" },
    tags: ["数据驾驶舱", "广告复盘", "决策闸门"],
  },
  {
    id: "05",
    slug: "content-publishing-os",
    index: "05",
    title: {
      zh: "跨境多平台内容发布系统 (Content OS)",
      en: "Multi-Platform Content Publishing OS",
    },
    category: "Content & Wiki",
    summary: {
      zh: "从真实问题与母稿出发，自动重构为适合小红书、微信公众号与 X 的多形态内容包。",
      en: "Transforms deep core drafts into tailored formats for Xiaohongshu, WeChat, and X.",
    },
    problem: {
      zh: "多平台分发耗费大量时间重新排版配图，或简单粗暴复制粘贴导致平台调性不符、转化差。",
      en: "Cross-posting manually wastes hours; identical copy ignores unique platform dynamics.",
    },
    method: {
      zh: "四层架构：总路由判断阶段 → 专项拆解金句与要点 → 风格规避 AI 味 → 平台化渲染输出。",
      en: "4-tier architecture: Router → Topic Extractor → De-AI Tone Polisher → Platform Exporter.",
    },
    input: {
      zh: "深度思考母稿（Markdown）、核心论点、目标平台受众定义",
      en: "Deep markdown source draft, thesis statement, and target audience profile",
    },
    output: {
      zh: "小红书图文文案（含分P与标签）、公众号长文（含排版规范）、X 短帖串（Thread）",
      en: "Xiaohongshu cards & captions, WeChat deep article layout, X tweet threads",
    },
    boundary: {
      zh: "草稿与排期不等于已发布；不得捏造未经实测的虚假数据",
      en: "Drafts are not completed posts; never fabricates unverified metrics or claims.",
    },
    status: "verified",
    statusText: { zh: "已验证", en: "Verified" },
    tags: ["自媒体", "多平台分发", "内容工程"],
  },
  {
    id: "06",
    slug: "obsidian-personal-database-ops",
    index: "06",
    title: {
      zh: "Obsidian 个人知识库整理与自动化",
      en: "Obsidian Personal Knowledge Base Ops",
    },
    category: "Content & Wiki",
    summary: {
      zh: "规范化知识库目录与元数据规范，提供变更预览机制，杜绝知识库越整理越混乱。",
      en: "Standardizes vault taxonomies and frontmatter with safe dry-run preview before commits.",
    },
    problem: {
      zh: "知识库日益臃肿，命名风格不一，标签泛滥，文件乱放，AI 批量处理容易误删或污染文档。",
      en: "Growing vaults suffer from tag bloat and inconsistent structures; bots often corrupt files.",
    },
    method: {
      zh: "基于 PARA / 编码分类法；严格区分来源（Source）、概念（Concept）、实体（Entity）与综合（Synthesis）。",
      en: "Structured categorization isolating sources, concepts, entities, and synthesis.",
    },
    input: {
      zh: "临时收件箱（Inbox）素材、待归档笔记、PDF 与网页剪藏",
      en: "Inbox raw captures, unfiled notes, web clippings, and study highlights",
    },
    output: {
      zh: "双向链接索引、结构化 Frontmatter、变更差异预览清单",
      en: "Bi-directional links, structured YAML frontmatter, diff previews",
    },
    boundary: {
      zh: "默认只生成预览与建议，任何实际写入或文件移动必须经人显式确认",
      en: "Default dry-run mode only; all file moves and writes require explicit approval.",
    },
    status: "verified",
    statusText: { zh: "已验证", en: "Verified" },
    tags: ["Obsidian", "第二大脑", "知识管理"],
  },
];

export const articles: Article[] = [
  {
    slug: "why-more-skills-make-ai-harder-to-use",
    index: "01",
    category: "AI & Work OS",
    categoryEn: "AI & Work OS",
    title: {
      zh: "为什么 Skill 越多，AI 反而越难用好？——从单点收藏到能力编排",
      en: "Why More Skills Make AI Harder to Use: From Stashing to Orchestration",
    },
    excerpt: {
      zh: "Skill 收藏得再多，不会用也是沉睡的字符。真正的关键不是盲目下载更多提示词，而是弄清 Skill 之间的路由、边界与组合关系。",
      en: "Accumulating prompt skills often degrades agent reliability. The real breakthrough lies in architecture, boundaries, and routing.",
    },
    date: "2026.09",
    readTime: { zh: "8 分钟", en: "8 min" },
    tags: ["AI Agent", "Skill 架构", "工作流设计", "提示词工程"],
    thesis: {
      zh: "Skill 不应该是一个万能黑盒，而应该是一套有明确输入、输出、闸门与停机条件的能力契约。",
      en: "A skill is not a magic prompt, but an explicit contract governing inputs, boundaries, and stopping conditions.",
    },
    sections: [
      {
        title: "从 Skill 收藏，到能力编排",
        paragraphs: [
          "最近我越来越觉得，Skill 有点像浏览器书签。",
          "刚开始收藏一个，就觉得自己多了一项能力。后来收藏越来越多，真正要用的时候，却要先翻半天：这个 Skill 是干什么的？和另一个有什么区别？它们能不能一起用？到底应该先调用谁？",
          "Skill 变多之后，AI 不一定变强。有时候反而更难用。问题不一定出在单个 Skill 写得不好，而是我们很少认真看过 Skill 之间的生态关系。",
        ],
      },
      {
        title: "不要造一个“超级万能 Skill”",
        paragraphs: [
          "很多人整理 Skill 时会走向另一个极端：把所有业务说明和提示词全都粘到一个巨大的系统文件里。",
          "看起来集中，实际更难维护。触发条件会无限拉长，规则会互相打架，模型在上下文窗口里也很难判断当前任务到底应该执行哪一部分。",
          "在真实业务中，更稳定的系统通常是清晰的四层流水线：",
        ],
        bullets: [
          "总路由 Skill：判断用户当前处于哪一阶段（选题、写稿、审查，还是排版导出）。",
          "专项执行 Skill：分别处理事实核验、卖点提炼、竞品聚类与文案生成。",
          "检查审查 Skill：专门检查事实一致性、防范 AI 幻觉和平台违禁词。",
          "输出适配 Skill：按照最终渠道（小红书、公众号、X）进行格式排版与证据归档。",
        ],
        quote: "总路由负责定方向；专项负责深加工；检查负责设闸门；输出负责稳落地。",
      },
      {
        title: "把现有的 Skill 归入五个篮子",
        paragraphs: [
          "如果你已经收藏了一堆提示词和脚本，先别急着让 AI 一股脑把它们融合。应该先做盘点，划分为五种角色：",
        ],
        bullets: [
          "重复型：核心任务和输出几乎一样，保留更严谨、带证据校验的那个。",
          "重合型：解决的问题相近，但输入格式和边界模糊，需要重新划分职责范围。",
          "互补型：前后有明确依赖关系，最适合串联成工作流流水线。",
          "冲突型：权限、环境要求或格式相左，必须在上层增加显式路由条件。",
          "废弃型：长期没有真实业务验证、无法稳定运行的，果断归档，不污染运行环境。",
        ],
      },
      {
        title: "边界本身就是核心能力",
        paragraphs: [
          "一个成熟的 Skill 必须清楚知道：什么时候该开始，读什么事实输入，产出什么验收成果，以及——什么时候必须停下来等待人工确认。",
          "当每一个单元的职责与边界被锚定，AI 才不再是一个充满不确定性的对话玩具，而是一座严密运转的数字工坊。",
        ],
      },
    ],
  },
  {
    slug: "amazon-skill-contract",
    index: "02",
    category: "Amazon 实战",
    categoryEn: "Amazon Field Notes",
    title: {
      zh: "Amazon Skills 不是提示词收藏，而是一套工作契约",
      en: "Amazon Skills as Operational Contracts, Not Mere Prompt Collections",
    },
    excerpt: {
      zh: "一个能长期使用的跨境电商 Skill，必须知道何时触发、读什么事实、交付什么、怎样算完成，以及哪些事绝对不能碰。",
      en: "A sustainable e-commerce skill must define triggers, source of truth, deliverables, verification proofs, and strict forbidden actions.",
    },
    date: "2026.08",
    readTime: { zh: "6 分钟", en: "6 min" },
    tags: ["Amazon 运营", "SOP", "工作契约", "边界设计"],
    thesis: {
      zh: "提示词让 AI 回答一次；工作契约让同一件事在下一次仍然能按相同标准交付。",
      en: "Prompts produce one-off answers; operational contracts guarantee consistent, auditable execution.",
    },
    sections: [
      {
        title: "提示词结束于回答，Skill 结束于结果",
        paragraphs: [
          "做亚马逊运营时，我最早也会把一段好用的提示词保存下来，比如‘优化五点描述’或‘分析差评原因’。",
          "但工作一复杂，问题很快暴露：每次输入的文件格式稍微一变、数据日期滞后、或者中间抓取某一步失败了，AI 仍然会若无其事地吐出一个看起来十分工整、实则毫无意义的答案。",
          "所以我现在不再追求把某句提示词写得多优美，而是关注：这项工作有没有固定入口、真实输入、完成标准和证据链。Skill 的本质是把容易被疏忽的纪律沉淀进代码与规则中。",
        ],
      },
      {
        title: "设计每个 Skill 前的灵魂五问",
        bullets: [
          "什么时候触发：明确定义适用情境与绝对不适用的场景，避免抢占其他任务。",
          "读取什么：到底以哪个报表、哪份清单、哪个 ASIN 事实表为唯一真实源（Single Source of Truth）。",
          "交付什么：是一张格式严格的表格、一段结构化分析、还是下一步放行待办。",
          "怎样算完成：代码执行不报错不等于业务完成，必须提供可核验的业务证据与日志。",
          "哪些事绝对不能做：例如绝不代人做不可逆的业务修改、绝不直接调用未经鉴权的写接口、绝不用昨天的旧数据蒙蔽今天的判断。",
        ],
        quote: "发现负责把候选找出来；监控负责盯住已确认对象；总控负责决定下一步怎么走。",
      },
      {
        title: "保留状态坐标：waiting、partial 与 blocked",
        paragraphs: [
          "在我的 Amazon 工作流里，状态从来不是简单的‘成功’或‘失败’。我更倾向于保留 waiting（等待外部输入）、partial（部分完成需检查）、blocked（关键前置不成立，强行计算会造假）。",
          "它们不是难看的错误报错，而是让下一次操作可以精准接力的坐标。",
        ],
      },
    ],
  },
  {
    slug: "dashboard-is-not-truth",
    index: "03",
    category: "Amazon 实战",
    categoryEn: "Amazon Field Notes",
    title: {
      zh: "看板能打开，不代表今天可以做决策：状态不是装饰，而是动作闸门",
      en: "A Running Dashboard Is Not Truth: Status Codes as Action Gates",
    },
    excerpt: {
      zh: "系统在线、测试通过、数据新鲜，是三件截然不同的事。把它们混为一谈，漂亮的界面只会制造虚假的确定感。",
      en: "Service uptime, passing tests, and data freshness are distinct properties. Conflating them breeds disastrous operational decisions.",
    },
    date: "2026.08",
    readTime: { zh: "5 分钟", en: "5 min" },
    tags: ["数据驾驶舱", "运营决策", "指标口径", "跨境电商"],
    thesis: {
      zh: "一个可信的运营看板，首先要诚实地告诉你它不知道什么，然后才是展示它知道什么。",
      en: "A trustworthy dashboard begins by stating what it does not know before presenting metrics.",
    },
    sections: [
      {
        title: "页面正常，只证明页面正常",
        paragraphs: [
          "做本地运营看板时，我踩过一个非常典型的坑：服务正常启动、自动化测试全绿、图表渲染流畅，大家就很容易顺手把它当成‘今天的真实业务状况’。",
          "可真正决定你能不能追加广告预算、算毛利、或者提交备货采购单的，是源数据到底覆盖到了哪一天。",
          "HTTP 200 只能证明服务器还活着；测试通过只能证明既定函数没有抛出异常；只有源报表的时间戳与字段覆盖度完整匹配，才有资格放行决策。",
        ],
      },
      {
        title: "不要用旧日期填补今天的空白",
        paragraphs: [
          "当亚马逊后台的 Business Report 或广告报表延迟更新时，最具有诱惑力的做法是‘先拿昨天的数字顶上’。",
          "但运营数据具有极强的时间敏感性。库存售罄速度、广告转化峰值、竞品偷袭往往就发生在几个小时之内。历史数据可以作为背景参考，绝不能冒充今天的证据。",
          "更诚实的界面应该直接醒目提示：‘广告数据缺失，已冻结竞价调整建议’。这种有节制的留白，远比铺满整屏虚假绿色的图表更有商业价值。",
        ],
        quote: "先证明数据足以支撑结论，再让界面给出结论。",
      },
    ],
  },
  {
    slug: "audit-before-install",
    index: "04",
    category: "思考与认知",
    categoryEn: "Cognition & Thoughts",
    title: {
      zh: "一键安装脚本，我为什么先下载审计再执行：AI 时代的系统边界与安全",
      en: "Audit Before You Execute: Safety Boundaries in the Age of AI Scripts",
    },
    excerpt: {
      zh: "‘复制这条命令一键安装’把下载、信任与执行压缩成了一秒，也把最重要的判断权悄然交出。真正需要检查的，是它会改什么、存什么与删什么。",
      en: "One-line curl commands compress trust into a single keystroke. Inspect filesystem side-effects and credentials before granting permissions.",
    },
    date: "2026.08",
    readTime: { zh: "5 分钟", en: "5 min" },
    tags: ["工程安全", "边界意识", "数字资产", "代码审计"],
    thesis: {
      zh: "能运行不等于值得运行；安装成功只是脚本的结束，系统可信才是你的目标。",
      en: "Executable does not mean trustworthy. Script completion is merely the beginning of security vigilance.",
    },
    sections: [
      {
        title: "curl 后面管道接 bash，到底意味着什么？",
        paragraphs: [
          "网上的开源项目经常推荐一条极简命令：curl -fsSL https://... | bash。一秒钟完成安装，体验非常顺畅。",
          "但在一个存放着卖家 API 凭据、财务报表、产品模型和私有知识库的电脑上，这个操作的信任成本高得不可思议。你把整台机器的环境修改权、网络通信权与文件读写权，完全交托给了一个随时可能变更的远端脚本。",
        ],
      },
      {
        title: "我的执行前审计清单",
        bullets: [
          "配置覆盖：它会不会静默修改 ~/.bashrc、~/.zshrc 或覆盖已有开发环境配置？",
          "凭据存储：API Key、数据库密码、Token 是存进了受限的安全钥匙串，还是以明文写进了本地隐藏文件？",
          "网络外发：脚本中有没有把本地主机名、用户名、当前工作目录上传到远端遥测服务器的行为？",
          "清理与破坏：卸载或回滚逻辑中是否存在危险的 rm -rf 模式匹配？",
        ],
        quote: "安装成功只是脚本的技术标准；整个系统依然稳定可信，才是我的业务标准。",
      },
    ],
  },
  {
    slug: "from-scripts-to-work-os",
    index: "05",
    category: "创业复盘",
    categoryEn: "Startup Review",
    title: {
      zh: "从分散脚本到 Work OS：我真正缺的不是更多工具，而是稳定入口",
      en: "From Disjointed Scripts to Work OS: What We Lack Is Routing, Not Tools",
    },
    excerpt: {
      zh: "当流量、财务、竞品与内容散落在不同目录和脚本里，再开发一个新系统往往只是多了一个入口。先把旧资产的日常调用流理顺。",
      en: "When scripts proliferate across folders, building another portal merely adds clutter. Focus on standardizing the dispatch layer.",
    },
    date: "2026.08",
    readTime: { zh: "6 分钟", en: "6 min" },
    tags: ["一人公司", "Work OS", "系统设计", "创业复盘"],
    thesis: {
      zh: "系统变多不会自然带来秩序；清晰的入口、明确的触发条件与证据闭环，才会。",
      en: "Proliferating tools create overhead; crisp entries, explicit triggers, and evidence loops yield serenity.",
    },
    sections: [
      {
        title: "我已经有很多工具了",
        paragraphs: [
          "在创业的前期，我写了查排名的脚本、算毛利的表格、做文案的提示词、整理 Obsidian 的插件……每一个都解决过特定时刻的具体问题。",
          "但几个月过去，我发现自己每天早上面临的第一个难题变成了：今天该先打开哪个脚本？上次运行生成的文件在哪？这个异常是不是因为我漏跑了上游？",
          "这时人性中最本能的冲动是：‘我要重新造一个大而全的超级系统把它们全吃进去’。但实践告诉我，如果连现有的模块都无法被稳定、低心智负担地日常使用，新造的超级系统往往只会成为下一个维护泥潭。",
        ],
      },
      {
        title: "Work OS 的本质是调度层，不是大包大揽",
        paragraphs: [
          "我最终把 Work OS 定义为一个轻量级的调度与感知层：它不试图去取代底层成熟的专有工具，而是充当交通枢纽。",
          "它只负责回答四件事：当前有哪些可用能力？上游报表今天更新了没有？我今天该从哪个环节切入？哪一项工作还需要补充证据？",
        ],
        bullets: [
          "统一调度入口：再也不用在十几个文件夹中翻找命令。",
          "时效性感知：一眼看出哪张数据表是新鲜的、哪张是过期的。",
          "证据流转闭环：任何一个环节产生的结论，自动作为下一个环节的只读输入。",
          "状态留存：中断后随时能回到现场继续，不丢失上下文。",
        ],
        quote: "先让现有的能力每天被稳定使用，再决定要不要研发下一个工具。",
      },
    ],
  },
  {
    slug: "interpreter-to-ecom-and-ai",
    index: "06",
    category: "思考与认知",
    categoryEn: "Cognition & Thoughts",
    title: {
      zh: "英语口译硕士转型跨境电商与 AI：我所学到的关于认知与真实业务的 5 件事",
      en: "From Translation Master to Cross-Border Ops & AI: 5 Hard-Earned Lessons",
    },
    excerpt: {
      zh: "从同传箱到货在海上的跨境电商，再到 AI 工作流设计。语言学教给我的不是词汇，而是如何高保真地转换信息与拆解复杂意图。",
      en: "From the interpreting booth to containers on the ocean. Interpreting taught me not vocabulary, but high-fidelity intent modeling.",
    },
    date: "2026.07",
    readTime: { zh: "7 分钟", en: "7 min" },
    tags: ["个人经历", "口译", "跨境出海", "认知复盘"],
    thesis: {
      zh: "高保真信息转换与跨领域抽象，是一切复杂系统搭建与人机协同的底层母体。",
      en: "High-fidelity semantic transfer is the foundational substrate of both human reasoning and agent design.",
    },
    sections: [
      {
        title: "1. 翻译的本质不是换词，而是意图重构",
        paragraphs: [
          "在做同声传译和交替传译时，最忌讳的是‘字对字机械直译’。你必须在两秒钟之内穿透源语言的表面句式，抓住发言者的底层核心诉求、语境约束与情绪倾向，再用目标语言最符合逻辑的框架重构出来。",
          "后来当我设计 AI 智能体与提示词契约时，我惊奇地发现两者的底层思维几乎完全重叠：向大模型发指令，不是给它堆砌辞藻，而是消除语义歧义，给出边界清晰、不留歧义的结构化意图定义。",
        ],
      },
      {
        title: "2. 真实商业世界不接受‘听起来很顺’",
        paragraphs: [
          "在象牙塔里，一篇翻译可能因为句式优美而得到高分；但在跨境电商真实的供应链和站内竞争中，市场只看数字：点击率、转化率、头程运费、资金周转周期和退货率。",
          "一包货还在海上漂着，每天产生的仓储成本和现金流压力是实实在在的。这种物理世界的反馈回路，狠狠击碎了任何空泛的纸上谈兵，逼迫我把一切行动建立在扎实可考的证据上。",
        ],
      },
      {
        title: "3. 成为连接者：将两门互不相通的语言翻译给彼此",
        paragraphs: [
          "技术人员往往对电商一线运营的琐碎、繁杂与真实痛点缺乏体会；而传统运营人员又常常被 AI 繁杂的技术术语、代码报错和安装门槛阻拦在门外。",
          "作为具备深度语言学背景和一线跨境操盘经历的人，我最享受的角色就是充当二者之间的‘同传译员’——把运营现场的复杂困境提炼为代码与规则能理解的算法输入，再把智能体的输出转化成运营人一目了然的操作建议。",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getProjectBySlug(slug: string): SkillProject | undefined {
  return skillsProjects.find((p) => p.slug === slug);
}
