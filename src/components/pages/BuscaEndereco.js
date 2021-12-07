import React from "react";
import { Form } from "../Form/Form";
import '../Card/card.scss';

export const BuscaEndereco = () =>{
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