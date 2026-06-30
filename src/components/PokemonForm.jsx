import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify'; 

export class PokemonForm extends Component{
    state = {
        pokemon: '',
    };

    handleNameChange = event =>{
        this.setState({ pokemon: event.currentTarget.value.toLowerCase()});
    }

    handleSubmit = event =>{
        event.preventDefault();
        if(this.state.pokemon.trim()===''){
            alert(`Enter the Pokemon's name`);
            toast.error(`Enter the Pokemon's name`);
            return;
        }
        console.log(this.state.pokemon);

        this.props.onSubmit(this.state.pokemon);
        this.setState({ pokemon: ''});
        
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