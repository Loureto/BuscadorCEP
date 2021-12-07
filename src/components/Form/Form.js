import React from "react";
import { useForm } from 'react-hook-form';

export const Form = () =>{
    const {register, handleSubmit} = useForm();

    const onSubmit = (e) =>{
        console.log(e);
    }

    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g, '');
    }
    
    return(
        <form>
            <label>Cep:</label>
            <input type="text" {...register("cep")} />

            <label>Rua:</label>
            <input type="text" {...register("address")} />
                
            <label>Número:</label>
            <input type="text" {...register("addressNumber")} />
                
            <label>Bairro:</label>
            <input type="text" {...register("district")} />
                
            <label>Cidade:</label>
            <input type="text" {...register("city")} />
                
            <label>Estado:</label>                            
            <input type="text" {...register("state")} />
        </form>
    );
}