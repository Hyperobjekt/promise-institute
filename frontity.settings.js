import { config } from "dotenv";
config();

console.log(process.env);
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
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            ["Blog", "/blog/"],
            ["Reports", "/reports/"],
            ["Resources", "/resources/"],
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": process.env.WP_API
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
