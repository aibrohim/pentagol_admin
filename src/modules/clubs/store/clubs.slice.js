import { createSlice } from "@reduxjs/toolkit";
import { getClubs } from "../services/getClubs";
import { addClub } from "../services/addClub";

const initialState = {
  list: null,
  loading: false,
  adding: false,
  editingClub: null,
  editing: false,
};

export const clubsSlice = createSlice({
  name: "clubs",
  initialState,
  reducers: {
    setEditingClub: (state, { payload }) => {
      state.editingClub = payload;
    },
  },
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
    builder
      .addCase(addClub.pending, (state) => {
        state.adding = true;
      })
      .addCase(addClub.fulfilled, (state, action) => {
        state.adding = false;
        state.list = [...state.list, action.payload];
      })
      .addCase(addClub.rejected, (state) => {
        state.adding = false;
      });
  },
});

export const { actions: clubsActions, reducer: clubsReducer } = clubsSlice;
