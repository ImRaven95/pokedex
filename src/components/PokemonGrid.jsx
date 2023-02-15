import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonGrid.css";

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);

  //  Next make an HTTP GET request to the PokeAPI endpoint /api/v2/pokemon, which returns a list of all the Pokemons.
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pokemon-grid">
      {pokemons.map(pokemon => (
        <div className="pokemon-card" key={pokemon.name}>
          <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          <div className="pokemon-name">{pokemon.name}</div>
        </div>
      ))}
    </div>
  )
}

export default PokemonGrid;

