import React, { Component } from "react";
import Dice from "./Dice";
import "./RollDice.css";

class RollDice extends Component {
  state = {
    dice1: "one",
    dice2: "one",
    dice3: "one",
    dice4: "one",
    rolling: false,
  };
  Roll = () => {
    this.setState(() => {
      const DiceArr = ["one", "two", "three", "four", "five", "six"];
      return {
        dice1: DiceArr[Math.floor(Math.random() * DiceArr.length)],
        dice2: DiceArr[Math.floor(Math.random() * DiceArr.length)],
        dice3: DiceArr[Math.floor(Math.random() * DiceArr.length)],
        dice4: DiceArr[Math.floor(Math.random() * DiceArr.length)],
        rolling: true,
      };
    });
    setTimeout(() => {
      this.setState(() => ({ rolling: false }));
    }, 1000);
  };
  render() {
    return (
      <div className="RollDice">
        <div>
          <Dice face={this.state.dice1} rolling={this.state.rolling} />
          <Dice face={this.state.dice2} rolling={this.state.rolling} />
          <Dice face={this.state.dice3} rolling={this.state.rolling} />
          <Dice face={this.state.dice4} rolling={this.state.rolling} />
        </div>

        <div>
          <button onClick={this.Roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll dice"}
          </button>
        </div>
      </div>
    );
  }
}
export default RollDice;
