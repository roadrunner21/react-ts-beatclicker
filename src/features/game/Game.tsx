import React, { Fragment } from "react";
import { Start } from "../start/Start";
import { useAppSelector } from "../../app/hooks";
import { GAME_RUNNING, GAME_START, selectGame } from "./gameSlice";
import Running from "../running/Running";
import { Box } from "@mui/material";

function Game() {
    const { mode } = useAppSelector(selectGame);
    return <Box pt={10}>
        {mode === GAME_START && <Start/>}
        {mode === GAME_RUNNING && <Running/>}
    </Box>;
}

export default Game;