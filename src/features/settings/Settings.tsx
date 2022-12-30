import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Divider, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {SCORING_CUMULATIVE, SCORING_INDIVIDUAL, selectSettings, setBpm, setScoringAlgorithm} from "./settingsSlice";
import type {ScoringAlgorithms} from "./settingsSlice"
import type {SelectChangeEvent} from "@mui/material";

const Settings = () => {
    const {bpm, scoringAlgorithm} = useSelector(selectSettings);
    const dispatch = useDispatch();

    const handleBpmChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBpm(+event.target.value));
    }, [dispatch]);

    const handleScoringAlgorithmChange = useCallback((event: SelectChangeEvent<ScoringAlgorithms>) => {
        dispatch(setScoringAlgorithm(event.target.value as ScoringAlgorithms));
    }, [dispatch]);

    return (
        <>
            <Typography component={"p"}
                        variant={"h5"}
                        gutterBottom>
                Settings
            </Typography>
            <Divider/>
            <Box py={2}>
                <FormControl fullWidth>
                    <TextField
                        type="number"
                        InputProps={{
                            inputProps: {
                                max: 999,
                                min: 1,
                            },
                        }}
                        label="BPM"
                        onChange={handleBpmChange}
                        value={bpm}
                    />
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="scoring-algorithm-label">
                        Scoring Algorithm
                    </InputLabel>
                    <Select
                        labelId="scoring-algorithm-label"
                        id="scoring-algorithm-select"
                        value={scoringAlgorithm}
                        label="Scoring Algorithm"
                        onChange={handleScoringAlgorithmChange}
                    >
                        <MenuItem value={SCORING_CUMULATIVE}>
                            Cumulative
                        </MenuItem>
                        <MenuItem value={SCORING_INDIVIDUAL}>
                            Individual
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export {Settings};