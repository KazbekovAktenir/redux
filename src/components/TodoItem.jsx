import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/todosSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
