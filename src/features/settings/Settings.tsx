import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Box, Divider, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import {selectSettings, setBpm} from "./settingsSlice";

const Settings = () => {
    const {bpm} = useSelector(selectSettings);
    const dispatch = useDispatch();

    // avoid creating a new function on every re-render
    const handleBpmChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBpm(+event.target.value));
    }, [dispatch]);

    return (
        <>
            <Typography component={"p"}
                        variant={"h5"}
                        gutterBottom>
                Settings
            </Typography>
            <Divider/>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems={"center"}
                lineHeight={1}
                py={2}>
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
            </Box>
        </>
    );
};

export { Settings };