export const getImagen = async (categoria) => {
    const limite = 5;
  
    const url = `https://api.giphy.com/v1/gifs/search?api_key=iU2wKq7B5JjXmo7iU3Fok6T2Ix6UgcGi&q=${categoria}&limit=${limite}`;
    const request = await fetch(url);
    // console.log(request);
    const { data } = await request.json();
    // console.log(data);
    const imagen = data.map((img) => ({
      id: img.id,
      titulo: img.title,
      url: img.images.original.url,
    }));
    // console.log(imagen);
    return imagen;
  };