import { action, makeObservable, observable } from "mobx";

class Box {
  width = 400;
  height = 400;

  constructor() {
    makeObservable(this, {
      width: observable.ref,
      height: observable.ref,
      setWidth: action.bound,
      setHeight: action.bound,
    });
  }

  setWidth(w) {
    if (w < 0) return;
    this.width = w;
  }

  setHeight(h) {
    if (h < 0) return;
    this.height = h;
  }

  get area() {
    return this.width * this.height;
  }
}

const store = { box: new Box() };

export default store;
