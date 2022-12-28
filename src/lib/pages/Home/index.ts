import {Game} from "../../../features/game/Game";
import {ACCESS_TYPE_ALL} from "../const";
import type { IndexPage } from "../types";

const Home: IndexPage = {
    index: true,
    path: "/",
    exact: true,
    Component: Game,
    access: ACCESS_TYPE_ALL,
};

export { Home };