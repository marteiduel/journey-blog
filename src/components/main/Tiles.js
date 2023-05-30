import React, { useEffect, useState } from "react";
import Tile from "./Tile";

const Tiles = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://marteiduel.com/blog/api/all-blogs.php")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flew-wrap justify-center items-center">
        {posts.map((post) => {
          return <Tile key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default Tiles;
