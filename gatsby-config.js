require("dotenv").config({
  path: `.env`,
});

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `aboutUs`,
        path: `${__dirname}/src/assets/aboutUs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `welcome`,
        path: `${__dirname}/src/assets/welcome`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `ourTools`,
        path: `${__dirname}/src/assets/ourTools`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `socialMediaIcons`,
        path: `${__dirname}/src/assets/socialMediaIcons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-background-image`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-documentationjs`,
    `gatsby-transformer-sharp`,
  ],
};
