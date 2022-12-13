import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SettingsState {
    bpm: number;
}

const initialState: SettingsState = {
    bpm: 145,
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setBpm: (state, action: PayloadAction<SettingsState["bpm"]>) => {
            state.bpm = action.payload;
        },
    },
});

export const { setBpm } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export default settingsSlice.reducer;