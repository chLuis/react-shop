import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './main.css'
import { getPokemons, searchPokemon } from "../../redux/actions";

export const Main = () => {

    const { pokemon, searchPokemon: buscarPokemon } = useSelector(state => state)


    const dispatch =  useDispatch()

    function traerData() {
        console.log("Estamos trayendo data")
        dispatch(getPokemons())
    }

    function filtrarData() {
        console.log("Estamos filtrando datos")
        dispatch(searchPokemon(pokemon))
        console.log("Busque ", buscarPokemon)
    }

    console.log(useSelector(state => state.pokemon))
    return(
        <main className="main-css">
            <h2 className="h2-main">Aqui estamos en el main</h2>
            <button className="btn-main" onClick={traerData}>Traer data</button>
            <button className="btn-main" onClick={filtrarData}>Filtrar data</button>
            <div id="data-show"><h4>Aqui se mostrarán</h4>
            {pokemon?.map(
                (item, index) => {
                    return (
                        <p key={index}> {(item.name)} </p>
                    )
                }
            )}
            </div>
        </main>
    )
}