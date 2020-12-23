import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import zones, { BackAsset, Zone } from "../config/zones";
import { RootState } from "./store";

export type BackAssetType = {
  backAssetType: BackAsset;
  topColor: string;
  bottomColor: string;
  height: number;
  left: number;
  movementMultiplier: number;
};

interface backgroundState {
  movement: number;
  zone: Zone;
  backAssets: BackAssetType[];
}

const initialState: backgroundState = {
  movement: 0,
  zone: zones[0],
  backAssets: [],
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
    addBackAsset: (state, action: PayloadAction<BackAssetType>) => {
      state.backAssets.push(action.payload);
    },
  },
});

export const { setMovement, setZone, addBackAsset } = backgroundSlice.actions;

export const selectMovement = (state: RootState) => state.background.movement;
export const selectBackAssets = (state: RootState) =>
  state.background.backAssets;
export const selectZone = (state: RootState) => state.background.zone;
export const selectColorTheme = (state: RootState) =>
  state.background.zone.colorTheme;
export const selectBackgroundBottomColor = (state: RootState) =>
  state.background.zone.colorTheme.backgroundBottomColor;
export const selectSunHighlightColor = (state: RootState) =>
  state.background.zone.colorTheme.sunHighlightColor;
export const selectSunShadowColor = (state: RootState) =>
  state.background.zone.colorTheme.sunShadowColor;
export const selectForegroundColor = (state: RootState) =>
  state.background.zone.colorTheme.foregroundColor;
export const selectBackAssetType = (state: RootState) =>
  state.background.zone.backAssetType;
export const selectBackAssetTopColor = (state: RootState) =>
  state.background.zone.colorTheme.backAssetTopColor;
export const selectBackAssetBottomColor = (state: RootState) =>
  state.background.zone.colorTheme.backAssetBottomColor;
export const selectSmallStars = (state: RootState) =>
  state.background.zone.smallStars;
export const selectLargeStars = (state: RootState) =>
  state.background.zone.largeStars;
export const selectSunDiameterMultiplier = (state: RootState) =>
  state.background.zone.sunDiameterMultiplier;
export const selectSunSizeMultiplier = (state: RootState) =>
  state.background.zone.sunSizeMultiplier;
export const selectSunOpacityMultiplier = (state: RootState) =>
  state.background.zone.sunOpacityMultiplier;

export default backgroundSlice.reducer;
