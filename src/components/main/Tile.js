import { Link } from "react-router-dom";
import TechnologyIcons from "../full-post/TechnologyIcons";

const Tile = ({ post }) => {
  const mostUsedTechs = post.technologies.split(",").slice(0, 4).join(",");
  return (
    <Link
      to={`/post/${post.id}`}
      className="w-80 border-2 hover:border-gray-400 justify-center m-4 rounded-2xl mb-4 h-tileHeight shadow"
    >
      <div>
        {post.demoImage ? (
          <img
            className="rounded-2xl p-2 "
            alt={`${post.title}`}
            src={`assets/demo/${post.demoImage}`}
          />
        ) : (
          <img
            className="rounded-2xl p-2 "
            src={`assets/pictures/default-image.jpg`}
            alt={`${post.title}`}
          />
        )}
      </div>
      <div className="body flex items-center flex-col h-full">
        <h1 className="text-2xl font-semibold mt-4">{post.title}</h1>
        <p className="text-sm mt-2">{post.date}</p>
        <p className="m-4">{post.description}</p>
        <div>
          {" "}
          {post.technologies !== null ? (
            <TechnologyIcons technologies={mostUsedTechs} />
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default Tile;
