import React, { Component } from 'react';
import './App.css';
import Pokedex from './pokedex';
import pokemons from './data';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <Pokedex pokemons={ pokemons } />
      </div>
    )
  }
}

export default App;
