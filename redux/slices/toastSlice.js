import { createStandaloneToast } from "@chakra-ui/toast";
import { createSlice } from "@reduxjs/toolkit";
import { theme } from "../../styles";

const toast = createStandaloneToast({ theme });

const toastSlice = createSlice({
  name: "toast",
  initialState: {},
  reducers: {
    addToast: (state, action) => {
      const { title, description, status } = action.payload;
      toast({
        title,
        description,
        status,
      });
    },
    addSuccessToast: (state, action) => {
      const { title, description } = action.payload;
      toast({
        title,
        description,
        status: "success",
        duration: 5000,
      });
    },
    addErrorToast: (state, action) => {
      const { title, description } = action.payload;
      toast({
        title,
        description,
        status: "error",
        duration: 8000,
      });
    },
  },
  extraReducers: {},
});

export const { addToast, addSuccessToast, addErrorToast } = toastSlice.actions;
export default toastSlice.reducer;
