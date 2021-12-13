import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { InputText } from "../components/InputText/InputText";
import { Label } from "../components/Label/Label";
import { api } from "../services/api";
import SaveValues, { Remove } from "../storage/globalStorage";
import { handleErro, ToastMsg } from "../util/mensagem";
import '../styles/buscaendereco.scss';

export const BuscaEndereco = () =>{
    const navigate = useNavigate();
    const [valor, setValor] = React.useState('');

    const cep = "Cep";
    const logradouro = "Logradouro";
    const bairro = "Bairro";
    const uf = "Uf";
    const localidade = "Localidade";

    React.useEffect(()=>{
        document.getElementById('input-buscaCep').focus();
    },[])

    async function handleClickBuscar(){
        try{            
            if(valor === '' || valor === null){
                return handleErro('Preencha o campo Cep!'),
                document.getElementById('input-buscaCep').focus();
            }
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
            handleErro('Cep inválido! Por favor verifique se digitou corretamente');         
            return document.getElementById('input-buscaCep').focus(), setValor('');
        }
    }

    const handleClickVoltar = () =>{
        navigate('/');
    }

    const changeCep = (e) =>{
        let cepp = e.target.value;
        setValor(cepp);
    }

    return(
        <div className="container-buscaend">            
            <div className="content-buscaend">
                <hr size="8"  className="hr-buscaend"/>                
                <form className="card-buscaend" >
                    <Label texto="Cep"/>
                    <InputText type="number" id="input-buscaCep" value={valor} max="8" onChange={changeCep} placeholder="Ex: 69303000"/> 
                </form>                                               
                <div className="card-btn">
                    <Button onClick={handleClickVoltar} tipo="voltar" label="Voltar"/>
                    <Button onClick={handleClickBuscar} tipo="buscar" valor={valor} label="Buscar"/>
                </div>
                <hr size="8"  className="hr-buscaend"/>
            </div>  
            <ToastMsg />          
        </div>        
    );
}