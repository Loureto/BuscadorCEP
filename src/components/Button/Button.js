import React from "react";
import './button.scss';



export const Button = (props) =>{
    const tipo = {
        buscEnd: 'buscaEnd',
        buscCep: 'buscaCep'
    }
    
    return(
        <>
            {props.tipo === tipo.buscEnd ?
                <button className="btn">{props.label}</button>
                :
                <button className="btn">{props.label}</button>
            }
        </>  
    );
} 