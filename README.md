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

**最后更新**: 2025-12-19 | **成功**: 6 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [anthropics/claude-code](https://github.com/anthropics/claude-code) | Claude Code is an agentic coding tool that lives i... | Shell | 46.9k | 178 | Claude Code是一款终端级智能编程工具，通过自然语言指令实现代码解释、自动化任务执行和Git流程管理，支持多平台... |
| 2 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 43.7k | 256 | 该项目是一个AI驱动的对冲基金模拟系统，整合了15种经典投资策略，通过多代理协作实现量化交易信号生成与风险管理，包含基本... |
| 3 | [astral-sh/ty](https://github.com/astral-sh/ty) | An extremely fast Python type checker and language... | Python | 15.0k | 251 | ty 是一个用 Rust 编写的高性能 Python 类型检查器和语言服务器，提供比 MyPy 和 Pyright 快 ... |
| 4 | [letta-ai/letta](https://github.com/letta-ai/letta) | Letta is the platform for building stateful agents... | Python | 20.0k | 102 | Letta是一个用于构建有状态AI代理的开源平台，支持多模型提供商和高级内存管理，实现代理的持续学习与自我优化。提供Py... |
| 5 | [schollz/croc](https://github.com/schollz/croc) | Easily and securely send things from one computer ... | Go | 33.1k | 130 | croc是用Go语言编写的跨平台文件传输工具，支持Windows、Linux和Mac。提供端到端加密（PAKE协议），无... |
| 6 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 16.3k | 477 | Chatterbox是Resemble AI开发的开源文本转语音（TTS）模型家族，包含350M参数的Turbo版、多语... |

[查看完整数据](api/github/2025-12-19.json)
<!-- END GITHUB TRENDING -->








