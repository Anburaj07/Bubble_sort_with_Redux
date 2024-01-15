import { createSlice } from "@reduxjs/toolkit";

const sortArraySlice = createSlice({
  name: "sortInput",
  initialState: {
    array: [],
    obj: {},
  },
  reducers: {
    setSortingArray: (state, { payload }) => {
      state.array = payload.newArray;
      state.obj = payload.obj;
    },
  },
});

export const { setSortingArray } = sortArraySlice.actions;
export default sortArraySlice.reducer;
