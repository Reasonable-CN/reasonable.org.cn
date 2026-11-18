import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // 基底：近黑的蓝灰，工业深色
                ink: '#0B0D12',
                panel: '#12161D',
                'panel-2': '#171C26',
                'panel-3': '#1E2530',
                // 描边
                edge: 'rgba(255,255,255,0.09)',
                'edge-strong': 'rgba(255,255,255,0.18)',
                // 文字
                fg: '#E9ECF1',
                mute: '#9AA1AD',
                dim: '#5C6470',
                // 信号黄（主 accent）
                signal: {
                    DEFAULT: '#FFC233',
                    soft: 'rgba(255,194,51,0.12)',
                    deep: '#B98A17',
                },
                // 脉冲青（次 accent，少量使用）
                pulse: {
                    DEFAULT: '#35E0D0',
                    soft: 'rgba(53,224,208,0.10)',
                },
            },
            fontFamily: {
                sans: [
                    '"DIN Alternate"', '"Bahnschrift"', '"PingFang SC"',
                    '"HarmonyOS Sans SC"', '"Microsoft YaHei"',
                    '"Helvetica Neue"', 'Arial', 'sans-serif',
                ],
            },
            letterSpacing: {
                tightest: '-0.04em',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
