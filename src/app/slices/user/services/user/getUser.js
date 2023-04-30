import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const fetchUser = () => {
  return axiosInstance.get("user/");
};

export const getUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetchUser();
  return response.data;
});
