import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMovement, setMovement } from "../store/backgroundSlice";
import { addObstacle, selectObstacles } from "../store/foregroundSlice";
import { GameState, setGameState } from "../store/gameSlice";
import {
  PlayerState,
  run,
  selectHeight,
  selectSpeed,
  selectState,
  setHeight,
  setSpeed,
} from "../store/playerSlice";
import { ObstacleType } from "./Obstacle";

const Orchestrator = () => {
  const resistance = 0.5;
  const startVelocity = 10;

  const dispatch = useDispatch();

  const state = useSelector(selectState);
  const stateRef = useRef(state);
  stateRef.current = state;

  const height = useSelector(selectHeight);
  const heightRef = useRef(height);
  heightRef.current = height;

  const obstacles = useSelector(selectObstacles);
  const obstaclesRef = useRef(obstacles);
  obstaclesRef.current = obstacles;

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
    if (stateRef.current !== PlayerState.JUMPING) return;
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

  const addObstacles = () => {
    const MINIMUM_GAP = 150;
    const MAXIMUM_GAP = 500;
    if (obstaclesRef.current.length === 0) {
      dispatch(addObstacle({ left: window.innerWidth + 200 }));
      return;
    }
    const obstacle = obstaclesRef.current[obstaclesRef.current.length - 1];
    if (obstacle.left + movementRef.current < window.innerWidth + 100) {
      const obstacleGap =
        Math.random() * (MAXIMUM_GAP - MINIMUM_GAP) + MINIMUM_GAP;
      dispatch(addObstacle({ left: obstacle.left + obstacleGap }));
    }
  };

  const collisionDetection = () => {
    if (heightRef.current > 40) return null;
    const playerPosition = window.innerWidth * 0.25;
    const collision = obstaclesRef.current.some((obstacle: ObstacleType) => {
      const pos = obstacle.left + movementRef.current;
      return pos > playerPosition && pos < playerPosition + 20;
    });
    if (collision) endGame();
  };

  const endGame = () => {
    dispatch(setSpeed(0));
    dispatch(setGameState(GameState.DEAD));
  };

  const tick = () => {
    processJump();
    processBackgroundMovement();
    collisionDetection();
    setTimeout(() => tick(), 1000 / 60);
  };

  const environment = () => {
    addObstacles();
    setTimeout(() => environment(), 1000 / 10);
  };

  useEffect(() => {
    tick();
    environment();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
};

export default Orchestrator;
