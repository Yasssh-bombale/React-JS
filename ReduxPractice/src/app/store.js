import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/TodoSlice";
const store = configureStore({
  reducer: todoReducer,
});

export default store;
