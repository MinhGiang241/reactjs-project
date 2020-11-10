import React, { Component } from "react";

class Meal extends Component {
  render() {
    console.log(this.props);
    const foodName = this.props.match.params.foodName;
    const drinkName = this.props.match.params.drinkName;
    const foodNameUrl = `https://source.unsplash.com/1600x900/?${foodName}`;
    const drinkNameUrl = `https://source.unsplash.com/1600x900/?${drinkName}`;
    return (
      <div>
        <h1>
          This is meal: {foodName} - {drinkName}
        </h1>
        <img src={foodNameUrl} alt={foodName} />
        <img src={drinkNameUrl} alt={drinkName} />
      </div>
    );
  }
}

export default Meal;
