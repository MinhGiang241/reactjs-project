import React, { Component } from "react";
import PokeCard from "./Pokecard";
import { allPokemon } from "./allpokemon";
import "./Pokedex.css";

class PokeDex extends Component {
  static defaultProps = {
    pokemon: allPokemon,
  };

  render() {
    return (
      <div className="Pokedex-cards">
        <h1>Pokedex!</h1>
        {this.props.pokemon.map((p, i) => (
          <PokeCard id={i} key={p.name} />
        ))}
      </div>
    );
  }
}

export default PokeDex;
