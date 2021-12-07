import React from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import '../../styles/buscacep.scss';

export const BuscaCep = () =>{
    return(
        <div className="container-cep">
            <div className="content-cep">
                <hr size="8"  className="hr-cep"/>
                    <div className="card">
                        <div>
                            <Label texto="Cep"/>
                            <Input />
                        </div>
                    </div>
                    <div className="card-btn">
                        <Button tipo="voltar" label="Voltar"/>
                        <Button tipo="buscar" label="Buscar"/>
                    </div>                
                <hr size="8"  className="hr-cep"/>
            </div>
        </div>
    );
}