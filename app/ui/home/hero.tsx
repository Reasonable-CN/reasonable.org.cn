'use client';
import Link from "next/link";
import {motion} from "framer-motion";
import MemberCloud from "@/app/ui/home/member-cloud";
import {teamMembers} from "@/lib/members";

const facts = [
    {label: '成立时间', value: '2021.08'},
    {label: '团队规模', value: `${teamMembers.length} 名成员`},
    {label: '核心领域', value: '软件开发与游戏创作'},
];

const rise = {
    hidden: {opacity: 0, y: 32},
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const},
    }),
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-edge bg-blueprint">
            {/* 背景斜切色块 */}
            <div className="pointer-events-none absolute -right-40 -top-24 h-[420px] w-[720px] rotate-[-8deg] bg-panel-2/80" aria-hidden="true"/>
            <div className="pointer-events-none absolute -right-24 top-40 h-24 w-[560px] rotate-[-8deg] hatch text-edge" aria-hidden="true"/>

            <div className="relative mx-auto grid max-w-screen-xl gap-10 px-5 pb-12 pt-16 sm:gap-12 sm:px-6 sm:pb-20 sm:pt-32 lg:grid-cols-[1.08fr_1fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-40 xl:px-12">
                {/* 左：标题区 */}
                <div>
                    <motion.div variants={rise} initial="hidden" animate="show" custom={0}
                                className="mb-6 inline-flex items-center gap-3 border border-edge bg-panel px-3 py-1.5">
                        <span className="h-2 w-2 animate-pulse bg-signal"/>
                        <span className="text-xs font-bold tracking-[0.2em] text-mute">禾李（杭州）科技有限责任公司</span>
                    </motion.div>

                    <motion.h1 variants={rise} initial="hidden" animate="show" custom={1}
                               className="text-6xl font-black leading-none tracking-tightest text-fg sm:text-8xl">
                        禾李
                        <span className="ml-4 text-outline align-top text-4xl font-black sm:text-6xl">TEAM</span>
                    </motion.h1>
                    <motion.p variants={rise} initial="hidden" animate="show" custom={2}
                              className="mt-3 text-3xl font-black tracking-[0.08em] text-outline-signal sm:text-5xl">
                        REASONABLE
                    </motion.p>

                    <motion.p variants={rise} initial="hidden" animate="show" custom={3}
                              className="mt-7 max-w-xl text-[15px] leading-7 text-mute sm:mt-8 sm:text-lg sm:leading-8">
                        一群 Minecraft 玩家组成的团队，成立于 2021 年。
                        从方块世界出发，正在转型为综合性创作与开发团队——我们注定要走向更远的地方。
                    </motion.p>

                    <motion.div variants={rise} initial="hidden" animate="show" custom={4}
                                className="mt-9 grid w-full grid-cols-1 gap-3 min-[360px]:grid-cols-2 sm:mt-10 sm:flex sm:w-auto sm:items-center sm:gap-4">
                        <Link href="/team"
                              className="clip-slant flex w-full items-center justify-center bg-signal px-6 py-3.5 text-sm font-black tracking-widest text-ink transition-colors hover:bg-fg sm:w-auto sm:px-8">
                            认识团队
                        </Link>
                        <Link href="/join"
                              className="clip-slant flex w-full items-center justify-center border border-edge-strong bg-panel px-6 py-3.5 text-sm font-black tracking-widest text-fg transition-colors hover:border-signal hover:text-signal sm:w-auto sm:px-8">
                            加入我们
                        </Link>
                    </motion.div>
                </div>

                <MemberCloud/>
            </div>

            {/* 底部事实条 */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.7, delay: 0.5}}
                className="relative border-t border-edge bg-panel/60 backdrop-blur-sm">
                <div className="mx-auto grid max-w-screen-xl grid-cols-1 divide-y divide-edge sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-4 xl:px-6">
                    {facts.map((fact) => (
                        <div key={fact.label} className="flex items-baseline justify-between gap-4 px-5 py-4 sm:flex-col sm:items-start sm:gap-1 sm:px-6 sm:py-5">
                            <span className="text-xs font-bold tracking-[0.25em] text-dim">{fact.label}</span>
                            <span className="text-right text-base font-black text-fg sm:text-left sm:text-lg">{fact.value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
