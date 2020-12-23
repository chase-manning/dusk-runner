import React from "react";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { ColorTheme } from "../config/zones";
import { selectColorTheme } from "../store/backgroundSlice";

type Props = {
  colorTheme: ColorTheme;
};

const GlobalStyle = createGlobalStyle`
  :root {
    --backgroundTopColor: ${(props: Props) =>
      props.colorTheme.backgroundTopColor};
    --backgroundBottomColor: ${(props: Props) =>
      props.colorTheme.backgroundBottomColor};
    --sunHighlightColor: ${(props: Props) =>
      props.colorTheme.sunHighlightColor};
    --sunShadowColor: ${(props: Props) => props.colorTheme.sunShadowColor};
    --foregroundColor: ${(props: Props) => props.colorTheme.foregroundColor};
    --backAssetTopColor: ${(props: Props) =>
      props.colorTheme.backAssetTopColor};
    --backAssetBottomColor: ${(props: Props) =>
      props.colorTheme.backAssetBottomColor};
  }

  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Roboto", sans-serif;
  }
  button {
    background: none; border: none;
      outline: none;
  }
`;

const GlobalStyles = () => {
  const colorTheme = useSelector(selectColorTheme);
  return <GlobalStyle colorTheme={colorTheme} />;
};

export default GlobalStyles;
