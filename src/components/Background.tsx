import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectBackgroundBottomColor,
  selectBackgroundTopColor,
} from "../store/backgroundSlice";

type StyledBackgroundProps = {
  topColor: string;
  bottomColor: string;
};

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props: StyledBackgroundProps) =>
    "linear-gradient(" + props.topColor + ", " + props.bottomColor + ")"};
  transition: all 10s;
`;

const Background = () => {
  const topColor = useSelector(selectBackgroundTopColor);
  const bottomColor = useSelector(selectBackgroundBottomColor);

  return <StyledBackground topColor={topColor} bottomColor={bottomColor} />;
};
export default Background;
