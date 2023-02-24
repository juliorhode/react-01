// no hace falta hacer el import de ract porque en el archivo vite.config.js ya esta especificado de manera global
// import React from 'react'

import { useState } from "react";
// import { AgregaCategoria } from "./components/AgregaCategoria";
// import { GrillaCategorias } from "./components/GrillaCategorias";

// esto se debe al index que se encuentra en la carpeta componentes. es mas elegante
import {AgregaCategoria,GrillaCategorias} from './components'

export const GifApp = () => {
  // si tenemos una informacion y tiene que cambiar el html, necesitamos un hook de react para mantener el estado como el useState. Podemos usar el snipet useStateSnippet para que nos cree la estructura automaticamente

  const [categorias, setCategorias] = useState(["One Punch"]);

  const agregaCategoria = (nuevaCategoria) => {
    // console.log(nuevaCategoria);
    // console.log('hola');

    // no se puede usar push como se acostumbra en arreglos porque eso muta el objeto, y en react debemos evitar mutar el objeto.

    // aqui verificamos si la nueva categoria esta incluida ya en las categorias almacenadas, si esta, pues se sale y que no la guarde
    if (categorias.includes(nuevaCategoria)) return;

    // forma 1
    // setCategorias( [...categorias,'Valorant'] )
    // aqui agregamos un valor y usamos el spred para luego crear un nuevo arreglo y mandarlo
    // setCategorias( ['Valorant',...categorias] )
    setCategorias([nuevaCategoria, ...categorias]);

    // forma 2
    // usamos el caalback que se le puede mandar al useState
    // setCategorias( cat => [...categorias,'Valorant'] )
  };

  // console.log(categorias);
  return (
    <>
      {/* {titulo} */}
      <h1>GifApp</h1>
      {/* inputp */}
      {/* podriamos hacer esto pero esto viola los principios de responsabilidad unica, y es recomendado trabajemos nuestros componentes de forma segmentada y que cada uno de ellos se dediquen a una tarea en especifico... asi que creamos un nuevo componente en src/components/AgregaCategoria.jsx*/}
      {/* <input type="text" /> */}

      {/* <AgregaCategoria agregar={setCategorias}/> */}
      {/* <AgregaCategoria agregar={'hola desde props'} /> */}

      {/* <AgregaCategoria onNuevaCategoria = {event =>agregaCategoria(event)}/> */}
      <AgregaCategoria onNuevaCategoria={agregaCategoria} />

      {/* listado de tarjetas con las imagenes */}
      {/* <button onClick={agregaCategoria}>Agragar</button> */}

      {/* para renderizar un listado basado en las categorias */}
      {/* <ol> */}
        {/* NOTA: no se debe usar el index del map ya que react maneja su propio indice 
        
        */}
        {/* {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })} */}

        {/* {
          // esto es muy comun ver (devuelve el objeto con el div, el h3 y el li) pero mejor seria crear un componente que se encargue de realizar esta tarea
          categorias.map( (categoria) =>(
            // <div key={categoria}>
            //   <h3>{categoria}</h3>
            //   <li>{categoria}</li>
            // </div>
            <GrillaCategorias />
          ))
        } */}

        {/* al realizar esto me aparece: "Warning: Each child in a list should have a unique "key" prop."  para ello debemos colocar el key de la categoria pero no la mando como una properties a GrillaCategorias. GrillaCategorias espera una props llamada categoriaasi que se la enviamos  
        
        OJO: el nombre de las propiedades no tienen nada que ver con lo que se envia..... coloque el mismo nombre para saber que es lo que envio

        los <ol></ol> fueron comentados porque ya no tienen sentido, porque el componente GrillaCategorias se va a encargar de esa tarea
        */}
        {categorias.map((categoria) => (
          <GrillaCategorias key={categoria} categoria={categoria} />
        ))}
      {/* </ol> */}
    </>
  );
};
