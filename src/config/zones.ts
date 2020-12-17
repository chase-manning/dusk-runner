import { Zone } from "../store/backgroundSlice";

const zones: Zone[] = [
  {
    backgroundTopColor: "#145377",
    backgroundBottomColor: "#90E8E4",
    sunHighlightColor: "#EDF5ED",
    sunShadowColor: "#EDF5ED00",
    foregroundColor: "#16496e",
    backAssetTopColor: "#228FB0",
    backAssetBottomColor: "#8BDCDC",
    smallStars: 80,
    largeStars: 4,
  },
  {
    backgroundTopColor: "#90C0BC",
    backgroundBottomColor: "#EE8BB0",
    sunHighlightColor: "#F7F5EF",
    sunShadowColor: "#EEA6BC",
    foregroundColor: "#04222C",
    backAssetTopColor: "#F0E2DE",
    backAssetBottomColor: "#EAD7CF",
    smallStars: 0,
    largeStars: 0,
  },
];

export default zones;
