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
  maps: "google-maps.svg",
  mongoDB: "mongodb.svg",
  reactspring: "reactSpring.svg",
  appsscript: "apps-script.png",
  buildertrend: "builder-trend.jpg",
  calendly: "calendly.png",
  clickSend: "clickSend.png",
  adsense: "adsense.png",
  analytics: "google-analytics.svg",
  "drive api": "google-drive.svg",
  "sheets api": "google-sheets.svg",
  "google admin": "google-admin.png",
  hostinger: "hostinger.png",
  insomnia: "insomnia.jpg",
  jotform: "jotform.png",
  lendingtree: "lending-tree.png",
  lucidchart: "lucidchart.png",
  mosaic: "mosaic.png",
  moxo: "moxo.png",
  postman: "postman.jpg",
  seo: "seo.png",
  zapier: "zapier.svg",
  "media queries": "media-queries.jpg",
  uiux: "uiux.png",
  "gateway aws": "api-gateway.png",
  "cloudwatch aws": "cloudwatch.webp",
  lambda: "lambda.png",
  graphql: "graphql.svg",
  "customer service": "customerservice.svg",
  agile: "agile.svg",
  git: "git.png",
  github: "github.png",
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
