import { types } from "mobx-state-tree";
import { v4 } from "uuid";
const uuidV4 = v4;

const TodosItem = types
  .model({
    id: types.string,
    title: types.string,
    completed: types.boolean,
    isTitleChanging: types.boolean,
  })
  .actions((self) => ({
    setTitle(title) {
      self.title = title;
    },
    toogleComplete() {
      self.completed = !self.completed;
    },
    toggleChangeTitile(value = false) {
      self.isTitleChanging = value;
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
        isTitleChanging: false,
      });
    },
    removeItem(id) {
      self.todos = self.todos.filter((item) => item.id !== id);
    },
  }));

export default todosModel;
