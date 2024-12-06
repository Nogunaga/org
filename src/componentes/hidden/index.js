// import { useState } from "react";
import "./Hidden.css";

const Hidden = (props) => {
//   const [mostrar, actualizarMostrar] = useState(true);
//   const manejarClick = () => {
//     actualizarMostrar(!mostrar);
//   };

  return (
    <section className="orgSection">
      <h3 className="titulo">Mi organización</h3>
      <img src="/img/add.png" alt="imagen de boton" onClick={props.cambiarMostrar} />
    </section>
  );
};

export default Hidden;
