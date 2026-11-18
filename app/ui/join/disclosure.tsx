'use client';
import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/20/solid'
import {CheckCircleIcon, HomeIcon} from "@heroicons/react/24/solid";

function DisclosureItem({index, title, opened = false, children}: {
    index: string;
    title: string;
    opened?: boolean;
    children: React.ReactNode
}) {
    return (
        <Disclosure as="div" className="border border-edge bg-panel clip-corner-sm" defaultOpen={opened}>
            {({open}) => (
                <>
                    <Disclosure.Button
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-panel-2">
                        <span className="flex items-center gap-4">
                            <span className="bg-signal px-2 py-0.5 text-xs font-black text-ink clip-slant">{index}</span>
                            <span className="text-sm font-black tracking-wide text-fg sm:text-base">{title}</span>
                        </span>
                        <ChevronUpIcon
                            className={`${open ? 'rotate-180' : ''} h-5 w-5 shrink-0 text-mute transition-transform`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="border-t border-edge px-5 pb-5 pt-4 text-sm leading-7 text-mute">
                        {children}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default function Disclosures() {
    return (
        <div className="space-y-4">
            <DisclosureItem index="A" title="通过入组审核加入我们…" opened={true}>
                <CheckCircleIcon className="mb-2 h-6 w-6 text-signal"/>
                <p className="pb-2 font-black text-fg">欢迎您提交申请</p>
                <p>请您申请加入 QQ 群聊 830188875 （Reasonable入组审核）</p>
                <p>我们会处理您的申请并在群内进行审核的流程。</p>
            </DisclosureItem>
            <DisclosureItem index="B" title="若您曾是 Reasonable 成员…">
                <HomeIcon className="mb-2 h-6 w-6 text-signal"/>
                <p className="pb-2 font-black text-fg">我们很想您！欢迎回家！</p>
                <p>若您因为自身原因或不可抗力退出团队，通常不需要额外审核。</p>
                <p>若您因其他原因退出，或被移出团队，请以新成员身份加入，您曾经在团队的行为将在审核时影响评分。</p>
            </DisclosureItem>
            <DisclosureItem index="C" title="若您受邀加入…">
                <CheckCircleIcon className="mb-2 h-6 w-6 text-signal"/>
                <p className="pb-2 font-black text-fg">欢迎您加入 Reasonable.</p>
                <p>团队人员会安排您入组，并通知您相关事宜。</p>
            </DisclosureItem>
        </div>
    )
}
