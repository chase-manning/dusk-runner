import React from "react";
import styled from "styled-components";
import Game from "./Game";
import Menu from "./Menu";

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
      <Menu />
      <Game />
    </StyledApp>
  );
};

export default App;
