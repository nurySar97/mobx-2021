import { inject, observer } from "mobx-react";
import React from "react";
import { TodoForm, TodoList } from "../components";

const Default = (props) => {
  return (
    <div>
      <div className="todo">
        <section style={{textAlign: 'center'}}>
          <h1>Todo list</h1>
          <p>Count of todos: {props.todo.countOfTodos}</p>
        </section>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default inject("todo")(observer(Default));
