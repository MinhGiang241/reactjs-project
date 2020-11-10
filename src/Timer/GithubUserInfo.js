import React, { Component } from "react";
import axios from "axios";

class GithubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgUrl: undefined,
      name: undefined,
    };
  }
  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let response = await axios.get(url);
    const data = response.data;
    this.setState({ imgUrl: data.avatar_url, name: data.name });
    console.log(response.data);
  }
  render() {
    return (
      <div>
        <h1>Github user: {this.state.name}</h1>
        <img src={this.state.imgUrl} />
      </div>
    );
  }
}

export default GithubUserInfo;
