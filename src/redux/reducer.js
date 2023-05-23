import { GET_POKEMON, GET_POKEMONS, SEARCH_POKEMON } from "./types";

const initialState = { pokemon: [], entrenadores: [], searchPokemon: ["buscando....."], 
findPokemon: {
    "sprites": {
    "other": {
    "dream_world": {
    "front_default": "",
    },
    }}}
}

export const reducerroot = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return {
                    ...state,
                    pokemon: action.payload };
        case SEARCH_POKEMON:
            return {
                    ...state,
                    searchPokemon: action.payload
                };
        case GET_POKEMON:
            return {
                ...state,
                findPokemon: action.payload
            };

        default:
            return state
    }
}