import React from "react";
import styled from "styled-components";
import StarSmall, { StarSmallType } from "./StarSmall";

const StyledStars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 25%;
`;

const Stars = () => {
  const smallStarsCount = 20;
  let smallStars: StarSmallType[] = [];

  for (let index = 0; index < smallStarsCount; index++) {
    smallStars.push({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      diameter: Math.random() + 1,
      opacity: Math.random(),
    });
  }

  return (
    <StyledStars>
      {smallStars.map((smallStar: StarSmallType) => (
        <StarSmall star={smallStar} />
      ))}
    </StyledStars>
  );
};

export default Stars;
