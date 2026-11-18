'use client';
import {motion} from "framer-motion";
import React from "react";

/** 四角准星框：纯图形装饰，套在面板外层使用 */
export function CornerTicks({className = ""}: { className?: string }) {
    const tick = "absolute h-3 w-3 border-signal";
    return (
        <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
            <span className={`${tick} left-0 top-0 border-l-2 border-t-2`}/>
            <span className={`${tick} right-0 top-0 border-r-2 border-t-2`}/>
            <span className={`${tick} bottom-0 left-0 border-b-2 border-l-2`}/>
            <span className={`${tick} bottom-0 right-0 border-b-2 border-r-2`}/>
        </div>
    );
}

/** 章节标题：序号 + 中文标题 + 英文小标 + 延长细线 */
export function SectionHeader({index, title, en}: { index: string; title: string; en: string }) {
    return (
        <div className="mb-10 flex items-end gap-4">
            <span className="bg-signal px-2 py-1 text-sm font-black leading-none text-ink clip-slant">
                {index}
            </span>
            <div className="leading-none">
                <h2 className="text-2xl font-black tracking-wide text-fg sm:text-3xl">{title}</h2>
                <p className="mt-2 text-[11px] font-bold tracking-[0.35em] text-dim">{en}</p>
            </div>
            <div className="mb-1 hidden h-px flex-1 bg-edge-strong sm:block"/>
            <span className="mb-1 hidden h-2 w-2 rotate-45 bg-signal sm:block"/>
        </div>
    );
}

/** 滚动进入视口时的上浮淡入 */
export function Reveal({children, delay = 0, className = ""}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            initial={{opacity: 0, y: 28}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: "-80px"}}
            transition={{duration: 0.6, delay, ease: [0.22, 1, 0.36, 1]}}
        >
            {children}
        </motion.div>
    );
}
