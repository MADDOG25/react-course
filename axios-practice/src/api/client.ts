import axios from 'axios';

export const client = axios.create({ //instance: herramienta axios para traer datos de la url
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export interface ResponseAPI{ //configuracion de headers que quiero recibir de la API
    userId: number;
    id: number;
    title: string;
    body: string;
}