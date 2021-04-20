import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const response = await fetch(API_BASE + API_ENDPOINT.LOGIN, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return thunkAPI.rejectWithValue({ error: error.errors });
    }
    const resData = await response.json();
    console.log("login resData:", resData.data);
    return resData.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (data, thunkAPI) => {
    try {
      const response = await fetch(API_BASE + API_ENDPOINT.LOGOUT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: true,
    loading: false,
    error: null,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    // clear: (state, action) => {
    //   state.results = [];
    //   state.took = 0;
    // },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const isLoggedIn = (state) => state.isLoggedIn;

// export const { clear } = searchSlice.actions;
export default authSlice.reducer;
