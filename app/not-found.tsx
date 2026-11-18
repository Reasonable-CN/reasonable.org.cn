import Link from "next/link";
import {CornerTicks} from "@/app/ui/deco";

export default function NotFound() {
    return (
        <div className="mx-auto flex max-w-screen-md flex-col items-center px-6 py-24 text-center sm:py-32">
            <div className="relative border border-edge bg-panel px-10 py-12 clip-corner">
                <CornerTicks/>
                <p className="text-outline-signal text-7xl font-black sm:text-8xl">404</p>
                <p className="mt-4 text-lg font-black tracking-widest text-fg">页面暂不可用</p>
                <p className="mt-2 text-sm text-mute">您访问的页面不存在，或正在建设中。</p>
                <Link href="/"
                      className="clip-slant mt-8 inline-block bg-signal px-8 py-3 text-sm font-black tracking-widest text-ink transition-colors hover:bg-fg">
                    返回首页
                </Link>
            </div>
        </div>
    )
}
