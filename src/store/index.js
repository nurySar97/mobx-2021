import { action, computed, makeObservable, observable } from "mobx";

class Box {
  width = 200;
  height = 200;

  constructor() {
    makeObservable(this, {
      width: observable.ref,
      height: observable.ref,
      setWidth: action.bound,
      setHeight: action.bound,
      area: computed,
      perimeter: computed,
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
  get perimeter() {
    if (!this.width || !this.height) return 0;
    return (Number(this.width) + Number(this.height)) * 2;
  }
}

const store = { box: new Box() };

export default store;
