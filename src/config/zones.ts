export enum BackAsset {
  MOUNTAIN,
  CLOUD,
}

export type ColorTheme = {
  backgroundTopColor: string;
  backgroundBottomColor: string;
  sunHighlightColor: string;
  sunShadowColor: string;
  foregroundColor: string;
  backAssetTopColor: string;
  backAssetBottomColor: string;
};

export type Zone = {
  colorTheme: ColorTheme;
  backAssetType: BackAsset;
  smallStars: number;
  largeStars: number;
  sunDiameterMultiplier: number;
  sunSizeMultiplier: number;
  sunOpacityMultiplier: number;
};

const zones: Zone[] = [
  {
    colorTheme: {
      backgroundTopColor: "#145377",
      backgroundBottomColor: "#90E8E4",
      sunHighlightColor: "#EDF5ED",
      sunShadowColor: "#EDF5ED00",
      foregroundColor: "#16496e",
      backAssetTopColor: "#228FB0",
      backAssetBottomColor: "#8BDCDC",
    },
    backAssetType: BackAsset.MOUNTAIN,
    smallStars: 80,
    largeStars: 4,
    sunDiameterMultiplier: 1 / 4,
    sunSizeMultiplier: 1.4,
    sunOpacityMultiplier: 0.6,
  },
  {
    colorTheme: {
      backgroundTopColor: "#95CDD4",
      backgroundBottomColor: "#EF0163",
      sunHighlightColor: "#F7F5EF",
      sunShadowColor: "#EEA6BC",
      foregroundColor: "#1C425B",
      backAssetTopColor: "#E9D7D5",
      backAssetBottomColor: "#E9266C",
    },
    backAssetType: BackAsset.CLOUD,
    smallStars: 60,
    largeStars: 0,
    sunDiameterMultiplier: 1 / 3,
    sunSizeMultiplier: 1.3,
    sunOpacityMultiplier: 0.4,
  },
];

export default zones;
