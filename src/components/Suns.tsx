import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectSunHighlightColor,
  selectSunShadowColor,
} from "../store/backgroundSlice";
import Sun, { SunType } from "./Sun";

const StyledSuns = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Suns = () => {
  const highlightColor = useSelector(selectSunHighlightColor);
  const shadowColor = useSelector(selectSunShadowColor);

  const baseDiameter = window.innerHeight / 4;
  const sizeMultiplier = 1.4;
  const opacityMultiplier = 0.6;

  let suns: SunType[] = [];

  for (let index = 0; index < 7; index++) {
    suns.push({
      highlight: highlightColor,
      shadow: shadowColor,
      diameter: baseDiameter * Math.pow(sizeMultiplier, index),
      opacity: Math.pow(opacityMultiplier, index),
    });
  }

  suns = suns.reverse();

  return (
    <StyledSuns>
      {suns.map((sun: SunType) => (
        <Sun sun={sun} />
      ))}
    </StyledSuns>
  );
};

export default Suns;
