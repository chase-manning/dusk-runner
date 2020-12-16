import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface backgroundState {
  movement: number;
}

const initialState: backgroundState = {
  movement: 0,
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setMovement: (state, action: PayloadAction<number>) => {
      state.movement = action.payload;
    },
  },
});

export const { setMovement } = backgroundSlice.actions;

export const selectMovement = (state: RootState) => state.background.movement;

export default backgroundSlice.reducer;
