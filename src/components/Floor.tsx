import React from "react";
import styled from "styled-components";

const StyledFloor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background-color: var(--foregroundColor);
`;

const Floor = () => {
  return <StyledFloor />;
};
export default Floor;
