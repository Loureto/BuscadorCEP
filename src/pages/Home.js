import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import '../styles/home.scss';

export const Home = () =>{
    const navigate = useNavigate();

    const handleClickBuscaEndereco = () =>{
        navigate('/BuscaEndereco');
    }
    
    const handleClickBuscaCep = () =>{
        navigate('/BuscaCep');
    }

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
                    <Button onClick={handleClickBuscaEndereco} tipo="buscaEndereco" label="Buscar Endereço"/>
                    <Button onClick={handleClickBuscaCep} tipo="buscaCep" label="Buscar CEP"/>
                </div>
                <hr size="8" className="hr"/>
            </div>
        </div>
    );
}