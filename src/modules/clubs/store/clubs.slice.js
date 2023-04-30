import { createSlice } from "@reduxjs/toolkit";
import { getClubs } from "../services/getClubs";

const initialState = {
  list: null,
  loading: false,
};

export const clubsSlice = createSlice({
  name: "clubs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getClubs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClubs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getClubs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { actions: clubsActions, reducer: clubsReducer } = clubsSlice;
