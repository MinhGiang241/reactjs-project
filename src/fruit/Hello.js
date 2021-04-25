import React from "react";
class Hello extends React.Component {
  static defaultProps = {
    from: "Anonymous",
    to: "Anonymous",
    bangs: 2,
  };

  render() {
    return (
      <h1>
        Hello {this.props.to} from {this.props.from} {this.props.data}
        {"!".repeat(this.props.bangs)}
      </h1>
    );
  }
}
