import { Link } from "react-router-dom";

const Tile = ({ post }) => {
  return (
    <div className="w-80 border border-black justify-center m-4 rounded mb-4 h-tileHeight">
      <div>
        {post.demoImage ? (
          <img
            className="rounded"
            alt={`${post.title}`}
            src={`assets/demo/${post.demoImage}`}
          />
        ) : (
          <img
            className="rounded"
            src={`assets/pictures/default-image.jpg`}
            alt={`${post.title}`}
          />
        )}
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
