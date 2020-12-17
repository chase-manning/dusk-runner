import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import zones from "../config/zones";
import { RootState } from "./store";

export type Zone = {
  backgroundTopColor: string;
  backgroundBottomColor: string;
  sunHighlightColor: string;
  sunShadowColor: string;
  floorColor: string;
};

interface backgroundState {
  movement: number;
  zone: Zone;
}

const initialState: backgroundState = {
  movement: 0,
  zone: zones[0],
};

export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setMovement: (state, action: PayloadAction<number>) => {
      state.movement = action.payload;
    },
    setZone: (state, action: PayloadAction<Zone>) => {
      state.zone = action.payload;
    },
  },
});

export const { setMovement, setZone } = backgroundSlice.actions;

export const selectMovement = (state: RootState) => state.background.movement;
export const selectBackgroundTopColor = (state: RootState) =>
  state.background.zone.backgroundTopColor;
export const selectBackgroundBottomColor = (state: RootState) =>
  state.background.zone.backgroundBottomColor;
export const selectSunHighlightColor = (state: RootState) =>
  state.background.zone.sunHighlightColor;
export const selectSunShadowColor = (state: RootState) =>
  state.background.zone.sunShadowColor;
export const selectFloorColor = (state: RootState) =>
  state.background.zone.floorColor;

export default backgroundSlice.reducer;
