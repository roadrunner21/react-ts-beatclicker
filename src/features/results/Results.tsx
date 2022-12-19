import React from "react";
import { useAppSelector, useExpectedTimestamps } from "../../hooks";
import { selectRunning } from "../running/runningSlice";
import { selectSettings } from "../settings/settingsSlice";
import { Container, Typography } from "@mui/material";
import BeatBarChart from "../../common/BeatBarChart";
import useScore from "../../hooks/useScore";

function Results() {
    const { userTimestamps, startTimestamp } = useAppSelector(selectRunning);
    const { bpm } = useAppSelector(selectSettings);
    const expectedTimestamps = useExpectedTimestamps(startTimestamp, bpm, userTimestamps.length);
    const { score, differences } = useScore(expectedTimestamps, userTimestamps);

    return (
        <Container>
            <Typography align={"center"} variant={"h3"} gutterBottom>
                Results
            </Typography>
            <Typography align={"center"} variant={"h4"}>
                Your score: {score}
            </Typography>
            <BeatBarChart expectedTimestamps={expectedTimestamps} differences={differences}/>
        </Container>
    );
}

export default Results;
