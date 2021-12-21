import { types } from "mobx-state-tree";
import { todoDefaultStore } from "./instances";
import { todosModel } from "./models";

const RootStore = types.model({
  todo: todosModel,
});

const store = RootStore.create({
  todo: todoDefaultStore,
});

export default store;
