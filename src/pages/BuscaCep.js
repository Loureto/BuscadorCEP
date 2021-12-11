import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Label } from "../components/Label/Label";
import '../styles/buscacep.scss';

export const BuscaCep = () =>{
    const navigate = useNavigate();

    const handleClickPesquisar = () =>{
        alert('Funcionou');
    }

    const handleClickVoltar = () =>{
        navigate('/');
    }

    return(
        <div className="container-buscacep">
            <div className="card-buscacep">
                <hr size="8"  className="hr-buscacep"/>
                <form className="form-buscacep">
                    <Label texto="Estado"/>
                    <select className="select-buscacep" style={{marginBottom: 10}}>
                        
                    </select>
                    <Label texto="Município"/>
                    <select className="select-buscacep" style={{marginBottom: 10}}>
                        
                    </select>
                    <Label texto="Logradouro"/>
                    <select className="select-buscacep">
                        <option>Nada</option>
                    </select>
                </form>
                <div className="card-btn-buscacep">
                    <Button onClick={handleClickVoltar} tipo="voltar" label="Voltar"/>
                    <Button onClick={handleClickPesquisar} tipo="pesquisar" label="Pesquisar"/>
                </div>
                <hr size="8"  className="hr-buscacep"/>
            </div>
        </div>
    );
}