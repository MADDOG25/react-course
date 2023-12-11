import {AxiosError} from 'axios';
import { client, ResponseAPI } from "../api/client";

export const getPosts = async (): Promise<ResponseAPI[]> => {
    try{
        const { data } = await client.get<ResponseAPI[]>("?_limit=6"); //usar comillas simples o doble para no agregaar mas parametros
        return data;
    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
        console.log(err.name)
        return []
    }
};
