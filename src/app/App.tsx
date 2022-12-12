import React, { Fragment } from "react";
import RouteHandler from "./RouteHandler";
import Routes from "../pages/index";

function App() {

    return (
        <Fragment>
            <RouteHandler routes={Routes}/>
        </Fragment>
    );
}

export default App;