# GitHub Trending History

[![Build Status](https://github.com/lxw15337674/github-trending-history/actions/workflows/github-trending.yml/badge.svg)](https://github.com/lxw15337674/github-trending-history/actions)
[![license](https://img.shields.io/github/license/lxw15337674/github-trending-history)](https://github.com/lxw15337674/github-trending-history/blob/master/LICENSE)

每日自动抓取 GitHub Trending 榜单，并使用 AI 生成项目总结。

## 功能特性

1. **自动抓取**: 每天 UTC 23:00 自动抓取 GitHub Trending 数据
2. **README 提取**: 使用 @mozilla/readability 提取每个项目的 README 内容
3. **AI 总结**: 使用 Cloudflare Workers AI 生成项目核心功能总结、技术栈和适用场景
4. **数据归档**: 将数据按日期归档到 `api/github/` 目录
5. **数据可视化**: [在线查看](https://github-trending-hot-history.vercel.app/)每日 GitHub Trending 数据

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

**最后更新**: 2025-12-17 | **成功**: 0 | **失败**: 11

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [C4illin/ConvertX](https://github.com/C4illin/ConvertX) | 💾 Self-hosted online file converter. Supports 100... | TypeScript | 12.0k | 645 | 处理失败... |
| 2 | [resemble-ai/chatterbox](https://github.com/resemble-ai/chatterbox) | SoTA open-source TTS... | Python | 15.8k | 365 | 处理失败... |
| 3 | [virattt/ai-hedge-fund](https://github.com/virattt/ai-hedge-fund) | An AI Hedge Fund Team... | Python | 43.4k | 252 | 处理失败... |
| 4 | [simstudioai/sim](https://github.com/simstudioai/sim) | Open-source platform to build and deploy AI agent ... | TypeScript | 23.5k | 915 | 处理失败... |
| 5 | [Free-TV/IPTV](https://github.com/Free-TV/IPTV) | M3U Playlist for free TV channels... | Python | 8.6k | 870 | 处理失败... |
| 6 | [TapXWorld/ChinaTextbook](https://github.com/TapXWorld/ChinaTextbook) | 所有小初高、大学PDF教材。... | Roff | 62.9k | 579 | 处理失败... |
| 7 | [0xk1h0/ChatGPT_DAN](https://github.com/0xk1h0/ChatGPT_DAN) | ChatGPT DAN, Jailbreaks prompt... | - | 10.4k | 159 | 处理失败... |
| 8 | [public-apis/public-apis](https://github.com/public-apis/public-apis) | A collective list of free APIs... | Python | 386.0k | 512 | 处理失败... |
| 9 | [nicotsx/zerobyte](https://github.com/nicotsx/zerobyte) | Backup automation for self-hosters. Built on top o... | TypeScript | 3.2k | 470 | 处理失败... |
| 10 | [jellyfin/jellyfin-desktop](https://github.com/jellyfin/jellyfin-desktop) | Jellyfin Desktop Client... | C++ | 4.9k | 166 | 处理失败... |
| 11 | [NVIDIA-NeMo/Gym](https://github.com/NVIDIA-NeMo/Gym) | Build RL environments for LLM training... | Python | 245 | 21 | 处理失败... |

[查看完整数据](api/github/2025-12-17.json)
<!-- END GITHUB TRENDING -->








