import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export enum PlayerState {
  RUNNING,
  JUMPING,
  DEAD,
  COMPLETE,
}

interface playerState {
  state: PlayerState;
  height: number;
  speed: number;
}

const initialState: playerState = {
  state: PlayerState.RUNNING,
  height: 0,
  speed: 4,
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
    die: (state) => {
      state.state = PlayerState.DEAD;
    },
    complete: (state) => {
      state.state = PlayerState.COMPLETE;
    },
    setHeight: (state, action: PayloadAction<number>) => {
      state.height = Math.round(action.payload);
    },
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
  },
});

export const {
  jump,
  run,
  die,
  complete,
  setHeight,
  setSpeed,
} = playerSlice.actions;

export const selectState = (state: RootState) => state.player.state;
export const selectHeight = (state: RootState) => state.player.height;
export const selectSpeed = (state: RootState) => state.player.speed;

export default playerSlice.reducer;
