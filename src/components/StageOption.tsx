import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  GameState,
  selectCompletedStages,
  selectGameState,
  setGameState,
} from "../store/gameSlice";
import { resetBackground, setZone } from "../store/backgroundSlice";
import { Zone } from "../config/zones";
import { run, setSpeed } from "../store/playerSlice";

const StyledStageOption = styled.div`
  height: 70%;
  width: 200px;
  overflow: hidden;
  border-radius: 30px;
  border: white solid 1px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.5);
  margin-right: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ZoneImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

const Disabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

type Props = {
  zone: Zone;
};

const StageOption = (props: Props) => {
  const dispatch = useDispatch();
  const gameState = useSelector(selectGameState);
  const completedStages = useSelector(selectCompletedStages);

  if (gameState !== GameState.MENU) return null;

  return (
    <StyledStageOption
      onClick={() => {
        dispatch(setZone(props.zone));
        dispatch(resetBackground());
        dispatch(setGameState(GameState.PLAYING));
        dispatch(run());
        dispatch(setSpeed(props.zone.speed));
      }}
    >
      <ZoneImage src={props.zone.asset} />
      {completedStages < props.zone.stage - 1 && <Disabled>Locked</Disabled>}
    </StyledStageOption>
  );
};

export default StageOption;
