import React from "react";
import './navbar.css'
import imagenPokemon from './pokemon-logo.png'
import { searchPokemon, findPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {
    const { pokemon,  findPokemon:  buscarPokemonId } = useSelector(state => state)
    console.log(buscarPokemonId)

    const dispatch = useDispatch()

    function clickLupa() {
        let buscando = document.getElementById("button-search").value
        const pokemonBuscado = pokemon.find(pokemon => pokemon.name === buscando)
        if(pokemonBuscado){
            dispatch(searchPokemon(pokemonBuscado));
            document.getElementById("div-search").classList.add("img-see")
            document.getElementById("div-search").classList.add("div-search")
            document.getElementById("div-search").classList.remove("img-not")
            return dispatch(findPokemon(pokemonBuscado.url))
            
        } else {
            document.getElementById("div-search").classList.remove("img-see")
            document.getElementById("div-search").classList.remove("div-search")
            document.getElementById("div-search").classList.add("img-not")
            dispatch(findPokemon())
            return dispatch(searchPokemon())
        }
    }

    return (
        <nav className="navbar-css">
            <img className="img-navbar" src={imagenPokemon} alt="Imagen pokemon"/>
            <div className="navbar-div">
            <input id="button-search" type="text" placeholder="charmander" onChange={event => clickLupa(event.target.value)}></input>
                {/* <button onClick={event => clickLupa(event.target.value)}>🔍</button> */}
            </div>
            <div className="navbar-div">
                <p>....</p>
                
            </div>
        </nav>
    )
}
