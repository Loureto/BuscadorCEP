import React from "react";
import './inputtext.scss';

export const InputText = (props) =>{
    return <input className="input-text" id={props.id} value={props.value} placeholder={props.placeholder} type={props.type} onChange={props.onChange} />
}