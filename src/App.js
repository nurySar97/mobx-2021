import React, { Component, createRef } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Default extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef(null);
  }

  state = {
    isTodoItemTitleChange: false,
    addTodoInputValue: "",
  };

  onAddtodoBtnClick = () => {
    if (!this.state.addTodoInputValue) return alert("No title");
    this.props.store.todo.addItem(this.state.addTodoInputValue);
    this.setState({ addTodoInputValue: "" });
  };

  onAddtodoInputChange = (e) => {
    this.setState({ addTodoInputValue: e.target.value });
  };

  onTodoItemTitleChange = (e, item) => {
    const value = e.target.value;
    item.setTitle(value);
  };

  onHandleBlurFromTodoTitle = () => {
    this.setState({ isTodoItemTitleChange: false });
  };

  onHandleClickToTodoTitle = async () => {
    await new Promise((r) => {
      this.setState({ isTodoItemTitleChange: true });
      r();
    });

    this.inputRef.current.focus();
  };
  render() {
    return (
      <div className="content">
        <div style={{ textAlign: "center" }}>
          <p>
            <input
              type=""
              onChange={this.onAddtodoInputChange}
              value={this.state.addTodoInputValue}
            />
          </p>
          <p>
            <button onClick={this.onAddtodoBtnClick}>Add todo</button>
          </p>
        </div>
        <ul>
          {this.props.store.todo.todos.map((item) => {
            return (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: ".75rem 1rem",
                  background: "teal",
                  marginBottom: ".5rem",
                }}
              >
                {this.state.isTodoItemTitleChange ? (
                  <input
                    style={{ outline: "none" }}
                    onChange={(e) => this.onTodoItemTitleChange(e, item)}
                    onBlur={this.onHandleBlurFromTodoTitle}
                    value={item.title}
                    ref={this.inputRef}
                  />
                ) : (
                  <span
                    style={{
                      outline: "none",
                      textDecoration: item.completed ? "line-through" : "none",
                    }}
                    onClick={this.onHandleClickToTodoTitle}
                  >
                    {item.title}
                  </span>
                )}

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={item.toogleComplete}
                  />
                  <button
                    onClick={() => this.props.store.todo.removeItem(item.id)}
                  >
                    &times;
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Default;
