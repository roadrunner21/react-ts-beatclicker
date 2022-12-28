import {Settings as SettingsContent} from "../../../features/settings/Settings";
import {ACCESS_TYPE_ALL} from "../const";
import type { PathPage } from "../types";

const Settings: PathPage = {
    path: "/settings",
    exact: false,
    index: false,
    Component: SettingsContent,
    access: ACCESS_TYPE_ALL,
};

export { Settings };