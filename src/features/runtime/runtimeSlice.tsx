import { createAction, createSlice } from "@reduxjs/toolkit";
import type {RootState} from "../../app/store";
import type {PayloadAction, Slice} from "@reduxjs/toolkit";

export type Timestamp = number;

export interface RuntimeState {
    startTimestamp: Timestamp;
    userTimestamps: Timestamp[];
}

const initialState: RuntimeState = {
    startTimestamp: 0,
    userTimestamps: [],
};

export const runtimeSlice: Slice<RuntimeState> = createSlice({
    name: "runtime",
    initialState,
    reducers: {
        setStartTimestamp: (state, action: PayloadAction<number>) => {
            state.startTimestamp = action.payload;
        },
        addUserTimestamp: (state, action: PayloadAction<Timestamp>) => {
            state.userTimestamps = [...state.userTimestamps, action.payload];
        },
        resetRuntime: () => initialState,
    },
});

export const setStartTimestamp = createAction<Timestamp>("runtime/setStartTimestamp");
export const addUserTimestamp = createAction<Timestamp>("runtime/addUserTimestamp");
export const resetRuntime = createAction("runtime/resetRuntime");

export const selectRuntime = (state: RootState) => state.runtime;

export const runtimeReducer = runtimeSlice.reducer;