import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, selectGameState } from "../store/gameSlice";
import zone01 from "../assets/zone-01.png";
import zone02 from "../assets/zone-02.png";

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
  height: 60%;
  background-color: green;
  width: 200px;
  overflow: hidden;
  border-radius: 40px;
  border: white solid 2px;
  box-shadow: 10px 10px 10px black;
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ZoneImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

const Menu = () => {
  const gameState = useSelector(selectGameState);

  if (gameState !== GameState.MENU) return null;

  return (
    <StyledMenu>
      <StageOption>
        <ZoneImage src={zone01} />
      </StageOption>
      <StageOption>
        <ZoneImage src={zone02} />
      </StageOption>
    </StyledMenu>
  );
};

export default Menu;
