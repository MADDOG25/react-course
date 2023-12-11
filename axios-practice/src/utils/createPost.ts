import { client, ResponseAPI } from "../api/client";

export const createPost = async (
  title: string,
  body: string,
  userId: number
): Promise<ResponseAPI[]> => {
  //establecemos parametros necesarios para hacer un post
  const { data } = await client.post("", { title, body, userId }); //pasamos como segundo parametro los datos a enviar
  return data;
};
