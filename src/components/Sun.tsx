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
  background: linear-gradient(var(--sunHighlightColor), var(--sunShadowColor));
  opacity: ${(props: SunType) => props.opacity};
  transition: all 10s;
`;

export type SunType = {
  diameter: number;
  opacity: number; //TODO can we move these to GLobal Styles
};

type Props = {
  sun: SunType;
};

const Sun = (props: Props) => (
  <StyledSun diameter={props.sun.diameter} opacity={props.sun.opacity} />
);

export default Sun;
