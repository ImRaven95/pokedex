import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import PokemonGrid from './components/PokemonGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonGrid />
    </div>
  );
}

export default App;