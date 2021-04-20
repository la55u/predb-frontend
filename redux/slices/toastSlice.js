import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    id: 0,
    title: "Hello",
    description: "",
    status: "success",
    duration: 5000,
    position: "bottom",
  },
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
    addToast: (state, action) => {
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.status = action.payload.status || "success";
      state.id++;
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
  },
});

export const { addToast } = toastSlice.actions;
export default toastSlice.reducer;
