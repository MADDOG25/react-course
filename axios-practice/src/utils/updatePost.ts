import { client, ResponseAPI } from "../api/client";

interface Props{ //se definen los parametros que recivira la function
    id: number,
    userId: number,
    title: string,
    body: string
}

export const updatePost = async ({id, userId, title, body}: Props): Promise<ResponseAPI> => {
    const { data } = await client.put(`${id}`, { title, body, userId }); //pasamos como segundo parametro los datos a enviar
    return data
}