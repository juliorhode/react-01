import { getImagen } from "../../src/utilidades/getImagen"

describe('Pruebas en getImagen', () => { 

  test('debe retornar un arreglo de gifs', async() => { 
    const gifs = await getImagen('one ponch');
    // console.log(gifs);

    // con esto aseguramos que el largo sea mayor a 0
    expect(gifs.length).toBeGreaterThan(0)

    // como lo anterior no nos asegura que venga lo que necesitamos porque puede venir un arreglo de esta forma [123,123,1234,45,45] y la prueba pasaria. Asi que esta prueba siguiente, aseguramos que retorne un arreglo con la estructura esperada
    expect(gifs[0]).toEqual({
      // esperamos que el id,titulo,url contenga cualquier string
      id: expect.any(String),
      titulo: expect.any(String),
      url: expect.any(String)
    })
   })



 })