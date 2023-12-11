import { useState, useEffect } from "react";
import { ResponseAPI } from "../api/client";
import { getPosts } from "../utils/getData";
import { updatePost } from "../utils/updatePost";

export const UpdatePost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([]); //configuracion de axios en el estado
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //implementar loading
    // start loading
    getPosts().then((data) => setPosts(data)); //resolviendo promise y estableciendo data
    //finished loandig {setIsLoading(false); }
  }, []);

  const handleUpdate = async (id: number) => {
    const title = "Title updated";
    const body = "Body updated";
    const userId = Date.now();

    const postUpdated = await updatePost({ id, title, body, userId }); //pasamos los nuevos parametros a la function

    setPosts((prev) => [postUpdated, ...prev.filter((post) => post.id !== id)]); //le indocamos que nos muestre el nuevo array con los datos modificados
  };

  return (
    <>
      <h1>Update Post</h1>
      <br />
      <h2>Click a card</h2>

      <div className="grid">
        {posts.map(
          (
            post //recorrido y render de los datos del response
          ) => (
            <div
              className="card"
              key={post.id}
              onClick={() => handleUpdate(post.id)}
            >
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
