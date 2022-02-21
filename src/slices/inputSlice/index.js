import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "input",
  initialState: {
    value: "",
  },
  reducers: {
    updateInput: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;
