import React from "react";
import { Outlet } from "react-router-dom";
import {Box} from "@mui/material";
import {Header} from "./Header";

function Layout() {
    return (
        <>
            <Header/>
            <Box py={3}>
                <Outlet/>
            </Box>
        </>
    );
}

export { Layout };