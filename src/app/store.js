import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { userReducer } from "./slices";
import { clubsReducer } from "modules/clubs/store";
import { leaguesReducer } from "modules/leagues/store";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    clubs: clubsReducer,
    leagues: leaguesReducer,
  },
});
