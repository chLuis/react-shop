import axios from 'axios'
import { URL, GET_POKEMONS, SEARCH_POKEMON, GET_POKEMON } from './types'


export const getPokemons = () => {
    return async function(dispatch) {
        try{
            console.log("Estamos trayendola")
            let dataPokemonApi = await axios.get(URL)
            return dispatch({
                type: GET_POKEMONS,
                payload: dataPokemonApi.data.results
            })
        }
        catch(error) {
            
            return error
        }
    }
}
export const searchPokemon = (contenido) => {
    return async function(dispatch) {
        try{
            console.log("Estamos buscando")
            return dispatch({
                type: SEARCH_POKEMON,
                payload: contenido
            })
        }
        catch(error) {
            return error
        }
    }
};

export const findPokemon = (url_buscada) => {
    return async function(dispatch) {
        try{
            let dataPokemonApi = await axios.get(url_buscada)
            console.log("Estoy en la funcion findpokemon")
            return dispatch({
                type: GET_POKEMON,
                payload: dataPokemonApi.data
            })
        }
        catch(error) {
            return error
        }
    }
}


