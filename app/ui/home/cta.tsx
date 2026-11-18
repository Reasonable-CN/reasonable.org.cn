import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/solid";
import {CornerTicks, Reveal} from "@/app/ui/deco";

export default function CTABand() {
    return (
        <section className="relative overflow-hidden border-t border-edge bg-panel">
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 hatch text-edge" aria-hidden="true"/>
            <div className="relative mx-auto max-w-screen-xl px-6 py-20">
                <Reveal>
                    <div className="relative max-w-2xl border border-edge bg-ink p-8 clip-corner sm:p-12">
                        <CornerTicks/>
                        <p className="text-[11px] font-bold tracking-[0.35em] text-signal">JOIN US</p>
                        <h2 className="mt-4 text-3xl font-black tracking-wide text-fg sm:text-4xl">
                            想和我们一起<br/>把「合理」做得更离谱一点？
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-mute">
                            无论你擅长代码、美术、文案还是整活，只要志同道合，禾李的大门随时为你敞开。
                        </p>
                        <Link href="/join"
                              className="clip-slant mt-8 inline-flex items-center bg-signal px-8 py-3.5 text-sm font-black tracking-widest text-ink transition-colors hover:bg-fg">
                            查看加入方式
                            <ArrowRightIcon className="ml-2 h-4 w-4"/>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
