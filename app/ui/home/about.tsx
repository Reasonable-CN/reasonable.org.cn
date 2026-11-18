import {CornerTicks, Reveal, SectionHeader} from "@/app/ui/deco";

const items = [
    {
        key: '01',
        title: '我们是谁',
        content: '禾李团队（Reasonable）成立于 2021 年 8 月 14 日，由一群在网络上相识的 Minecraft 玩家组成。如今我们正式注册为禾李（杭州）科技有限责任公司。',
    },
    {
        key: '02',
        title: '现在正在做什么',
        content: '以 Minecraft 编程与周边资源创作为根基，同时向更多领域拓展。我们致力于打造优质的内容与工具，并努力建设一个绿色、开放、共享、平等的团队。',
    },
    {
        key: '03',
        title: '为什么叫禾李',
        content: '因为我们是 Reasonable——很合理吧？中文名「禾李」，日文名「葉李」，都是这个单词的化身。',
    },
];

export default function About() {
    return (
        <section className="relative border-b border-edge">
            <div className="mx-auto max-w-screen-xl px-6 py-20 sm:py-24">
                <Reveal>
                    <SectionHeader index="01" title="我们是谁" en="WHO WE ARE"/>
                </Reveal>
                <div className="grid gap-5 md:grid-cols-3">
                    {items.map((item, i) => (
                        <Reveal key={item.key} delay={i * 0.12}>
                            <div className="group relative h-full border border-edge bg-panel p-6 transition-colors hover:border-signal/60 clip-corner-sm">
                                <CornerTicks className="opacity-0 transition-opacity group-hover:opacity-100"/>
                                <span className="text-outline text-4xl font-black">{item.key}</span>
                                <h3 className="mt-4 text-lg font-black tracking-wide text-fg">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-mute">{item.content}</p>
                                <div className="mt-6 h-1 w-10 bg-signal transition-all group-hover:w-16"/>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
