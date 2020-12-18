import React from "react";
import styled from "styled-components";
import Background from "./Background";
import Floor from "./Floor";
import Stars from "./Stars";
import Suns from "./Suns";
import Player from "./Player";
import EventHandler from "./EventHandler";
import Orchestrator from "./Orchestrator";
import Foreground from "./Foreground";
import BackgroundAssets from "./BackgroundAssets";

const StyledApp = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <StyledApp>
      <Background />
      <Suns />
      <Stars />
      <BackgroundAssets />
      <Floor />
      <Foreground />
      <Player />
      <EventHandler />
      <Orchestrator />
    </StyledApp>
  );
};

export default App;
