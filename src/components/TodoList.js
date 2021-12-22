import { inject, observer } from "mobx-react";
import React, { Component, createRef } from "react";

const btnStyles = {
  width: 25,
  height: 25,
  padding: 0,
  fontSize: ".75rem",
  margin: "0 .25rem",
  cursor: "pointer",
};

@inject("todo")
@observer
class Default extends Component {
  state = {
    isTodoItemTitleChange: "",
  };

  constructor(props) {
    super(props);
    this.inputRef = createRef(null);
  }

  onTodoItemTitleChange = (e, item) => {
    const value = e.target.value;
    item.setTitle(value);
  };

  onHandleClickToTodoTitle = (value) => async (item) => {
    await new Promise((r) => {
      item.toggleChangeTitile(value);
      r();
    });

    this.inputRef?.current?.focus();
  };

  async componentDidMount() {
    const res = await this.props.todo.getInitTodos();
    console.log("res: ", res);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todo.todos.length ? (
            this.props.todo.todos.map((item) => {
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
                  {item.isTitleChanging ? (
                    <input
                      className="todo-item-text"
                      style={{ outline: "none" }}
                      onChange={(e) => this.onTodoItemTitleChange(e, item)}
                      value={item.title}
                      ref={this.inputRef}
                    />
                  ) : (
                    <span
                      className="todo-item-text"
                      style={{
                        outline: "none",
                        textDecoration: item.completed
                          ? "red line-through"
                          : "none",
                      }}
                    >
                      {item.title}
                    </span>
                  )}

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      width: "140px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={item.toogleComplete}
                    />
                    <button
                      style={{
                        ...btnStyles,
                        width: "auto",
                        padding: "0 .5rem",
                      }}
                      onClick={() => this.props.todo.setDoing(item.id)}
                    >
                      {item.isTodoDoing ? "Doing" : "Do"}
                    </button>
                    {!item.isTitleChanging ? (
                      <button
                        style={btnStyles}
                        onClick={() =>
                          this.onHandleClickToTodoTitle(true)(item)
                        }
                      >
                        &#9998;
                      </button>
                    ) : (
                      <button
                        style={btnStyles}
                        onClick={() =>
                          this.onHandleClickToTodoTitle(false)(item)
                        }
                      >
                        💾
                      </button>
                    )}
                    <button
                      style={btnStyles}
                      onClick={() => this.props.todo.removeItem(item.id)}
                    >
                      &times;
                    </button>
                  </span>
                </li>
              );
            })
          ) : (
            <p style={{ textAlign: "center" }}>No todos yet!</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Default;
