import todosModel from "../models/todo.model";

const todoDefaultStore = todosModel.create({
  todos: [
    {
      id: "1",
      title: "Life is interesting if our brain works good!",
      completed: false,
      isTitleChanging: false,
    },
    {
      id: "2",
      title: "Don't let your emotions control you!",
      completed: false,
      isTitleChanging: false,
    },
  ],
  selectedTodo: "2",
});

export default todoDefaultStore;
