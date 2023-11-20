import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, todoMsg: "hellow world", isCompleted: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todoMsg: action.payload,
        isCompleted: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((prevTodo) => (prevTodo.id === id ? "" : ""));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos;

      state.todos = todo.map((prevTodo) =>
        prevTodo.id === action.payload
          ? { ...todo, isCompleted: !prevTodo.isCompleted }
          : prevTodo
      );
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, toggleTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
