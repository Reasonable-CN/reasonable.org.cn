import {paths} from "@/config"

export function is_show_navbar(path: string) {
    return paths.find((i) => i.href === path);
}
