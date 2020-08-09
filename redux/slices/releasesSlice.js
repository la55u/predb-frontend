import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const getAllRelease = createAsyncThunk(
  "releases/getAllRelease",
  async (_, thunkAPI) => {
    console.log("getAllRelease async");
    try {
      const response = await fetch(API_BASE + API_ENDPOINT.RELEASES, {
        headers: {
          "Content-Type": "application/json",
        },
      });

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
  }
);

const releasesSlice = createSlice({
  name: "releases",
  initialState: {
    count: 0,
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
    },
    updateRelease: (state, action) => {
      const idx = state.releaselist.findIndex(
        (r) => r._id === action.payload._id
      );
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
  },
});

export const selectResults = (state) => state.results;
export const selectReleaselist = (state) => state.releaselist;

export const { addRelease, updateRelease } = releasesSlice.actions;
export default releasesSlice.reducer;
