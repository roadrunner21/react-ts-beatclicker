import React from "react";
import Settings from "../../../features/settings/Settings";
import { Box } from "@mui/material";

function SettingsSidebar() {
    return (
        <Box p={2} minWidth={"12rem"}>
            <Settings/>
        </Box>
    );
}

export default SettingsSidebar;