import { createSlice } from "@reduxjs/toolkit";

const sortArraySlice = createSlice({
  name: "sortInput",
  initialState: {
    array: [],
    sortedIndex: {},
  },
  reducers: {
    setSortingArray: (state, { payload }) => {
      state.array = payload.newArray;
      state.sortedIndex = payload.sortedIndex;
    },
  },
});

export const { setSortingArray } = sortArraySlice.actions;
export default sortArraySlice.reducer;
