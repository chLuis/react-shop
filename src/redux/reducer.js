import { GET_POKEMONS, SEARCH_POKEMON } from "./types";

const initialState = { pokemon: [], entrenadores: [], searchPokemon: []}

export const reducerroot = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return { ...state, pokemon: action.payload };
        case SEARCH_POKEMON:
            return { ...state, searchPokemon: action.payload}
        default:
            return state
    }
}