import React from "react";
import styled from "styled-components";
import Sun, { SunType } from "./Sun";

const StyledSuns = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

type Props = {
  highlight: string;
  shadow: string;
  count: number;
};

const Suns = (props: Props) => {
  const baseDiameter = window.innerHeight / 4;
  const sizeMultiplier = 1.4;
  const opacityMultiplier = 0.7;

  let suns: SunType[] = [];

  for (let index = 0; index < props.count; index++) {
    suns.push({
      highlight: props.highlight,
      shadow: props.shadow,
      diameter: baseDiameter * Math.pow(sizeMultiplier, index),
      opacity: Math.pow(opacityMultiplier, index),
    });
  }

  return (
    <StyledSuns>
      {suns.map((sun: SunType) => (
        <Sun sun={sun} />
      ))}
    </StyledSuns>
  );
};

export default Suns;
