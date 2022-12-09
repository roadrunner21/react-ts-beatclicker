import { ACCESS_TYPE_ALL } from "./const";
import React from "react";

const accessTypeNames = [ACCESS_TYPE_ALL] as const;

export type PageAccessTypes = typeof accessTypeNames[number];

interface PageBase {
    exact: boolean,
    Component: React.FunctionComponent,
    access: PageAccessTypes,
}

export interface IndexPage extends PageBase {
    index: true,
    path: undefined,
}

export interface PathPage extends PageBase {
    index: false,
    path: string,
}

export type Page = IndexPage | PathPage;