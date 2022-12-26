import type { Page } from "../pages/types";

export interface MenuEntry {
    name: string,
    page: Page,
}

export type Menu = readonly MenuEntry[];