import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from '@/components/SiteHeader';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://github-trending-history.vercel.app';

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: '',
      template: '%s'
    },
    description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。支持按日期查看历史数据，AI 总结项目要点。',
    keywords: ['GitHub Trending', 'GitHub 趋势', '开源项目', '项目归档', '技术趋势', 'GitHub 数据', '开源归档', '每日趋势'],
    authors: [{ name: 'GitHub Trending History' }],
    creator: 'GitHub Trending History',
    publisher: 'GitHub Trending History',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    manifest: '/manifest.json',
    openGraph: {
      type: 'website',
      locale: 'zh_CN',
      url: baseUrl,
      title: 'GitHub Trending 历史归档 - 每日热门开源项目记录',
      description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。',
      siteName: 'GitHub Trending 历史归档',
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'GitHub Trending 历史归档',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GitHub Trending 历史归档 - 每日热门开源项目记录',
      description: '每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。',
      images: [`${baseUrl}/og-image.png`],
      creator: '@github_trending',
    },
    alternates: {
      canonical: baseUrl,
    },
    category: 'technology',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || 'https://github-trending-history.vercel.app'} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "GitHub Trending 历史归档",
              "description": "每日 GitHub Trending 开源项目归档，追踪最热门的开源项目和技术趋势。",
              "url": process.env.NEXT_PUBLIC_BASE_URL || 'https://github-trending-history.vercel.app',
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL || 'https://github-trending-history.vercel.app'}/history/{search_term_string}`
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "GitHub Trending 历史归档"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader/>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
