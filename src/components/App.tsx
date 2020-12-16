import React from "react";
import styled from "styled-components";
import Mountain from "./Mountain";
import Background from "./Background";
import Floor from "./Floor";
import Stars from "./Stars";
import Suns from "./Suns";

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
      <Suns highlight={"#EDF5ED"} shadow={"#EDF5ED00"} count={7} />
      <Stars />
      <Mountain
        topColor={"#266C88"}
        bottomColor={"#6CC7C6"}
        height={window.innerHeight / 2}
      />
      <Floor color={"#16496E"} />
    </StyledApp>
  );
};

export default App;
