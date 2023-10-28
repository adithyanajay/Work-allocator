import { configureStore } from "@reduxjs/toolkit";
import workReducer from "../features/work/workSlice.js";
export const store = configureStore({
  reducer: {
    work: workReducer,
  },
});
