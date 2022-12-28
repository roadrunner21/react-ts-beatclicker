import React from "react";
import {PlayArrow} from "@mui/icons-material";
import {Box, IconButton, Typography} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {GAME_LOADING, GAME_RUNNING, selectGame, setMode} from "../game/gameSlice";

function Start() {
    const dispatch = useAppDispatch();
    const {mode} = useAppSelector(selectGame);

    const startGame = () => {
        dispatch(setMode(GAME_RUNNING));
    };

    return <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        pt={3}>
        <Typography align={"center"}
                    variant={"h4"}
                    component={"h1"}>
            BeatClicker
        </Typography>
        <Typography align={"center"}
                    variant={"h5"}
                    component={"h2"}>
            Tap to the beat
        </Typography>
        <IconButton disabled={mode === GAME_LOADING}
                    onClick={startGame}>
            <PlayArrow color={mode === GAME_LOADING ? "disabled" : "primary"}
                       sx={{ fontSize: "10rem" }}/>
        </IconButton>
    </Box>;
}

export { Start };