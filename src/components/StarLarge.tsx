import React from "react";
import styled from "styled-components";

const StyledStarLarge = styled.div`
  position: absolute;
  top: ${(props: StarLargeType) => props.top};
  left: ${(props: StarLargeType) => props.left};
  width: ${(props: StarLargeType) => props.diameter + "px"};
  height: ${(props: StarLargeType) => props.diameter + "px"};
`;

const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  filter: blur(8px);
`;

const Center = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  filter: blur(2px);
  transform: rotate(45deg);
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 600%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

const HorizontalLine = styled.div`
  position: absolute;
  width: 400%;
  height: 1px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.5),
    rgba(0, 0, 0, 0)
  );
`;

export type StarLargeType = {
  top: string;
  left: string;
  diameter: number;
};

type Props = {
  star: StarLargeType;
};

const StarLarge = (props: Props) => {
  return (
    <StyledStarLarge
      top={props.star.top}
      left={props.star.left}
      diameter={props.star.diameter}
    >
      <Center />
      <Glow />
      <VerticalLine />
      <HorizontalLine />
    </StyledStarLarge>
  );
};
export default StarLarge;
