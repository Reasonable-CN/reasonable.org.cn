'use client';

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";
import {
    type PointerEvent as ReactPointerEvent,
    useEffect,
    useRef,
    useState,
} from "react";
import {CornerTicks} from "@/app/ui/deco";
import {memberAvatarUrl, teamMembers, type TeamMember} from "@/lib/members";

const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const latitudeRange = 0.82;

const spherePoints = teamMembers.map((_, index) => {
    const y = latitudeRange
        - (index / Math.max(teamMembers.length - 1, 1)) * latitudeRange * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const angle = goldenAngle * index;

    return {
        x: Math.cos(angle) * radius,
        y,
        z: Math.sin(angle) * radius,
    };
});

function MemberBadge({member}: { member: TeamMember }) {
    const [imageFailed, setImageFailed] = useState(false);

    return (
        <Link
            href="/team"
            title={member.nick}
            aria-label={`查看团队成员：${member.nick}`}
            className="group flex w-full flex-col items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
        >
            <span className="relative h-11 w-11 overflow-hidden border border-edge-strong bg-panel-2 shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 clip-corner-sm group-hover:scale-110 group-hover:rotate-[3deg] group-hover:border-signal group-hover:shadow-[0_0_24px_rgba(255,194,51,0.24)] min-[360px]:h-12 min-[360px]:w-12 sm:h-14 sm:w-14">
                {imageFailed ? (
                    <span className="flex h-full w-full items-center justify-center text-sm font-black text-mute">
                        {member.nick.slice(0, 1)}
                    </span>
                ) : (
                    <Image
                        src={memberAvatarUrl(member.qq, 100)}
                        alt={`${member.nick} 的头像`}
                        width={96}
                        height={96}
                        sizes="(min-width: 640px) 56px, (min-width: 360px) 48px, 44px"
                        unoptimized
                        className="h-full w-full object-cover"
                        onError={() => setImageFailed(true)}
                    />
                )}
                <span className="absolute bottom-0 right-0 h-1.5 w-1.5 bg-signal"/>
            </span>
            <span className="mt-2 block w-full whitespace-nowrap bg-ink/75 px-1 py-0.5 text-center text-[10px] font-bold leading-4 tracking-wide text-mute transition-colors group-hover:bg-signal group-hover:text-ink">
                {member.nick}
            </span>
        </Link>
    );
}

