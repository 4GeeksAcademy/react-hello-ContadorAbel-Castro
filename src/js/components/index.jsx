import React from "react";
import "../../styles/index.css";
import { Relojito, Numeros } from "./Relojito";

export default function Contador(props) {
    return (
        <div className="contador">
            <Relojito className="reloj" iconClass="fa-regular fa-clock fa-bounce" style={{ color: "#ffc800" }} />
            <Numeros className="seis" value={props.numeroseis} />
            <Numeros className="cinco" value={props.numerocinco} />
            <Numeros className="cuatro" value={props.numerocuatro} />
            <Numeros className="tres" value={props.numerotres} />
            <Numeros className="dos" value={props.numerodos} />
            <Numeros className="uno" value={props.numerouno} />
        </div>
    );
}