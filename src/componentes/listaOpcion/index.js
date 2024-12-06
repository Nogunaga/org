import "./ListaOpcion.css";

const ListaOpciones = (props) => {
  

  const manejarCambio = (e) => {
    props.actualizarEqupo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}> <option hidden> Seleccionar especializacion </option>{props.equipos.map((equipo, index) => (

          <option key={index} value={equipo}>
            
            {equipo}
          </option>
        ))}

      </select>
    </div>
  );
};

export default ListaOpciones;
