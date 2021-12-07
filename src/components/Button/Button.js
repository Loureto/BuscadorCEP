import React from "react";
import { useNavigate } from "react-router";
import './button.scss';

export const Button = (props) =>{
    const navigate = useNavigate();

    const tipo = {
        buscaEndereco: 'buscaEndereco',
        buscaCep: 'buscaCep',
        btnVoltar: 'voltar',
        btnBuscar: 'buscar',
        btnNovaBusca: 'novaBusca',
        btnImprimir: 'imprimir'
    }

    const handleClickBuscaEndereco = () =>{
        navigate('/BuscaEndereco');
    }
    
    const handleClickBuscaCep = () =>{
        navigate('/BuscaCep');
    }

    const handleClickVoltar = () =>{
        navigate('/');
    }

    const handleClickBuscar = () =>{
        navigate('/Resultado');
    }

    const handleClickNovaBusca = () =>{
        navigate('/BuscaEndereco');
    }

    return(
        <>
            {props.tipo === tipo.buscaEndereco &&
                <button onClick={handleClickBuscaEndereco} className="btn">{props.label}</button>
            }

            {props.tipo === tipo.buscaCep &&
                <button onClick={handleClickBuscaCep} className="btn">{props.label}</button>
            }

            {props.tipo === tipo.btnVoltar &&
                <button onClick={handleClickVoltar} className="btn">{props.label}</button>
            }

            {props.tipo === tipo.btnBuscar &&
                <button onClick={handleClickBuscar} className="btn">{props.label}</button>
            }

            {props.tipo === tipo.btnNovaBusca &&
                <button onClick={handleClickNovaBusca} className="btn">{props.label}</button>
            }

            {props.tipo === tipo.btnImprimir &&
                <button className="btn">{props.label}</button>
            }
        </>  
    );
} 