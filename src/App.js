import React, { useState } from "react";
import { Listado } from "./components/Listado";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";

const App = () => {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play" />
        </div>
        <h1>Mis Pelis</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        {/* listado de peliculas */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>
      {/* barra lateral */}
      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />

        <Crear setListadoState={setListadoState} />
      </aside>
      {/* pie de pagina */}
      <footer className="footer">© Master en Javascript</footer>
    </div>
  );
};

export default App;
