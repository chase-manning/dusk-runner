import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, selectGameState, setGameState } from "../store/gameSlice";
import zone01 from "../assets/zone-01.png";
import zone02 from "../assets/zone-02.png";
import { resetBackground, setZone } from "../store/backgroundSlice";
import zones from "../config/zones";
import { run, setSpeed } from "../store/playerSlice";

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
  width: 200px;
  overflow: hidden;
  border-radius: 30px;
  border: white solid 1px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
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
  const dispatch = useDispatch();
  const gameState = useSelector(selectGameState);

  if (gameState !== GameState.MENU) return null;

  return (
    <StyledMenu>
      <StageOption
        onClick={() => {
          dispatch(setZone(zones[0]));
          dispatch(resetBackground());
          dispatch(setGameState(GameState.PLAYING));
          dispatch(run());
          dispatch(setSpeed(4));
        }}
      >
        <ZoneImage src={zone01} />
      </StageOption>
      <StageOption
        onClick={() => {
          dispatch(setZone(zones[1]));
          dispatch(resetBackground());
          dispatch(setGameState(GameState.PLAYING));
          dispatch(run());
          dispatch(setSpeed(4));
        }}
      >
        <ZoneImage src={zone02} />
      </StageOption>
    </StyledMenu>
  );
};

export default Menu;