export default function MemberCloud() {
    const sphereRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
    const pointerRef = useRef({targetX: 0, targetY: 0});
    const hoveredRef = useRef<number | null>(null);

    const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerRef.current.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointerRef.current.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const resetPointer = () => {
        pointerRef.current.targetX = 0;
        pointerRef.current.targetY = 0;
    };

    useEffect(() => {
        const sphere = sphereRef.current;
        if (!sphere) {
            return;
        }

        const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
        let reduceMotion = motionPreference.matches;
        let frame = 0;
        let previousTime = performance.now();
        let angleY = 0;
        let pointerX = 0;
        let pointerY = 0;
        let width = sphere.clientWidth;
        let height = sphere.clientHeight;

        const resize = () => {
            width = sphere.clientWidth;
            height = sphere.clientHeight;
        };

        const handleMotionPreference = (event: MediaQueryListEvent) => {
            reduceMotion = event.matches;
        };

        const observer = new ResizeObserver(resize);
        observer.observe(sphere);
        resize();

        const render = (time: number) => {
            const delta = Math.min((time - previousTime) / 1000, 0.05);
            previousTime = time;

            const hovered = hoveredRef.current;
            if (!reduceMotion) {
                angleY += delta * (hovered === null ? 0.28 : 0.07);
            }

            pointerX += (pointerRef.current.targetX - pointerX) * Math.min(1, delta * 5);
            pointerY += (pointerRef.current.targetY - pointerY) * Math.min(1, delta * 5);

            const tiltX = -0.08 + Math.sin(time * 0.00016) * 0.045 + pointerY * 0.24;
            const tiltY = angleY + pointerX * 0.38;
            const cosX = Math.cos(tiltX);
            const sinX = Math.sin(tiltX);
            const cosY = Math.cos(tiltY);
            const sinY = Math.sin(tiltY);
            const radiusX = width * (width < 340 ? 0.36 : width < 400 ? 0.4 : 0.44);
            const radiusY = height * (width < 340 ? 0.37 : width < 400 ? 0.4 : 0.43);

            spherePoints.forEach((point, index) => {
                const node = nodeRefs.current[index];
                if (!node) {
                    return;
                }

                const xAfterY = point.x * cosY - point.z * sinY;
                const zAfterY = point.x * sinY + point.z * cosY;
                const yAfterX = point.y * cosX - zAfterY * sinX;
                const zAfterX = point.y * sinX + zAfterY * cosX;

                const depth = (zAfterX + 1) / 2;
                const perspective = 1.8 / (2.2 - zAfterX);
                const x = xAfterY * radiusX * perspective;
                const y = yAfterX * radiusY * perspective;
                const scale = 0.56 + depth * 0.66;
                const isHovered = hovered === index;
                const opacity = Math.min(1, 0.34 + depth * 0.66 + (isHovered ? 0.22 : 0));

                node.style.transform = `translate3d(calc(-50% + ${x.toFixed(2)}px), calc(-50% + ${y.toFixed(2)}px), 0) scale(${(scale * (isHovered ? 1.3 : 1)).toFixed(3)})`;
                node.style.opacity = opacity.toFixed(3);
                node.style.zIndex = String(isHovered ? 1000 : Math.round(depth * 100));
                node.style.filter = isHovered ? "none" : `blur(${((1 - depth) * 0.5).toFixed(2)}px)`;
            });

            frame = requestAnimationFrame(render);
        };

        if (typeof motionPreference.addEventListener === "function") {
            motionPreference.addEventListener("change", handleMotionPreference);
        } else {
            motionPreference.addListener(handleMotionPreference);
        }
        frame = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(frame);
            observer.disconnect();
            if (typeof motionPreference.removeEventListener === "function") {
                motionPreference.removeEventListener("change", handleMotionPreference);
            } else {
                motionPreference.removeListener(handleMotionPreference);
            }
        };
    }, []);

    return (
        <motion.div
            initial={{opacity: 0, scale: 0.94}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1]}}
            className="relative mx-auto block w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[440px]"
        >
            <div className="relative border border-edge bg-panel p-3 clip-corner">
                <CornerTicks/>

                <div
                    ref={sphereRef}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={resetPointer}
                    className="relative h-[300px] touch-pan-y overflow-hidden border border-edge bg-blueprint sm:h-[340px] lg:h-[380px] xl:h-[400px]"
                >
                    <p className="pointer-events-none absolute left-3 top-3 z-20 text-[9px] font-bold tracking-[0.18em] text-dim">
                        {teamMembers.length} 名成员
                    </p>
                    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                        <span className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-1/2 h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-1/2 h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-edge"/>
                        <span className="absolute left-1/2 top-0 h-full w-px bg-edge/50"/>
                        <span className="absolute left-0 top-1/2 h-px w-full bg-edge/50"/>
                    </div>

                    {teamMembers.map((member, index) => (
                        <div
                            key={member.qq}
                            ref={(node) => {
                                nodeRefs.current[index] = node;
                            }}
                            onPointerEnter={() => {
                                hoveredRef.current = index;
                            }}
                            onPointerLeave={() => {
                                if (hoveredRef.current === index) {
                                    hoveredRef.current = null;
                                }
                            }}
                            className="absolute left-1/2 top-1/2 w-[88px] will-change-transform hover:z-[1000] min-[360px]:w-[96px] sm:w-[112px]"
                            style={{
                                opacity: 0,
                                transform: "translate3d(-50%, -50%, 0) scale(0.7)",
                            }}
                        >
                            <MemberBadge member={member}/>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
