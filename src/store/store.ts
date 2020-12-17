import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import backgroundReducer from "./backgroundSlice";
import foregroundReduce from "./foregroundSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    background: backgroundReducer,
    foreground: foregroundReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
