// THIS IS THE 'fake' routing implemention.
// THIS CODE WON'T WORK UNLESS YOU MOVE IT INTO APP.JS
import React, { Component } from "react";
import Box from "./Box/BoxList";
import Card from "./Card/Deck";
import Color from "./Color/App";
import FormLogin from "./Content/App";
import Dice from "./Dice/RollDice";
import Dog from "./Dog/App";
import Hangman from "./hangman/Hangman";
import Todo from "./HookProject/App";
import BoardGame from "./light/Board";
import Pokedex from "./pokedex/Pokedex";
import Timer from "./Timer/Timer";
import VendingMachine from "./Vending/App";
import Yahtzee from "./Yahtzee/Game";

import "./App.css";

const app = [
  { desc: "Make a Box", component: Box },
  { desc: "Random Card", component: Card },
  { desc: "Create Color Template", component: Color },
  { desc: "FormLogin", component: FormLogin },
  { desc: "Dice", component: Dice },
  { desc: "Dog List", component: Dog },
  { desc: "Hangman", component: Hangman },
  { desc: "Todo", component: Todo },
  { desc: "Turn Off All Lights", component: BoardGame },
  { desc: "Pokemon List", component: Pokedex },
  { desc: "What time is it?", component: Timer },
  { desc: "Vending Machine", component: VendingMachine },
  { desc: "Yahtzee", component: Yahtzee },
];

class App extends Component {
  state = {
    num: 0,
  };

  render() {
    console.log("num", this.state.num);
    const Component = app[this.state.num].component;
    return (
      <div className="App">
        <div className="sidediv">
          {app.map((comp, i) => (
            <div
              className={`element ${this.state.num === i && "active-tab"}`}
              onClick={() => {
                this.setState({ num: i });
                console.log(i, "i");
              }}
            >
              {comp.desc}
            </div>
          ))}
        </div>

        <div className="componentdiv">
          <Component />
        </div>
      </div>
    );
  }
}

export default App;
