import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasksSlice";
import categoriesReducer from "../features/categoriesSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});
