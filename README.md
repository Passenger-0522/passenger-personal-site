# 梁晓玲的个人网站 · Xiaoling's Personal Site

> 模仿 [jazzikp.github.io](https://jazzikp.github.io/) 极简学术与工程师美学设计，融合 Obsidian 知识库精髓，基于 **Next.js 15 + React 19 + TypeScript + Tailwind CSS** 构建，专门优化支持部署到 **Cloudflare Pages**。

---

## 🌟 网站特色与设计规范

1. **致敬 jazzikp.github.io 经典美学**
   - **双模态配色**：
     - 白天模式：柔和温暖的书卷纸质底色（`#f7f5f0`），搭配沉稳松绿强调色（`#0f5f63`）。
     - 暗黑模式：现代深灰蓝底色（`#282c34`），搭配清透的天青蓝强调色（`#61afef`）。
     - 无闪烁初始化：通过 `<head>` 早期脚本自动读取系统偏好或用户偏好，杜绝页面闪白。
   - **高质感衬线字体排版**：
     - 正文与大标题采用 `Source Serif 4`，元信息采用 `Source Sans 3`，代码与指标采用 `IBM Plex Mono`。
   - **里程碑时间线网格（Meta Row）**：
     - 4 列信息卡直观展示关键节点（2026 AI & Work OS、2025 Amazon OPC、2024 口译硕士、2023 知识系统）。

2. **核心业务与知识沉淀**
   - **业务场景契约化**：不再展示空泛的“AI 提示词”，而是展示经过实战检验的 **Skill 工作契约**（明确真实输入源、处理方法、交付验收标准与停机安全边界）。
   - **实战手记精选**：收录源自 Obsidian 母稿的 6 篇深度文章，涵盖 Skill 编排、数据驾驶舱时效闸门、脚本安全审计、Work OS 架构与口译到跨境的思考复盘。
   - **中英双语无缝切换**：全站内容、导航、标签支持 `中 / EN` 一键即时切换。

3. **交互式 AI 问答助理（Ask Xiaoling）**
   - 底部常驻悬浮入口，点击即可唤起 AI 问答抽屉。
   - 内置基于知识库的语义解答，支持快捷预设问题与自由提问，解答关于业务、技术、经历与合作方式的问题。

---

## 📂 页面架构

- `/`：首页（Hero、里程碑横幅、工作闭环模型、精选手记、精选工作流、Work OS 系统架构）
- `/blogs`：手记归档页（分类标签筛选、全文实时搜索、手记卡片列表）
- `/blogs/[slug]`：手记详情页（阅读耗时、分类徽章、核心论点引言、排版优美的正文、前一篇/后一篇导航、一键复制分享链接）
- `/projects`：工作流与智能体列表（按 Amazon / AI 调度 / 知识库分类，展示痛点、处理逻辑、输入输出规范与安全闸门）
- `/about`：关于页面（个人经历长文、三条工作现场准则、里程碑演进、Now 正在进行时）
- `/contact`：联系与咨询（合作响应承诺、探讨议题、在线留言信箱、直接联系邮箱与社交账号）

---

## 🚀 部署至 Cloudflare Pages

本项目配置了 `output: 'export'`，运行构建后会直接输出纯静态产物至 `out/` 目录，享有 Cloudflare 全球 CDN 毫秒级加速、零冷启动与无限免费带宽。

### 方法一：通过 GitHub 关联 Cloudflare Pages 自动部署（推荐）

1. 在 GitHub 上创建一个新仓库并推送代码：
   ```bash
   git init
   git add .
   git commit -m "Initial commit of personal site"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<你的仓库名>.git
   git push -u origin main
   ```
2. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)，在左侧导航栏选择 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
3. 选择刚才推送的 GitHub 仓库。
4. 构建配置如下：
   - **Framework preset (框架预设)**: `Next.js (Static HTML Export)` 或 `None`
   - **Build command (构建命令)**: `npm run build`
   - **Build output directory (构建输出目录)**: `out`
   - **Node.js Version**: 环境变量中设置 `NODE_VERSION` 为 `22`（或 20+）
5. 点击 **Save and Deploy**，以后每次往 `main` 分支推代码就会自动触发持续部署！

---

### 方法二：使用 Wrangler 命令行一键部署

如果你本地已安装 `wrangler`，只需执行一条命令：

```bash
# 1. 登录 Cloudflare（首次使用需执行）
npx wrangler login

# 2. 一键构建并部署
npm run deploy
```

或者手动执行：
```bash
npm run build
npx wrangler pages deploy out --project-name=xiaoling-personal-site
```

---

## 💻 本地开发

```bash
# 安装依赖
npm install

# 启动本地热重载开发服务器
npm run dev
# 访问 http://localhost:3000

# 构建静态产物
npm run build

# 本地预览构建产物
npm run preview
```
