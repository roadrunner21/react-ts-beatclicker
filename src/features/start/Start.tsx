import { Box, IconButton, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { GAME_RUNNING, setMode } from "../game/gameSlice";

function Start() {
    const dispatch = useAppDispatch();

    const startGame = () => {
        dispatch(setMode(GAME_RUNNING));
    };

    return <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}>
        <Typography align={"center"} variant={"h4"} component={"h1"}>
            BeatClicker
        </Typography>
        <Typography align={"center"} variant={"h5"} component={"h2"}>
            Tap to the beat
        </Typography>
        <IconButton onClick={startGame}>
            <PlayArrow sx={{ fontSize: "10rem" }}/>
        </IconButton>
    </Box>;
}

export default Start;