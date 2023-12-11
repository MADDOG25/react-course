import { useState, useEffect } from "react";
import { ResponseAPI } from "../api/client";
import { getPosts } from "../utils/getData";
import { deletePost } from "../utils/deletePost";

export const DeletePost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([]); //configuracion de axios en el estado
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //implementar loading
    // start loading
    getPosts().then((data) => setPosts(data)); //resolviendo promise y estableciendo data
    //finished loandig {setIsLoading(false); }
  }, []);

  const handleDelete = async (id: number) => {
    const isSuccess = await deletePost(id); 
    if (isSuccess) setPosts((prev) => prev.filter((post) => post.id !== id)); //resolvemos la promise y obtenemos el valor del boolean y basado en ese valor, actualizar el estado
  };

  return (
    <>
      <h1>Delete Post</h1>
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
              onClick={() => handleDelete(post.id)}
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
