import React from "react";
import { Button } from "../components/Button/Button";
import { Label } from "../components/Label/Label";
import '../styles/buscaendereco.scss';

export const BuscaEndereco = () =>{
    return(
        <div className="container-buscaend">
            <div className="content-buscaend">
                <hr size="8"  className="hr-buscaend"/>
                    <div className="card-buscaend">
                        <Label texto="Cep"/>
                        <input className="input-buscaend" type="text" />
                    </div>
                    <div className="card-btn">
                        <Button tipo="voltar" label="Voltar"/>
                        <Button tipo="buscar" label="Buscar"/>
                    </div>                
                <hr size="8"  className="hr-buscaend"/>
            </div>
        </div>
    );
}