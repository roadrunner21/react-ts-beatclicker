import React from 'react';
import { CssBaseline, ThemeProvider} from "@mui/material";
import theme from "../theme/theme";
import Game from "../features/game/Game";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Game/>
        </ThemeProvider>
    );
}

export default App;
