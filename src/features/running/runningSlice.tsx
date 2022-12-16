import { createAction, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

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
        addUserTimestamps: (state, action: PayloadAction<Timestamp>) => {
            state.userTimestamps = [...state.userTimestamps, action.payload];
        },
    },
});

export const setStartTimestamp = createAction<Timestamp>("running/setStartTimestamp");
export const addUserTimestamps = createAction<Timestamp>("running/addUserTimestamps");

export const selectRunning = (state: RootState) => state.running;

export default runningSlice.reducer;