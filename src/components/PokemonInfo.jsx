import React from 'react';
import { fetchPokemon as pokemonApi } from './services/pokemon-api';
import { PokemonPendingView } from './PokemonPendingView';


export class PokemonInfo extends React.Component{
    state = {
        status: 'idle',
    };

    componentDidUpdate(prevProps, prevState){
        const prevName = prevProps.pokemonName;
        const nextName = this.props.pokemonName;

        // console.log(prevName);
        // console.log(nextName);

        if(prevName !== nextName){
            this.setState(
                { status: 'pending'},
                ()=>{ console.log(this.state.status) }
            );
        }
        setTimeout(()=>{
        pokemonApi.fetchPokemon(nextName)
        .then(pokemon => this.setState({ pokemon, status: 'resolved'}))
        .catch(error => this.setState({ error, status: 'reject'}))
        }, 1000);
        
    }

    render(){
        const { status } = this.state;
        const { pokemonName } = this.props;
        console.log(this.state.status);
        
        if(status === 'idle'){
        return <div>Enter the name of the Pokemon.</div>
        }

        if(status === 'pending'){
        return <PokemonPendingView pokemonName = { pokemonName }/>
        }
    }
}