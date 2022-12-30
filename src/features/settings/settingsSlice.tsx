import {createAction, createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store";
import type {PayloadAction, Slice} from "@reduxjs/toolkit";

export const SCORING_CUMULATIVE = "SCORING_CUMULATIVE";
export const SCORING_INDIVIDUAL = "SCORING_INDIVIDUAL";

const scoringAlgorithmNames = [SCORING_CUMULATIVE, SCORING_INDIVIDUAL] as const;

export type ScoringAlgorithms = typeof scoringAlgorithmNames[number];

export interface SettingsState {
    bpm: number;
    scoringAlgorithm: ScoringAlgorithms;
}

const initialState: SettingsState = {
    bpm: 145,
    scoringAlgorithm: SCORING_INDIVIDUAL,
};

export const settingsSlice: Slice<SettingsState> = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setBpm: (state, action: PayloadAction<SettingsState["bpm"]>) => {
            state.bpm = action.payload;
        },
        setScoringAlgorithm: (state, action: PayloadAction<SettingsState["scoringAlgorithm"]>) => {
            state.scoringAlgorithm = action.payload;
        }
    },
});

export const setBpm = createAction<SettingsState["bpm"]>("settings/setBpm");
export const setScoringAlgorithm = createAction<SettingsState["scoringAlgorithm"]>("settings/setScoringAlgorithm");

export const selectSettings = (state: RootState) => state.settings;

export const settingsReducer = settingsSlice.reducer;