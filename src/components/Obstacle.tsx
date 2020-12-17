import React from "react";
import styled from "styled-components";

type StyledObstacleProps = {
  left: number;
};

const StyledObstacle = styled.div`
  position: fixed;
  left: ${(props: StyledObstacleProps) => props.left + "px"};
  bottom: 5%;
  width: 20px;
  height: 40px;
  background-color: red;
`;

export type ObstacleType = {
  left: number;
};

type Props = {
  obstacle: ObstacleType;
};

const Obstacle = (props: Props) => {
  return <StyledObstacle left={props.obstacle.left}></StyledObstacle>;
};

export default Obstacle;
