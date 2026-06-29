import React from 'react';
import { PokemonForm } from './PokemonForm';

export class App extends React.Component{

  state = {

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
        <PokemonForm/>
    </div>
  );
}
};
