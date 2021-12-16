import React from "react";
import { TodoForm, TodoList } from "../components";

const Default = () => {
  return (
    <div>
      <div className="todo">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default Default;
