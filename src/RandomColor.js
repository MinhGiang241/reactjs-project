import React, { Component } from "react";

class RandomColor extends Component {
  pickColor = () => {
    return `rgb(
     ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)},
     ${Math.floor(Math.random() * 256)}    
    )`;
  };
  state = {
    color: this.pickColor,
    width: "200px",
    height: "200px",
  };
  changeColor = (e) => {
    const newColor = this.pickColor();
    e.target.style.backgroundColor = newColor;
    while (e.target.style.backgroundColor === newColor) {
      this.changeColor();
    }
  };

  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.from({ length: this.props.num }, (x, i) => (
          <div
            style={{
              backgroundColor: this.state.color(),
              width: this.state.width,
              height: this.state.height,
            }}
            onMouseOver={this.changeColor}
            key={i}
          ></div>
        ))}
      </div>
    );
  }
}

export default RandomColor;
