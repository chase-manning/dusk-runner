import React from "react";
import styled from "styled-components";
import Background from "./Background";
import Floor from "./Floor";
import Stars from "./Stars";
import Suns from "./Suns";
import Mountains from "./Mountains";
import Player from "./Player";
import EventHandler from "./EventHandler";
import Orchestrator from "./Orchestrator";

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
      <Background topColor={"#145377"} bottomColor={"#90E8E4"} />
      <Suns highlight={"#EDF5ED"} shadow={"#EDF5ED00"} count={7} />
      <Stars />
      <Mountains />
      <Floor color={"#16496E"} />
      <Player />
      <EventHandler />
      <Orchestrator />
    </StyledApp>
  );
};

export default App;
