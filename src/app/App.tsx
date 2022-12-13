import React from "react";
import RouteHandler from "./RouteHandler";
import Routes from "../pages/index";

function App() {

    return (
        <>
            <RouteHandler routes={Routes}/>
        </>
    );
}

export default App;