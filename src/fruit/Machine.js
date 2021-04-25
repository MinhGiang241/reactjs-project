import React from "react";

class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const winner = s1 === s2 && s2 === s3;
    return (
      <div className={this.props.className}>
        <h1>Slot machine</h1>
        <p style={{ fontSize: "50px", backgroundColor: "purple" }}>
          {s1} {s2} {s3}
        </p>
        <p className={winner ? "win" : "lose"}>
          {winner ? "Winner" : "Loser!"}
        </p>
      </div>
    );
  }
}
