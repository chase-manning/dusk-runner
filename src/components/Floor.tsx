import React from "react";
import styled from "styled-components";

const StyledFloor = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5%;
  background-color: ${(props: Props) => props.color};
`;

type Props = {
  color: string;
};

const Floor = (props: Props) => <StyledFloor color={props.color} />;
export default Floor;
