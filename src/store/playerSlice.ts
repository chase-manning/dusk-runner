import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum PlayerState {
  RUNNING,
  JUMPING,
}

interface playerState {
  state: PlayerState;
}

const initialState: playerState = {
  state: PlayerState.RUNNING,
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
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { jump, run } = playerSlice.actions;
export default playerSlice.reducer;
