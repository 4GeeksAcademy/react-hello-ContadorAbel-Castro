import React from "react";
import ReactDOM from "react-dom/client";
import "../../styles/index.css";

function Contador(props) {
    return (
        <div className="contador">
            <div className="reloj">
                <i className="fa-regular fa-clock fa-bounce" style={{ color: "#ffc800" }}></i>
            </div>
            <div className="seis">{props.numeroSeis % 10}</div>
            <div className="cinco">{props.numeroCinco % 10}</div>
            <div className="cuatro">{props.numeroCuatro % 10}</div>
            <div className="tres">{props.numeroTres % 10}</div>
            <div className="dos">{props.numeroDos % 10}</div>
            <div className="uno">{props.numeroUno % 10}</div>
        </div>
    );
}

let cuenta = 0;
const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(function () {
    const seis = Math.floor(cuenta / 100000) % 10;
    const cinco = Math.floor(cuenta / 10000) % 10;
    const cuatro = Math.floor(cuenta / 1000) % 10;
    const tres = Math.floor(cuenta / 100) % 10;
    const dos = Math.floor(cuenta / 10) % 10;
    const uno = cuenta % 10;

    root.render(
        <Contador
            numeroUno={uno}
            numeroDos={dos}
            numeroTres={tres}
            numeroCuatro={cuatro}
            numeroCinco={cinco}
            numeroSeis={seis}
        />
    );
    cuenta++;
}, 1000);