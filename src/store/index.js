import { types } from "mobx-state-tree";
import todosModel from "./models/todo.model";

const RootStore = types.model({
  todo: todosModel,
});

const store = RootStore.create({
  todo: {
    todos: [
      {
        id: '1',
        title: 'Buy beer',
        completed: false
      }
    ],
  },
});

export default store;
