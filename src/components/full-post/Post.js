import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TechnologyIcons from "./TechnologyIcons";

const Post = () => {
  const [post, setPost] = useState([]);
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
    <div className="m-4">
      <div className="flex justify-center">
        <img
          alt={`${post.title}`}
          src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          className="md:w-1/2 object-cover w-full h-2/5"
        />
      </div>
      <div
        className="flex flex-col justify-center items-center
      "
      >
        <div className="flex justify-center flex-col items-center">
          <h1 className="font-semibold text-3xl mt-3">{post.title}</h1>
          <p className="m-1">{post.date}</p>
          {post.technologies && <TechnologyIcons post={post.technologies} />}

          <p>
            Check out this project:{" "}
            <a
              className="font-semibold text-red-main"
              target="{_blank}"
              href={`${post.link}`}
            >
              {post.link}
            </a>
          </p>
          <p className="mt-1">
            Check out this repo:{" "}
            <a
              className="font-semibold text-red-main"
              target="{_blank}"
              href={`${post.repo}`}
            >
              {post.repo}
            </a>
          </p>
          <p className="m-3 font-medium md:w-2/3">{post.description}</p>
        </div>
        <div className="md:w-3/4 flex justify-center flex-col items-center ">
          <p className="ml-3 mr-3 md:w-2/3 text-justify">{post.paragraph1}</p>
          <p className="m-3 md:w-2/3 text-justify">{post.paragraph2}</p>
        </div>
        Videos
        <div className="mb-4">{post.videos}</div>
      </div>
    </div>
  );
};

export default Post;
