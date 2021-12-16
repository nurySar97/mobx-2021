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
                    style={{ outline: "none" }}
                    onClick={this.onHandleClickToTodoTitle}
                  >
                    {item.title}
                  </span>
                )}

                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={item.toogleComplete}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Default;
