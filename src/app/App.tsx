import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import Game from "../features/game/Game";
import Header from "../features/header/Header";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header/>
            <Game/>
        </ThemeProvider>
    );
}

export default App;
