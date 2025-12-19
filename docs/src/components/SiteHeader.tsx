'use client'
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { Suspense } from "react";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

export function SiteHeaderContent() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center ">
                <div className="font-semibold text-lg">
                    GitHub Trending 历史归档
                </div>
                <div className="flex flex-1 items-center  space-x-2 justify-end">
                    <nav className="flex items-center space-x-4">
                        <ModeToggle />
                        <Button variant="outline" size="icon" onClick={()=>{
                            window.open('https://github.com/lxw15337674/github-trending-history')
                        }}>
                            <Github />
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export function SiteHeader() {
    return (
        <Suspense fallback={<div>加载中...</div>}>
            <SiteHeaderContent />
        </Suspense>
    );
}