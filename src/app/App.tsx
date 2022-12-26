import React from "react";
import { RouteHandler } from "./RouteHandler";
import { Routes } from "../lib/pages";

function App() {

    return (
        <>
            <RouteHandler routes={Routes}/>
        </>
    );
}

export { App };