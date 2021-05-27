import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const getCount = createAsyncThunk("releases/getCount", async (_, thunkAPI) => {
  try {
    const res = await fetch(API_BASE + API_ENDPOINT.COUNT, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      return thunkAPI.rejectWithValue({ error: "Error getting total count" });
    }
    const json = await res.json();
    return json.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const getAllRelease = createAsyncThunk(
  "releases/getAllRelease",
  async (page, thunkAPI) => {
    console.log("getAllRelease async");
    try {
      const response = await fetch(
        `${API_BASE + API_ENDPOINT.RELEASES}?page=${page || 1}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue({ error: error.errors });
      }
      const json = await response.json();
      console.log("getAllRelease json response:", json);
      return json.data.values;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const releasesSlice = createSlice({
  name: "releases",
  initialState: {
    count: null,
    releaselist: [],
    loading: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    addRelease: (state, action) => {
      state.releaselist = [
        { ...action.payload, new: true },
        ...state.releaselist.slice(0, state.releaselist.length - 1),
      ];
      state.count = state.count + 1;
    },
    updateRelease: (state, action) => {
      const idx = state.releaselist.findIndex((r) => r._id === action.payload._id);
      if (idx !== -1) {
        state.releaselist[idx] = action.payload;
      }
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed

    [getAllRelease.pending]: (state) => {
      state.releaselist = [];
      state.loading = true;
    },
    [getAllRelease.fulfilled]: (state, action) => {
      state.releaselist = action.payload;
      state.loading = false;
    },
    [getAllRelease.rejected]: (state, action) => {
      state.error = action.payload.error;
    },

    [getCount.pending]: (state) => {
      //
    },
    [getCount.fulfilled]: (state, action) => {
      state.count = action.payload;
    },
    [getCount.rejected]: (state, action) => {
      //
    },
  },
});

export const selectResults = (state) => state.results;
export const selectReleaselist = (state) => state.releaselist;

export const { addRelease, updateRelease } = releasesSlice.actions;
export default releasesSlice.reducer;
