import React from "react";
import styled from "styled-components";

const StyledObstacle = styled.div`
  position: fixed;
  bottom: 5%;
  width: 20px;
  height: 40px;
  background-color: var(--foregroundColor);
`;

export type ObstacleType = {
  left: number;
};

type Props = {
  obstacle: ObstacleType;
};
//TODO Change this to not use global styles for animations
const Obstacle = (props: Props) => {
  return (
    <StyledObstacle style={{ left: props.obstacle.left }}></StyledObstacle>
  );
};

export default Obstacle;
