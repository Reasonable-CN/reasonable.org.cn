import dynamic from "next/dynamic";
import {promises as fs} from 'fs';
import {notFound} from "next/navigation";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {CornerTicks} from "@/app/ui/deco";

const Editor = dynamic(() => import("../../ui/blocknote/editor"), {ssr: false});

export async function generateStaticParams() {
    return [
        {
            page: 'privacy-policy'
        },
        {
            page: 'term-of-service'
        }
    ]
}

const titles: Record<string, string> = {
    'term-of-service': '服务协议',
    'privacy-policy': '隐私政策',
};

export default async function App({params}: { params: { page: string } }) {
    const file = await fs.readFile(process.cwd() + `/app/docs/${params.page}.json`, 'utf8').catch(() => {
        notFound();
    });
    return (
        <div className="mx-auto max-w-screen-md px-6 py-16 sm:py-20">
            <Link href="/"
                  className="mb-8 inline-flex items-center gap-2 border border-edge bg-panel px-4 py-2 text-xs font-bold tracking-widest text-mute transition-colors hover:border-signal hover:text-signal clip-corner-sm">
                <ArrowLeftIcon className="h-4 w-4"/>
                返回首页
            </Link>
            <div className="relative border border-edge bg-panel p-6 clip-corner sm:p-10">
                <CornerTicks/>
                <h1 className="mb-6 border-b border-edge pb-4 text-2xl font-black tracking-widest text-fg">
                    {titles[params.page] ?? '文档'}
                </h1>
                <Editor initialContent={JSON.parse(file)}/>
            </div>
        </div>
    )
}
