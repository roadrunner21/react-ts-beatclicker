import React, { useCallback, useEffect, useRef, useState } from "react";
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
    const [text, setText] = useState("Get ready...");
    // using a ref to ensure useEffect gameLoop hook only runs once even in strictMode
    const effectCalled = useRef(false);
    // Use the useCallback hook to avoid re-creating the function on every render
    const gameLoop = useCallback(() => {
        let i = 0;

        // time axis
        function tick() {
            play();

            switch (true) {
                case i < 5:
                    // Increase volume from 0.2 to 1.0 during the first five iterations
                    setVolume(0.2 + i / 5);
                    break;
                case i < 10:
                    setText("Beat is going to drop out");
                    break;
                case i < 15:
                    // Decrease volume from 1.0 to 0.0 during the next five iterations
                    setVolume(1.0 - (i - 9) / 5);
                    break;
                case i < 25:
                    setText("Let's go!");
                    break;
                case i < 35:
                    setText("Keep going!");
                    // start recording user input for the next 20 iterations
                    break;
                default:
                    setText("Finish");
                    return;
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
            <Typography align={"center"} component={"p"}>
                {text}
            </Typography>
        </>
    );
}

export default Running;