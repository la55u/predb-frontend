import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const getStats = createAsyncThunk("stats/getStats", async (_, thunkApi) => {
  const res = await fetch(API_BASE + API_ENDPOINT.STATS);
  const data = await res.json();
  return data;
});

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    loading: false,
    stats: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getStats.pending]: (state) => {
      state.loading = true;
    },
    [getStats.fulfilled]: (state, action) => {
      state.loading = false;
      state.stats = action.payload;
    },
    [getStats.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default statsSlice.reducer;
