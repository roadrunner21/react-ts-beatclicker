import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const GAME_START = 'GAME_START'
export const GAME_RUNNING = 'GAME_RUNNING'
export const GAME_END = 'GAME_END'

const gameModeNames = [GAME_START, GAME_RUNNING, GAME_END] as const;

export type GameModes = typeof gameModeNames[number];

export interface GameState {
    mode: GameModes;
}

const initialState: GameState = {
    mode: GAME_START,
};

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<GameModes>) => {
            state.mode = action.payload;
        },
    },
})

export const { setMode } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;