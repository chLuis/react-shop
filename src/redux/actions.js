import axios from 'axios'
import { URL, GET_POKEMONS, SEARCH_POKEMON } from './types'


export const getPokemons = () => {
    return async function(dispatch) {
        try{
            console.log("EStamos trayendola")
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
    //const buscador = "ivysaur"
    return async function(dispatch) {
        try{
            console.log("Estamos trayendola")
            return dispatch({
                type: SEARCH_POKEMON,
                payload: contenido
            })
        }
        catch(error) {
            
            return error
        }
    }
    //console.log("Estamos buscando desde actions")
    //console.log(contenido)

    //console.log(SEARCH_POKEMON)
    //console.log(GET_POKEMONS)
};


