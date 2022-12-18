import React from "react";
import { useAppSelector, useExpectedTimestamps } from "../../hooks";
import { selectRunning } from "../running/runningSlice";
import { selectSettings } from "../settings/settingsSlice";
import { Container, Typography } from "@mui/material";

function Results() {
    const { userTimestamps, startTimestamp } = useAppSelector(selectRunning);
    const { bpm } = useAppSelector(selectSettings);
    const expectedTimestamps = useExpectedTimestamps(startTimestamp, bpm, userTimestamps.length);

    return (
        <Container>
            <Typography align={"center"} variant={"h5"} component={"h2"}>
                Results
            </Typography>
            {expectedTimestamps.map((expectedTimestamp, index) => {
                const difference = expectedTimestamp - userTimestamps[index];
                return (
                    <Typography key={index}>
                        On the {index + 1} iteration, you've been off by {difference}ms
                    </Typography>
                );
            })}
        </Container>
    );
}

export default Results;
