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

**最后更新**: 2026-09-05 | **成功**: 15 | **失败**: 1

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [mattpocock/skills](https://github.com/mattpocock/skills) | Skills for Real Engineers. Straight from my .agent... | Shell | 252.6k | 2.7k | 这是一个专为工程师设计的 AI 技能集合，旨在提供真实的工程实践而非“氛围编码”。项目包含一系列小型、可组合的 Shell 脚本，支持 Claude Code 和 Codex 等编程代理。用户可通过 NPM 安装，选择订阅或本地可编辑模式，通过 `/setup-matt-pocock-skills` 命令在项目中运行，以提升开发效率和代码质量。 |
| 2 | [affaan-m/ECC](https://github.com/affaan-m/ECC) | The agent harness performance optimization system.... | JavaScript | 249.9k | 1.3k | ECC 是一个面向 Claude Code、Cursor 等 AI 代理的性能优化系统。它提供技能、记忆、安全及研究优先的开发工具，帮助代理在构建前规划、验证更改、审查工作并记忆重要信息，将重复性任务转化为可重用技能。 |
| 3 | [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | Makes your AI agent think like the laziest senior ... | JavaScript | 127.9k | 2.8k | Ponytail 是一个 JavaScript 技能，旨在让 AI 代理像最懒的资深开发者一样思考。它通过优先使用原生浏览器 API 而非重型库，显著减少了代码量（平均减少 54%）、成本和时间。它强调 YAGNI 原则，确保生成的代码简洁、高效且 100% 安全。 |
| 4 | [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | The agent that grows with you... | Python | 242.0k | 575 | 处理失败 |
| 5 | [fmtlib/fmt](https://github.com/fmtlib/fmt) | A modern formatting library... | C++ | 25.6k | 134 | 这是一个现代的 C++ 格式化库，提供比 C stdio 和 C++ iostreams 更快更安全的替代方案。它实现了 C++20 std::format 和 C++23 std::print，支持类似 Python 的格式化语法，具有高性能、类型安全、轻量级和跨平台等特点。 |
| 6 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 174.6k | 475 | Anthropic 为 Claude 模型提供的 Agent Skills 公共仓库，包含一系列用于演示特定任务自动化与能力增强的文件夹。每个技能由指令、脚本和资源组成，涵盖创意、技术和企业工作流，旨在帮助 Claude 动态加载并优化复杂任务的处理。 |
| 7 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 38 editorial diagram types for Claude Code, Codex,... | HTML | 31.7k | 855 | 这是一个为 Claude Code 等工具设计的 39 种编辑类图表生成技能。项目提供自包含的 HTML + SVG 输出，支持多种布局语法（如 Sankey、鱼骨图）。强调编辑类设计质量，无 Figma 依赖，支持静态输出和可选动画，并能转换 draw.io 或 Mermaid 源码。旨在提供高质量、品牌一致的图表。 |
| 8 | [anomalyco/opencode](https://github.com/anomalyco/opencode) | The open source coding agent.... | TypeScript | 204.7k | 725 | OpenCode 是一个开源的 AI 编码代理，基于 TypeScript 开发。它提供命令行工具和桌面应用（Beta），支持多种安装方式，旨在帮助开发者利用 AI 辅助编程，提升开发效率。 |
| 9 | [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | 🌊 The original agent meta-harness. Deploy intelli... | TypeScript | 70.7k | 136 | Ruflo 是一个智能多代理元框架，为 Claude Code 和 Codex 提供执行层。它通过提供工具、内存和协调机制，支持 100+ 专用代理和自学习架构。项目支持跨机器的联邦通信和自适应记忆，帮助企业构建协作式 AI 系统，通过 npx 即可快速初始化。 |
| 10 | [humanlayer/skills](https://github.com/humanlayer/skills) | ... | TypeScript | 2.7k | 442 | 这是一个为 Claude Code 提供的技能集合，包含多个实用工具。它可以帮助改进 CLAUDE.md 文件以提高指令遵循度，优化 React 组件的 prop 类型定义，以及构建迭代式代理循环和控制系统。此外，还提供可视化解释工具，提升 AI 编码助手的工作效率。 |
| 11 | [blader/humanizer](https://github.com/blader/humanizer) | Agent skill that removes signs of AI-generated wri... | Python | 43.5k | 990 | 这是一个 Python Agent 技能，旨在移除 AI 生成文本的痕迹。它利用 35 种模式重写文本，使其听起来像人类写作，同时保留事实、引用和代码。支持 Markdown，并允许用户通过提供样本匹配特定写作风格。 |
| 12 | [BraveOPotato/FckSignups](https://github.com/BraveOPotato/FckSignups) | A list of tools that are open-source, in-browser, ... | TypeScript | 2.9k | 68 | NoSignups（原名 FckSignups）是一个基于 React 和 TypeScript 构建的开源项目，旨在收集无需注册、无需追踪的浏览器工具。它强调用户数据隐私和工具的即时可用性，提供生产力、设计等多个类别的精选工具列表，鼓励社区贡献。 |
| 13 | [WorldFlowAI/everything-claude-code](https://github.com/WorldFlowAI/everything-claude-code) | Claude Code toolkit - agents, commands, skills, ru... | JavaScript | 2.4k | 95 | 这是一个 Anthropic hackathon 获胜者开发的生产级 Claude Code 工具包。集成了代理、技能、钩子、命令和规则，涵盖 Token 优化、记忆持久化、持续学习及并行化等高级功能。支持跨平台及多种包管理器，旨在提升 AI 辅助开发的效率与智能化水平。 |
| 14 | [magnitudedev/magnitude](https://github.com/magnitudedev/magnitude) | Open source inference server that runs the best lo... | TypeScript | 3.2k | 674 | Magnitude 是一个开源的本地推理服务器，旨在为你的硬件运行最佳模型。它支持与多种 AI 代理（如 Claude Code, Pi 等）集成。通过分析硬件配置，它能自动推荐、下载并调优适合的本地模型，实现免费、私有且离线的 AI 推理体验。 |
| 15 | [bikini/exploitarium](https://github.com/bikini/exploitarium) | A single archive of public exploit PoCs and vulner... | Python | 4.7k | 230 | 该项目是一个公开漏洞利用 PoC 和漏洞研究文章的归档库，主要使用 Python 开发。作者分享了多年的模糊测试研究成果，部分由 AI 辅助生成，但核心 PoC 均为人工编写。项目旨在促进安全研究教育，并承诺将扩展 PoC 以适应更多环境。 |
| 16 | [nvm-sh/nvm](https://github.com/nvm-sh/nvm) | Node Version Manager - POSIX-compliant bash script... | Shell | 94.9k | 22 | nvm 是一个用于管理 Node.js 版本的命令行工具。它允许用户在 POSIX 兼容的 shell（如 bash、zsh）中快速安装、切换和管理多个 Node.js 版本。支持跨平台（Linux、macOS、WSL），提供离线安装、Shell 集成及 Docker 支持，是前端开发中管理 Node 版本的标准工具。 |

[查看完整数据](api/github/2026-09-05.json)
<!-- END GITHUB TRENDING -->




