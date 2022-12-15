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
        let i = 1;

        // time axis
        function tick() {
            play();

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
                    // start recording user input for the next 20 iterations
                    break;
                case i === 31:
                    setText("Almost there!");
                    break;
                case i === 36:
                    setText("Keep going!");
                    break;
                case i === 41:
                    setText("Finish");
                    break;
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
    }, []);

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