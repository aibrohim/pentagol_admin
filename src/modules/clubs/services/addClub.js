import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const postClub = (club) => axiosInstance.post("club/admin/create", club);

export const addClub = createAsyncThunk("club/postClub", async (club) => {
  const response = await postClub(club);
  return { ...response.data, league: club.league };
});
