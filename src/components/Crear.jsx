import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
  const [pelistate, setPelistate] = useState({});

  const tituloComponente = "Añadir pelicula";

  const conseguirDatosForm = (e) => {
    e.preventDefault();
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };
    //Actualizar estado principal
    setPelistate(peli);
    setListadoState((elementos) => {
      if (elementos) return [...elementos, peli];
      else return [peli];
    });

    //Guardar en Localstorage
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      {pelistate.titulo && pelistate.descripcion && (
        <strong> Haz creado la pelicula: {pelistate.titulo} </strong>
      )}
      <form onSubmit={conseguirDatosForm}>
        <input type="text" name="titulo" placeholder="Titulo" />
        <textarea
          name="descripcion"
          id=""
          cols={30}
          rows={10}
          placeholder="descripcion"
          defaultValue={""}
        />
        <input type="submit" defaultValue="Guardar" />
      </form>
    </div>
  );
};
