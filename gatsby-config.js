module.exports = {
  siteMetadata: {
    title: `Discount Western Wear`,
    description: `TODO Meta`,
    author: `Habanero Studios`,
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "http://reactcart.local/graphql",
      },
    },
    "gatsby-plugin-layout",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
