import { createSlice } from "@reduxjs/toolkit";

const sortOrderSlice = createSlice({
  name: "sortOrder",
  initialState: {
    order: null,
  },
  reducers: {
    setSortingOrder: (state, { payload }) => {
      state.order = payload;
    },
  },
});

export const { setSortingOrder } = sortOrderSlice.actions;
export default sortOrderSlice.reducer;
