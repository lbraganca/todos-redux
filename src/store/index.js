import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../slices/inputSlice";
import todosReducer from "../slices/todosSlice";

export default configureStore({
  reducer: {
    input: inputReducer,
    todos: todosReducer,
  },
});
