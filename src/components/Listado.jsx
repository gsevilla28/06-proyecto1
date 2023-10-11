import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    //console.log("componente del listado de peliculas");
    getMovies();
  }, []);

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(movies);
    // console.log(movies);

    return movies;
  };

  const borrarPeli = (id) => {
    let movies = getMovies();
    let nuevoListado = movies.filter((movie) => movie.id !== parseInt(id));
    if (nuevoListado.length === 0) {
      setListadoState(null);
      localStorage.removeItem("pelis");
      return;
    }

    setListadoState(nuevoListado);
    localStorage.setItem("pelis", JSON.stringify(nuevoListado));
  };
  return (
    <>
      {listadoState ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                eliminar
              </button>
              {/* formulario para editar */}
              {editar === peli.id && (
                <Editar
                  peli={peli}
                  getMovies={getMovies}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay informacion para mostrar</h2>
      )}
    </>
  );
};
