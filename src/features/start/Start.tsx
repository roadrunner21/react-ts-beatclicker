import { Box, IconButton, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import React from "react";

export function Start() {

    const startGame = () => {

    }

    return <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Typography align={"center"} variant={"h1"} component={"h1"}>
            Beat Clicker
        </Typography>
        <Typography align={"center"} variant={"h5"} component={"h2"}>
            Match the beat
        </Typography>
        <IconButton onClick={startGame}>
            <PlayArrow sx={{ fontSize: "10rem" }}/>
        </IconButton>
    </Box>
}