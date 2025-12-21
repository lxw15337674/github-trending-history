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

**最后更新**: 2025-12-21 | **成功**: 9 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [exo-explore/exo](https://github.com/exo-explore/exo) | Run your own AI cluster at home with everyday devi... | Python | 35.6k | 1.2k | exo项目旨在通过日常设备构建家庭AI集群，支持自动设备发现、RDMA过Thunderbolt降低延迟，并提供模型分片与拓扑感知并行计算。利用MLX框架实现高效分布式推理，可显著提升大模型运行速度。 |
| 2 | [GreyDGL/PentestGPT](https://github.com/GreyDGL/PentestGPT) | A GPT-empowered penetration testing tool... | Python | 10.0k | 188 | PentestGPT是一款基于GenAI的渗透测试工具，支持AI驱动的漏洞检测与CTF竞赛解题。具备自主代理、会话持久化、多模型支持及实时反馈功能，集成Web、Crypto等多领域测试能力。 |
| 3 | [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | A list of useful payloads and bypass for Web Appli... | Python | 73.1k | 241 | 该项目是一个全面的Web应用安全测试和渗透测试payload集合，包含多种漏洞利用技巧和绕过方法，适用于CTF比赛及安全研究。 |
| 4 | [sgl-project/mini-sglang](https://github.com/sgl-project/mini-sglang) | ... | Python | 1.9k | 202 | Mini-SGLang 是一个轻量级高性能的LLM推理框架，通过Radix Cache、Chunked Prefill等优化技术实现低延迟高吞吐，支持多GPU张量并行和FlashAttention加速，代码简洁易读适合研究与开发。 |
| 5 | [pollen-robotics/reachy_mini](https://github.com/pollen-robotics/reachy_mini) | Reachy Mini's SDK... | Python | 486 | 13 | Reachy Mini SDK提供Python接口控制开源机器人，支持无线、Lite版及模拟环境。集成AI应用如对话、手势追踪，可连接LLMs并发布至Hugging Face，适用于机器人开发与AI实验。 |
| 6 | [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | Data transformation framework for AI. Ultra perfor... | Rust | 4.4k | 187 | CocoIndex是基于Rust的高性能AI数据转换框架，支持增量处理和数据血缘追踪。通过声明式Python数据流编程，实现源数据与目标数据的实时同步，提供可插拔的标准化组件，适用于向量索引、知识图谱等场景。 |
| 7 | [cloudcommunity/Free-Certifications](https://github.com/cloudcommunity/Free-Certifications) | A curated list of free courses with certifications... | - | 47.6k | 436 | 该项目是一个免费技术认证和课程的精选列表，涵盖云计算、编程、数据科学等领域，提供来自GitLab、Oracle、freeCodeCamp、Databricks等机构的认证课程，适合学生、开发者和IT专业人员提升技能。 |
| 8 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 47.7k | 296 | Claude Code 是一款终端级智能编码工具，通过自然语言指令执行代码任务、解释代码逻辑并管理 Git 流程，支持多平台安装和插件扩展，提升开发效率。 |
| 9 | [trimstray/the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | A collection of inspiring lists, manuals, cheatshe... | - | 199.1k | 168 | 该项目是一个面向系统管理员、DevOps和安全研究人员的实用工具与知识集合，包含CLI工具、网络管理、容器编排等领域的手册、技巧、博客和开源工具链接，旨在提供高质量的技术资源和日常工作中可直接使用的解决方案。 |

[查看完整数据](api/github/2025-12-21.json)
<!-- END GITHUB TRENDING -->








