import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import releasesReducer from "./slices/releasesSlice";
import searchReducer from "./slices/searchSlice";
import toastReducer from "./slices/toastSlice";

export default configureStore({
  reducer: {
    releases: releasesReducer,
    search: searchReducer,
    auth: authReducer,
    toast: toastReducer,
  },
  devTools: true,
});
