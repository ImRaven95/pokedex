import React, { useState } from 'react'
import './App.css'
import Navbar from './components/navbar';
import PokemonGrid from './components/PokemonGrid';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <PokemonGrid />
      <Footer />
    </div>
  );
}

export default App;