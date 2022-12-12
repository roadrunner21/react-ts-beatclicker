import React, { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

function Layout() {
    return (
        <Fragment>
            <Header/>
            <Box py={3}>
                <Outlet/>
            </Box>
        </Fragment>
    );
}

export default Layout;