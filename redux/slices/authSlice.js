import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { makeHeaders } from "../../hooks/useFetch";
import { authFetch } from "../../utils/helpers";
import { API_BASE, API_ENDPOINT } from "../../utils/routes";
import { addErrorToast, addSuccessToast } from "./toastSlice";

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

export const register = createAsyncThunk("auth/register", async (data, thunkAPI) => {
  try {
    const res = await fetch(API_BASE + API_ENDPOINT.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      thunkAPI.dispatch(
        addErrorToast({
          title: "Registration failed",
          description: json.message ?? "Unknown error",
        }),
      );
      return thunkAPI.rejectWithValue({ error: "Error during registration" });
    }
    thunkAPI.dispatch(
      addSuccessToast({
        title: "Registration started",
        description: "A confirmation email was sent to your email address.",
      }),
    );
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (_, thunkAPI) => {
    const res = await fetch(API_BASE + API_ENDPOINT.DELETE, {
      method: "DELETE",
      headers: makeHeaders(true),
    });
    if (!res.ok) {
      thunkAPI.dispatch(
        addErrorToast({
          title: "Could not delete account",
          description: "Please try again later",
        }),
      );
      return thunkAPI.rejectWithValue({ error: "Could not delete account!" });
    }
    thunkAPI.dispatch(addSuccessToast({ title: "Account deleted" }));
  },
);

export const getMe = createAsyncThunk("auth/getMe", async (_, thunkAPI) => {
  try {
    const res = await fetch(API_BASE + API_ENDPOINT.ME, {
      headers: makeHeaders(true),
    });
    if (!res.ok) {
      return thunkAPI.rejectWithValue({ error: "Error getting user details!" });
    }
    const json = await res.json();
    return json;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
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
    logout: () => {
      localStorage.removeItem("auth");
      window.location.href = "/";
    },
    setAuthenticated: (state) => {
      state.isAuthenticated = true;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(action.payload));
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
      state.isAuthenticated = false;
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

    [getMe.pending]: (state) => {
      state.loading = true;
    },
    [getMe.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [getMe.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [deleteAccount.pending]: (state) => {
      state.loading = true;
    },
    [deleteAccount.fulfilled]: (state) => {
      state.loading = false;
      localStorage.clear();
      window.location.href = "/";
    },
    [deleteAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { setAuthenticated, logout } = authSlice.actions;
export default authSlice.reducer;
