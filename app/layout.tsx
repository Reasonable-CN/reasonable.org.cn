import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";
import React from "react";

export const metadata: Metadata = {
    title: {
        template: '%s | 禾李（杭州）科技有限责任公司',
        default: '禾李（杭州）科技有限责任公司 | Reasonable',
    },
    description: "禾李（杭州）科技有限责任公司（Reasonable / 禾李团队），一群 Minecraft 玩家组成的团队，成立于 2021 年，现正转型为综合性创作与开发团队。",
    keywords: ["禾李", "禾李（杭州）科技有限责任公司", "Minecraft", "Reasonable"],
    generator: 'Next.js'
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
            <body className="min-h-screen flex flex-col bg-ink text-fg">
                <Navbar/>
                <main className="flex-1">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
