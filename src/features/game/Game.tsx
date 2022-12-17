import React, { useState } from "react";
import Start from "../start/Start";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { GAME_LOADING, GAME_READY, GAME_RUNNING, selectGame, setMode } from "./gameSlice";
import Running from "../running/Running";
import { Box } from "@mui/material";
import useSound from "use-sound";
import kick from "../running/KICK01.wav";

function Game() {
    const dispatch = useAppDispatch();
    const [volume, setVolume] = useState(0.2);
    const onLoad = () => {
        dispatch(setMode(GAME_READY));
    };
    // preload the sound file
    const [play] = useSound(kick, {
        volume,
        interrupt: false,
        onload: onLoad,
    });

    const { mode } = useAppSelector(selectGame);
    return <Box pt={10}>
        {(mode === GAME_LOADING || mode === GAME_READY) && <Start/>}
        {mode === GAME_RUNNING && <Running play={play} setVolume={setVolume}/>}
    </Box>;
}

export default Game;