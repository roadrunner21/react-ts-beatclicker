import { createTheme, ThemeOptions } from "@mui/material";

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
    }
};

const theme = createTheme(themeOptions);

export default theme;