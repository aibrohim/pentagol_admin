import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const fetchLeague = () => axiosInstance.get("/league/list");

export const getLeagues = createAsyncThunk("league/fetchLeague", async () => {
  const response = await fetchLeague();
  return response.data;
});
