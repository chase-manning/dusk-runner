import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectForegroundColor } from "../store/backgroundSlice";

type StyledObstacleProps = {
  color: string;
  left: number;
};

const StyledObstacle = styled.div`
  position: fixed;
  left: ${(props: StyledObstacleProps) => props.left + "px"};
  bottom: 5%;
  width: 20px;
  height: 40px;
  background-color: ${(props: StyledObstacleProps) => props.color};
`;

export type ObstacleType = {
  left: number;
};

type Props = {
  obstacle: ObstacleType;
};

const Obstacle = (props: Props) => {
  const color = useSelector(selectForegroundColor);
  return (
    <StyledObstacle left={props.obstacle.left} color={color}></StyledObstacle>
  );
};

export default Obstacle;
