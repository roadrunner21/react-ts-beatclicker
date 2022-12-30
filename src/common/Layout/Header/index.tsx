import React from "react";
import {AppBar, Box, Container, Toolbar} from "@mui/material";
import {GAME_END, GAME_RUNTIME, selectGame} from "../../../features/game/gameSlice";
import {useAppSelector} from "../../../hooks";
import {Logo} from "../../Logo";
import { DesktopMenu } from "../menu/DesktopMenu";
import { MenuSidebarButton } from "../sidebar/MenuSidebarButton";
import { SettingsSidebarButton } from "../sidebar/SettingsSidebarButton";

function Header() {
    const { mode } = useAppSelector(selectGame);
    return (
        <AppBar position="static"
                sx={{userSelect: mode === GAME_RUNTIME ? "none" : "inherit"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        display: {xs: "flex", sm: "none"},
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
                        <SettingsSidebarButton disabled={mode === GAME_RUNTIME || mode === GAME_END}/>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export { Header };