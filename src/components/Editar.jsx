import React from "react";

export const Editar = ({ peli, getMovies, setEditar, setListadoState }) => {
  const tituloComponente = "Editar Pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();

    // extraer formulario
    let target = e.target;

    const peliculasAlmacenadas = getMovies();
    const index = peliculasAlmacenadas.findIndex((item) => item.id === id);

    let peli_actualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };
    //actualizamo el arrray de peliculas
    peliculasAlmacenadas[index] = peli_actualizada;

    //guardar en localstorage
    localStorage.setItem("pelis", JSON.stringify(peliculasAlmacenadas));

    setListadoState(peliculasAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="edit-form">
      <hr />
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo-editado"
          defaultValue={peli.titulo}
        />

        <textarea
          name="descripcion"
          id=""
          cols="30"
          rows="10"
          defaultValue={peli.descripcion}
          className="descripcion-editado"
        />

        <input type="submit" value="Actualizar" className="editar" />
      </form>
    </div>
  );
};
