import { createAction, createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const GAME_LOADING = "GAME_LOADING";
export const GAME_READY = "GAME_READY";
export const GAME_RUNNING = "GAME_RUNNING";
export const GAME_END = "GAME_END";

const gameModeNames = [GAME_LOADING, GAME_READY, GAME_RUNNING, GAME_END] as const;

export type GameModes = typeof gameModeNames[number];

export interface GameState {
    mode: GameModes;
}

const initialState: GameState = {
    mode: GAME_LOADING,
};

export const gameSlice: Slice<GameState> = createSlice({
    name: "game",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<GameModes>) => {
            state.mode = action.payload;
        },
    },
});

export const setMode = createAction<GameModes>("game/setMode");

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;