import { useState, useEffect } from "react";

export function useFetch(url){
const [data, setData] = useState(null);
const [loading, setLoading] = useState(null);
const [error, setError] = useState(null);
const [controller, setController] = useState(null);
    //creamos una funcion que guardara el estado como null y la function setData
    useEffect(() => {
        const abortController = new AbortController();
        setController(abortController);
        setLoading(true);

        fetch(url, {signal: abortController.signal})
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log('Request cancelled');
            }else{
                setError(error);
            }})
        .finally(() => setLoading(false));

        return () => abortController.abort();
    }, []);

    const handleCancelRequest = () => {
        if (controller){
            controller.abort();
            setError('Request cancelled');
        }
        
    }
    return {data, loading, error, handleCancelRequest};
}