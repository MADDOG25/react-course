export const Posts = () => {
    return <button onClick={(e) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }}>
        Traer Datos
    </button>
    
}