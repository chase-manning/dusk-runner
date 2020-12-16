import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum PlayerState {
  RUNNING,
  JUMPING,
}

interface playerState {
  state: PlayerState;
  height: number;
}

const initialState: playerState = {
  state: PlayerState.RUNNING,
  height: 0,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    jump: (state) => {
      state.state = PlayerState.JUMPING;
    },
    run: (state) => {
      state.state = PlayerState.RUNNING;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
  },
});

export const { jump, run, setHeight } = playerSlice.actions;

export const selectState = (state: RootState) => state.player.state;
export const selectHeight = (state: RootState) => state.player.height;

export default playerSlice.reducer;
