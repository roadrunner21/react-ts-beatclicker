import type { PayloadAction, Slice } from "@reduxjs/toolkit";
import { createAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export type Timestamp = number;

export interface RunningState {
    startTimestamp: Timestamp;
    userTimestamps: Timestamp[];
}

const initialState: RunningState = {
    startTimestamp: 0,
    userTimestamps: [],
};

export const runningSlice: Slice<RunningState> = createSlice({
    name: "running",
    initialState,
    reducers: {
        setStartTimestamp: (state, action: PayloadAction<number>) => {
            state.startTimestamp = action.payload;
        },
        addUserTimestamp: (state, action: PayloadAction<Timestamp>) => {
            state.userTimestamps = [...state.userTimestamps, action.payload];
        },
        resetRunning: () => initialState,
    },
});

export const setStartTimestamp = createAction<Timestamp>("running/setStartTimestamp");
export const addUserTimestamp = createAction<Timestamp>("running/addUserTimestamp");
export const resetRunning = createAction("running/resetRunning");

export const selectRunning = (state: RootState) => state.running;

export const runningReducer = runningSlice.reducer;