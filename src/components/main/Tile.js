import { Link } from "react-router-dom";

const Tile = ({ post }) => {
  console.log(post);
  return (
    <div className="w-80 border border-black justify-center m-4 rounded-md mb-4 h-tileHeight">
      <div className="top">
        <img
          alt="blog post"
          src={`https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80`}
        />
      </div>
      <div className="body flex items-center flex-col h-full">
        <h1 className="text-lg font-semibold mt-4">{post.title}</h1>
        <p className="text-sm mt-2">{post.date}</p>
        <p className="m-4">{post.description}</p>
        <Link
          to={`/post/${post.id}`}
          className="border border-black rounded-lg w-32 h-8 m-2 flex justify-center items-center"
        >
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default Tile;
