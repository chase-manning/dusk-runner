import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ObstacleType } from "../components/Obstacle";
import { RootState } from "./store";

interface foregroundState {
  obstacles: ObstacleType[];
}

const initialState: foregroundState = {
  obstacles: [],
};

export const foregroundSlice = createSlice({
  name: "foreground",
  initialState,
  reducers: {
    addObstacle: (state, action: PayloadAction<ObstacleType>) => {
      state.obstacles.push(action.payload);
    },
  },
});

export const { addObstacle } = foregroundSlice.actions;

export const selectObstacles = (state: RootState) => state.foreground.obstacles;

export default foregroundSlice.reducer;
