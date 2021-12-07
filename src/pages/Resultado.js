import React from "react";
import { Form } from "../components/Form/Form";
import '../components/Card/card.scss';

export const Resultado = () =>{
    return(
        <div className="container">
            <div className="card">
            <hr size="8"  className="hr"/>
            <Form />
            <hr size="8"  className="hr"/>
            </div>
        </div>        
    );
}