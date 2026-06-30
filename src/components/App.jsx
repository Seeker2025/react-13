import React from 'react';
import { ToastContainer } from "react-toastify";
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';

export class App extends React.Component{

  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName =>{
    console.log(pokemonName);
    this.setState({pokemonName});
  };

  render(){
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
        <PokemonForm onSubmit = {this.handleFormSubmit}/>
        <PokemonInfo pokemonName = {this.state.pokemonName}/>
        <ToastContainer autoClose={3000}/>
    </div>
  );
}
};
