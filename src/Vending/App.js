import React, { Component } from "react";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <Switch>
          <Route path="/" render={() => <VendingMachine />} exact />
          <Route path="/sardines" render={() => <Sardines />} exact />
          <Route path="/soda" render={() => <Soda />} exact />
          <Route path="/chips" render={() => <Chips />} exact />
          <Route render={() => <Redirect to="/" />} exact />
        </Switch>
      </div>
    );
  }
}

export default App;
