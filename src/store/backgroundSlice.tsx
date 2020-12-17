import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import zones from "../config/zones";
import { RootState } from "./store";

export type Zone = {
  backgroundTopColor: string;
  backgroundBottomColor: string;
  sunHighlightColor: string;
  sunShadowColor: string;
  foregroundColor: string;
  backAssetTopColor: string;
  backAssetBottomColor: string;
  smallStars: number;
  largeStars: number;
};

interface backgroundState {
  movement: number;
  zone: Zone;
}

const initialState: backgroundState = {
  movement: 0,
  zone: zones[1],
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
export const selectForegroundColor = (state: RootState) =>
  state.background.zone.foregroundColor;
export const selectBackAssetTopColor = (state: RootState) =>
  state.background.zone.backAssetTopColor;
export const selectBackAssetBottomColor = (state: RootState) =>
  state.background.zone.backAssetBottomColor;
export const selectSmallStars = (state: RootState) =>
  state.background.zone.smallStars;
export const selectLargeStars = (state: RootState) =>
  state.background.zone.largeStars;

export default backgroundSlice.reducer;
