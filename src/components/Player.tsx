import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectHeight } from "../store/playerSlice";

const StyledPlayer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 25%;
  width: 20px;
  height: 40px;
  background-color: var(--foreground);
`;

const Player = () => {
  const height = useSelector(selectHeight);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        transform: `translateY(${-height}px)`,
      }}
    >
      <StyledPlayer></StyledPlayer>;
    </div>
  );
};

export default Player;
