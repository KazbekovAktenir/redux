import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosSlice";

const AddItem = () => {
  const [todoTitle, setTodoTotle] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addTodo(todoTitle));
  };

  return (
    <div>
      <div className="container">
        <h1>Todo App</h1>
        <div className="input-field">
          <input onChange={(e) => setTodoTotle(e.target.value)} type="text" />
          <button onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
