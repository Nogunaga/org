import React from "react";
import "./Campo.css";

const Campo = (props) => {
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };

  const { type = "text" } = props;

  return (
    <div className= {`campo campo-${type}`}>
      <label>{props.titulo.toUpperCase()}</label>
      <input
        required
        placeholder={props.placeholder}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
    </div>
  );
};

export default Campo;
