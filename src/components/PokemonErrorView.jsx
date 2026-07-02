import errorImage from "./error.jpg";

export default function PokemonErrorView({ message }){
    return (
        <div role = "alert">

            <img src = {errorImage} width = "240" alt ="sadcat"/>
            <h3>{message}</h3>

        </div>
    )
}