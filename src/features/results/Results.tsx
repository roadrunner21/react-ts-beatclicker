import React from "react";
import {Loop, Share} from "@mui/icons-material";
import {Box, Button, Container, Typography} from "@mui/material";
import {BeatBarChart} from "../../common";
import {useAppDispatch, useAppSelector, useExpectedTimestamps} from "../../hooks";
import {useScore} from "../../hooks/useScore";
import {GAME_READY, setMode} from "../game/gameSlice";
import {resetRuntime, selectRuntime} from "../runtime/runtimeSlice";
import {selectSettings} from "../settings/settingsSlice";

function Results() {
    const dispatch = useAppDispatch();
    const {userTimestamps, startTimestamp} = useAppSelector(selectRuntime);
    const {bpm, scoringAlgorithm} = useAppSelector(selectSettings);
    const expectedTimestamps = useExpectedTimestamps(startTimestamp, bpm, userTimestamps, scoringAlgorithm);

    const {score, differences} = useScore(expectedTimestamps, userTimestamps);

    const handleTryAgain = () => {
        dispatch(setMode(GAME_READY));
        dispatch(resetRuntime());
    };

    const handleShare = () => {
        dispatch(setMode(GAME_READY));
        dispatch(resetRuntime());
    };

    return (
        <Container>
            <Typography align={"center"}
                        variant={"h3"}
                        gutterBottom>
                Results
            </Typography>
            <Typography align={"center"}
                        variant={"h4"}>
                Your score:
                {" "}
                {score}
            </Typography>
            <Box p={4}>
                <BeatBarChart expectedTimestamps={expectedTimestamps}
                              differences={differences}/>
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
            }}>
                <Button onClick={handleTryAgain}
                        startIcon={<Loop/>}
                        variant={"outlined"}>
                    Try again
                </Button>
                <Button onClick={handleShare}
                        startIcon={<Share/>}
                        variant={"outlined"}>
                    Share
                </Button>
            </Box>
        </Container>
    );
}

export { Results };
