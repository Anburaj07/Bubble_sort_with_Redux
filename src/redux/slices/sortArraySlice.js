import { createSlice } from "@reduxjs/toolkit";

const sortArraySlice = createSlice({
  name: "sortInput",
  initialState: {
    array: [],
  },
  reducers: {
    setSortingArray: (state, { payload }) => {
      state.array = payload;
    },
  },
});

export const { setSortingArray } = sortArraySlice.actions;
export default sortArraySlice.reducer