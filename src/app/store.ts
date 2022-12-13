import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";
import settingsReducer from "../features/settings/settingsSlice";

let preloadedState = {};
const item = localStorage.getItem("reduxState");
if (item !== null) {
    preloadedState = JSON.parse(item);
}

export const store = configureStore({
    reducer: {
        game: gameReducer,
        settings: settingsReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;