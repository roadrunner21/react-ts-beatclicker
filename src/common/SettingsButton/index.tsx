import React from "react";
import {Settings as SettingsIcon} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {Settings as SettingsPage} from "../../lib/pages";

function SettingsButton() {
    return (
        <IconButton href={SettingsPage.path}>
            <SettingsIcon/>
        </IconButton>
    );
}

export { SettingsButton };