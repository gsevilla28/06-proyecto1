export const GuardarEnStorage = (itemKey, item) => {
  //extraer los elementos que tiene localstorage
  let elementos = JSON.parse(localStorage.getItem(itemKey));

  //verificar si es un array
  if (!Array.isArray(elementos)) {
    elementos = [item];
  } else {
    elementos.push(item);
  }
  //Guardar
  localStorage.setItem(itemKey, JSON.stringify(elementos));
  // console.log(elementos);
  return elementos;
  //devolver respuesta
};
