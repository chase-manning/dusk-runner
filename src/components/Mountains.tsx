import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectBackAssetBottomColor,
  selectBackAssetTopColor,
} from "../store/backgroundSlice";
import Mountain, { MountainType } from "./Mountain";

const StyledMountains = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Mountains = () => {
  const topColor = useSelector(selectBackAssetTopColor);
  const bottomColor = useSelector(selectBackAssetBottomColor);

  const mountainCount = 10;
  let mountains: MountainType[] = [];

  for (let index = 0; index < mountainCount; index++) {
    const heightMultiplier = Math.random() + 0.5;
    mountains.push({
      topColor: topColor,
      bottomColor: bottomColor,
      left: Math.random() * 100 + "%",
      height: (window.innerHeight / 3) * heightMultiplier,
      movementMultiplier: (2 - heightMultiplier) / 30,
    });
  }

  mountains = mountains.sort(
    (a: MountainType, b: MountainType) => b.height - a.height
  );

  return (
    <StyledMountains>
      {mountains.map((mountain: MountainType) => (
        <Mountain mountain={mountain} />
      ))}
    </StyledMountains>
  );
};

export default Mountains;
