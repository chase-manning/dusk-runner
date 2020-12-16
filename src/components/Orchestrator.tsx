import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovement, setMovement } from "../store/backgroundSlice";
import {
  PlayerState,
  run,
  selectHeight,
  selectSpeed,
  selectState,
  setHeight,
} from "../store/playerSlice";

const Orchestrator = () => {
  const resistance = 0.15;
  const startVelocity = 4;

  const dispatch = useDispatch();

  const state = useSelector(selectState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const height = useSelector(selectHeight);
  const heightRef = useRef(height);
  heightRef.current = height;

  const [velocity, setVelocity] = useState(startVelocity);
  const velocityRef = useRef(velocity);
  velocityRef.current = velocity;

  const movement = useSelector(selectMovement);
  const movementRef = useRef(movement);
  movementRef.current = movement;

  const speed = useSelector(selectSpeed);
  const speedRef = useRef(speed);
  speedRef.current = speed;

  const processJump = () => {
    const newHeight = heightRef.current + velocityRef.current;
    if (newHeight <= 0) {
      dispatch(setHeight(0));
      setVelocity(startVelocity);
      dispatch(run());
    } else {
      dispatch(setHeight(newHeight));
      setVelocity(velocityRef.current - resistance);
    }
  };

  const processBackgroundMovement = () => {
    dispatch(setMovement(movementRef.current - speedRef.current));
  };

  const tick = () => {
    if (stateRef.current === PlayerState.JUMPING) processJump();
    processBackgroundMovement();
    setTimeout(() => tick(), 1000 / 60);
  };

  useEffect(() => {
    tick();
  }, []);

  return null;
};

export default Orchestrator;
