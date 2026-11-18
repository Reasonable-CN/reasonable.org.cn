import {Reveal, SectionHeader} from "@/app/ui/deco";

function FAQItem({index, title, content}: { index: string; title: string; content: string }) {
    return (
        <div className="group relative border-b border-edge py-6 pl-14 transition-colors hover:bg-panel/60">
            <span className="absolute left-0 top-6 bg-panel-2 px-2 py-1 text-xs font-black text-signal clip-slant">
                {index}
            </span>
            <h3 className="text-base font-black tracking-wide text-fg sm:text-lg">
                {title}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-mute">{content}</p>
        </div>
    );
}

export default function FAQ() {
    const faqs = [
        {
            title: "啥玩意？",
            content: "Reasonable，中文名称禾李团队，日文名称葉李，成立于 2021 年 8 月 14 日，现以 Minecraft 编程与周边资源制作为核心工作，预备转型的综合性团队，已注册为禾李（杭州）科技有限责任公司。"
        },
        {
            title: "为什么叫禾李？",
            content: "因为我们是 Reasonable。很合理吧？"
        },
        {
            title: "目前在做什么？",
            content: "目前在 Minecraft 和其他领域开发项目。"
        },
        {
            title: "什么叫预备转型？",
            content: "我们注定要走向更远的地方。Minecraft 领域很快不再适合团队发展。我们从 2024 年开始转型。"
        },
        {
            title: "如何盈利？",
            content: "我们希望通过自主创作与定制服务进行盈利。嗯...这很困难。"
        },
        {
            title: "团队氛围？",
            content: "所有成员都是禾李大家庭的一份子，你甚至可以在团队里认干侄子。当然，你还得接受我们的企业文化：摸鱼。"
        },
        {
            title: "可以加入吗？",
            content: "看到顶上十分晃眼的“加入我们”了吗？点一下试试。"
        },
    ]
    const middle = Math.ceil(faqs.length / 2);
    const columns = [faqs.slice(0, middle), faqs.slice(middle)];
    return (
        <section className="relative">
            <div className="mx-auto max-w-screen-xl px-6 py-20 sm:py-24">
                <Reveal>
                    <SectionHeader index="02" title="常见问题" en="FAQ"/>
                </Reveal>
                <div className="grid gap-x-12 md:grid-cols-2">
                    {columns.map((column, c) => (
                        <div key={c} className="border-t border-edge">
                            {column.map((faq, i) => (
                                <Reveal key={faq.title} delay={i * 0.06}>
                                    <FAQItem
                                        index={String(c * middle + i + 1).padStart(2, '0')}
                                        title={faq.title}
                                        content={faq.content}/>
                                </Reveal>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
