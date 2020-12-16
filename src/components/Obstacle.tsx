import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovement } from "../store/backgroundSlice";
import Movement from "../styles/Movement";

const StyledObstacle = styled.div`
  position: fixed;
  right: 10%;
  bottom: 5%;
  width: 20px;
  height: 40px;
  background-color: red;
`;

const Obstacle = () => {
  const movement = useSelector(selectMovement);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        transform: `translateX(${movement}px)`,
      }}
    >
      <StyledObstacle></StyledObstacle>
    </div>
  );
};

export default Obstacle;
