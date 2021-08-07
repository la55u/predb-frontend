import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const searchSimple = createAsyncThunk("search/simple", async (data, thunkAPI) => {
  console.log("data:", data);
  try {
    const response = await fetch(API_BASE + API_ENDPOINT.SEARCH_SIMPLE, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      return thunkAPI.rejectWithValue({ error: error.message });
    }
    const resData = await response.json();
    console.log("searchsSimple resData:", resData.data);
    return { ...resData.data, page: data.page };
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState: {
    simpleSearch: null,
    loading: false,
    results: [],
    resultsCnt: null,
    took: 0, // time it took in ms to complete the request on the backend
    page: 1, // set by pagination component
  },
  reducers: {
    setSimpleSearch: (state, action) => {
      state.simpleSearch = action.payload;
    },
    clearSimple: (state, action) => {
      state.results = [];
      state.took = null; // time it took to perform the search on the backend (ms)
      state.simpleSearch = null; // input field value
      state.page = 1; // current page
      state.resultsCnt = null; // number of all results matching the search criteria
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: {
    [searchSimple.pending]: (state) => {
      state.results = [];
      state.resultsCnt = null;
      state.loading = true;
      state.took = null;
    },
    [searchSimple.fulfilled]: (state, action) => {
      const { results, took, took_mongo, values } = action.payload;
      state.results = values;
      state.took = took + took_mongo;
      state.resultsCnt = results;
      state.loading = false;
      state.page = action.payload.page;
    },
    [searchSimple.rejected]: (state, action) => {
      console.log("action.payload:", action);
      //state.error = action.payload.error;
    },
  },
});

export const selectResults = (state) => state.results;
export const selectReleaselist = (state) => state.releaselist;

export const { setSimpleSearch, clearSimple, setPage } = searchSlice.actions;
export default searchSlice.reducer;
