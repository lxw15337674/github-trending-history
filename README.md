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

**最后更新**: 2025-12-19 | **成功**: 10 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [jaywcjlove/awesome-mac](https://github.com/jaywcjlove/awesome-mac) |  Now we have become very big, Different from the ... | JavaScript | 96.3k | 136 | 整理各类 macOS 精品软件的开源列表，涵盖开发工具、设计软件、生产力应用等多领域，提供分类导航与资源链接，便于用户发现和管理 Mac 应用。 |
| 2 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 47.1k | 511 | Claude Code是一款终端级AI编码工具，通过自然语言指令执行代码任务、解释代码逻辑并管理Git流程。支持多平台安装，提供插件扩展功能，注重数据隐私保护。 |
| 3 | [NVIDIA-NeMo/Gym](https://github.com/NVIDIA-NeMo/Gym) | Build RL environments for LLM training... | Python | 447 | 26 | NVIDIA NeMo Gym 是用于构建大语言模型强化学习训练环境的库，提供环境开发框架、大规模数据收集支持及与主流训练框架的集成，简化RL环境开发流程并支持独立测试验证。 |
| 4 | [GreyDGL/PentestGPT](https://github.com/GreyDGL/PentestGPT) | A GPT-empowered penetration testing tool... | Python | 9.6k | 26 | PentestGPT是一款基于GPT的渗透测试工具，结合生成式AI进行自动化漏洞检测与攻击模拟，支持Web、加密、逆向等多种场景，提供实时反馈和可扩展架构，适用于渗透测试及CTF竞赛。 |
| 5 | [exo-explore/exo](https://github.com/exo-explore/exo) | Run your own AI cluster at home with everyday devi... | Python | 33.6k | 437 | exo项目通过整合日常设备构建AI集群，支持自动设备发现、RDMA低延迟通信和模型张量并行，提升分布式计算效率。基于MLX框架实现跨设备资源池化，适用于家庭或小型团队部署大规模AI模型。 |
| 6 | [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | A list of useful payloads and bypass for Web Appli... | Python | 72.6k | 32 | 该项目是一个面向Web应用安全和渗透测试的Payload集合，包含多种漏洞利用技巧与绕过方法，支持Burp Intruder等工具，提供详细文档和贡献指南，适用于CTF竞赛与安全测试场景。 |
| 7 | [sgl-project/mini-sglang](https://github.com/sgl-project/mini-sglang) | ... | Python | 1.4k | 501 | Mini-SGLang 是一个轻量级高性能的LLM推理框架，通过Radix Cache、Chunked Prefill等优化技术实现低延迟高吞吐，支持多GPU张量并行和FlashAttention加速，代码简洁易读且具备OpenAI API兼容性。 |
| 8 | [google/adk-js](https://github.com/google/adk-js) | An open-source, code-first Typescript toolkit for ... | TypeScript | 376 | 46 | google/adk-js是基于TypeScript的AI代理开发工具包，支持代码优先的开发方式，提供与Google Cloud的深度集成，具备工具生态、模块化架构和灵活部署能力，适用于复杂AI代理的构建与管理。 |
| 9 | [afshinea/stanford-cs-229-machine-learning](https://github.com/afshinea/stanford-cs-229-machine-learning) | VIP cheatsheets for Stanford's CS 229 Machine Lear... | - | 19.0k | 103 | 该项目为斯坦福CS229机器学习课程提供整理的复习资料和速查表，包含课程核心概念、相关知识点回顾及模型训练技巧，帮助学习者系统化掌握机器学习知识体系。 |
| 10 | [metabase/metabase](https://github.com/metabase/metabase) | The easy-to-use open source Business Intelligence ... | Clojure | 45.1k | 79 | Metabase是一款开源商业智能工具，允许用户无需SQL即可分析数据，支持复杂查询、交互式仪表板、数据模型构建及团队协作。提供可视化分析、数据订阅、实时警报和嵌入式分析功能，适用于企业数据可视化与决策支持。 |

[查看完整数据](api/github/2025-12-19.json)
<!-- END GITHUB TRENDING -->








