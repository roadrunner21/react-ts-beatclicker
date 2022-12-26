import React, { useCallback, useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector, useBeatInput } from "../../hooks";
import { selectSettings } from "../settings/settingsSlice";
import type { PlayFunction } from "use-sound/dist/types";
import { addUserTimestamp, selectRunning, setStartTimestamp } from "./runningSlice";
import moment from "moment";
import { GAME_END, setMode } from "../game/gameSlice";
import { BeatAnimation } from "../../common";

export interface RunningProps {
    play: PlayFunction;
    setVolume: (volume: number) => void;
}

function Running(props: RunningProps) {
    const dispatch = useAppDispatch();
    const { bpm } = useAppSelector(selectSettings);
    const { userTimestamps } = useAppSelector(selectRunning);
    const { play, setVolume } = props;
    const [text, setText] = useState("Get ready...");
    const [record, setRecord] = useState(false);
    // using a ref to ensure useEffect gameLoop hook only runs once even in strictMode
    const effectCalled = useRef(false);
    // Use the useCallback hook to avoid re-creating the function on every render
    const gameLoop = useCallback(() => {
        let i = 1;

        // time axis
        function tick() {
            switch (true) {
                case i <= 5:
                    // Increase volume from 0.2 to 1.0 during the first five iterations
                    setVolume(0.2 + i / 5);
                    break;
                case i === 10:
                    setText("Beat is going to drop out");
                    break;
                case i >= 15 && i <= 20:
                    // Decrease volume from 1.0 to 0.0 during the next five iterations
                    setVolume(1.0 - (i - 15) / 5);
                    break;
                case i === 21:
                    setText("Let's go!");
                    // record the timestamp of start
                    dispatch(setStartTimestamp(moment().valueOf()));
                    setRecord(true);
                    return;
            }

            play();
            setTimeout(tick, (60000 / bpm));
            i++;
        }

        tick();
    }, [play, bpm, setVolume, dispatch]);

    useEffect(() => {
        if (effectCalled.current) {
            return;
        }
        gameLoop();
        effectCalled.current = true;
    }, [gameLoop]);

    const handleInput = useCallback(() => {
        if (record) {
            dispatch(addUserTimestamp(moment().valueOf()));
        }
        if (userTimestamps.length === 20) {
            setRecord(false);
            dispatch(setMode(GAME_END));
        }
    }, [userTimestamps, dispatch, record]);

    useBeatInput(handleInput);

    return (
        <Box sx={{ userSelect: "none", paddingTop: 5 }}>
            <Typography align={"center"}
                        variant={"h5"}
                        component={"h2"}>
                Match the beat
            </Typography>
            <Typography align={"center"}
                        component={"p"}>
                {text}
            </Typography>
            <BeatAnimation/>
        </Box>
    );
}

export { Running };