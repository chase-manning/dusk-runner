import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, selectGameState } from "../store/gameSlice";
import zones, { Zone } from "../config/zones";
import StageOption from "./StageOption";

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

const Menu = () => {
  const gameState = useSelector(selectGameState);

  if (gameState !== GameState.MENU) return null;

  return (
    <StyledMenu>
      {zones.map((zone: Zone) => (
        <StageOption zone={zone} />
      ))}
    </StyledMenu>
  );
};

export default Menu;
