import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, selectGameState } from "../store/gameSlice";
import Background from "./Background";
import BackgroundAssets from "./BackgroundAssets";
import Complete from "./Complete";
import EventHandler from "./EventHandler";
import Floor from "./Floor";
import Foreground from "./Foreground";
import Orchestrator from "./Orchestrator";
import Player from "./Player";
import Stars from "./Stars";
import Suns from "./Suns";

type StyledGameProps = {
  blur: boolean;
};

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  height: 100;
  filter: ${(props: StyledGameProps) =>
    props.blur ? "blur(10px)" : "blur(0px)"};
  transform: ${(props: StyledGameProps) =>
    props.blur ? "scale(1.2)" : "scale(1)"};
`;

const Game = () => {
  const gameState = useSelector(selectGameState);

  return (
    <StyledGame blur={gameState === GameState.MENU}>
      <Background />
      <Suns />
      <Stars />
      <BackgroundAssets />
      <Floor />
      <Foreground />
      <Player />
      <Complete />
      <EventHandler />
      <Orchestrator />
    </StyledGame>
  );
};

export default Game;
