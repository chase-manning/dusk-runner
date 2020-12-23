import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { GameState, setGameState } from "../store/gameSlice";
import { jump, PlayerState, selectState } from "../store/playerSlice";

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

  return (
    <StyledEventHandler
      onClick={() => {
        if (state === PlayerState.DEAD) dispatch(setGameState(GameState.MENU));
        else if (state === PlayerState.RUNNING) dispatch(jump());
      }}
    ></StyledEventHandler>
  );
};

export default EventHandler;
