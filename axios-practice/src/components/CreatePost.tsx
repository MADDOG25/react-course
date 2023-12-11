import { useState } from "react";
import { ResponseAPI } from "../api/client";
import { createPost } from "../utils/createPost";

export const CreatePost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([]); //configuracion de axios en el estado
  const handleClick = async () => { //resolvemos la promise para crear un post usando async/await
    const newPost = await createPost("new title", "something", Date.now()); //pasamos los parametros necesarios que queremos enviar
    setPosts((prev) => [newPost, ...prev]); //mostramos los nuevos datos de enviamos a la API
  };

  return (
    <>
      <h1>Create Post</h1>
      <button onClick={handleClick}>Add post</button>

      <div className="grid">
        {posts.map(
          (
            post //recorrido y render de los datos del response
          ) => (
            <div key={post.userId}>
              <p>
                Title: <span>{post.title}</span>
              </p>
              <p>
                Body: <span>{post.body}</span>
              </p>
              <p>
                User: <span>{post.userId}</span>
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};
