import React from "react";
import "../../styles/index.css";
import { Relojito, Numeros } from "./Relojito";

export default function Home(props) {
    return (
        <div className="bigCounter">
            <Relojito className="calendar" iconClass="far fa-clock" />
            <Numeros className="seis" value={props.numeroseis} />
            <Numeros className="cinco" value={props.numerocinco} />
            <Numeros className="cuatro" value={props.numerocuatro} />
            <Numeros className="tres" value={props.numerotres} />
            <Numeros className="dos" value={props.numerodos} />
            <Numeros className="uno" value={props.numerouno} />
        </div>
    );
}