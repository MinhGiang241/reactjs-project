import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Food extends Component {
  render() {
    console.log(this.props);
    const name = this.props.match.params.name;
    if (/\d/.test(name)) this.props.history.push("/as");
    const url = `https://source.unsplash.com/1600x900/?${name}`;
    return (
      <div className="Food">
        {/\d/.test(name) ? (
          <Redirect to="/notfound " />
        ) : (
          <div>
            <h1>I love to eat {name}</h1>
            <img src={url} alt={name} />
          </div>
        )}
      </div>
    );
  }
}

export default Food;
