import { Link } from "react-router-dom";
const Tile = ({ post }) => {
  console.log(post);
  return (
    <div
      className="w-80 border border-black justify-center m-4 rounded-md"
      style={{ height: "30rem" }}
    >
      <div className="top">
        <img alt="blog post" src={`https://images.unsplash.com/`} />
      </div>
      <div className="body flex items-center flex-col h-auto">
        <h1 className="text-lg font-semibold mt-4">{post.title}</h1>
        <p className="text-sm mt-2">{post.date}</p>
        <p className="m-4">{post.description}</p>
        <Link
          to={`/post/${post.id}`}
          className="border border-black rounded-lg w-32 h-8 m-2"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Tile;
