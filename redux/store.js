import { configureStore } from "@reduxjs/toolkit";
import releasesReducer from "./slices/releasesSlice";
import searchReducer from "./slices/searchSlice";

export default configureStore({
  reducer: {
    releases: releasesReducer,
    search: searchReducer,
  },
  devTools: true,
});
