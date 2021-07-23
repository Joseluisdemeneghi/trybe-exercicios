import React, { Component } from 'react';
import Pokemon from './pokemon';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
    }
    this.changePokemon = this.changePokemon.bind(this);
  }

  changePokemon() {
    this.setState(({ pokemonIndex }) => {
      if (pokemonIndex === 8) return { pokemonIndex: 0 };
      return { pokemonIndex: pokemonIndex + 1 };
    });
  }

  render() {
    const { pokemons } = this.props;
    const pokemon = pokemons[this.state.pokemonIndex];

    return (
      <div className='pokedex'>
        <button 
        onClick={this.changePokemon}
        // disabled={ this.state.pokemonIndex === 8 }
        >Próximo</button>
        <Pokemon key={ pokemon.id } pokemon={ pokemon } />
      </div>
    );
  };
};

export default Pokedex;
