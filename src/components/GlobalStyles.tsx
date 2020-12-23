import React from "react";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { selectZone, Zone } from "../store/backgroundSlice";

type Props = {
  zone: Zone;
};

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundTopColor: ${(props: Props) => props.zone.backgroundTopColor};
    --backgroundBottomColor: ${(props: Props) =>
      props.zone.backgroundBottomColor};
    --sunHighlightColor: ${(props: Props) => props.zone.sunHighlightColor};
    --sunShadowColor: ${(props: Props) => props.zone.sunShadowColor};
    --foregroundColor: ${(props: Props) => props.zone.foregroundColor};
    --backAssetType: ${(props: Props) => props.zone.backAssetType};
    --backAssetTopColor: ${(props: Props) => props.zone.backAssetTopColor};
    --backAssetBottomColor: ${(props: Props) =>
      props.zone.backAssetBottomColor};
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: monospace;
      font-size: 12px;
  }
  button {
    background: none; border: none;
      outline: none;
  }
`;

const GlobalStyles = () => {
  const zone = useSelector(selectZone);
  return <GlobalStyle zone={zone} />;
};

export default GlobalStyles;
