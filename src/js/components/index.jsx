import React from "react";
import "../../styles/index.css";
import { Relojito, Numeros } from "./Relojito";

export default function Contador({ numerouno = 0, numerodos = 0, numerotres = 0, numerocuatro = 0, numerocinco = 0, numeroseis = 0 }) {
    return (
        <div className="contador">
            <Relojito className="reloj" iconClass="fa-regular fa-clock fa-bounce" style={{ color: "#ffc800" }} />
            <Numeros className="seis" value={numeroseis} />
            <Numeros className="cinco" value={numerocinco} />
            <Numeros className="cuatro" value={numerocuatro} />
            <Numeros className="tres" value={numerotres} />
            <Numeros className="dos" value={numerodos} />
            <Numeros className="uno" value={numerouno} />
        </div>
    );
}