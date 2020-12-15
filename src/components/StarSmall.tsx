import React from "react";
import styled from "styled-components";

const StyledStarSmall = styled.div`
  position: absolute;
  background-color: white;
  top: ${(props: StarSmallType) => props.top};
  left: ${(props: StarSmallType) => props.left};
  width: ${(props: StarSmallType) => props.diameter + "px"};
  height: ${(props: StarSmallType) => props.diameter + "px"};
  opacity: ${(props: StarSmallType) => props.opacity};
`;

export type StarSmallType = {
  top: string;
  left: string;
  diameter: number;
  opacity: number;
};

type Props = {
  star: StarSmallType;
};

const StarSmall = (props: Props) => {
  return (
    <StyledStarSmall
      top={props.star.top}
      left={props.star.left}
      diameter={props.star.diameter}
      opacity={props.star.opacity}
    />
  );
};
export default StarSmall;
