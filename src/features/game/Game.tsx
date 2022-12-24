import React, { useState } from 'react';
import { Start } from '../start/Start';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { GAME_END, GAME_LOADING, GAME_READY, GAME_RUNNING, selectGame, setMode } from './gameSlice';
import { Running } from '../running/Running';
import { Box } from '@mui/material';
import useSound from "use-sound";
import kick from '../running/KICK01.wav';
import { Results } from '../results/Results';

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
        {mode === GAME_RUNNING && <Running play={play} setVolume={setVolume}/>}
        {mode === GAME_END && <Results/>}
    </Box>;
}

export { Game };