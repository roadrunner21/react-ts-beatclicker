import React, { useCallback, useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectSettings } from "../settings/settingsSlice";
import { PlayFunction } from "use-sound/dist/types";

export interface RunningProps {
    play: PlayFunction;
    setVolume: (volume: number) => void;
}

function Running(props: RunningProps) {
    const { bpm } = useAppSelector(selectSettings);
    const { play, setVolume } = props;
    // using a ref to ensure useEffect gameLoop hook only runs once even in strictMode
    const effectCalled = useRef(false);
    // Use the useCallback hook to avoid re-creating the function on every render
    const gameLoop = useCallback(() => {
        let i = 0;

        function tick() {
            play();
            if (i < 5) {
                setVolume(0.2 + i / 5);
            }
            i++;
            setTimeout(tick, 60000 / bpm);
        }

        tick();
    }, [play, setVolume, bpm]);

    useEffect(() => {
        if (effectCalled.current) {
            return;
        }
        gameLoop();
        effectCalled.current = true;
    }, [gameLoop]);

    return (
        <>
            <Typography align={"center"} variant={"h5"} component={"h2"}>
                Match the beat
            </Typography>
        </>
    );
}

export default Running;



