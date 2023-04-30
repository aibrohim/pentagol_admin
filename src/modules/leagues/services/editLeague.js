import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const putLeague = (league) =>
  axiosInstance.put("league/admin/update/" + league.id, league);

export const editLeague = createAsyncThunk(
  "league/putLeague",
  async (league) => {
    await putLeague(league);
    return league;
  }
);
