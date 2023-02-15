import React, { useState } from "react";
import '../App.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearchSubmit(event) {
    event.preventDefault();
    console.log(`Performing search for query  "${searchQuery}"...`);
  }

  function handleSearchInputChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="">About</a></li>
      </ul>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchInputChange} />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}

export default Navbar;