import React from "react";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <div className="flex">
      {videos.map((video) => {
        return (
          <div key={video.id} className="m-4">
            <div>
              <li>
                <a
                  href={`${video.url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-red-main text-base"
                >
                  {video.title}
                </a>
              </li>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
