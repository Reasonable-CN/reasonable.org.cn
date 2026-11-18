import Disclosures from "@/app/ui/join/disclosure";
import {Reveal, SectionHeader} from "@/app/ui/deco";

export const metadata = {
    title: "加入我们"
}

export default function Join() {
    return (
        <div className="mx-auto max-w-screen-md px-6 py-16 sm:py-20">
            <Reveal>
                <SectionHeader index="01" title="加入我们" en="JOIN US"/>
                <p className="-mt-4 mb-10 text-sm text-mute">
                    根据您的情况选择对应的加入方式。如有疑问，欢迎在审核群中提出。
                </p>
            </Reveal>
            <Reveal delay={0.1}>
                <Disclosures/>
            </Reveal>
        </div>
    )
}
