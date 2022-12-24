import React from "react";
import IconButton from "@mui/material/IconButton";
import { Settings as SettingsIcon } from '@mui/icons-material';
import { Settings as SettingsPage } from '../../pages';

function SettingsButton() {
    return (
        <IconButton href={SettingsPage.path}>
            <SettingsIcon/>
        </IconButton>
    );
}

export { SettingsButton };