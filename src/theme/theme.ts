import type { ThemeOptions } from "@mui/material";
import { createTheme } from "@mui/material";

export const darkBlue = {
    50: "#e4e4e7",
    100: "#bbbcc2",
    200: "#8d909a",
    300: "#5f6372",
    400: "#3d4153",
    500: "#1b2035",
    600: "#181c30",
    700: "#141828",
    800: "#101322",
    900: "#080b16",
    A100: "#587dff",
    A200: "#2555ff",
    A400: "#0035f1",
    A700: "#0030d7",
    "contrastDefaultColor": "light",
};

const themeOptions: ThemeOptions = {
    palette: {
        mode: "dark",
        background: {
            default: darkBlue[500],
        },
        primary: {
            main: darkBlue[50],
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h1: {
            fontSize: "2.5rem",
        },
        h2: {
            fontSize: "2.1rem",
        },
        h3: {
            fontSize: "1.8rem",
        },
        h4: {
            fontSize: "1.5rem",
        },
        h5: {
            fontSize: "1.2rem",
        },
        h6: {
            fontSize: "1rem",
        },
        body1: {
            marginBottom: "1.5em",
        },
    },
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: ".5em 0",
                },
            },
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    ":visited": {
                        color: "#FFFFFF",
                    },
                },
            },
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    margin: 0,
                },
                primary: {
                    margin: 0,
                },
            },
        },
    },
};

const theme = createTheme(themeOptions);

export { theme };