import React, { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Drawer } from "@mui/material";
import Sidebar from "./Sidebar";

function SidebarButton() {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
            <IconButton
                size="large"
                aria-label="menu items"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
            >
                <MenuIcon/>
            </IconButton>
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={handleClose}
            >
                <Sidebar/>
            </Drawer>
        </Fragment>
    );
}

export default SidebarButton;