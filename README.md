# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
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
  - `techStack`: 技术栈列表
  - `useCase`: 适用场景

## 技术栈

- **抓取**: axios + cheerio
- **README 提取**: @mozilla/readability + jsdom
- **AI 服务**: Cloudflare Workers AI (@cf/meta/llama-3.1-8b-instruct)
- **前端**: Next.js 14 + React 18 + Tailwind CSS
- **自动化**: GitHub Actions

## 本地运行

```bash
# 安装依赖
pnpm install

# 配置环境变量
export CLOUDFLARE_ACCOUNT_ID=your_account_id
export CLOUDFLARE_API_KEY=your_api_key

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

**最后更新**: 2025-12-23 | **成功**: 14 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | Typst-based CV/resume generator for academics and ... | Python | 6.8k | 1.1k | RenderCV是一款基于Typst的学术与工程简历生成工具，通过YAML配置文件实现自动化PDF排版。支持版本控制、内容优先编辑、精准排版及高度定制化设计，提供JSON Schema验证与多样化主题选项。 |
| 2 | [exo-explore/exo](https://github.com/exo-explore/exo) | Run your own AI cluster at home with everyday devi... | Python | 37.9k | 1.4k | exo项目旨在通过日常设备构建AI集群，支持自动设备发现、RDMA加速和张量并行计算，提升模型推理性能。利用MLX框架实现分布式通信，适用于家庭环境下的大规模AI计算需求。 |
| 3 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 18.6k | 413 | LangExtract是一款基于Python的LLM文本结构化工具，支持精准源文定位、多轮处理和交互式可视化，可高效提取长文档关键信息并生成结构化数据。 |
| 4 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 5.4k | 143 | LEANN是一个轻量级本地RAG系统，通过图结构优化实现97%存储压缩，支持在个人设备上进行隐私保护的语义搜索，可处理文档、邮件、聊天记录等多源数据 |
| 5 | [safety-research/bloom](https://github.com/safety-research/bloom) | bloom - evaluate any behavior immediately  🌸🌱... | Python | 544 | 184 | Bloom是一个用于自动化评估大语言模型行为的开源工具，通过配置种子生成动态评估套件，检测如偏见、自我保护等目标行为。支持零样本或示例驱动的评估，生成可复现的交互场景，适用于模型安全性与行为研究。 |
| 6 | [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) | Make beautiful isometric infrastructure diagrams... | TypeScript | 14.5k | 431 | FossFLOW 是基于 TypeScript 和 React 的开源等轴测图绘制工具，支持多语言、离线使用及性能优化，可创建美观的基础设施架构图。提供点击/拖拽两种连接方式，内置8种语言翻译和自动语言检测功能。 |
| 7 | [vendure-ecommerce/vendure](https://github.com/vendure-ecommerce/vendure) | The most customizable commerce platform built with... | TypeScript | 7.1k | 5 | Vendure是基于TypeScript的开源无头电商平台，提供可扩展的插件架构和API优先设计，支持企业级电商应用的快速开发与定制，涵盖B2B、多供应商市场及D2C场景。 |
| 8 | [cloudcommunity/Free-Certifications](https://github.com/cloudcommunity/Free-Certifications) | A curated list of free courses with certifications... | - | 48.4k | 421 | 项目是一个免费课程和认证的精选列表，涵盖云服务、编程、数据科学等领域，提供多个平台的免费学习资源和认证机会，帮助用户提升技术能力。 |
| 9 | [open-webui/open-webui](https://github.com/open-webui/open-webui) | User-friendly AI Interface (Supports Ollama, OpenA... | Svelte | 118.7k | 191 | Open WebUI是基于Svelte的自托管AI平台，支持Ollama和OpenAI API，提供RAG推理引擎。具备权限管理、响应式设计、PWA、Markdown/LaTeX支持及语音视频通话功能，适用于多模型集成的AI部署场景。 |
| 10 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 13.3k | 230 | CLI工具用于配置和监控Claude Code，提供100+预设模板，支持AI代理、命令、MCP外部服务集成及自动化钩子，提升开发效率。 |
| 11 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥 🔥 🔥 Open Source JIRA, Linear, Monday, and Asa... | TypeScript | 41.0k | 72 | 开源项目管理工具，支持问题跟踪、冲刺周期管理、产品路线图规划，提供工作项管理、数据分析、自定义视图等功能，旨在简化团队协作流程。 |
| 12 | [xerrors/Yuxi-Know](https://github.com/xerrors/Yuxi-Know) | 结合LightRAG 知识库的知识图谱智能体平台。 An agent platform that i... | Python | 2.8k | 52 | 语析是一个基于LightRAG知识库与知识图谱的智能体开发平台，整合RAG技术与图谱结构，提供全流程开发套件。支持多模态数据处理与知识推理，适用于企业级智能客服与数据分析场景。 |
| 13 | [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | A list of useful payloads and bypass for Web Appli... | Python | 73.6k | 259 | 该项目是一个面向Web应用安全和渗透测试的payload与绕过方法集合，包含多种漏洞利用技巧和测试工具，支持Burp Intruder等安全测试框架，适用于CTF竞赛和安全研究。 |
| 14 | [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | A framework for efficient model inference with omn... | Python | 1.4k | 115 | vLLM-Omni是基于vLLM的多模态模型推理框架，支持文本、图像、视频、音频等多模态输入输出，兼容非自回归架构如DiT模型，提供高效KV缓存管理、流水线执行和动态资源分配，集成Hugging Face并支持分布式推理。 |

[查看完整数据](api/github/2025-12-23.json)
<!-- END GITHUB TRENDING -->








