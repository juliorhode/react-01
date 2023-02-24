import { useState } from "react";
// aqui estamos desestructurando  el props que viene desde GifApp en la seccion <AgregaCategoria agregar={'hola desde props'} /> (ejemplo)... nosotros vamos a encontrar <AgregaCategoria agregar={setCategorias} />
export const AgregaCategoria = ({ onNuevaCategoria }) => {
  // cada componente puede tener su propio estado (hook)

  // Si hacemos esto nos saldra este error: "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field"... en pocas palabras, que a la fuerza estamos renderizando el elemento como solo lectura y no se va a poder cambiar. Para poderlo cambiar, tenemos que hacer uso del onChange o se deja de solo lectura
  const [inputValue, setImputValue] = useState("");

  //   const onInputChange = (event) => {
  //     console.log(event.target.value);
  //     setImputValue(event.target.value);
  //   };

  // vamos a desestructurar
  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setImputValue(target.value);
  };

  const onSubmit = (event) => {
    // console.log(event);

    // evitamos el full refresh que hace por defecto el formulario
    event.preventDefault();
    // inputValue es el que vamos a utilizar para actualizar la informacion en el padre
    // console.log(inputValue);

    // aqui nos evitamos que si no colocan nada, nos salimos
    if (inputValue.trim().length <= 1) return;

    // como el useState nos permite enviarle un callback hacemos lo siguiente: En cat vamos a recibir las categorias que estaban en el estado actual y luego insertamos el nuevo elemento seguido de las categorias
    // agregar((cat) => [inputValue, ...cat]);

    // suplantamos lo anterior para solo emitir el nuevo valor al padre y que el se encargue de actualizar el estado
    onNuevaCategoria(inputValue.trim());

    // limpiamos la el input
    setImputValue("");
  };
  return (
    // los fragmentos se usan cuando tenemos elementos o mas de un elemento que va a ser el nodo root de ese componente, en este caso el form es el unico elemento que se esta regresando y dentro puedo tener cualquier cantidad de elementos. Por ejemplo: podemos tener dos input dentro del form, pero lo que no podemos hacer es tener dos input sueltos porque serian hermanos y necesitamos un padre que los contenga y en ese caso que no usaramos un form, usariamos el fragmento

    <form
      // Como estamos mandando una funcion cuyo primer argumento es el argumento que le estoy mandando a la funcion que quiero ejecutar, unicamente vamos a pasar la referencia a esa funcion
      onSubmit={onSubmit}
    >
      {/* el comportamiento por defecto de un formulario es que al dar enter, hace un full refresh del navegador, ya que hace la propagacion de nuestro formulario y para evitarlo debemos utilizar onSubmit
        
        Como estamos mandando una funcion cuyo primer argumento es el argumento que le estoy mandando a la funcion que quiero ejecutar (onSubmit), podemos obviar (event) =>{onSubmit(event)} y unicamente pasar la referencia a esa funcion
        */}
      <input
        type="text"
        value={inputValue}
        placeholder="Buscar gifd"
        //   estamos mandando una funcion cuyo primer argumento es el argumento que le estoy mandando a la funcion que quiero ejecutar (onInputChange), podemos obviar (event) => y unicamente pasar la referencia a esa funcion
        //   onChange={(event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};
