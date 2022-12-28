import React from "react";
import {routes} from "../lib/pages";
import {RouteHandler} from "./RouteHandler";

function App() {

    return (
        <>
            <RouteHandler routes={routes}/>
        </>
    );
}

export {App};