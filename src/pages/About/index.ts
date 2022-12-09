import AboutContent from "../../features/about/About";
import { ACCESS_TYPE_ALL } from "../const";
import { PathPage } from "../types";

const About: PathPage = {
    path: "/about",
    exact: false,
    index: false,
    Component: AboutContent,
    access: ACCESS_TYPE_ALL,
};

export default About;