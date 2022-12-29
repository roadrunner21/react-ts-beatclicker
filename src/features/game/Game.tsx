import React, {useState} from "react";
import {Box} from "@mui/material";
import useSound from "use-sound";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Results} from "../results/Results";
import {Runtime} from "../runtime/Runtime";
import {Start} from "../start/Start";
import {GAME_END, GAME_LOADING, GAME_READY, GAME_RUNTIME, selectGame, setMode} from "./gameSlice";
import kick from "./KICK01.wav";

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
    return <Box>
        {(mode === GAME_LOADING || mode === GAME_READY) && <Start/>}
        {mode === GAME_RUNTIME && <Runtime play={play}
                                           setVolume={setVolume}/>}
        {mode === GAME_END && <Results/>}
    </Box>;
}

export { Game };