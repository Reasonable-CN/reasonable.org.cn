import Image from "next/image";
import {CornerTicks, Reveal, SectionHeader} from "@/app/ui/deco";
import {memberAvatarUrl, teamMembers} from "@/lib/members";

export const metadata = {
    title: "团队成员"
}

function Member({index, nick, qq}: { index: number; nick: string; qq: number }) {
    return (
        <div className="group relative flex items-center gap-4 border border-edge bg-panel p-3 transition-colors hover:border-signal/60 clip-corner-sm">
            <CornerTicks className="opacity-0 transition-opacity group-hover:opacity-100"/>
            <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-edge-strong clip-corner-sm">
                <Image
                    className="h-full w-full object-cover"
                    src={memberAvatarUrl(qq)}
                    width={96}
                    height={96}
                    alt={`${nick} 的头像`}
                />
            </div>
            <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-black tracking-wide text-fg">{nick}</p>
                <p className="mt-0.5 text-[10px] font-bold tracking-[0.25em] text-dim">
                    NO.{String(index + 1).padStart(3, '0')}
                </p>
            </div>
            <span className="h-6 w-px bg-edge-strong transition-colors group-hover:bg-signal"/>
        </div>
    );
}

export default function Team() {
    return (
        <div className="mx-auto max-w-screen-xl px-6 py-16 sm:py-20">
            <Reveal>
                <SectionHeader index="01" title="团队成员" en="MEMBERS"/>
                <p className="-mt-4 mb-10 text-sm text-mute">按加入批次排序，同批次不分先后。</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <Reveal key={member.qq} delay={(index % 4) * 0.06}>
                        <Member index={index} nick={member.nick} qq={member.qq}/>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}
