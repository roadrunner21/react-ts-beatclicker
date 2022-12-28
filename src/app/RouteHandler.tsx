import React from "react";
import { Route, Routes } from "react-router-dom";
import {Layout, NoMatch} from "../common";
import {routes} from "../lib/pages";

function RouteHandler() {
    return (
        <Routes>
            <Route path="/"
                   element={<Layout/>}>
                {routes.map((route, i) => <Route key={i}
                                                 index={route.index}
                                                 path={route.path}
                                                 element={<route.Component/>}/>)}
                <Route path="*"
                       element={<NoMatch/>}/>
            </Route>
        </Routes>
    );
}

export { RouteHandler };