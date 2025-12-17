// GitHub Trending 相关类型定义

export interface GitHubRepo {
  index: number;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  todayStars: number;
  url: string;
  aiSummary?: AISummary;
  errorMessage?: string;
}

export interface AISummary {
  summary: string;
  techStack: string[];
  useCase: string;
}

export interface GitHubTrendingData {
  date: string;
  since: 'daily' | 'weekly' | 'monthly';
  totalRepos: number;
  successCount: number;
  failedCount: number;
  repos: GitHubRepo[];
  metadata: {
    createdAt: string;
    duration: string;
    version: string;
  };
}

export interface AIInput {
  fullName: string;
  description: string;
  language: string;
  readmeContent: string;
}
