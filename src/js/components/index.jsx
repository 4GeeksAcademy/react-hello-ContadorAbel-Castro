import React from "react";
import "../../styles/index.css";
import { Relojito, Numeros } from "./Relojito";

export default function Contador(props) {
    return (
        <div className="contador">
            <Relojito className="reloj" iconClass="fa-regular fa-clock fa-bounce" style={{ color: "#ffc800" }} />
            <Numeros className="seis" value={props.numeroSeis} />
            <Numeros className="cinco" value={props.numeroCinco} />
            <Numeros className="cuatro" value={props.numeroCuatro} />
            <Numeros className="tres" value={props.numeroTres} />
            <Numeros className="dos" value={props.numeroDos} />
            <Numeros className="uno" value={props.numeroUno} />
        </div>
    );
}