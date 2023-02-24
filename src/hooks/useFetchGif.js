// como este hook no va a devolver ningun elemento html, la extesion es js... pero si fuere el caso, usariamos jsx

// un functional component devuelve un jsx. Un hook no es mas que una funcion que regresa algo, que en este caso esta regresando un objeto
import { useEffect, useState } from "react";
import { getImagen } from "../utilidades/getImagen";

export const useFetchGif = (categoria) => {
  const [imagenes, setImagenes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const getImg = async () => {
    const elem = await getImagen(categoria);
    // gracias a react 18, esto no dispara dos renderizaciones, solo una
    setImagenes(elem);
    setIsLoading(false);
  };
  useEffect(() => {
    getImg();
  }, []);

  return {
    // imagenes: imagenes,
    // como la propiedad se llama igual al valor, podemos dejarlo de esta manera
    imagenes,
    isLoading
  };
};
