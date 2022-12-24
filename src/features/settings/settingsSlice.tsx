import { createAction, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SettingsState {
    bpm: number;
}

const initialState: SettingsState = {
    bpm: 145,
};

export const settingsSlice: Slice<SettingsState> = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setBpm: (state, action: PayloadAction<SettingsState["bpm"]>) => {
            state.bpm = action.payload;
        },
    },
});

export const setBpm = createAction<SettingsState["bpm"]>("settings/setBpm");

export const selectSettings = (state: RootState) => state.settings;

export const settingsReducer = settingsSlice.reducer;