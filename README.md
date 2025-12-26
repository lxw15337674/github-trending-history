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

**最后更新**: 2025-12-26 | **成功**: 6 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | CV/resume generator for academics and engineers, Y... | Python | 12.1k | 1.9k | RenderCV是一款基于YAML的学术与工程简历生成工具，自动将结构化数据转换为格式规范的PDF文档，支持高度定制化设计，解决传统简历排版难题。 |
| 2 | [langgenius/dify](https://github.com/langgenius/dify) | Production-ready platform for agentic workflow dev... | TypeScript | 123.6k | 265 | Dify是基于TypeScript的开源LLM应用开发平台，提供可视化工作流设计、RAG管道、模型管理及可观测性功能，支持多模型集成与自托管，助力从原型到生产的高效开发。 |
| 3 | [NanmiCoder/MediaCrawler](https://github.com/NanmiCoder/MediaCrawler) | 小红书笔记 | 评论爬虫、抖音视频 | 评论爬虫、快手视频 | 评论爬虫、B 站视频 ｜ 评论爬虫、... | Python | 40.8k | 78 | MediaCrawler是一款多平台自媒体数据采集工具，支持小红书、抖音、快手、B站等主流平台的评论及内容爬取。基于Playwright实现浏览器自动化，无需逆向加密算法，提供登录态缓存、IP代理池、词云生成等功能，适用于舆情监控和市场研究场景。 |
| 4 | [flowsurface-rs/flowsurface](https://github.com/flowsurface-rs/flowsurface) | A native desktop charting platform for crypto mark... | Rust | 837 | 143 | Flowsurface是一款用Rust开发的开源桌面图表工具，支持Binance、Bybit等交易所，提供多种图表类型如热力图、K线图、足迹图等，实时显示交易数据，支持多窗口、自定义主题和布局，适用于加密货币市场分析。 |
| 5 | [yichuan-w/LEANN](https://github.com/yichuan-w/LEANN) | RAG on Everything with LEANN. Enjoy 97% storage sa... | Python | 6.4k | 356 | LEANN是一个基于Python的创新向量数据库，通过图-based有选择性重新计算和高保真度剪枝技术，实现97%存储节省的本地化RAG系统。支持在个人设备上高效处理数百万文档的语义搜索，保障数据隐私且无需云端计算。 |
| 6 | [apurvsinghgautam/robin](https://github.com/apurvsinghgautam/robin) | AI-Powered Dark Web OSINT Tool... | Python | 3.0k | 95 | Robin是基于AI的暗网OSINT调查工具，支持模块化架构和多模型切换，可过滤暗网搜索结果并生成调查报告，适用于安全研究与合规检查场景。 |

[查看完整数据](api/github/2025-12-26.json)
<!-- END GITHUB TRENDING -->








