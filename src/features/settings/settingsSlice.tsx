import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface SettingsState {
    foo: string;
}

const initialState: SettingsState = {
    foo: "bar",
};

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setFoo: (state, action: PayloadAction<string>) => {
            state.foo = action.payload;
        },
    },
});

export const { setFoo } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings.foo;

export default settingsSlice.reducer;