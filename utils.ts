import dayjs from "dayjs";
import { GitHubTrendingData } from "./github-types";
import fs from 'fs/promises';

export function createGitHubList(data: GitHubTrendingData): string {
    const lastUpdateTime = dayjs().format('YYYY-MM-DD h:mm A');
    const listItems = data.repos.slice(0, 25).map((repo, index) => {
        const stars = `⭐ ${repo.stars.toLocaleString()}`;
        const todayStars = repo.todayStars > 0 ? `📈 +${repo.todayStars.toLocaleString()}` : '';
        const language = repo.language ? `\`${repo.language}\`` : '';
        return `${index + 1}. [${repo.fullName}](${repo.url}) ${language} ${stars} ${todayStars}${repo.description ? `\n   ${repo.description}` : ''}`;
    });

    return `
<!-- BEGIN -->

**最后更新时间**：${lastUpdateTime}

**统计信息**：
- 成功: ${data.successCount} | 失败: ${data.failedCount}
- 耗时: ${data.metadata.duration}

${listItems.join('\n\n')}

<!-- END -->
`;
}

export const ensureDir = async (dir: string) => {
    try {
        await fs.stat(dir);
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.mkdir(dir, { recursive: true });
        } else {
            throw err;
        }
    }
};


export const writeFile = async (path: string, data: string) => {
    try {
        await fs.writeFile(path, data, { encoding: 'utf8' })
    } catch (err) {
        throw err;
    }
}

// 如果没有文件，就创建一个空文件
export const readFile = async (path: string) => {
    try {
        const data = await fs.readFile(path, 'utf8');
        return data;
    } catch (err) {
        if (err.code === 'ENOENT') {
            await writeFile(path, '');
            return '';
        }
    }
};