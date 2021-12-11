import React from "react";
import './inputtext.scss';

export const InputText = (props) =>{
    return <input className="input-text" placeholder={props.placeholder} type={props.type} onChange={props.onChange} />
}