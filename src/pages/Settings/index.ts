import { ACCESS_TYPE_ALL } from "../const";
import { PathPage } from "../types";
import SettingsContent from "../../features/settings/Settings";

const Settings: PathPage = {
    path: "/settings",
    exact: false,
    index: false,
    Component: SettingsContent,
    access: ACCESS_TYPE_ALL,
};

export default Settings;