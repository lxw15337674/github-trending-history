// Cloudflare Workers AI 服务

import axios from 'axios';
import { AIInput, AISummary } from './github-types';

const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const CLOUDFLARE_API_KEY = process.env.CLOUDFLARE_API_KEY;
const AI_MODEL = '@cf/qwen/qwen3-30b-a3b-fp8';

/**
 * 调用 Cloudflare Workers AI 生成项目总结
 */
export async function callCloudflareAI(input: AIInput): Promise<AISummary> {
  if (!CLOUDFLARE_ACCOUNT_ID || !CLOUDFLARE_API_KEY) {
    throw new Error('缺少 Cloudflare API 配置。请设置环境变量 CLOUDFLARE_ACCOUNT_ID 和 CLOUDFLARE_API_KEY');
  }

  // 截断 README 到 2000 字符避免超 token
  const truncatedReadme = input.readmeContent.slice(0, 2000);

  const prompt = `你是 GitHub 项目分析助手。请分析以下项目并以 JSON 格式输出，总结控制在200字以内。

项目名称: ${input.fullName}
编程语言: ${input.language || '未知'}
项目描述: ${input.description}

README 内容:
${truncatedReadme}

请严格按照以下 JSON 格式输出（不要包含其他文字）：
{
  "summary": "项目核心功能总结，50-200字中文",
  "techStack": ["技术栈1", "技术栈2", "技术栈3"],
  "useCase": "适用场景，一句话"
}`;

  const messages = [
    {
      role: 'system',
      content: '你是一个专业的技术项目分析专家。你的回答必须是有效的 JSON 格式，不包含任何其他文字。'
    },
    {
      role: 'user',
      content: prompt
    }
  ];

  // 调用 Cloudflare AI
  try {
    const response = await axios.post(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/ai/run/${AI_MODEL}`,
      { messages },
      {
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const result = response.data;

    // 解析 AI 响应
    if (!result.success || !result.result?.choices?.[0]?.message?.content) {
      throw new Error('Cloudflare AI 返回格式错误');
    }

    const aiResponse = result.result.choices[0].message.content.trim();
    console.log(JSON.stringify(aiResponse)); // 输出前 200 字供调试
    // 尝试解析 JSON
    try {
      // 提取 JSON（可能包含 markdown 代码块）
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('AI 响应中未找到 JSON 格式');
      }

      const parsed = JSON.parse(jsonMatch[0]);

      // 验证必需字段
      if (!parsed.summary || !parsed.techStack || !parsed.useCase) {
        throw new Error('AI 返回的 JSON 缺少必需字段');
      }

      return {
        summary: String(parsed.summary).slice(0, 200), // 强制限制 200 字
        techStack: Array.isArray(parsed.techStack) ? parsed.techStack.slice(0, 5) : [],
        useCase: String(parsed.useCase).slice(0, 100)
      };

    } catch (parseError) {
      throw new Error(`解析 AI 响应失败: ${parseError instanceof Error ? parseError.message : String(parseError)}\n原始响应: ${aiResponse.slice(0, 200)}`);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 'unknown';
      const errorMsg = error.response?.data || error.message;
      throw new Error(`Cloudflare AI 请求失败 (${status}): ${JSON.stringify(errorMsg)}`);
    }
    throw error;
  }
}
