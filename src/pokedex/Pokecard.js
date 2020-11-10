import React, { Component } from "react";
import { allPokemon } from "./allpokemon.js";
import "./PokeCard.css";

const POKE_API = "https://pokeres.bastionbot.org/images/pokemon/";

class PokeCard extends Component {
  render() {
    let imgSrc = `${POKE_API}${this.props.id + 1}.png`;
    return (
      <div className="PokeCard">
        <img src={imgSrc} alt={allPokemon[this.props.id].name} />
        <h1 className="Pokecard-title">{allPokemon[this.props.id].name}</h1>
      </div>
    );
  }
}

export default PokeCard;
