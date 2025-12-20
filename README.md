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

**最后更新**: 2025-12-20 | **成功**: 11 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [exo-explore/exo](https://github.com/exo-explore/exo) | Run your own AI cluster at home with everyday devi... | Python | 34.5k | 615 | exo 项目旨在通过日常设备构建家庭 AI 集群，支持自动设备发现、RDMA 低延迟通信和张量并行计算。利用 MLX 框架实现模型分布式推理，可显著提升大模型运行效率，适用于资源受限场景下的分布式 AI 计算。 |
| 2 | [lintsinghua/DeepAudit](https://github.com/lintsinghua/DeepAudit) | DeepAudit：人人拥有的 AI 黑客战队，让漏洞挖掘触手可及。国内首个开源代码漏洞挖掘多智能体... | Python | 2.0k | 79 | DeepAudit是基于多智能体协作的代码安全审计平台，通过Orchestrator、Recon、Analysis、Verification等模块实现自动化漏洞挖掘与沙箱验证，解决传统工具误报率高、缺乏语义理解等问题，支持本地部署与多项目管理。 |
| 3 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 47.4k | 339 | Claude Code是终端中的代理编码工具，通过自然语言命令执行代码任务、解释复杂代码并管理Git流程，支持多平台安装，适用于提升开发效率的场景。 |
| 4 | [github/awesome-copilot](https://github.com/github/awesome-copilot) | Community-contributed instructions, prompts, and c... | JavaScript | 15.0k | 236 | GitHub Copilot社区定制化工具库，包含指令、提示和配置，提升代码生成、文档编写及特定场景下的AI协作效率。提供多种预设模板和MCP服务器集成方案。 |
| 5 | [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | A list of useful payloads and bypass for Web Appli... | Python | 72.8k | 307 | PayloadsAllTheThings 是一个专注于Web应用安全的渗透测试载荷库，包含多种漏洞利用技巧和绕过方法。项目提供详细的文档说明、Burp Intruder模板及示例文件，支持快速构建测试场景，适用于CTF竞赛和安全测试场景。 |
| 6 | [sgl-project/mini-sglang](https://github.com/sgl-project/mini-sglang) | ... | Python | 1.7k | 312 | Mini-SGLang 是一个轻量级高性能LLM推理框架，通过Radix Cache、Tensor Parallelism等优化技术实现低延迟高吞吐，代码量约5000行且模块化可读性强，支持多GPU扩展和长文本处理。 |
| 7 | [cloudcommunity/Free-Certifications](https://github.com/cloudcommunity/Free-Certifications) | A curated list of free courses with certifications... | - | 47.1k | 250 | 该项目是一个免费技术认证课程集合库，涵盖云计算、数据科学、编程等领域，提供多平台认证路径和学习资源，包含时间限制或免费试用信息。 |
| 8 | [GreyDGL/PentestGPT](https://github.com/GreyDGL/PentestGPT) | A GPT-empowered penetration testing tool... | Python | 9.8k | 257 | PentestGPT是一款基于GenAI的渗透测试工具，支持自主代理执行自动化测试，具备会话持久化和Docker隔离环境。可处理Web、密码学、逆向等多种安全挑战，提供实时反馈与可扩展架构。 |
| 9 | [NexaAI/nexa-sdk](https://github.com/NexaAI/nexa-sdk) | Run the latest LLMs and VLMs across GPU, NPU, and ... | Go | 6.7k | 303 | NexaAI/nexa-sdk 是一个跨平台AI模型推理工具包，支持GPU/NPU/CPU多硬件加速，兼容LLMs/VLMs等模型格式。通过自研NexaML引擎实现低延迟高性能推理，提供OpenAI兼容API及多模态支持，覆盖PC、移动设备及边缘计算场景。 |
| 10 | [astral-sh/ty](https://github.com/astral-sh/ty) | An extremely fast Python type checker and language... | Python | 15.2k | 120 | ty是用Rust开发的超快速Python类型检查器和语言服务器，提供比mypy和Pyright快10-100倍的类型检查速度，支持丰富的代码诊断、增量分析、多编辑器集成及高级类型特性。 |
| 11 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 105.8k | 226 | iptv-org/iptv 是一个聚合全球公开IPTV频道的项目，提供可直接使用的M3U播放列表链接，支持通过视频播放器实时观看。项目包含频道数据库、EPG电子节目指南及API接口，便于开发者集成与扩展。遵循开源协作模式，强调合法合规性。 |

[查看完整数据](api/github/2025-12-20.json)
<!-- END GITHUB TRENDING -->








