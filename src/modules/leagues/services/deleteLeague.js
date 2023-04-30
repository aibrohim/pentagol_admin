import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "config/axios";

export const fetchDeleteLeague = (leagueId) =>
  axiosInstance.delete("league/admin/delete/" + leagueId);

export const deleteLeague = createAsyncThunk(
  "league/fetchDeleteLeague",
  async (leagueId) => {
    await fetchDeleteLeague(leagueId);
    return leagueId;
  }
);
