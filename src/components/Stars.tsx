import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectLargeStars, selectSmallStars } from "../store/backgroundSlice";
import StarLarge, { StarLargeType } from "./StarLarge";
import StarSmall, { StarSmallType } from "./StarSmall";

const StyledStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
`;

const Stars = () => {
  const smallStarsCount = useSelector(selectSmallStars);
  const largeStarsCount = useSelector(selectLargeStars);

  let smallStars: StarSmallType[] = [];
  for (let index = 0; index < smallStarsCount; index++) {
    smallStars.push({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      diameter: Math.random() + 1,
      opacity: Math.random(),
    });
  }

  let largeStars: StarLargeType[] = [];
  for (let index = 0; index < largeStarsCount; index++) {
    largeStars.push({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      diameter: Math.random() * 5 + 2,
    });
  }

  return (
    <StyledStars>
      {smallStars.map((smallStar: StarSmallType) => (
        <StarSmall star={smallStar} />
      ))}
      {largeStars.map((largeStar: StarLargeType) => (
        <StarLarge star={largeStar} />
      ))}
    </StyledStars>
  );
};

export default Stars;
