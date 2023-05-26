import React, { useEffect, useState } from "react";

const Tile = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8090/api/collections/posts/records")
      .then((response) => response.json())
      .then((json) => setPost(json.items[0]));
  }, []);

  return (
    <div className="w-80 border border-black h-96 justify-center">
      <div className="top">
        <img
          alt="blog post"
          src={`pb_data/storage/6ok1f5qrn128fb8/v5hetknb7nudlyg/v_ja_uy9wi_ab_Pn0IujXBJw.png`}
        />
      </div>
      <div className="body flex items-center flex-col h-auto">
        <h1 className="text-lg font-semibold">{post.title}</h1>
        <p className="text-sm">{post.date}</p>
        <p>{post.description}</p>
        <button className="border border-black rounded-lg w-32 h-8">
          Read More...
        </button>
      </div>
    </div>
  );
};

export default Tile;
