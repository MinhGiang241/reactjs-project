import React, { Component } from "react";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={sodaImg} alt="coca cola can" />
        <div>
          <h1>SODAAAAAA IS MY FAVORITE</h1>
          <h3>But now I drink sparkling water instead</h3>
          <p>(i still miss Soda)</p>
        </div>
        <img src={sodaImg} alt="coca cola can" />
        <Link to="/">Go back</Link>
      </div>
    );
  }
}

export default Soda;
