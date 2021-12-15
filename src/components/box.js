import { inject, observer } from "mobx-react";
import React, { Component } from "react";

@inject("box")
@observer
class Default extends Component {
  render() {
    const width = this.props.box.width;
    const height = this.props.box.height;
    return (
      <section className="box-section">
        <div className="box-controllers">
          <p>
            <label htmlFor="controllers-width-label">Set width: </label>
            <input
              value={width}
              onChange={(e) => this.props.box.setWidth(e.target.value)}
              id="controllers-width-label"
              type="number"
            />
          </p>

          <p>
            <label htmlFor="controllers-height-label">Set height: </label>
            <input
              value={height}
              onChange={(e) => this.props.box.setHeight(e.target.value)}
              id="controllers-height-label"
              type="number"
            />
          </p>
        </div>

        <div>
          <p>Area: {this.props.box.area}px^2</p>
          <p>Perimeter: {this.props.box.perimeter}</p>
        </div>

        <div className="box-rectangle">
          <div
            className="box-rectangle__item"
            style={{
              width: (width || 0) + "px",
              height: (height || 0) + "px",
            }}
          />
        </div>
      </section>
    );
  }
}

export default Default;
