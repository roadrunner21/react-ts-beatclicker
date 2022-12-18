import React from "react";
import IconButton from "@mui/material/IconButton";
import { Settings as SettingsIcon } from "@mui/icons-material";
import SettingsPage from "../pages/Settings";

function SettingsButton() {
    return (
        <IconButton href={SettingsPage.path}>
            <SettingsIcon/>
        </IconButton>
    );
}

export default SettingsButton;