import { ACCESS_TYPE_ALL } from "./const";
import type React from "react";

const accessTypeNames = [ACCESS_TYPE_ALL] as const;

export type PageAccessTypes = typeof accessTypeNames[number];

interface PageBase {
    exact: boolean,
    Component: React.FunctionComponent,
    access: PageAccessTypes,
    path: string,
}

export interface IndexPage extends PageBase {
    index: true,
}

export interface PathPage extends PageBase {
    index: false,
}

export type Page = IndexPage | PathPage;