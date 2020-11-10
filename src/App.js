// THIS IS THE 'fake' routing implemention.
// THIS CODE WON'T WORK UNLESS YOU MOVE IT INTO APP.JS
import React, { Component } from "react";
import AppTodo from "./HookProject/App";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppTodo />
      </div>
    );
  }
}

export default App;
