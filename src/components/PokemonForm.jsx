import { Component } from 'react';
import { ImSearch } from 'react-icons/im';

export class PokemonForm extends Component{
    state = {
        pokemon: '',
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input
                    type = "text"
                    name = "pokemon"
                    value = {this.state.pokemon}
                    onChange = {this.handleNameChange}
                />
                <button type="submit">
                <ImSearch/>
                    Найти
                </button>
               
            </form>
        );
    }
}