import React from "react";
import styled from "styled-components";
import Background from "./Background";
import BackgroundAssets from "./BackgroundAssets";
import EventHandler from "./EventHandler";
import Floor from "./Floor";
import Foreground from "./Foreground";
import Orchestrator from "./Orchestrator";
import Player from "./Player";
import Stars from "./Stars";
import Suns from "./Suns";

const StyledGame = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  height: 100;
`;

const Game = () => {
  return (
    <StyledGame>
      <Background />
      <Suns />
      <Stars />
      <BackgroundAssets />
      <Floor />
      <Foreground />
      <Player />
      <EventHandler />
      <Orchestrator />
    </StyledGame>
  );
};

export default Game;
