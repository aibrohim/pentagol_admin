import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const postLeague = (league) =>
  axiosInstance.post("league/admin/create", league);

export const addLeague = createAsyncThunk(
  "league/postLeague",
  async (league) => {
    const response = await postLeague(league);
    return response.data;
  }
);
