import { createSlice } from "@reduxjs/toolkit";
import { getLeagues } from "../services/getLeagues";
import { addLeague } from "../services/addLeague";
import { editLeague } from "../services/editLeague";

const initialState = {
  list: null,
  loading: false,
  adding: false,
  editing: false,
  editingLeague: null,
};

export const leaguesSlice = createSlice({
  name: "leagues",
  initialState,
  reducers: {
    setEditingLeague: (state, { payload }) => {
      state.editingLeague = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLeagues.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(getLeagues.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(addLeague.pending, (state) => {
        state.adding = true;
      })
      .addCase(addLeague.fulfilled, (state, action) => {
        state.adding = false;
        state.list = [action.payload, ...state.list];
      })
      .addCase(addLeague.rejected, (state) => {
        state.adding = false;
      });
    builder
      .addCase(editLeague.pending, (state) => {
        state.editing = true;
      })
      .addCase(editLeague.fulfilled, (state, action) => {
        state.editing = false;
        state.list = state.list.map((item) => ({
          ...item,
          ...(item.id === state.editingLeague.id ? action.payload : {}),
        }));
        state.editingLeague = null;
      })
      .addCase(editLeague.rejected, (state) => {
        state.editing = false;
      });
  },
});

export const { actions: leaguesActions, reducer: leaguesReducer } =
  leaguesSlice;
