import React, { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonGrid.css";

function PokemonGrid() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        <div className="pokemon-card" key={pokemon.name} onClick={() => setSelectedPokemon(pokemon)}>
          <img className="pokemon-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`} alt={pokemon.name} />
          <div className="pokemon-name">{pokemon.name}</div>
        </div>
      ))}
    {selectedPokemon && (
      <div className="pokemon-modal">
        <div className="pokemon-modal-content">
          <img className="pokemon-modal-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.url.split('/')[6]}.png`} alt={selectedPokemon.name} />
          <div className="pokemon-modal-name">{selectedPokemon.name}</div>
          <div className="pokemon-modal-details">
            <p>Type: </p>
            {(()=>{console.log(pokemons.types);return <p></p>})()}
            {pokemons.types.map((type) => (
              <p key={type.slot}>{type.type.name}</p>
            ))}
            
            <p>Height: {selectedPokemon.height}</p>
            <p>Weight: {selectedPokemon.weight}</p>
          </div>
          <button onClick={() => setSelectedPokemon(null)}>Close</button>
        </div>
      </div>
    )}
    </div> 
  )
}

export default PokemonGrid;

