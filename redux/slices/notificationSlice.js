import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authFetch } from "../../utils/helpers";
import { API_ENDPOINT } from "../../utils/routes";
import { addErrorToast, addSuccessToast } from "./toastSlice";

export const getNotifications = createAsyncThunk(
  "notifications/getNotifications",
  async (_, thunkAPI) => {
    try {
      const data = await authFetch(API_ENDPOINT.NOTIFICATIONS);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }

    // .then((json) => {
    //   //
    //   console.log("getNotifications:", json);
    //   return json;
    // })
    // .catch((error) => {
    //   return thunkAPI.rejectWithValue({ error: error.message });
    // });
  },
);

export const createNotification = createAsyncThunk(
  "notifications/createNotification",
  async (data, thunkAPI) => {
    try {
      const json = await authFetch(API_ENDPOINT.NOTIFICATIONS, {
        method: "POST",
        body: JSON.stringify(data),
      });
      thunkAPI.dispatch(
        addSuccessToast({
          title: "Notification saved",
          description: "You will be notified when we find a new match.",
        }),
      );
    } catch (error) {
      thunkAPI.dispatch(
        addErrorToast({
          title: "Error saving notification",
          description: "Please try again later",
        }),
      );
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    loading: false,
    error: null,
    notifications: null,
  },
  reducers: {},
  extraReducers: {
    [getNotifications.pending]: (state) => {
      state.loading = true;
    },
    [getNotifications.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
      console.log("payload:", action.payload);
    },
    [getNotifications.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },

    [createNotification.pending]: (state) => {
      state.loading = true;
    },
    [createNotification.fulfilled]: (state, action) => {
      state.loading = false;
      state.notifications = action.payload;
    },
    [createNotification.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export default notificationSlice.reducer;
