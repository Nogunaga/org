import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./componentes/header/Header";
import Formulario from "./componentes/formulario/Formulario";
import Hidden from "./componentes/hidden";
import Equipo from "./componentes/equipo";
import Footer from "./componentes/footer";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState(() => {
    const savedColaboradores = localStorage.getItem("colaboradores");
    return savedColaboradores ? JSON.parse(savedColaboradores) : [
      // Valores predeterminados
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/Nogunaga.png",
        nombre: "Daniel",
        puesto: "junior",
        fav: true,
      },
      // Otros valores predeterminados...
    ];
  });

  const [equipos, actualizarEquipos] = useState(() => {
    const savedEquipos = localStorage.getItem("equipos");
    return savedEquipos ? JSON.parse(savedEquipos) : [
      // Valores predeterminados
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9",
      },
      // Otros valores predeterminados...
    ];
  });

  useEffect(() => {
    localStorage.setItem("colaboradores", JSON.stringify(colaboradores));
  }, [colaboradores]);

  useEffect(() => {
    localStorage.setItem("equipos", JSON.stringify(equipos));
  }, [equipos]);

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const colaboradoresActualizados = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(colaboradoresActualizados);
  };

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  const like = (id) => {
    const colaboradoresLikeados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresLikeados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario ? (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      ) : (
        <div></div>
      )}
      <Hidden cambiarMostrar={cambiarMostrar} />
      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
