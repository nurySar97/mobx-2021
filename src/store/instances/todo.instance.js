import todosModel from "../models/todo.model";
import { v4 } from "uuid";

const initDoingTodo = v4();

const todoDefaultStore = todosModel.create({
  todos: [
    {
      id: initDoingTodo,
      title: "Life is interesting if our brain works good!",
      completed: false,
      isTitleChanging: false,
    },
    {
      id: v4(),
      title: "Don't let your emotions control you!",
      completed: false,
      isTitleChanging: false,
    },
  ],
  doingTodo: initDoingTodo,
});

export default todoDefaultStore;
