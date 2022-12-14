import React from "react";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import {LogoIcon} from "../LogoIcon";

function Logo() {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
        }}
        >
            <LogoIcon/>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                color="inherit"
                sx={{
                    ml: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    textDecoration: "none",
                }}
            >
                BEATCLICKER
            </Typography>
        </Box>
    );
}

export { Logo };