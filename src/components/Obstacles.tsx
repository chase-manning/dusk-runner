import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectObstacles } from "../store/foregroundSlice";
import Obstacle, { ObstacleType } from "./Obstacle";

const StyledObstacles = styled.div``;

const Obstacles = () => {
  const obstacles = useSelector(selectObstacles);

  return (
    <StyledObstacles>
      {obstacles.map((obstacle: ObstacleType) => (
        <Obstacle obstacle={obstacle} />
      ))}
    </StyledObstacles>
  );
};

export default Obstacles;
