import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import { Page } from "../pages/types";
import NoMatch from "./NoMatch";

interface RouteHandlerProps {
    routes: Array<Page>;
}

function RouteHandler(props: RouteHandlerProps) {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                {props.routes.map((route, i) => {
                    return <Route key={i} index={route.index} path={route.path} element={<route.Component/>}/>;
                })}
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    );
}

export default RouteHandler;