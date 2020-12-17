import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectForegroundColor } from "../store/backgroundSlice";
import { selectHeight } from "../store/playerSlice";

type StyledPlayerProps = {
  color: string;
};

const StyledPlayer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 25%;
  width: 20px;
  height: 40px;
  background-color: ${(props: StyledPlayerProps) => props.color};
`;

const Player = () => {
  const height = useSelector(selectHeight);
  const foregroundColor = useSelector(selectForegroundColor);

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        transform: `translateY(${-height}px)`,
      }}
    >
      <StyledPlayer color={foregroundColor}></StyledPlayer>
    </div>
  );
};

export default Player;
