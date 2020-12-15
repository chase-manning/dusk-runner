import React from "react";
import styled from "styled-components";
import Background from "./Background";

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
      <Background topColor={"#145377"} bottomColor={"#6DCCC9"} />
    </StyledApp>
  );
};

export default App;
