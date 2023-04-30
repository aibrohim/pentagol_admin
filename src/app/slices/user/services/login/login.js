import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const login = (user) => axiosInstance.post("auth/login", user);

export const loginUser = createAsyncThunk("user/loginUser", async (user) => {
  const response = await login(user);
  return response.data;
});
