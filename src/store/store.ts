import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import backgroundReducer from "./backgroundSlice";
import foregroundReducer from "./foregroundSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    background: backgroundReducer,
    foreground: foregroundReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
