import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum GameState {
  PLAYING,
  MENU,
}

interface gameState {
  gameState: GameState;
  completedStages: number;
}

const initialState: gameState = {
  gameState: GameState.PLAYING,
  completedStages: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<GameState>) => {
      state.gameState = action.payload;
    },
    setCompletedStages: (state, action: PayloadAction<number>) => {
      state.completedStages = action.payload;
    },
  },
});

export const { setGameState, setCompletedStages } = gameSlice.actions;

export const selectGameState = (state: RootState) => state.game.gameState;
export const selectCompletedStages = (state: RootState) =>
  state.game.completedStages;

export default gameSlice.reducer;
