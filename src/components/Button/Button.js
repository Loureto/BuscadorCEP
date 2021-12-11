import React from "react";
import './button.scss';

export const Button = (props) =>{
    return <><button onClick={props.onClick} className="btn">{props.label}</button></>        
} 