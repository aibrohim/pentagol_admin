import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./services/user";
import { loginUser } from "./services/login";

const initialState = {
  user: null,
  loading: false,
  loginLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      });
    builder
      .addCase(loginUser.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.user = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginLoading = false;
      });
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
