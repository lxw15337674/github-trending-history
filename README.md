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

**最后更新**: 2025-12-25 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | Typst-based CV/resume generator for academics and ... | Python | 10.7k | 1.8k | RenderCV是一款基于Typst的学术与工程简历生成工具，通过YAML格式编写内容并转换为专业排版的PDF。支持版本控制、自动格式优化及高度定制化设计，解决传统简历模板布局问题。 |
| 2 | [xerrors/Yuxi-Know](https://github.com/xerrors/Yuxi-Know) | 结合LightRAG 知识库的知识图谱智能体平台。 An agent platform that i... | Python | 3.2k | 96 | 语析是基于LightRAG与知识图谱的智能体开发平台，整合RAG知识库和图谱技术，提供全套开发套件。支持多种AI工具集成，适用于知识密集型智能应用开发。 |
| 3 | [twitter/the-algorithm](https://github.com/twitter/the-algorithm) | Source code for the X Recommendation Algorithm... | Scala | 68.8k | 303 | X平台推荐算法核心代码，包含数据处理、机器学习模型和软件框架，用于生成个性化内容动态消息。涵盖用户行为分析、社交图谱构建、内容评分等模块，支持实时推荐与批量特征计算。 |
| 4 | [vendure-ecommerce/vendure](https://github.com/vendure-ecommerce/vendure) | The most customizable commerce platform built with... | TypeScript | 7.6k | 262 | Vendure是一个基于TypeScript的开源无头电商平台，提供高可定制化的插件架构和企业级功能。支持NestJS和GraphQL技术栈，具备API优先设计，适用于构建B2B、多供应商市场及D2C等复杂电商场景。 |
| 5 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 6.1k | 269 | LEANN是一个基于Python的创新向量数据库，通过图-based选择性重计算和高保真剪枝技术，实现97%存储节省的本地化RAG系统。支持隐私保护的文档语义搜索，适用于个人设备上的大规模数据检索。 |
| 6 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 17.7k | 468 | Chatterbox是Resemble AI开发的开源文本转语音（TTS）模型系列，包含高效低延迟的Turbo版、多语言支持的Multilingual版及可调参的通用版，支持零样本语音生成与情感标签，适用于语音助手、多语言内容生成等场景。 |
| 7 | [makeplane/plane](https://github.com/makeplane/plane) | 🔥🔥🔥 Open-source Jira, Linear, Monday, and Click... | TypeScript | 41.8k | 300 | Plane是一个开源项目管理平台，提供任务管理、sprints周期跟踪、模块划分、自定义视图、AI辅助文档和实时数据分析功能，旨在替代Jira等工具，简化团队协作流程。 |
| 8 | [vllm-project/vllm-omni](https://github.com/vllm-project/vllm-omni) | A framework for efficient model inference with omn... | Python | 1.7k | 121 | vLLM-Omni是基于vLLM的多模态模型推理框架，支持文本、图像、视频、音频等多模态数据处理，兼容非自回归架构与多模态输出。通过KV缓存优化、流水线执行和动态资源分配实现高效推理，提供Hugging Face集成、分布式并行支持及OpenAI兼容API，简化多模态模型服务化流程。 |
| 9 | [ModelTC/LightX2V](https://github.com/ModelTC/LightX2V) | Light Video Generation Inference Framework... | Python | 1.4k | 44 | LightX2V是轻量级视频生成推理框架，支持文本/图像到视频的高效生成，集成CFG并行、FP8量化等优化技术，兼容多硬件平台并提供在线体验服务。 |

[查看完整数据](api/github/2025-12-25.json)
<!-- END GITHUB TRENDING -->








