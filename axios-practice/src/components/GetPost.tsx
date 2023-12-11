import { useState, useEffect } from "react";
import { ResponseAPI } from "../api/client";
import { getPosts } from "../utils/getData";

export const GetPost = () => {
  const [posts, setPosts] = useState<ResponseAPI[]>([]); //configuracion de axios en el estado
  //const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //implementar loading
    // start loading
    getPosts().then((data) => setPosts(data)); //resolviendo promise y estableciendo data
    //finished loandig {setIsLoading(false); }
  }, []);

  return (
    <>
      <h1>Get Post</h1>
      <br />
      <h2>Post list</h2>

      <div className="grid">
        {posts.map(
          (
            post //recorrido y render de los datos del response
          ) => (
            <div key={post.id}>
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
