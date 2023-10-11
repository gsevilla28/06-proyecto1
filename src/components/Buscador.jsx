import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");

  const buscarPeli = (e) => {
    setBusqueda(e.target.value);

    let pelis_encontradas = listadoState.filter((item) => {
      return item.titulo.toLowerCase().includes(busqueda.toLowerCase());
    });
    if (busqueda.length <= 1 || pelis_encontradas.length <= 0) {
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
    }

    //console.log(pelis_encontradas);
    setListadoState(pelis_encontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      <form action="">
        <input
          name="busqueda"
          type="text"
          autoComplete="off"
          value={busqueda}
          onChange={buscarPeli}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
};
