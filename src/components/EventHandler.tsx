import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setMovement } from "../store/backgroundSlice";
import { GameState, selectGameState, setGameState } from "../store/gameSlice";
import { jump, PlayerState, selectState, setSpeed } from "../store/playerSlice";

const StyledEventHandler = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const EventHandler = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectState);
  const gameState = useSelector(selectGameState);

  return (
    <StyledEventHandler
      onClick={() => {
        if (state !== PlayerState.JUMPING) dispatch(jump());
        if (gameState === GameState.DEAD) {
          dispatch(setGameState(GameState.RUNNING));
          dispatch(setSpeed(4));
          dispatch(setMovement(0));
        }
      }}
    ></StyledEventHandler>
  );
};

export default EventHandler;
