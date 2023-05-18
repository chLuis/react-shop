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

export const searchPokemon = () => {
    console.log("Estamos buscando")
    console.log(SEARCH_POKEMON)
}