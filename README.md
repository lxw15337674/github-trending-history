# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 默认通过 Cloudflare AI Gateway 调用 `workers-ai/@cf/zai-org/glm-4.7-flash` 生成中英文项目总结、技术栈和适用场景
4. **数据归档**: 将数据按日期归档到 `api/github/` 目录
5. **数据可视化**: [在线查看](https://github-trending-history.vercel.app/)每日 GitHub Trending 数据

## 数据结构

每个项目包含以下信息：
- `fullName`: 仓库全名（owner/repo）
- `description`: 项目描述
- `language`: 主要编程语言
- `stars`: 总 Star 数
- `forks`: Fork 数
- `todayStars`: 今日新增 Star 数
- `url`: 项目链接
- `aiSummary`: AI 生成的总结
  - `summary`: 项目核心功能总结
  - `summary_en`: 英文项目核心功能总结
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景
  - `useCase_en`: 英文适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare AI Gateway（OpenAI 兼容接口）
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 默认：Cloudflare AI Gateway
export AI_API_KEY=your_cloudflare_ai_gateway_token
export AI_API_URL=https://gateway.ai.cloudflare.com/v1/5697c41d4efbabcbac78eafe2cdf036b/default/compat/chat/completions
export AI_MODEL=workers-ai/@cf/zai-org/glm-4.7-flash

# 运行抓取
pnpm start
```

## 数据访问

原始数据存储在 `api/github/YYYY-MM-DD.json`，可以直接通过以下方式访问：

```
https://raw.githubusercontent.com/lxw15337674/github-trending-history/master/api/github/2025-12-15.json
```

## License

MIT

---

<!-- BEGIN GITHUB TRENDING -->
## 📊 GitHub Trending

**最后更新**: 2026-09-06 | **成功**: 18 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 251.3k | 1.5k | ECC 是一个针对 Claude Code、Cursor 等 AI 编程代理的性能优化与工程化系统。它为代理提供技能、直觉、记忆、安全机制及研究优先的开发能力，帮助代理在构建前规划、验证测试、自我审查，并将重复性工作转化为可复用的技能。 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 254.6k | 2.2k | 这是一套专为工程师设计的实用技能集合，旨在通过可组合的小型脚本辅助真实的工程实践。它支持 Claude Code 和 Codex 等多种 AI 编码助手，用户可通过简单的命令安装并运行 `/setup-matt-pocock-skills` 来配置项目，享受基于多年工程经验的自动化工作流。 |
| 3 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 38 editorial diagram types for Claude Code, Codex,... | HTML | 32.4k | 620 | 这是一个为 Claude Code 等工具提供 39 种高质量编辑类图表的 HTML/SVG 库。它支持多种布局（如 Sankey、鱼骨图），强调语义模式和静态输出，无需 Figma 即可生成符合品牌风格的架构图和流程图。 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 242.5k | 520 | Hermes Agent 是一个由 Nous Research 开发的自我改进 AI 代理，具备内置学习循环。它能从经验中创建技能，跨会话记忆用户信息，支持多平台（Telegram、Discord 等）交互。它拥有强大的终端界面，支持并行子代理处理复杂任务，且不绑定特定模型，可在云端或本地灵活部署。 |
| 5 | [openai/skills](https://github.com/openai/skills) | Skills Catalog for Codex... | Python | 25.6k | 46 | 该项目已弃用，旨在为 Codex 提供技能目录。它包含 AI 代理可用的指令、脚本和资源，帮助团队以可重复的方式完成任务。用户可通过命令行安装技能，支持自定义技能创建与分发，并遵循各技能目录内的许可证。 |
| 6 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 205.3k | 551 | OpenCode 是一个开源的 AI 编码代理，使用 TypeScript 构建。它提供命令行工具和桌面应用程序，旨在帮助用户通过 AI 辅助进行代码编写和开发任务。支持多平台安装，包括 macOS、Windows 和 Linux。 |
| 7 | [blader/humanizer](https://github.com/blader/humanizer) | Agent skill that removes signs of AI-generated wri... | Python | 44.2k | 748 | Humanizer 是一个 Python Agent 技能，用于将 AI 生成的文本重写为更自然、类人的风格。它通过移除统计算法导致的机械感，保留原意，并支持通过示例匹配特定写作声音。适用于 Claude 等智能体平台。 |
| 8 | [llvm/llvm-project](https://github.com/llvm/llvm-project) | The LLVM Project is a collection of modular and re... | LLVM | 40.2k | 23 | LLVM 是一个模块化且可重用的编译器和工具链技术集合。核心组件包括处理中间表示的 LLVM、支持 C/C++/Objective-C 的 Clang 前端，以及 libc++ 标准库和 LLD 链接器。该项目旨在构建高度优化的编译器、优化器和运行时环境。 |
| 9 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 129.4k | 1.5k | Ponytail 是一个旨在让 AI 代理模仿‘懒惰资深开发者’行为的工具。它通过提示工程，强制 AI 使用最简单的原生代码替代复杂的第三方库，从而在保证 100% 安全的前提下，显著减少代码量（约 54%）、降低成本并提升执行速度。适用于优化 AI 编码助手效率的场景。 |
| 10 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent meta-harness. Deploy intelli... | TypeScript | 71.0k | 276 | Ruflo 是一个智能代理元启动器，为 Claude Code 和 Codex 提供执行层。它支持 100+ 专用代理、协调群集、自适应记忆和自学习智能。通过 npx 安装，用户只需正常编写代码，Ruflo 即可处理后台协调、RAG 集成和跨机器联邦通信，构建协作式 AI 系统。 |
| 11 | [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | Open source inference server that runs the best lo... | TypeScript | 3.7k | 604 | Magnitude 是一个开源的本地推理服务器，旨在为你的硬件运行最佳模型。它通过 CLI 工具分析硬件配置，推荐并下载合适的本地大模型，支持离线、私密运行，并能无缝连接到 Claude Code、Cline 等 AI 代理，实现零成本、高效率的本地 AI 开发体验。 |
| 12 | [BraveOPotato/FckSignups](https://github.com/BraveOPotato/FckSignups) | A list of tools that are open-source, in-browser, ... | TypeScript | 3.3k | 436 | 这是一个名为 FckSignups 的开源项目，旨在收集无需注册即可直接在浏览器使用的工具。项目采用 React + TypeScript 开发，强调隐私保护和开源精神。它提供了一个分类明确的工具目录，帮助用户快速找到无需账号、无追踪、立即可用的实用工具，拒绝强制注册墙和数据收割。 |
| 13 | [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) | Marketing skills for Claude Code and AI agents. CR... | JavaScript | 47.5k | 329 | 这是一个为 Claude Code 和 AI 代理提供的营销技能集合，专注于 CRO、文案、SEO、分析和增长工程。旨在帮助技术营销人员和创始人利用 AI 编码代理优化转化率、撰写文案和制定增长策略，支持多种 AI 编辑器。 |
| 14 | [aipoch/open-science](https://github.com/aipoch/open-science) | Open Science by AIPOCH is an open-source, local-fi... | TypeScript | 3.9k | 146 | Open Science 是一个开源、本地优先的 AI 研究工作台，支持 macOS、Windows 和 Linux。它集成了科学 AI 代理、Python/R 代码本和数据连接器，允许用户通过自然语言描述目标，让代理自动执行文献综述、代码运行和数据分析，生成可追溯的研究报告。适用于机器学习、生命科学等多个领域的计算密集型研究，旨在实现可复现的科学探索。 |
| 15 | [OpenWhispr/openwhispr](https://github.com/OpenWhispr/openwhispr) | Voice-to-text dictation app with local (Nvidia Par... | JavaScript | 7.4k | 121 | OpenWhispr 是一款开源的跨平台语音转文字应用，支持本地（Whisper/Parakeet）和云端（BYOK）模型。它提供全局热键听写、翻译、AI 代理对话及会议转录功能。注重隐私，无数据收集，是 WisprFlow 和 Granola 的替代品。 |
| 16 | [humanlayer/skills](https://github.com/humanlayer/skills) | ... | TypeScript | 3.1k | 451 | 这是一个 HumanLayer 提供的 Claude Code 技能集合。包含多个实用技能，如重写 CLAUDE.md 以提高指令遵循度、缩小 React prop 类型、构建迭代代理循环、设计控制循环以及解释代码主题。通过 npx 安装，旨在提升 Claude 在代码编写和项目理解方面的能力。 |
| 17 | [The-Swarm-Corporation/AutoHedge](https://github.com/The-Swarm-Corporation/AutoHedge) | Build your autonomous hedge fund in minutes. AutoH... | Python | 4.7k | 142 | AutoHedge 是一个基于 Python 的企业级自主代理对冲基金，利用群智能和 AI 代理自动化交易。它采用多代理架构（包括策略生成、量化分析、风险管理和执行代理），支持 Solana 上的全自主交易，具备实时市场分析、风险优先设计和结构化输出功能，旨在提供机构级的可靠性和可扩展性。 |
| 18 | [Stremio/stremio-web](https://github.com/Stremio/stremio-web) | Stremio - Freedom to Stream... | JavaScript | 13.5k | 122 | Stremio 是一个插件驱动的流媒体平台，提供电影、剧集和频道发现。前端采用 React 构建，后端由 Rust 编译的 WebAssembly 驱动。支持跨设备同步、Chromecast 投屏、键盘控制播放器及多语言界面。这是一个独立的 PWA 应用，旨在实现自由流媒体体验。 |

[查看完整数据](api/github/2026-09-06.json)
<!-- END GITHUB TRENDING -->




