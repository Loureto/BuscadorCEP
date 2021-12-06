import React from "react";
import { Button } from "../Button/Button";
import './card.scss';

export const Card = () =>{
    return(
        <div className="container">
            <div className="card">
                <hr size="8"  className="hr"/>
                <div className="card-text">
                    <h1>Bem vindo ao BuscadorCEP!</h1>
                    <p>O aplicativo BuscadorCEP! permite que você encontre códigos de endereçamento postais (CEP).<br/>
                    Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o BuscadorCEP! também vai te ajudar.<br/>
                    Aproveite!</p>
                </div>
                <div className="card-button">
                    <Button tipo="buscaEnd" label="Buscar Endereço"/>
                    <Button tipo="buscCep" label="Buscar CEP"/>
                </div>
                <hr size="8" className="hr"/>
            </div>
        </div>
    );
}