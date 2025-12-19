import type { Metadata } from 'next';
import Link from 'next/link';
import dayjs from 'dayjs';
import { Badge } from '@/components/ui/badge';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DatePicker } from '@/components/DayPicker';

interface HotsProps {
  params: Promise<{ date: string }>;
  searchParams: Promise<{}>;
}

interface GitHubRepo {
  index: number;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  todayStars: number;
  url: string;
  aiSummary?: {
    summary: string;
    techStack: string[];
    useCase: string;
  };
  errorMessage?: string;
}

interface GitHubTrendingData {
  date: string;
  since: string;
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

async function getData(date: string): Promise<GitHubTrendingData | null> {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/lxw15337674/github-trending-history/refs/heads/master/api/github/${date}.json`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch {
    return null;
  }
}

export async function generateMetadata(props: HotsProps): Promise<Metadata> {
  const params = await props.params;
  const date = params.date;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;
  const pageUrl = `${baseUrl}/history/${date}`;
  const formattedDate = dayjs(date).format('YYYY年MM月DD日');

  return {
    title: `${formattedDate} GitHub Trending 榜单`,
    description: `查看${formattedDate}的 GitHub Trending 榜单，发现当日最热门的开源项目和技术趋势。`,
    keywords: [`GitHub Trending ${date}`, `${formattedDate}开源项目`, 'GitHub 热门', '开源项目', '技术趋势'],
    openGraph: {
      title: `${formattedDate} GitHub Trending 榜单`,
      description: `查看${formattedDate}的 GitHub Trending 榜单，发现当日最热门的开源项目。`,
      url: pageUrl,
      type: 'article',
      publishedTime: dayjs(date).toISOString(),
      modifiedTime: new Date().toISOString(),
      section: 'GitHub Trending',
      authors: ['GitHub Trending 归档'],
      images: [
        {
          url: `${baseUrl}/og-image-${date}.png`,
          width: 1200,
          height: 630,
          alt: `${formattedDate} GitHub Trending 榜单`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${formattedDate} GitHub Trending 榜单`,
      description: `发现${formattedDate}最热门的开源项目`,
      images: [`${baseUrl}/og-image-${date}.png`],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Hots(props: HotsProps) {
  const params = await props.params;

  const {
    date
  } = params;

  const data = await getData(date || dayjs().format('YYYY-MM-DD'));
  const repos = data?.repos || [];
  const formattedDate = dayjs(date).format('YYYY年MM月DD日');
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ;

  // 生成结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${formattedDate} GitHub Trending 榜单`,
    "description": `${formattedDate}的 GitHub Trending 排行榜，包含当日最热门的开源项目`,
    "url": `${baseUrl}/history/${date}`,
    "datePublished": dayjs(date).toISOString(),
    "dateModified": new Date().toISOString(),
    "itemListElement": repos.slice(0, 10).map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareSourceCode",
        "name": item.fullName,
        "description": item.aiSummary?.summary || item.description,
        "url": item.url,
        "datePublished": dayjs(date).toISOString(),
        "programmingLanguage": item.language || "Unknown",
        "author": {
          "@type": "Organization",
          "name": item.fullName.split('/')[0]
        },
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": "GitHub Trending 归档"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <main className="p-5 lg:p-0 lg:pt-5">
        <div className="mx-auto max-w-[980px]">
          <h1 className="sr-only">{formattedDate} GitHub Trending 榜单</h1>
          <Menubar className="flex justify-between">
            <MenubarMenu>
              <Link
                href={`/history/${dayjs(date).subtract(1, 'day').format('YYYY-MM-DD')}`}
              >
                <MenubarTrigger className="cursor-pointer">前一天</MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <DatePicker value={date} sort="" />
            </MenubarMenu>
            <MenubarMenu>
              <Link
                href={`/history/${dayjs(date).add(1, 'day').format('YYYY-MM-DD')}`}
              >
                <MenubarTrigger
                  className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-disabled={dayjs(date).isAfter(dayjs().subtract(1, 'day'))}
                >
                  后一天
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="mx-auto max-w-[980px] mt-4 mb-4">
          {data && (
            <div className="flex justify-between items-center text-sm text-muted-foreground px-2">
              <span>成功: {data.successCount} | 失败: {data.failedCount}</span>
              <span>耗时: {data.metadata.duration}</span>
            </div>
          )}
        </div>

        <div className="mx-auto flex max-w-[980px] flex-col gap-3 pb-8">
          {repos.map((repo: GitHubRepo) => {
            return (
              <Card key={repo.fullName} className="hover:bg-muted/30 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl mb-2">
                        <a
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {repo.fullName}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {repo.description || "无描述"}
                      </CardDescription>
                    </div>
                    {repo.language && (
                      <Badge variant="secondary" className="flex-shrink-0">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-4 mt-3 text-sm text-muted-foreground flex-wrap">
                    <span>⭐ {repo.stars.toLocaleString()}</span>
                    <span>🍴 {repo.forks.toLocaleString()}</span>
                    <span>📈 今日 +{repo.todayStars.toLocaleString()}</span>
                  </div>
                </CardHeader>

                {repo.aiSummary && !repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4 space-y-2">
                      <div>
                        <span className="text-sm font-semibold">💡 AI 总结：</span>
                        <p className="text-sm text-muted-foreground mt-1">{repo.aiSummary.summary}</p>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <div>
                          <span className="font-semibold">🔧 技术栈：</span>
                          <span className="text-muted-foreground">{repo.aiSummary.techStack.join(', ')}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">💼 适用场景：</span>
                        <span className="text-muted-foreground">{repo.aiSummary.useCase}</span>
                      </div>
                    </div>
                  </CardContent>
                )}

                {repo.errorMessage && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-4">
                      <Badge variant="destructive">AI 总结失败</Badge>
                      <p className="text-xs text-muted-foreground mt-2">{repo.errorMessage.slice(0, 100)}...</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            );
          })}

          {repos.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">暂无数据</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </>
  );
}
