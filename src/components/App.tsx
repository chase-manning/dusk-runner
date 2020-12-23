import React from "react";
import styled from "styled-components";
import Game from "./Game";
import Init from "./Init";
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
      <Init />
      <Game />
      <Menu />
    </StyledApp>
  );
};

export default App;
