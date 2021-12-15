import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Default extends Component {
  render() {
    const width = this.props.store.box.width;
    const height = this.props.store.box.height;
    return (
      <div className="content">
        <div className="controllers">
          <p>
            <label htmlFor="controllers-width">Width</label>
            <input
              value={width}
              onChange={(e) => this.props.store.box.setWidth(e.target.value)}
              id="controllers-width"
              type="number"
            />
          </p>

          <p>
            <label htmlFor="controllers-height">Height</label>
            <input
              value={height}
              onChange={(e) => this.props.store.box.setHeight(e.target.value)}
              id="controllers-height"
              type="number"
            />
          </p>
        </div>

        <p>Area: {this.props.store.box.area}px^2</p>

        <div className="box">
          <div
            className="box__item"
            style={{
              width: (width || 0) + "px",
              height: (height || 0) + "px",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Default;
