import React from 'react';
import './header.scss';

export const Header = () =>{
    return(
        <header className="header">
            <p>BuscadorCEP!</p>
            <nav className="nav">
                <ul>
                    <li><a href="#">Buscar Endereço</a></li>
                    <li><a href="#">Buscar CEP</a></li>
                </ul>
            </nav>
        </header>
    );
}