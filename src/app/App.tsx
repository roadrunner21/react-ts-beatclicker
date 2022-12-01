import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme/theme";
import Game from "../features/game/Game";
import { selectGame } from "../features/game/gameSlice";
import { useAppSelector } from "./hooks";

function App() {
    const { mode } = useAppSelector(selectGame);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Game/>
        </ThemeProvider>
    );
}

export default App;
