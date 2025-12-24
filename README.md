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

**最后更新**: 2025-12-24 | **成功**: 16 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | Typst-based CV/resume generator for academics and ... | Python | 9.0k | 2.6k | RenderCV是一款基于Typst的学术及工程领域简历生成工具，用户通过YAML格式编写内容后，可自动生成排版精准的PDF简历，支持版本控制与高度定制化设计，避免传统模板格式问题。 |
| 2 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 68.5k | 272 | X平台内容推荐算法核心代码，包含用户行为数据处理、多模型服务及推荐框架，支持实时个性化内容分发与社交图谱分析。 |
| 3 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 19.0k | 485 | LangExtract是一个基于Python的LLM信息提取库，支持从非结构化文本中精准提取结构化数据并定位原文位置，提供交互式可视化报告。具备长文档处理优化、多模型支持及领域自适应能力。 |
| 4 | [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | A framework for efficient model inference with omn... | Python | 1.6k | 176 | vLLM-Omni是基于vLLM的多模态模型推理框架，支持文本、图像、视频、音频等多模态数据处理，提供高效非自回归生成和异构输出能力，具备流水线执行、动态资源分配及分布式推理支持。 |
| 5 | [stan-smith/FossFLOW](https://github.com/stan-smith/FossFLOW) | Make beautiful isometric infrastructure diagrams... | TypeScript | 14.9k | 500 | FossFLOW 是一个基于 React 和 Isoflow 库的开源等距图可视化工具，支持离线使用。提供多语言界面、性能优化和点击式连接器功能，适用于创建基础设施架构图。 |
| 6 | [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | CLI tool for configuring and monitoring Claude Cod... | Python | 13.6k | 346 | 提供Claude Code的CLI配置工具，包含AI代理、命令、MCP集成等模板，支持快速搭建开发环境。可通过命令行安装组件、设置和集成方案，优化开发流程。 |
| 7 | [safety-research/bloom](https://github.com/safety-research/bloom) | bloom - evaluate any behavior immediately  🌸🌱... | Python | 751 | 230 | Bloom是一个开源的LLM行为评估工具，通过配置种子文件定义目标行为和交互规则，自动生成多样化测试用例，用于检测模型在顺从性、偏见等特定行为上的表现，支持可复现的动态评估流程。 |
| 8 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥 🔥 🔥 Open Source JIRA, Linear, Monday, and Asa... | TypeScript | 41.4k | 428 | 开源项目管理工具，支持问题跟踪、冲刺周期管理和产品路线图规划，提供丰富的工作项管理、数据分析和自定义视图功能，适用于需要替代传统项目管理工具的团队。 |
| 9 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 5.8k | 408 | LEANN是一个基于图计算的高效向量数据库，通过有选择性重新计算和高保真剪枝技术，在本地设备上实现97%存储节省的RAG应用。支持隐私保护的文档语义搜索，可处理邮件、聊天记录、代码库等海量数据，无需云端计算。 |
| 10 | [danielmiessler/Fabric](https://github.com/danielmiessler/Fabric) | Fabric is an open-source framework for augmenting ... | Go | 36.5k | 166 | Fabric是一个开源AI增强框架，通过模块化系统整合众包AI提示，解决AI功能整合难题。支持命令行和REST API，提供跨平台任务处理能力，涵盖国际化的多语言支持与交互式API文档。 |
| 11 | [apurvsinghgautam/robin](https://github.com/apurvsinghgautam/robin) | AI-Powered Dark Web OSINT Tool... | Python | 2.6k | 125 | Robin是基于AI的暗网OSINT工具，支持多模型查询优化与结果过滤，提供模块化架构、CLI操作、Docker部署及自定义报告功能，适用于暗网情报分析与调查。 |
| 12 | [langgenius/dify](https://github.com/langgenius/dify) | Production-ready platform for agentic workflow dev... | TypeScript | 123.0k | 328 | Dify是一个开源的LLM应用开发平台，支持可视化AI工作流设计、RAG管道构建、模型管理及可观测性功能，提供从原型到生产的全流程开发能力。 |
| 13 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 26.5k | 654 | Anthropics/skills 是 Anthropic 为 Claude 代理开发的技能库，包含用于动态提升特定任务性能的指令、脚本和资源。项目展示创意应用、技术任务及企业工作流等场景，提供可自定义的技能模板与示例，部分技能开源或源代码可见。 |
| 14 | [etcd-io/etcd](https://github.com/etcd-io/etcd) | Distributed reliable key-value store for the most ... | Go | 51.1k | 34 | etcd是一个分布式可靠键值存储系统，专注于为分布式系统提供安全、高效的协同服务。采用Go语言开发，基于Raft算法实现分布式一致性，支持gRPC接口和TLS加密，适用于高可用场景。 |
| 15 | [facebookresearch/dinov3](https://github.com/facebookresearch/dinov3) | Reference PyTorch implementation and models for DI... | Jupyter Notebook | 9.0k | 59 | DINOv3是Meta AI推出的视觉基础模型，提供高分辨率密集特征提取能力。该仓库包含PyTorch实现和预训练模型，支持多种视觉任务且无需微调即可达到SOTA性能，已集成到timm和Hugging Face库中。 |
| 16 | [vendure-ecommerce/vendure](https://github.com/vendure-ecommerce/vendure) | The most customizable commerce platform built with... | TypeScript | 7.3k | 259 | Vendure是一个开源的无头电商平台，采用TypeScript和Node.js构建，提供可扩展的插件架构和GraphQL API，支持企业级定制化开发，涵盖B2B/B2C多场景应用。 |

[查看完整数据](api/github/2025-12-24.json)
<!-- END GITHUB TRENDING -->








