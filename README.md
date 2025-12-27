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

**最后更新**: 2025-12-27 | **成功**: 5 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) | All Algorithms implemented in Python... | Python | 215.5k | 127 | TheAlgorithms/Python项目收集了多种算法的Python实现，主要用于教育目的。代码旨在帮助学习和理解算法原理，但可能未优化至标准库的效率水平。 |
| 2 | [xerrors/Yuxi-Know](https://github.com/xerrors/Yuxi-Know) | 结合LightRAG 知识库的知识图谱智能体平台。 An agent platform that i... | Python | 3.5k | 47 | 语析是一个基于LightRAG知识库与知识图谱的智能体开发平台，整合RAG技术与图数据库实现知识推理。采用LangChain+Vue+FastAPI架构，提供PDF处理、Neo4j图谱存储及MCP工具集成，支持构建企业级智能问答系统。 |
| 3 | [agrinman/tunnelto](https://github.com/agrinman/tunnelto) | Expose your local web server to the internet with ... | Rust | 3.7k | 565 | tunnelto 是一个用 Rust 编写的工具，通过异步 IO 和 Tokio 框架实现本地 Web 服务的公网暴露。支持自定义端口、子域名和 HTTPS，提供快速隧道建立功能，适用于开发测试和本地服务共享场景。 |
| 4 | [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Collection of awesome LLM apps with AI Agents and ... | Python | 84.5k | 133 | 收集了基于RAG、AI代理和多代理团队的LLM应用，整合OpenAI、Anthropic、Gemini等模型及开源模型，提供AI应用开发实践案例。 |
| 5 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | CV/resume generator for academics and engineers, Y... | Python | 12.6k | 615 | RenderCV是一款基于YAML的学术与工程师简历生成工具，可将结构化文本自动转换为格式规范的PDF文档。支持版本控制、自动排版、设计定制化，提供JSON Schema实现交互式填写与验证，解决传统简历模板布局问题。 |

[查看完整数据](api/github/2025-12-27.json)
<!-- END GITHUB TRENDING -->








