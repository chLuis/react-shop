import React from "react";
import './navbar.css'
import imagenPokemon from './pokemon-logo.png'
//import { useState } from "react";

export const Navbar = () => {

    function clickLupa() {
        console.log(document.getElementById("button-search").value)
    }

    return (
        <nav className="navbar-css">
            <img className="img-navbar" src={imagenPokemon} alt="Imagen pokemon"/>
            <div className="navbar-div">
                <input id="button-search" type="text"></input>
                <button onClick={clickLupa}>🔍</button>
            </div>
            <div className="navbar-div">
                <p>Opciones de busqueda de acuerdo a la data que voy a traer</p>
            </div>
        </nav>
    )
}
