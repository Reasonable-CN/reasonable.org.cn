import ReasonableLogo from "@/app/ui/logo";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative border-t border-edge bg-panel">
            {/* 顶部信号黄警示条 */}
            <div className="h-1.5 w-full hatch text-signal/70"/>
            <div className="mx-auto max-w-screen-xl px-6 py-10">
                <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
                    <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center border border-edge-strong bg-ink clip-corner-sm">
                            <ReasonableLogo className="h-6 w-6 fill-fg"/>
                        </span>
                        <div>
                            <p className="text-sm font-black tracking-widest text-fg">禾李（杭州）科技有限责任公司</p>
                            <p className="mt-1 text-xs tracking-[0.25em] text-dim">REASONABLE TEAM</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-mute">
                        <Link className="transition-colors hover:text-signal" href="/docs/term-of-service">服务协议</Link>
                        <span className="h-3 w-px bg-edge-strong"/>
                        <Link className="transition-colors hover:text-signal" href="/docs/privacy-policy">隐私政策</Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-edge pt-6 text-center text-xs leading-6 text-dim">
                    <p>© 2021-{currentYear} 禾李（杭州）科技有限责任公司 · 保留所有权利</p>
                    <p className="mt-1">
                        <a
                            href="https://beian.miit.gov.cn/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-mute"
                        >
                            浙ICP备2026098528号-1
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
