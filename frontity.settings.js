import { config } from "dotenv";
config();

const settings = {
  "name": "promise-frontity",
  "state": {
    "frontity": {
      "url": process.env.WP_URL,
      "title": "Promise Institute",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "promise-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "theme": {
          menu: []
        },
        "source": {
          "api": process.env.WP_API,
          "homepage": "home",
          // "postsPage": "news",
          "postTypes": [
            {
              type: "project",
              endpoint: "project",
              archive: "/projects"
            },
            {
              type: "report",
              endpoint: "report",
              archive: "/reports"
            }
          ],
          taxonomies: [
            {
              taxonomy: "project_type",
              endpoint: "project_cat",
              postTypeEndpoint: "project"
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
