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

**最后更新**: 2025-12-22 | **成功**: 17 | **失败**: 0

| # | 仓库 | 描述 | 语言 | Stars | 今日新增 | AI 总结 |
|---|------|------|------|-------|----------|---------|
| 1 | [exo-explore/exo](https://github.com/exo-explore/exo) | Run your own AI cluster at home with everyday devi... | Python | 37.0k | 1.3k | exo 项目旨在利用日常设备构建家庭 AI 集群，支持自动设备发现、RDMA 低延迟通信和模型张量并行。通过 MLX 后端实现跨设备分布式计算，显著提升大模型推理效率，适用于资源受限环境下的大规模 AI 计算需求。 |
| 2 | [iptv-org/iptv](https://github.com/iptv-org/iptv) | Collection of publicly available IPTV channels fro... | TypeScript | 106.4k | 266 | IPTV-Org/iptv 是一个收集全球公开可用IPTV频道的项目，提供包含所有频道的主播放列表链接，支持用户通过兼容的视频播放器直接访问流媒体内容。项目包含播放列表、EPG指南、数据库链接及API文档，便于开发者和用户获取与管理IPTV资源。 |
| 3 | [swisskyrepo/PayloadsAllTheThings](https://github.com/swisskyrepo/PayloadsAllTheThings) | A list of useful payloads and bypass for Web Appli... | Python | 73.4k | 339 | PayloadsAllTheThings 是一个面向Web应用安全和渗透测试的payload集合，包含多种漏洞利用技巧与绕过方法，支持Burp Intruder等工具，适用于安全测试与CTF竞赛场景。 |
| 4 | [GreyDGL/PentestGPT](https://github.com/GreyDGL/PentestGPT) | A GPT-empowered penetration testing tool... | Python | 10.3k | 325 | PentestGPT是一款基于GPT的渗透测试工具，支持自主代理、会话持久化和多类别安全测试。通过AI驱动的漏洞检测与实时反馈，提升网络安全评估效率，适用于CTF竞赛和系统漏洞挖掘。 |
| 5 | [anthropics/skills](https://github.com/anthropics/skills) | Public repository for Agent Skills... | Python | 24.9k | 912 | 该项目是Anthropic为Claude代理提供的技能库，包含动态加载的指令、脚本和资源，用于提升特定任务性能。涵盖创意应用、技术任务及企业工作流，部分技能开源且提供文档处理参考实现。 |
| 6 | [cocoindex-io/cocoindex](https://github.com/cocoindex-io/cocoindex) | Data transformation framework for AI. Ultra perfor... | Rust | 4.8k | 407 | CocoIndex是用Rust开发的高性能AI数据转换框架，支持增量处理和数据血缘追踪。采用数据流编程模型，开发者可通过Python声明式定义数据转换流程，实现源数据与目标数据的实时同步，适用于向量索引构建、知识图谱等场景。 |
| 7 | [danielmiessler/Fabric](https://github.com/danielmiessler/Fabric) | Fabric is an open-source framework for augmenting ... | Go | 36.0k | 329 | Fabric是一个用Go语言开发的开源AI增强框架，通过模块化AI提示系统解决实际问题。支持跨平台集成，提供REST API和命令行接口，涵盖任务管理、国际化的多语言支持及多种AI模型厂商接入，便于开发者高效整合AI能力。 |
| 8 | [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | An Open Source Machine Learning Framework for Ever... | C++ | 193.0k | 56 | TensorFlow是Google开发的开源机器学习框架，提供灵活的工具和库，支持研究人员和开发者构建和部署ML应用。支持Python和C++ API，适用于多种硬件加速。 |
| 9 | [rendercv/rendercv](https://github.com/rendercv/rendercv) | Typst-based CV/resume generator for academics and ... | Python | 5.0k | 350 | RenderCV是一款基于Typst的学术及工程领域简历生成工具，通过YAML格式编写内容并转换为专业排版的PDF。支持版本控制、自动化排版及高度定制化设计，提供JSON Schema辅助数据填写，解决传统简历模板布局问题。 |
| 10 | [home-assistant/core](https://github.com/home-assistant/core) | 🏡 Open source home automation that puts local con... | Python | 83.5k | 30 | Home Assistant 是开源家庭自动化平台，强调本地控制与隐私保护。基于Python开发，采用模块化架构支持多设备集成，适用于树莓派或本地服务器部署，提供社区驱动的DIY解决方案。 |
| 11 | [Semperis/EntraGoat](https://github.com/Semperis/EntraGoat) | A deliberately vulnerable Microsoft Entra ID envir... | PowerShell | 796 | 41 | EntraGoat是一个专为身份安全培训设计的模拟环境，通过PowerShell和Microsoft Graph API创建Microsoft Entra ID的漏洞配置，提供多场景的权限提升攻击演练，支持隔离的测试环境部署。 |
| 12 | [google/langextract](https://github.com/google/langextract) | A Python library for extracting structured informa... | Python | 18.2k | 285 | LangExtract 是一个基于 Python 的库，利用大语言模型从非结构化文本中提取结构化信息，支持精确来源定位、交互式可视化及多模型适配，适用于医疗、法律等领域的文档信息抽取。 |
| 13 | [expressjs/express](https://github.com/expressjs/express) | Fast, unopinionated, minimalist web framework for ... | JavaScript | 68.4k | 25 | Express.js 是一个基于 Node.js 的轻量级、高性能 Web 框架，提供路由管理、HTTP 助手函数、模板引擎支持及内容协商等功能。其设计注重简洁和灵活性，适合构建单页应用、网站及 API 服务。项目包含完善的测试覆盖率和详细的文档说明。 |
| 14 | [lintsinghua/DeepAudit](https://github.com/lintsinghua/DeepAudit) | DeepAudit：人人拥有的 AI 黑客战队，让漏洞挖掘触手可及。国内首个开源的代码漏洞挖掘多智能... | Python | 2.4k | 135 | DeepAudit是基于多智能体协作的代码安全审计平台，通过Orchestrator、Recon、Analysis、Verification四类AI代理，实现代码漏洞的自动挖掘、语义分析与沙箱验证，解决传统工具误报率高、缺乏验证手段等问题，支持本地部署与多平台项目管理。 |
| 15 | [cloudcommunity/Free-Certifications](https://github.com/cloudcommunity/Free-Certifications) | A curated list of free courses with certifications... | - | 48.1k | 519 | 该项目是一个免费认证课程的精选列表，涵盖云计算、编程、数据科学、网络安全等多个领域，提供课程链接及认证信息，帮助开发者和学生获取技能认证。 |
| 16 | [codecrafters-io/build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Master programming by recreating your favorite tec... | Markdown | 451.1k | 336 | 该项目提供多种技术的从零实现教程，涵盖3D渲染、区块链、Web服务器等20+领域，通过实践加深编程理解。包含C++、Python、C#等多语言实现方案，适合系统学习技术原理。 |
| 17 | [mudler/LocalAI](https://github.com/mudler/LocalAI) | 🤖 The free, Open Source alternative to OpenAI, Cl... | Go | 40.5k | 70 | LocalAI是一款开源的本地AI推理服务，兼容OpenAI API，支持文本、音频、图像等多模态生成。无需GPU，可在消费级硬件上运行，提供分布式、去中心化推理能力，适合作为私有化部署的AI服务替代方案。 |

[查看完整数据](api/github/2025-12-22.json)
<!-- END GITHUB TRENDING -->








