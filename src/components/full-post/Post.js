import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import TechnologyIcons from "./TechnologyIcons";
import Videos from "./Videos";

const Post = () => {
  const [post, setPost] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://marteiduel.com/blog/api/blog.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data[0]);
      });

    fetch(`https://marteiduel.com/blog/api/videos.php?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, [id]);

  return (
    <div className="m-4">
      <div className="flex justify-center">
        {post.image ? (
          <video
            controls
            autoPlay
            muted
            loop
            className=" object-cover w-auto md:w-3/4"
          >
            <source src={`/assets/blog/${post.image}`} type="video/mp4" />
          </video>
        ) : (
          <img
            src="/assets/pictures/default-image.jpg"
            alt="blog post"
            className=" object-cover w-auto md:w-3/4 rounded-lg"
          />
        )}
      </div>
      <div
        className="flex flex-col justify-center items-center
      "
      >
        <div className="flex justify-center flex-col items-center md:w-2/3">
          <h1 className="font-semibold text-3xl mt-3">{post.title}</h1>
          <p className="m-1">{post.date}</p>
          {post.technologies && (
            <TechnologyIcons
              className="flex"
              technologies={post.technologies}
            />
          )}

          {post.link === "" ? null : (
            <div className="flex justify-center items-center flex-col">
              Check out this project:{" "}
              {post.link && (
                <a
                  className="font-semibold text-red-main"
                  target="{_blank}"
                  href={`${post.link}`}
                >
                  {post.link}
                </a>
              )}
            </div>
          )}

          {post.repo === "" ? (
            <div className="flex justify-center items-center flex-col">
              Check out my Github Profile:{" "}
              <a
                href="https://github.com/marteiduel"
                className="font-semibold text-red-main"
                target="{_blank}"
              >
                Github
              </a>
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col mt-1">
              Check out this repo:{" "}
              <a
                className="font-semibold text-red-main"
                target="{_blank}"
                href={`${post.repo}`}
              >
                {post.repo}
              </a>
            </div>
          )}

          {post.description && (
            <p className="m-3 font-bold md:w-2/3">{post.description}</p>
          )}
        </div>
        <div className="md:w-3/4 flex justify-center flex-col items-center ">
          {post.paragraph1 && (
            <p className="ml-3 mr-3 md:w-2/3 text-justify">{post.paragraph1}</p>
          )}
          {post.paragraph2 && (
            <p className="m-3 md:w-2/3 text-justify">{post.paragraph2}</p>
          )}
          {post.paragraph3 && (
            <p className="m-3 md:w-2/3 text-justify">{post.paragraph3}</p>
          )}
          {post.paragraph4 && (
            <p className="m-3 md:w-2/3 text-justify">{post.paragraph4}</p>
          )}
          {post.paragraph5 && (
            <p className="m-3 md:w-2/3 text-justify">{post.paragraph5}</p>
          )}
        </div>

        {videos.length > 0 && (
          <div className="flex flex-col justify-center items-center m-4">
            <div className="font-semibold text-xl">Videos</div>
            <div>
              <Videos videos={videos} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
