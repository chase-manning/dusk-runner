import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum GameState {
  RUNNING,
  DEAD,
}

interface gameState {
  gameState: GameState;
}

const initialState: gameState = {
  gameState: GameState.RUNNING,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
  },
});

export const { setGameState } = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game.gameState;

export default gameSlice.reducer;
