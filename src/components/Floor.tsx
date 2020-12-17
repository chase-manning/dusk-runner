import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectForegroundColor } from "../store/backgroundSlice";

type StyledFloorProps = {
  color: string;
};

const StyledFloor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background-color: ${(props: StyledFloorProps) => props.color};
`;

const Floor = () => {
  const color = useSelector(selectForegroundColor);
  return <StyledFloor color={color} />;
};
export default Floor;
