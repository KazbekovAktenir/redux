import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        title: action.payload,
        id: Date.now(),
      });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
