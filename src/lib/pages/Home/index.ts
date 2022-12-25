import { ACCESS_TYPE_ALL } from "../const";
import { IndexPage } from '../types';
import { Game } from '../../../features/game/Game';

const Home: IndexPage = {
    index: true,
    path: "/",
    exact: true,
    Component: Game,
    access: ACCESS_TYPE_ALL,
};

export { Home };