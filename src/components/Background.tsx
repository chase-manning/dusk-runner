import React from "react";
import styled from "styled-components";

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props: Props) =>
    "linear-gradient(" + props.topColor + ", " + props.bottomColor + ")"};
`;

type Props = {
  topColor: string;
  bottomColor: string;
};

const Background = (props: Props) => (
  <StyledBackground topColor={props.topColor} bottomColor={props.bottomColor} />
);
export default Background;
