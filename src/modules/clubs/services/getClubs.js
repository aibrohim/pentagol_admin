import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const fetchClubs = () => axiosInstance.get("/club/list");

export const getClubs = createAsyncThunk("clubs/fetchClubs", async () => {
  const response = await fetchClubs();
  return response.data;
});
