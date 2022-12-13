import React from "react";
import MobileMenu from "../menu/MobileMenu";
import LogoIcon from "../../logo/LogoIcon";
import { Box } from "@mui/material";

function MenuSidebar() {
    return (
        <Box p={2}>
            <Box display={"flex"} justifyContent={"center"}>
                <LogoIcon/>
            </Box>
            <MobileMenu/>
        </Box>
    );
}

export default MenuSidebar;