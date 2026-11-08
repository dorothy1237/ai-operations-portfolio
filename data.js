/*
 * 本文件已根据邓健怡的简历填写。
 * 后续新增项目、数据、GitHub 或个人网址时，只需在这里更新。
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "邓健怡",
    shortName: "JIANYI DENG",
    intro: "我是一名兼具 AI 产品与运营经验的从业者，擅长把模型能力转化为创作者看得懂、愿意用的内容与方案，并通过数据反馈持续优化产品体验与增长链路。",
    email: "3541674790@qq.com",
    phone: "185-2433-3616",
    github: "",
    githubLabel: "待补充",
    website: "",
    websiteLabel: "GitHub Pages 待发布",
    resume: "assets/Deng-Jianyi-Resume.docx",
    location: "广东深圳"
  },

  capabilities: [
    { title: "多模型内容运营", description: "围绕多模型协同能力策划白皮书、测评稿、种草内容和短视频脚本，把技术能力转译为创作者价值。", tags: ["内容策略", "AIGC", "品牌转译"] },
    { title: "海外平台增长", description: "熟悉 X、TikTok、小红书等平台的内容调性与流量机制，能够完成多渠道内容策划、发布与引流。", tags: ["X", "TikTok", "小红书"] },
    { title: "Prompt 资产建设", description: "搭建标准化 Prompt 资产库，沉淀正向与负向提示词范式、模型模板和优质案例，降低创作试错成本。", tags: ["Prompt", "模板库", "Case 沉淀"] },
    { title: "AI 产品运营", description: "从创作者需求、模型效果、产品迭代到商业化转化，建立使用、注册、激活和付费等运营指标链路。", tags: ["创作者生态", "转化漏斗", "产品迭代"] },
    { title: "实验与数据复盘", description: "能够设计流量分层与 A/B 实验，结合推荐表现和用户反馈优化内容权重、素材池与区域化策略。", tags: ["A/B 测试", "SQL", "数据复盘"] },
    { title: "Agent 与自动化", description: "可搭建具备工具调用、持久记忆和多任务自动化的 Agent 工作流，并完成 API 接入和轻量爬虫开发。", tags: ["Agent", "API", "自动化"] }
  ],

  skillGroups: [
    {
      id: "ai",
      label: "AI 应用",
      subtitle: "AI TOOLKIT",
      items: [
        { name: "大模型应用与 Prompt Engineering", level: 92, note: "任务拆解、上下文设计、结构化输出、评测与迭代" },
        { name: "AIGC 视频与图像生成", level: 90, note: "Seedance、Kling、Fable、Minimax、Seedream 与 Wan Image" },
        { name: "多模态 Agent 工作流", level: 84, note: "Hermes、WorkBuddy 的工具调用、持久记忆与多任务自动化" },
        { name: "多模型接入与调度", level: 82, note: "OpenAI 兼容 API、CUN.ai、OpenRouter 与多模型能力组合" }
      ]
    },
    {
      id: "operations",
      label: "运营策略",
      subtitle: "OPERATIONS",
      items: [
        { name: "海内外内容运营", level: 92, note: "X、TikTok、小红书的选题、发布、互动和流量复盘" },
        { name: "创作者生态运营", level: 88, note: "创作者需求识别、案例孵化、Prompt 资产与使用引导" },
        { name: "用户全生命周期运营", level: 85, note: "新用户对接、权限与额度管理、答疑、售后和留存" },
        { name: "品牌与产品转译", level: 88, note: "将模型能力转化为白皮书、测评稿、教程和推广内容" }
      ]
    },
    {
      id: "data",
      label: "数据分析",
      subtitle: "DATA & INSIGHT",
      items: [
        { name: "运营指标体系", level: 86, note: "使用率、注册、激活、付费转化率与获客成本 CAC" },
        { name: "A/B 实验", level: 86, note: "变量定义、流量分层、策略配置、数据观测与方案迭代" },
        { name: "SQL / Excel", level: 76, note: "基础 SQL 取数、Excel 数据管理与运营结果复盘" },
        { name: "区域化用户洞察", level: 86, note: "根据国家文化、节日节点和审美差异制定本地化策略" }
      ]
    },
    {
      id: "tools",
      label: "协作工具",
      subtitle: "TOOLS",
      items: [
        { name: "GPT / DeepSeek / GLM / Kimi / Gemini", level: 92, note: "多模型协同完成研究、策划、生产、评估与分析" },
        { name: "剪映 / Figma / Photoshop / Illustrator", level: 84, note: "短视频剪辑、运营视觉、原型沟通与素材制作" },
        { name: "飞书 / Excel", level: 86, note: "项目协作、知识沉淀、SOP 和数据管理" },
        { name: "轻量开发与爬虫", level: 75, note: "API 接入、网页抓取、数据清洗、结构化存储和反爬基础" }
      ]
    }
  ],

  projects: [
    {
      title: "CUN.com 多模型创作平台运营",
      description: "负责品牌宣传与创作者生态运营，围绕多模型协同方案输出模型对比白皮书、能力测评稿和技术向种草内容，并搭建标准化 Prompt 资产库与案例库。",
      tags: ["创作者生态", "Prompt 资产", "品牌内容"],
      metrics: [{ label: "近30天曝光", value: "30万" }, { label: "首页推荐占比", value: "74%" }, { label: "X累计浏览", value: "79,634" }],
      bars: [32, 46, 54, 62, 74, 86, 96]
    },
    {
      title: "OPPO AIGC 智能壁纸方案",
      description: "聚焦移动端 AIGC 图像生成，梳理文生图应用链路，制定提示词与生成参数标准，完成不同机型和分辨率适配，并持续优化画面畸变、风格偏移和画质问题。",
      tags: ["AI 产品", "图像生成", "方案落地"],
      metrics: [{ label: "交付范围", value: "多机型" }, { label: "协作团队", value: "产研测" }, { label: "管理重点", value: "合规" }],
      bars: [40, 55, 66, 58, 76, 88, 94]
    },
    {
      title: "海外 AIGC 壁纸推荐与 A/B 实验",
      description: "面向欧洲、东南亚与印度市场，根据民俗文化、节日节点和审美差异设计本地化内容策略，完成实验变量定义、流量分层、多轮测试与推荐逻辑迭代。",
      tags: ["海外运营", "A/B 测试", "本地化"],
      metrics: [{ label: "区域覆盖", value: "3大区域" }, { label: "实验方式", value: "多轮AB" }, { label: "优化目标", value: "点击/留存" }],
      bars: [35, 43, 57, 69, 63, 82, 92]
    },
    {
      title: "CUN.ai API 聚合网关运营",
      description: "负责 API 聚合平台整体运营与多平台新媒体内容，监控接口调用和服务稳定性，管理新用户对接、权限、额度与售后，联动技术团队持续优化产品体验和用户留存。",
      tags: ["API 平台", "用户运营", "全链路增长"],
      metrics: [{ label: "内容渠道", value: "4个平台" }, { label: "用户管理", value: "全周期" }, { label: "服务对象", value: "开发者" }],
      bars: [38, 50, 59, 71, 79, 88, 96]
    }
  ]
};
