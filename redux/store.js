import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import notificationSlice from "./slices/notificationSlice";
import releasesReducer from "./slices/releasesSlice";
import searchReducer from "./slices/searchSlice";
import statsSlice from "./slices/statsSlice";
import toastReducer from "./slices/toastSlice";

export default configureStore({
  reducer: {
    releases: releasesReducer,
    search: searchReducer,
    auth: authReducer,
    toast: toastReducer,
    notifications: notificationSlice,
    stats: statsSlice,
  },
  devTools: true,
});
