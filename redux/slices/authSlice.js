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
    const json = await response.json();
    console.log("login json:", json);
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const logout = createAsyncThunk("auth/logout", async (data, thunkAPI) => {
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
});

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    const res = await fetch(API_BASE + API_ENDPOINT.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return thunkAPI.rejectWithValue({ error: "Error during registration" });
    }
    const json = await res.json();
    console.log("register json:", json);
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (_, thunkAPI) => {
    // TODO
    console.log("TODO deleteAccount");
  },
);

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  // TODO
  console.log("TODO getMe");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      localStorage.setItem("auth", action.payload);
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.isAuthenticated = false;
    },

    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state) => {
      state.loading = false;
      localStorage.clear();
      window.location.href = "/";
    },
    [logout.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state) => {
      state.loading = false;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [deleteAccount.pending]: (state) => {
      state.loading = true;
    },
    [deleteAccount.fulfilled]: (state) => {
      state.loading = false;
    },
    [deleteAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

// export const { clear } = searchSlice.actions;
export default authSlice.reducer;
