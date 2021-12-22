import { set, values } from "mobx";
import { getParent, getSnapshot, types, flow } from "mobx-state-tree";
import { v4 } from "uuid";
const uuidV4 = v4;

const TodosItem = types
  .model("TodosItem", {
    id: types.identifier,
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
  }))
  .views((self) => ({
    get isTodoDoing() {
      return self.id === getParent(self, 2).doingTodo.id;
    },
  }));

const todosModel = types
  .model("Todo", {
    todos: types.array(TodosItem),
    doingTodo: types.reference(TodosItem),
  })
  .actions((self) => ({
    getInitTodos: flow(function*() {
      try {
          const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
          const data = yield response.json();
          const mapData = data.map(item=>({...item, id: (item.id + ''), isTitleChanging: false }))
          self.todos = [...self.todos, ...mapData]
          return 'Todos fetched!'
      } catch (error) {
          console.error("Failed to fetch projects", error)
          self.state = "error"
      }
  }),
    addItem(title) {
      self.todos.unshift({
        id: uuidV4(),
        title,
        completed: false,
        isTitleChanging: false,
      });
    },
    removeItem(id) {
      if (id === self.doingTodo.id) {
        return alert("Oops can not remove this todo because now we are doing!");
      }
      self.todos = self.todos.filter((item) => item.id !== id);
    },
    setDoing(id) {
      self.doingTodo = id;
    },
  }))
  .views((self) => ({
    get countOfTodos() {
      return values(self.todos).length;
    },
  }));

export default todosModel;