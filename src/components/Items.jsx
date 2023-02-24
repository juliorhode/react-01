// props todo lo que recibimos de aqui: <Items key={img.id} imagen={img}/>.... img.id es la key unica de cada elemento, y ahora en imagen={img} img es lo que recibimos en props
// export const Items = (props) => {
//   console.log(props);
//   return <div>Items</div>;
// };

// pero como  solo necesitamos el titulo y la url de la imagen, aplicamos desestructuracion
export const Items = ({titulo, url}) => {
  // console.log(titulo, url);
  return (
    <div className="card">
      <img src={url} alt={titulo} />
      <p>{titulo}</p>
    </div>
  )

  
};
