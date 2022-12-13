import React, { Fragment } from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider, TextField } from "@mui/material";
import { selectSettings, setBpm } from "./settingsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

function Settings() {
    const settings = useAppSelector(selectSettings);
    const dispatch = useAppDispatch();

    const handleBpmChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        dispatch(setBpm(value));
    };

    return (
        <Fragment>
            <Typography component={"p"} variant={"h5"} gutterBottom>Settings</Typography>
            <Divider/>
            <Box display="flex" justifyContent="space-between" alignItems={"center"} lineHeight={1} py={2}>
                <TextField
                    type="number"
                    InputProps={{
                        inputProps: {
                            max: 999, min: 1,
                        },
                    }}
                    label="BPM"
                    onChange={handleBpmChange}
                    value={settings.bpm}
                />
            </Box>
        </Fragment>
    );
}

export default Settings;