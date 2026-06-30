import { ImSpinner } from 'react-icons/im';
import pendingImage from './pendingImage.png';
import { PokemonDataView } from './PokemonDataView';

export function PokemonPendingView({ pokemonName }){

    const pokemon ={
        name: pokemonName,
        sprites: {
            other: {
                 'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },
        stats: [],
    }
    return (
    <div alert = "alert">
        <div>
            <ImSpinner/>
            Downloading...
            <PokemonDataView pokemon = { pokemon }/>
        </div>
    </div>
    );
}