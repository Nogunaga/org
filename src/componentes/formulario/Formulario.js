import { useState } from "react";
import "./Formulario.css";
import Campo from "../campo";
import ListaOpciones from "../listaOpcion";
import Boton from "../boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEqupo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const envio = (e) => {
    e.preventDefault();
    let enviarDatos = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    };
    registrarColaborador(enviarDatos);
    actualizarNombre(""); actualizarPuesto(""); actualizarFoto(""); actualizarEqupo(""); 
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
    actualizarTitulo(""); actualizarColor("");
  };

  return (
    <section className="formulario">
      <form onSubmit={envio}>
        <h2>Ingresa al colaborador del Equipo.</h2>
        <Campo
          titulo="Nombre"
          placeholder="Ingrese Nombre"
          valor={nombre}
          actualizarValor={actualizarNombre}
        />

        <Campo
          titulo="Puesto"
          placeholder="Ingrese Puesto"
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />

        <Campo
          titulo="Foto"
          placeholder="Ingrese enlace de Github.png"
          valor={foto}
          actualizarValor={actualizarFoto}
        />

        <ListaOpciones
          valor={equipo}
          actualizarEqupo={actualizarEqupo}
          equipos={props.equipos}
        />

        <Boton texto="Crear" />
      </form>

      {/* form para ingresar  equipos */}
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Crea al Equipo.</h2>
        <Campo
          titulo="titulo"
          placeholder="Ingrese Titulo"
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />

        <Campo
          titulo="Color"
          placeholder="Ingrese el color del equipo en Hexagecimal "
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />

        <Boton texto="Registrar  Equipo" />
      </form>
    </section>
  );
};

export default Formulario;
