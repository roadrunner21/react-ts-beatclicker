import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import { GAME_RUNNING, selectGame } from "../../../features/game/gameSlice";
import MenuSidebarButton from "../sidebar/MenuSidebarButton";
import Logo from "../../Logo";
import DesktopMenu from "../menu/DesktopMenu";
import SettingsSidebarButton from "../sidebar/SettingsSidebarButton";

function Header() {
    const { mode } = useAppSelector(selectGame);
    return (
        <AppBar position="static" sx={{ userSelect: mode === GAME_RUNNING ? "none" : "inherit" }}>
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