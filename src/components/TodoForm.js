import { inject, observer } from "mobx-react";
import React, { Component, createRef } from "react";

@inject("todo")
@observer
class Default extends Component {
  constructor(props) {
    super(props);
    this.toggleRef = createRef(false);
  }
  state = {
    addTodoInputValue: "",
  };

  onAddtodoHandleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.addTodoInputValue) return alert("No title");
    this.props.todo.addItem(this.state.addTodoInputValue);
    this.setState({ addTodoInputValue: "" });
  };

  onAddtodoInputChange = (e) => {
    this.setState({ addTodoInputValue: e.target.value });
  };

  render() {
    return (
      <section>
        <div style={{ textAlign: "center" }}>
          <h1>{this.props.todo.selectedTodo.title}</h1>
          <p>
            <button
              onClick={() => {
                const arg = this.toggleRef.current ? "2" : "1";
                this.props.todo.toggleSelectItem(arg);
                this.toggleRef.current = !this.toggleRef.current;
              }}
            >
              Toggle Change Select Todo Item
            </button>
          </p>
        </div>
        <form
          style={{ textAlign: "center" }}
          onSubmit={this.onAddtodoHandleSubmit}
        >
          <p>
            <input
              onChange={this.onAddtodoInputChange}
              value={this.state.addTodoInputValue}
            />
          </p>
          <p>
            <button type="submit">Add todo</button>
          </p>
        </form>
      </section>
    );
  }
}

export default Default;
