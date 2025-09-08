import React from "react";

export function Relojito({ className = "", style = {}, iconClass = "far fa-clock" }) {
  return (
    <div className={className}>
      <i className={iconClass} style={style}></i>
    </div>
  );
}

export function Numeros({ value, className = "" }) {
  return <div className={className}>{value % 10}</div>;
}
