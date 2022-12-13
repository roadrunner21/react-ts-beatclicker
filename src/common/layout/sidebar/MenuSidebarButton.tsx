import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@mui/material";
import MenuSidebar from "./MenuSidebar";

function MenuSidebarButton() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <IconButton
                size="large"
                aria-label="menu items"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit">
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={handleClose}>
                <MenuSidebar/>
            </Drawer>
        </>
    );
}

export default MenuSidebarButton;