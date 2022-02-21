import { createSlice } from "@reduxjs/toolkit";
import { v1 } from "uuid";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, { payload }) => {
      state.value = [...state.value, { content: payload, id: v1() }];
    },
    deleteTodo: (state, { payload }) => {
      state.value = [...state.value.filter((todo) => todo.id !== payload)];
    },
    updateTodo: (state, { payload }) => {
      state.value = [
        ...state.value.map((todo) =>
          todo.id === payload.id ? { ...todo, ...payload } : todo
        ),
      ];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
