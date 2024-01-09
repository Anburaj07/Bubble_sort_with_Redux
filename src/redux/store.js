import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./slices/sortSlice";
const store = configureStore({
  reducer: {
    sort: sortReducer,
  },
});

export default store;