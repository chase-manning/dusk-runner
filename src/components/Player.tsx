import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  PlayerState,
  selectState,
  run,
  selectHeight,
  setHeight,
} from "../store/playerSlice";

type StyledPlayerProps = {
  height: number;
};

const StyledPlayer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 25%;
  width: 20px;
  height: 40px;
  background-color: var(--foreground);
  transform: ${(props: StyledPlayerProps) =>
    "translateY(" + -props.height + "px)"};
`;

const Player = () => {
  const resistance = 0.15;
  const startVelocity = 4;

  const dispatch = useDispatch();
  const state = useSelector(selectState);

  const height = useSelector(selectHeight);
  const heightRef = useRef(height);
  heightRef.current = height;

  const [velocity, setVelocity] = useState(startVelocity);
  const velocityRef = useRef(velocity);
  velocityRef.current = velocity;

  const processJump = () => {
    const newHeight = heightRef.current + velocityRef.current;
    if (newHeight <= 0) {
      dispatch(setHeight(0));
      setVelocity(startVelocity);
      dispatch(run());
    } else {
      dispatch(setHeight(newHeight));
      setVelocity(velocityRef.current - resistance);
      setTimeout(() => {
        processJump();
      }, 1000 / 60);
    }
  };

  useEffect(() => {
    if (state === PlayerState.JUMPING) processJump();
  }, [state]);

  return <StyledPlayer height={height}></StyledPlayer>;
};

export default Player;
