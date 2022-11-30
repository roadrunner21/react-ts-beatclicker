import { createTheme, ThemeOptions } from "@mui/material";

const themeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        background: {
            default: '#1B2035'
        },
        primary: {
            light: '#1F283E',
            main: '#1F283E',
            dark: '#1B2035'
        }
    }
}

const theme = createTheme(themeOptions);

export default theme;