import React from "react";
import './navbar.css'
import imagenPokemon from './pokemon-logo.png'
import { findPokemon } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";


export const Navbar = () => {

    const { pokemon } = useSelector(state => state)
    const dispatch = useDispatch()
    
    const [inputValue, setInputValue] = useState("")

    const handleEvent = (event) => {
        setInputValue(event.target.value)
    }

    const handleKeyDown = (event) => {
        if(event.key === "Enter"){
            clickLupa()
        }
    }

    function clickLupa() {
        console.log("aqui esta el parametro",inputValue)
        const pokemonBuscado = pokemon.find(pokemon => pokemon.name === inputValue.toLowerCase())
        if(pokemonBuscado){
            document.getElementById("div-search").classList.add("img-see")
            document.getElementById("div-search").classList.add("div-search")
            document.getElementById("div-search").classList.remove("img-not")
            return dispatch(findPokemon(pokemonBuscado.url))
        } else {
            document.getElementById("div-search").classList.remove("img-see")
            document.getElementById("div-search").classList.remove("div-search")
            document.getElementById("div-search").classList.add("img-not")
            return dispatch(findPokemon())
        }
    }

    return (
        <nav className="navbar-css">
            <img className="img-navbar" src={imagenPokemon} alt="Imagen pokemon"/>
            <div className="navbar-div">
            <input id="button-search" type="text" placeholder="charmander" value={inputValue} onChange={handleEvent} onKeyDown={handleKeyDown}></input>
            <button onClick={clickLupa}>🔍</button>
            </div>
            <div className="navbar-div">
                <p>....</p>
                
            </div>
        </nav>
    )
}
