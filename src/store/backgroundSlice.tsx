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
  zone: Zone; //TODO Move Zone Stuff to Zone Slize
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
export const selectBackAssetType = (state: RootState) =>
  state.background.zone.backAssetType;
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
