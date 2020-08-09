import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const searchSimple = createAsyncThunk(
  "search/simple",
  async (input, thunkAPI) => {
    try {
      const response = await fetch(API_BASE + API_ENDPOINT.SEARCH_SIMPLE, {
        method: "POST",
        body: JSON.stringify({ input }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue({ error: error.errors });
      }
      const resData = await response.json();
      console.log("searchsSimple resData:", resData.data);
      return resData.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    loading: false,
    results: [],
    resultsCnt: 0, // number of all results
    took: 0, // time it took in ms to complete the request on the backend
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    clear: (state, action) => {
      state.results = [];
      state.took = 0;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [searchSimple.pending]: (state) => {
      state.results = [];
      state.loading = true;
    },
    [searchSimple.fulfilled]: (state, action) => {
      const { results, took, took_mongo, values } = action.payload;
      state.results = values;
      state.took = took + took_mongo;
      state.resultsCnt = results;
      state.loading = false;
    },
    [searchSimple.rejected]: (state, action) => {
      state.error = action.payload.error;
    },
  },
});

export const selectResults = (state) => state.results;
export const selectReleaselist = (state) => state.releaselist;

export const { clear } = searchSlice.actions;
export default searchSlice.reducer;
