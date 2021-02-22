const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")


const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Austin Redd UI Designer & Developer",
    author: "Austin Redd",
    description: "Personal site of Austin Redd a UI Designer & Developer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Tailwind CSS",
        short_name: "Gatsby Starter Tailwind CSS",
        start_url: "/",
        background_color: "#292D3E",
        theme_color: "#38b2ac",
        icon: "static/icon.svg",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-58877028-1`,
        head: false,
        cookieDomain: `austinredd.com`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
