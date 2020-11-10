import React, { Component } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.createBox = this.createBox.bind(this);
  }

  createBox(newBox) {
    this.setState((st) => ({
      boxes: [...st.boxes, newBox],
    }));
  }

  removeBox(id) {
    this.setState((state) => ({
      boxes: state.boxes.filter((box) => box.id !== id),
    }));
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box
        id={box.id}
        key={box.id}
        width={box.width}
        height={box.height}
        color={box.color}
        remove={() => this.removeBox(box.id)}
      />
    ));
    return (
      <div>
        <h1>Color Box Maker Things</h1>
        <NewBoxForm createBox={this.createBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
