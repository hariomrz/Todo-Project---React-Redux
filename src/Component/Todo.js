import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { addToDo } from "../actions/Index";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const list = useSelector((state) => state.todoReducers.List);
  const dispatch = useDispatch();
  return (
    <div className="Main-Wrapper">
      <h3>TODO</h3>
      <div className="Input-Box">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Here.."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="btn btn-info"
          onClick={() => dispatch(addToDo(todo), setTodo(""))}
        >
          Add Item
        </button>
      </div>
      <ul className="ListItems">
        {list.map((items, index) => {
          return <li key={index}>{items.data}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
