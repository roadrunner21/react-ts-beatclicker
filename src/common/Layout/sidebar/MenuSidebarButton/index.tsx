import React, { useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Drawer } from '@mui/material';
import { MenuSidebar } from '../MenuSidebar';

function MenuSidebarButton() {
    const [isOpen, setOpen] = useState(false);

    // avoid creating a new function on every re-render
    const handleOpen = useCallback(() => setOpen(true), []);
    const handleClose = useCallback(() => setOpen(false), []);

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

export { MenuSidebarButton };