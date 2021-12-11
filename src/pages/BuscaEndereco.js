import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button/Button";
import { Label } from "../components/Label/Label";
import { Loading } from "../components/Loading/Loading";

import { api } from "../services/api";
import SaveValues from "../storage/globalStorage";

import '../styles/buscaendereco.scss';


export const BuscaEndereco = () =>{
    const navigate = useNavigate();
    const [valor, setValor] = React.useState([]);

    const cep = "Cep";
    const logradouro = "Logradouro";
    const bairro = "Bairro";
    const uf = "Uf";
    const localidade = "Localidade";

    async function handleClickBuscar(){
        try{
            const response = await api.get(`${valor}/json`);
            if(!response.data.erro){ 
                let _cep = response.data.cep;
                let _logradouro = response.data.logradouro;
                let _bairro = response.data.bairro;
                let _uf = response.data.uf;
                let _localidade = response.data.localidade;

                await SaveValues(cep, _cep);
                await SaveValues(bairro, _bairro);
                await SaveValues(uf, _uf);
                await SaveValues(localidade, _localidade);
                await SaveValues(logradouro, _logradouro);
                navigate('/Resultado');        
            }
        }catch(e){
            alert('error');
        }
    }

    const handleClickVoltar = () =>{
        navigate('/');
    }

    return(
        <div className="container-buscaend">            
            <div className="content-buscaend">
                <hr size="8"  className="hr-buscaend"/>                
                <form className="card-buscaend">
                    <Label texto="Cep"/>
                    <input 
                    type="text" 
                    onChange={({target}) => setValor(target.value)}
                    className="input-buscaend" />
                </form>
                    
                <div className="card-btn">
                    <Button onClick={handleClickVoltar} tipo="voltar" label="Voltar"/>
                    <Button onClick={handleClickBuscar} tipo="buscar" valor={valor} label="Buscar"/>
                </div>                
                
                <hr size="8"  className="hr-buscaend"/>
            </div>            
            
                        
        </div>        
    );
}