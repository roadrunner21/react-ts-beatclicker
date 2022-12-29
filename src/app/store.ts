import { configureStore } from "@reduxjs/toolkit";
import {gameReducer} from "../features/game/gameSlice";
import {runtimeReducer} from "../features/runtime/runtimeSlice";
import {selectSettings, settingsReducer} from "../features/settings/settingsSlice";
import type {Action, ThunkAction} from "@reduxjs/toolkit";

const item = localStorage.getItem("reduxState");
const preloadedState = item !== null ? JSON.parse(item) : {};

export const store = configureStore({
    reducer: {
        game: gameReducer,
        settings: settingsReducer,
        runtime: runtimeReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    const state = { settings: selectSettings(store.getState()) };
    localStorage.setItem("reduxState", JSON.stringify(state));
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;