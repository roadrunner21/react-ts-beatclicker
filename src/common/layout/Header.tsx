import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import MenuSidebarButton from "./sidebar/MenuSidebarButton";
import Logo from "../logo/Logo";
import SettingsButton from "../SettingsButton";
import DesktopMenu from "./menu/DesktopMenu";
import SettingsSidebarButton from "./sidebar/SettingsSidebarButton";

function Header() {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        display: { xs: "flex", sm: "none" },
                        flexGrow: 1,
                    }}>
                        <MenuSidebarButton/>
                    </Box>
                    <Logo/>
                    <Box sx={{
                        display: { xs: "none", sm: "flex" },
                        flexGrow: 1,
                        marginLeft: 2,
                    }}>
                        <DesktopMenu/>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "flex-end",
                    }}>
                        <SettingsSidebarButton/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;