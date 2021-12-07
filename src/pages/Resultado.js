import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button/Button";
import '../styles/resultado.scss';

export const Resultado = () =>{

    const {register, handleSubmit} = useForm();

    const onSubmit = (e) =>{
        console.log(e);
    }

    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g, '');
    }

    return(
        <div className="container-resultado">
            <div className="card-resultado">
                <hr size="8"  className="hr-resultado"/>
                <form className="form-resultado">
                    <div className="content-input-result"> 
                        <div>                                 
                            <label>Cep:</label>
                            <input className="input-resultado"style={{width:250}} type="text" {...register("cep")} />                    
                        </div>
                        <div className="div-result">                            
                            <label>Município / UF:</label>
                            <input className="input-resultado" style={{width:250}} type="text" {...register("county")} />
                        </div>
                        <div className="div-result">
                            <label>Bairro:</label>
                            <input className="input-resultado" style={{width:250}} type="text" {...register("district")} />
                        </div>
                    </div>        
                    <label>Logradouro:</label>
                    <input className="input-resultado" type="text" {...register("address")} />
                                                                                                           
                </form>
                <div>
                    <Button tipo="novaBusca" label="Nova Busca" />
                    <Button tipo="imprimir" label="Imprimir" />
                </div>
                <hr size="8"  className="hr-resultado"/>                
            </div>
        </div>        
    );
}