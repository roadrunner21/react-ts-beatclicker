import React, { useCallback, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@mui/material";
import SettingsSidebar from "./SettingsSidebar";
import { Settings as SettingsIcon } from "@mui/icons-material";

function SettingsSidebarButton() {
    const [isOpen, setOpen] = useState(false);

    // avoid creating a new function on every re-render
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

    return (
        <>
            <IconButton
                size="large"
                aria-label="settings sidebar"
                aria-controls="settings-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit">
                <SettingsIcon/>
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleClose}>
                <SettingsSidebar/>
            </Drawer>
        </>
    );
}

export default SettingsSidebarButton;