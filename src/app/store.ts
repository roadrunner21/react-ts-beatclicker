import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import gameReducer from "../features/game/gameSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
    reducer: {
        game: gameReducer,
        settings: settingsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;