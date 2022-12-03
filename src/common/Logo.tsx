import React from "react";
import { MusicNote } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

function Logo() {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
        }}
        >
            <MusicNote/>
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

export default Logo;