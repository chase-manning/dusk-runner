import React from "react";
import styled from "styled-components";

const StyledSun = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${(props: SunType) => props.diameter + "px"};
  height: ${(props: SunType) => props.diameter + "px"};
  border-radius: 50%;
  background: ${(props: SunType) =>
    "linear-gradient(" + props.highlight + ", " + props.shadow + ")"};
  opacity: ${(props: SunType) => props.opacity};
  transition: all 10s;
`;

export type SunType = {
  highlight: string;
  shadow: string;
  diameter: number;
  opacity: number;
};

type Props = {
  sun: SunType;
};

const Sun = (props: Props) => (
  <StyledSun
    highlight={props.sun.highlight}
    shadow={props.sun.shadow}
    diameter={props.sun.diameter}
    opacity={props.sun.opacity}
  />
);

export default Sun;
