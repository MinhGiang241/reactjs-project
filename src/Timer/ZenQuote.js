import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      isLoaded: false,
    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/zen").then((res) => {
      setTimeout(() => {
        this.setState(() => ({ quote: res.data, isLoaded: true }));
      }, 3000);
    });
    console.log("inside component did mount");
  }
  componentDidUpdate() {
    console.log("inside component did update");
  }
  render() {
    console.log("ins render");

    return (
      <div>
        {this.state.isLoaded ? (
          <div>
            <h1>Always remember...</h1>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="loader" id="loader-1"></div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
