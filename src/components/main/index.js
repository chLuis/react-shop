import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './main.css'
import { getPokemons } from "../../redux/actions";
//import { GET_POKEMONS } from "../../redux/types";

export const Main = () => {


    const dispatch =  useDispatch()

    function traerData() {
        alert("Datos conseguidos")
        dispatch(getPokemons())
    }

    return(
        <main className="main-css">
            <button className="btn-main" onClick={traerData}>Traer data</button>
            <div id="data-show"><h4>Pokemon buscado:</h4>
            <div id="div-search">
            <p className="p-search">{useSelector(state => state.searchPokemon?.name)}</p>            
            <div id="div-tipo">
            <h5>Tipo</h5>
            <p className="p-tipo">
                {useSelector(state => state.findPokemon.types?.map(el => el.type.name))?.map(el => <p key={el}>{el}</p>)}
            </p>
            </div>
            <img src={useSelector(state => state.findPokemon.sprites.other.dream_world.front_default)} alt="pokemon" className="img-search"></img>
            <h5>Habilidades:</h5>
            <ul className="ul-search">
                {useSelector(state => state.findPokemon.abilities?.map(el => el.ability.name))?.map(el => <li key={el}>{el}</li>)}
            </ul>

            </div>
            </div>
        </main>
    )
}