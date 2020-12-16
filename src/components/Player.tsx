import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectHeight } from "../store/playerSlice";

type StyledPlayerProps = {
  height: number;
};

const StyledPlayer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 25%;
  width: 20px;
  height: 40px;
  background-color: var(--foreground);
  transform: ${(props: StyledPlayerProps) =>
    "translateY(" + -props.height + "px)"};
`;

const Player = () => {
  const height = useSelector(selectHeight);

  return <StyledPlayer height={height}></StyledPlayer>;
};

export default Player;
