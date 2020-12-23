import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, selectGameState } from "../store/gameSlice";

const StyledMenu = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StageOption = styled.div`
  height: 70%;
  background-color: green;
  width: 200px;
`;

const Menu = () => {
  const gameState = useSelector(selectGameState);

  if (gameState !== GameState.MENU) return null;

  return (
    <StyledMenu>
      <StageOption>test</StageOption>
      <StageOption>test</StageOption>
    </StyledMenu>
  );
};

export default Menu;
