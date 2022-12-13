import React, { Fragment, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@mui/material";
import SettingsSidebar from "./SettingsSidebar";
import { Settings as SettingsIcon } from "@mui/icons-material";

function SettingsSidebarButton() {
    const [isOpen, setOpen] = useState(true);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <IconButton
                size="large"
                aria-label="settings sidebar"
                aria-controls="settings-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
            >
                <SettingsIcon/>
            </IconButton>
            <Drawer
                anchor="right"
                open={isOpen}
                onClose={handleClose}
            >
                <SettingsSidebar/>
            </Drawer>
        </Fragment>
    );
}

export default SettingsSidebarButton;