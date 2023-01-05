import type { SvgColor } from "@/enums/SvgColors";
import type { DefineComponent, VueElement } from "vue";

export interface IconButton {
    icon: string,
    iconProps: {
        link: string,
        size: number,
        color: SvgColor
    }

}