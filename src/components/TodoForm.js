import { inject, observer } from "mobx-react";
import React, { Component } from "react";

@inject("todo")
@observer
class Default extends Component {
  constructor(props) {
    super(props);
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
          <h1>Doing: {this.props.todo.doingTodo.title}</h1>
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
