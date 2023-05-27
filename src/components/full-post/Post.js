import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]); // [state, setState
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://marteiduel.com/blog/api/blog.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        setPost(data[0]);
      });
  }, [id]);

  return (
    <div>
      <h1>Post: {post.title}</h1>
      <p>{post.id}</p>
    </div>
  );
};

export default Post;
