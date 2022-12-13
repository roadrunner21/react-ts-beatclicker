import React from "react";
import { Typography } from "@mui/material";
import useSound from "use-sound";
import kick from "./KICK01.wav";

function Running() {
    const [play] = useSound(kick);
    setInterval(() => {
        play();
    }, 500);

    return <>
        <Typography align={"center"} variant={"h5"} component={"h2"}>
            Match the beat
        </Typography>
    </>;
}

export default Running;