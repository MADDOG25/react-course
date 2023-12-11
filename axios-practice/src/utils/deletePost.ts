import { client } from "../api/client";

export const deletePost = async (id: number): Promise<boolean> => { //establecemos un boolean que solo devolvera la respuesta de la promise si es satisfactorio
  const { status } = await client.delete(`${id}`); //agregamos el metodo "delete" en la instancia y agregamos el "ID" para el post que queremos eliminar
  return status === 200; //evaluamos el status del codigo
};
