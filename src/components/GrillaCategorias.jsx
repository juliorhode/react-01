// las importaciones se deben poner en orden jerarquico.... primero react, luego las importaciones de terceros y de ultimo nuestro codigo, y por ultimo funciones que no son componentes o hooks
// import { useState, useEffect } from "react";
// import { getImagen } from "../utilidades/getImagen";
import { Items } from "./Items";

import {useFetchGif} from '../hooks/useFetchGif'

// recibiremos como props la categoria
export const GrillaCategorias = ({ categoria }) => {
  // const [counter, setCounter] = useState(10);

  // const [imagenes, setImagenes] = useState([]);

  // ejecutaremos una peticion http para traer las imagenes. Esto genera ruido y por cada elemento esto se incrementa. esto es debido a que las funciones nuca deben ir dentro de un functional component porque cada vez que esta funcion se renderice va a volver a ejecutar esa funcion y ejecutaria la peticion http, y para esto debemos utiliazar un hook que se llama useEffect. Este sirve para disparar efectos secundarios (algun proceso que se quiera ejecutar cuando algo suceda)
  // getImagen(categoria);

  // useEffect no se puede usar async porque el espera una funcion y no una promesa
  // useEffect(() => {
  //   getImagen(categoria).then((img) => setImagenes(img));
  // }, []);

  // tambien podemos hacer esto por si no nos gusta la anidacion con el .then
  // const getImg = async () => {
  //   const elem = await getImagen(categoria);
  //   setImagenes(elem);
  // };
  // useEffect(() => {
  //   getImg();
  // }, []);
  // Este codigo se fue al hook 

  // creacion de hook personalizado useFetchGif (cabe destacar que por convension, los hooks comienzan con la palabra use)
  const {imagenes, isLoading} = useFetchGif(categoria)
  // console.log({isLoading});

  return (
    <>
      <h3>{categoria}</h3>
      {
        // si isLoading esta en true, va a ejecutar el h2... esta es una manera corta de if
        isLoading && (<h2>Cargando...</h2>)
      }
      {/* <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}
      <div className="card-grid ">
        {
          
          // imagenes.map( (img)  =>(
          //   // <li key={id}>{titulo}</li>
            
          //   // Creamos un nuevo componente para que se encargue de crear las tarjetas con el id, titulo y las imagenes
          //   // si queremos colocar una clase de css, debemos utilizar className (para html en react) y no Class porque como estamos en javascript eso es una palabra reservada para crear una clase
            
          //   <Items key={img.id} titulo={img.titulo} url={img.url}/>

          //   ))
            
            // este patron es comun cuando se trabaja con los componente, la cual se trata de esparcir las props. Tenemos que mandar el titulo y la url, y sabemos que estan en img, utilizamos el operador spread ( ...img ) para esparcirlo. Es decir, todas las propiedades de img se las esparzo a Items. Esto sirve para que Items reciba cada una de las propiedades que tiene la imagen como properties. Esto es muy util, ya que si serian 100 propiedades, no tenemos la necesidad de escribirlas una por una
            imagenes.map( (img)=>(
              <Items key={img.id} {...img} />
            ))
        }
      </div> 
    </>
  );
};