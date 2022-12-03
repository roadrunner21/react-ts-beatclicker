import React from "react";
import { Box } from "@mui/material";
import { MusicNote } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

function Logo() {
    return <Box sx={{ display: "flex", alignItems: "center" }}>
        <MusicNote/>
        <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                ml: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
            }}
        >
            BEATCLICKER
        </Typography>
    </Box>;
}

export default Logo;