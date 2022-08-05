import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../App.css";
import { addToDo, deleteTodo } from "../actions/Index";

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
      <div className="ListItems">
        {list.map((items) => {
          return (
            <div key={items.id} className="d-flex mt-5 effects">
              <h4>{items.data}</h4>
              <i
                className="bi bi-trash"
                onClick={() => dispatch(deleteTodo(items.id))}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
