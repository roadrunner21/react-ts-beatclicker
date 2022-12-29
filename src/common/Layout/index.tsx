import React from "react";
import {Outlet} from "react-router-dom";
import {Box} from "@mui/material";
import {Footer} from "./Footer";
import {Header} from "./Header";

function Layout() {
    return (
        <>
            <Header/>
            <Box flex={1}
                 py={3}>
                <Outlet/>
            </Box>
            <Footer/>
        </>
    );
}

export {Layout};