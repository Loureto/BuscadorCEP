import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button/Button";
import { Report } from "../reports/report";
import { Remove, GetValues } from "../storage/globalStorage";
import { handleSuccess, ToastMsg } from "../util/mensagem";
import { Outlet } from "react-router-dom";
import '../styles/resultado.scss';

export const Resultado = () =>{
    const navigate = useNavigate();

    let bairro = GetValues("Bairro");
    let uf = GetValues("Uf");
    let localidade = GetValues("Localidade"); 
    let cep = GetValues("Cep");
    let logradouro = GetValues("Logradouro");  
    
    React.useEffect(()=>{
        handleSuccess('Cep encontrado!');
    },[]);

    const handleClickNovaBusca = () =>{
        Remove("Cep");
        Remove("Bairro");
        Remove("Uf");
        Remove("Localidade");
        Remove("Logradouro");
        
        navigate('/BuscaEndereco');
    }
    
    return(        
        <div id="resultado" className="container-resultado">
            <div className="card-resultado">
                <hr size="8"  className="hr-resultado"/>
                <form className="form-resultado">
                    <div className="content-input-result"> 
                        <div>                                 
                            <label>Cep:</label>
                            <input className="input-resultado"style={{width:250}} type="text" value={cep} readOnly/>                    
                        </div>
                        <div className="div-result">                            
                            <label>Município / UF:</label>
                            <input className="input-resultado" style={{width:250}} type="text" value={`${localidade}/${uf}`} readOnly/>
                        </div>
                        <div className="div-result">
                            <label>Bairro:</label>
                            <input className="input-resultado" style={{width:250}} type="text" value={bairro} readOnly/>
                        </div>
                    </div>        
                    <label>Logradouro:</label>
                    <input className="input-resultado" type="text" value={logradouro} readOnly/>
                                                                                                           
                </form>
                <div>
                    <Button onClick={handleClickNovaBusca} tipo="novaBusca" label="Nova Busca" />
                    <Button onClick={Report} tipo="imprimir" label="Imprimir" />
                </div>
                <hr size="8"  className="hr-resultado"/>                
            </div>
            <ToastMsg />
            <Outlet />
        </div>        
    );
}