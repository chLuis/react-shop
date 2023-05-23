import React from "react";
import './navbar.css'
import imagenPokemon from './pokemon-logo.png'
import { searchPokemon, findPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";


export const Navbar = () => {

    const { pokemon, searchPokemon: buscarPokemon, findPokemon:  buscarPokemonId } = useSelector(state => state)

    const dispatch = useDispatch()

    function clickLupa(event) {
        let buscando = document.getElementById("button-search").value
        const pokemonBuscado = pokemon.find(pokemon => pokemon.name === buscando)
        dispatch(findPokemon(pokemonBuscado.url))
        findPokemon(pokemonBuscado.url)
    }
    const filtrarData = (event) => {
        const pokemonBuscado = pokemon.find(pokemon => pokemon.name === event)
        console.log(pokemonBuscado)
        if(pokemonBuscado){
            dispatch(searchPokemon(pokemonBuscado));
            //dispatch(findPokemon(pokemonBuscado.url))
            //console.log(pokemonBuscado.url)
        } else {
            dispatch(searchPokemon([]))
            dispatch(findPokemon(""))
        }
        searchPokemon()
        //findPokemon()
    }
    console.log(useSelector(state => state.findPokemon.sprites.other.dream_world.front_default))

    return (
        <nav className="navbar-css">
            <img className="img-navbar" src={imagenPokemon} alt="Imagen pokemon"/>
            <div className="navbar-div">
            <input id="button-search" type="text" onClick={event => filtrarData(event.target.value)}></input>
                <button onClick={event => clickLupa(event.target.value)}>🔍</button>
            </div>
            <div className="navbar-div">
                <p>Opciones de busqueda de acuerdo a la data que voy a traer</p>
                
            </div>
        </nav>
    )
}
