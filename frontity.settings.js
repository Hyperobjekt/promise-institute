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
    // {
      // name: "@frontity/yoast",
      // yoast: {
      // transformLinks: {
      //   ignore: "^(wp-(json|admin|content|includes))|feed|comments|xmlrpc",
      //   base: "https://wp.mysite.com",
      // },
    // },
    "@frontity/tiny-router",
    "@frontity/html2react",
    // "@frontity/yoast",
  ]
};

export default settings;
