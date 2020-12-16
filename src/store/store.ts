import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import playerReducer from "./playerSlice";
import backgroundReducer from "./backgroundSlice";

export const store = configureStore({
  reducer: {
    player: playerReducer,
    background: backgroundReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
