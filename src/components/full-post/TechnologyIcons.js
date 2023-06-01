import React from "react";

const iconMapping = {
  reactjs: "react.svg",
  javascript: "javascript.svg",
  php: "php.svg",
  sql: "sql.svg",
  html: "html.svg",
  css: "css3.svg",
  python: "python.svg",
  tailwind: "tailwind.svg",
  api: "api.svg",
  redux: "redux.svg",
  wix: "wix.svg",
  wordpress: "wordpress.svg",
  nodejs: "node-js.svg",
  flask: "flask.svg",
  aws: "aws.svg",
  googleMapsApi: "google-maps.svg",
  mongoDB: "mongodb.svg",
  reactspring: "reactSpring.svg",
};

const TechnologyIcons = ({ technologies }) => {
  const icons = technologies
    .split(",")
    .map((icon) => icon.trim().toLowerCase());
  return (
    <div className="flex flex-wrap h-auto">
      {icons.map((icon) => (
        <div className="m-1" key={icon}>
          {iconMapping[icon] && (
            <div className="flex flex-col items-center m-1">
              <img
                className="h-10"
                alt={icon}
                src={`/icons/${iconMapping[icon]}`}
              />
              <p>{icon.charAt(0).toUpperCase() + icon.slice(1)}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechnologyIcons;
