import { types } from "mobx-state-tree";
import { v4 } from "uuid";
const uuidV4 = v4;

const TodosItem = types
  .model({
    id: types.string,
    title: types.string,
    completed: types.boolean,
  })
  .actions((self) => ({
    setTitle(title) {
      self.title = title;
    },
    toogleComplete() {
      self.completed = !self.completed;
    },
  }));

const todosModel = types
  .model({
    todos: types.array(TodosItem),
  })
  .actions((self) => ({
    addItem(title) {
      self.todos.push({
        id: uuidV4(),
        title,
        completed: false,
      });
    },
    removeItem(id) {
      self.todos = self.todos.filter((item) => item.id !== id);
    },
  }));

export default todosModel;
