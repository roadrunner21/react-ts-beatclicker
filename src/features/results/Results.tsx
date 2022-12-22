import React from "react";
import { useAppDispatch, useAppSelector, useExpectedTimestamps } from "../../hooks";
import { resetRunning, selectRunning } from "../running/runningSlice";
import { selectSettings } from "../settings/settingsSlice";
import { Box, Button, Container, Typography } from "@mui/material";
import Index from "../../common/BeatBarChart";
import useScore from "../../hooks/useScore";
import { GAME_READY, setMode } from "../game/gameSlice";

function Results() {
    const { userTimestamps, startTimestamp } = useAppSelector(selectRunning);
    const { bpm } = useAppSelector(selectSettings);
    const expectedTimestamps = useExpectedTimestamps(startTimestamp, bpm, userTimestamps.length);
    const { score, differences } = useScore(expectedTimestamps, userTimestamps);
    const dispatch = useAppDispatch();

    const handleTryAgain = () => {
        dispatch(setMode(GAME_READY));
        dispatch(resetRunning());
    };

    return (
        <Container>
            <Typography align={"center"} variant={"h3"} gutterBottom>
                Results
            </Typography>
            <Typography align={"center"} variant={"h4"}>
                Your score: {score}
            </Typography>
            <Box p={4}>
                <Index expectedTimestamps={expectedTimestamps} differences={differences}/>
            </Box>
            <Button onClick={handleTryAgain} sx={{ display: "block", margin: "auto" }} variant={"outlined"}>Try
                again</Button>
        </Container>
    );
}

export default Results;
