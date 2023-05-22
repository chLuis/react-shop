import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './main.css'
import { getPokemons, searchPokemon } from "../../redux/actions";
//import { GET_POKEMONS } from "../../redux/types";


export const Main = () => {

    const { pokemon, searchPokemon: buscarPokemon } = useSelector(state => state)


    const dispatch =  useDispatch()

    function traerData() {
        console.log("Estamos trayendo data")
        dispatch(getPokemons())
    }
    //let mostrando = {name: "No hay nada"}
    const filtrarData = (event) => {
        //dispatch(buscarPokemon());
        console.log("Busque ", buscarPokemon);
        console.log(event)
        //console.log(pokemon[2].name)
        const pokemonBuscado = pokemon.find(pokemon => pokemon.name === event)
        console.log(pokemonBuscado)
        if(pokemonBuscado){
            dispatch(searchPokemon(pokemonBuscado))
        } else {
            dispatch(searchPokemon([]))
        }
        
        searchPokemon()
    }

    console.log(useSelector(state => state.pokemon))
    console.log("useSelector")
    console.log(useSelector(state => state.searchPokemon))
    return(
        <main className="main-css">
            <h2 className="h2-main">Aqui estamos en el main</h2>
            <button className="btn-main" onClick={traerData}>Traer data</button>
            <div>
            <input id="button-search" type="text" onChange={event => filtrarData(event.target.value)}></input>
            {/* <button className="btn-main" onClick={filtrarData}>Filtrar data</button> */}
            </div>
            <div id="data-show"><h4>Aqui se mostrarán</h4>
            {/* {pokemon?.map(
                (item, index) => {
                    return (
                        <p key={index}> {(item.name)} </p>
                    )
                }
            )}  */}
            </div>
            <div>
            <p>{useSelector(state => state.searchPokemon)?.name}</p>
            <a href={useSelector(state => state.searchPokemon)?.url}>Link</a>
            </div>
        </main>
    )
}