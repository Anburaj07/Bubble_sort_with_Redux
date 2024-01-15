import { configureStore } from "@reduxjs/toolkit";
import sortOrderSlice from "./slices/sortOrderSlice";
import sortArraySlice from "./slices/sortArraySlice";
const store = configureStore({
  reducer: {
    sortArray: sortArraySlice,
    sortOrder: sortOrderSlice,
  },
});

export default store;
