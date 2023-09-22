import React, { Component } from "react";

class SwitchColor extends Component {
  constructor() {
    super();
    this.state = {
      color1: "red",
      color2: "blue",
    }
  }

  swapColors = () => {
    const { color1, color2 } = this.state;
    this.setState({
      color1: color2,
      color2: color1,
    })
  }

  render() {
    const { color1, color2 } = this.state
    return (
        <div>
          <div
              style={{ width: "250px", height: "250px", backgroundColor: color1}}
              onClick={this.swapColors}
          ></div>
          <div
              style={{ width: "250px", height: "250px", backgroundColor: color2}}
              onClick={this.swapColors}
          ></div>
        </div>
    )
  }
}

export default SwitchColor;