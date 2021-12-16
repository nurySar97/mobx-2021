import { inject, observer } from "mobx-react";
import React from "react";
import { TodoForm, TodoList } from "../components";

const Default = (props) => {
  return (
    <div>
      <div className="todo">
        <h1>Todo list</h1>
        <p>Count of todos: {props.todo.countOfTodos}</p>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default inject("todo")(observer(Default));
