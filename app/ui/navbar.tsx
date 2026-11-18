'use client';
import clsx from 'clsx';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import ReasonableLogo from "@/app/ui/logo";
import * as config from "@/config"

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-edge bg-ink/85 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6">
                {/* 左侧：标识 */}
                <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
                    <ReasonableLogo
                        aria-hidden="true"
                        className="h-8 w-8 shrink-0 fill-fg transition-colors group-hover:fill-signal"
                    />
                    <span className="leading-none">
                        <span className="block text-sm font-black tracking-widest text-fg">禾李团队</span>
                        <span className="mt-1 block text-[10px] font-bold tracking-[0.3em] text-dim">REASONABLE</span>
                    </span>
                </Link>

                {/* 桌面端导航 */}
                <nav className="hidden items-stretch gap-1 self-stretch md:flex">
                    {config.paths.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    'relative flex items-center px-5 text-sm font-bold tracking-wider transition-colors',
                                    active ? 'text-signal' : 'text-mute hover:text-fg'
                                )}>
                                {link.name}
                                {/* 激活态：底部信号条 + 斜切角标 */}
                                <span className={clsx(
                                    'absolute inset-x-4 bottom-0 h-0.5 bg-signal transition-opacity',
                                    active ? 'opacity-100' : 'opacity-0'
                                )}/>
                            </Link>
                        )
                    })}
                </nav>

                {/* 移动端开关 */}
                <button
                    className="flex h-10 w-10 items-center justify-center border border-edge text-fg md:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label="打开导航菜单"
                >
                    {open ? <XMarkIcon className="h-5 w-5"/> : <Bars3Icon className="h-5 w-5"/>}
                </button>
            </div>

            {/* 移动端抽屉 */}
            {open && (
                <nav className="border-t border-edge bg-ink md:hidden">
                    {config.paths.map((link) => {
                        const active = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={clsx(
                                    'flex items-center justify-between border-b border-edge px-6 py-4 text-sm font-bold tracking-wider',
                                    active ? 'text-signal' : 'text-mute'
                                )}>
                                {link.name}
                                <span className={clsx('h-2 w-2 rotate-45', active ? 'bg-signal' : 'bg-edge-strong')}/>
                            </Link>
                        )
                    })}
                </nav>
            )}
        </header>
    )
}
