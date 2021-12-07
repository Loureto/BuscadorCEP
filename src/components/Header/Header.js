import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () =>{
    return(
        <header className="header">
            <p>BuscadorCEP!</p>
            <nav className="nav">
                <ul>
                    <li><NavLink to="/" end activeStyle={{color:'#CCC'}}>Home</NavLink></li>
                    <li><NavLink to="BuscaEndereco" activeStyle={{color:'#CCC'}}>Busca Endereço</NavLink></li>
                    <li><NavLink to="BuscaCep" activeStyle={{color:'#CCC'}}>Busca CEP</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}