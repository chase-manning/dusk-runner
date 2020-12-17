import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectMovement } from "../store/backgroundSlice";
import Obstacles from "./Obstacles";

const StyledForeground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Foreground = () => {
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
      <StyledForeground>
        <Obstacles />
      </StyledForeground>
    </div>
  );
};

export default Foreground;
