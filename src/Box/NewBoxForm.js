import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: "",
      color: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newBox = { ...this.state, id: uuidv4() };
    this.props.createBox(newBox);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              id="width"
              type="text"
              name="width"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input
              id="height"
              type="text"
              name="height"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="color">Color</label>
            <input
              id="color"
              type="text"
              name="color"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <button>Add new box</button>
      </form>
    );
  }
}
export default NewBoxForm;
