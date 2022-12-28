import React from "react";
import {Box} from "@mui/material";
import {Settings} from "../../../../features/settings/Settings";

function SettingsSidebar() {
    return (
        <Box p={2}
             minWidth={"12rem"}>
            <Settings/>
        </Box>
    );
}

export { SettingsSidebar };