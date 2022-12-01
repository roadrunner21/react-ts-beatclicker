import React, { Fragment } from "react";
import { Start } from "../start/Start";
import { useAppSelector } from "../../app/hooks";
import { GAME_RUNNING, GAME_START, selectGame } from "./gameSlice";
import Running from "../running/Running";

function Game() {
    const { mode } = useAppSelector(selectGame);
    return <Fragment>
        {mode === GAME_START && <Start/>}
        {mode === GAME_RUNNING && <Running/>}
    </Fragment>;
}

export default Game;