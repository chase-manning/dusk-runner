import { Zone } from "../store/backgroundSlice";

export enum BackAssetType {
  MOUNTAIN,
  CLOUD,
}

const zones: Zone[] = [
  {
    backgroundTopColor: "#145377",
    backgroundBottomColor: "#90E8E4",
    sunHighlightColor: "#EDF5ED",
    sunShadowColor: "#EDF5ED00",
    foregroundColor: "#16496e",
    backAssetType: BackAssetType.MOUNTAIN,
    backAssetTopColor: "#228FB0",
    backAssetBottomColor: "#8BDCDC",
    smallStars: 80,
    largeStars: 4,
    sunDiameterMultiplier: 1 / 4,
    sunSizeMultiplier: 1.4,
    sunOpacityMultiplier: 0.6,
  },
  {
    backgroundTopColor: "#95CDD4",
    backgroundBottomColor: "#EF0163",
    sunHighlightColor: "#F7F5EF",
    sunShadowColor: "#EEA6BC",
    foregroundColor: "#1C425B",
    backAssetType: BackAssetType.CLOUD,
    backAssetTopColor: "#E9D7D5",
    backAssetBottomColor: "#E9266C",
    smallStars: 60,
    largeStars: 0,
    sunDiameterMultiplier: 1 / 3,
    sunSizeMultiplier: 1.3,
    sunOpacityMultiplier: 0.4,
  },
];

export default zones;
