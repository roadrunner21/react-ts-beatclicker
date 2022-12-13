import React from "react";
import Start from "../start/Start";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { GAME_LOADING, GAME_RUNNING, GAME_READY, selectGame, setMode } from "./gameSlice";
import Running from "../running/Running";
import { Box } from "@mui/material";
import useSound from "use-sound";
import kick from "../running/KICK01.wav";

function Game() {
    const dispatch = useAppDispatch();
    const onLoad = () => {
        dispatch(setMode(GAME_READY));
    };
    // preload the sound file
    const [play] = useSound(kick, { onload: onLoad });

    const { mode } = useAppSelector(selectGame);
    return <Box pt={10}>
        {(mode === GAME_LOADING || mode === GAME_READY) && <Start/>}
        {mode === GAME_RUNNING && <Running play={play}/>}
    </Box>;
}

export default Game;