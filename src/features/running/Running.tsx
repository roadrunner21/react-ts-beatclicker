import React from "react";
import { Typography } from "@mui/material";
import { useAppSelector } from "../../app/hooks";
import { selectSettings } from "../settings/settingsSlice";
import { PlayFunction } from "use-sound/dist/types";

export interface RunningProps {
    play: PlayFunction;
}

function Running(props: RunningProps) {
    const { bpm } = useAppSelector(selectSettings);
    const { play } = props;

    setInterval(() => {
        play();
    }, 60000 / bpm);

    return <>
        <Typography align={"center"} variant={"h5"} component={"h2"}>
            Match the beat
        </Typography>
    </>;
}

export default Running;