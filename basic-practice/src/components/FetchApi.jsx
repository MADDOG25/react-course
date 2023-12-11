import { useState, useEffect } from "react";

export default function FetchApi() {
  const [dataUsers, setDataUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json()) //Llamada a la API
      .then((users) => {
        setDataUsers(users); //Guardamos los datos
        setIsLoading(false); //Desactivammos modo cargando
      })
      .catch((error) => console.log(error)); //Capturar error
  }, []);

  if (isLoading) {
    //Si esta cargando, mostramos un texto que nos indique
    return (
      <>
        <div className="App">
          <h1>Cargando</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <h2>Fetch API</h2>
      <ul>
        {dataUsers.map((users) => ( //Metdo para recorrer el array de usuarios
          <li key={users.id}>{users.name}</li> //Mostrar cada usuario por su "key" y "nombre"
        ))}
      </ul>
    </>
  );
}
