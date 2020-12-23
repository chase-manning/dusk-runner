import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    var(--backgroundTopColor),
    var(--backgroundBottomColor)
  );
  transition: all 10s;
`;

const Background = () => <StyledBackground />;
export default Background;
