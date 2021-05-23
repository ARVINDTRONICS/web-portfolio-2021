/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const defaultOptions = {
  basePath: ``,
  path: `${__dirname}/src/`,
  imagesPath: `${__dirname}/src/images/`,
  iconFile: `${__dirname}/src/images/coder.png`,
  typographyPath: `${__dirname}/src/utils/typography`,
  siteTitle: `CV`,
  siteURL: `https://arvind-thoppe.netlify.app/`,
  siteName: `Arvind Kumar Thoppe`,
  siteShortName: `TS`,
  siteDescription: `This cool App contains information about my work experience as a software developer.`,
  siteKeywords: `Gatsbyjs, CV,Resume,Software Engineer, Work portfolio, Full Stack Developer`,
  useMozJpeg: true,
  menuLinks: [
    // title = Link text
    // color = Animation background color on click
    { name: `home`, title: `Home`, color: `#000`, link: `` },
    { name: `experience`, title: `Experience`, color: `#3a3d98`, link: `` },
    { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
    { name: `Hobby`, title: `Works`, color: `#d52d3`, link: `` },
    { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
    // { name: ``, title: `Batman`, link: `/imBatman`, color: `yellow` },
  ],
  email: `tsarvind996@gmail.com`,
  social: {
    // Usernames
    gitHub: `/ARVINDTRONICS`,
    linkedIn: `in/arvindkumarts/`,
    // resumeInPdf: `/CV-20.pdf`, // url or local link
  },
  homePage: {
    availableToHire: true,
    dotColors: ["#0e3e1e", "#6CC551"],
    h1Text: `Hi!, I'm Arvind Kumar`,
    h2Text: `I'm a UI engineer and I work with web technologies and modern libraries like ReactJS 😎`,
    typewriter: [
      `I had previously worked on Information Security and in Mobile Testing before falling in love with web app development and Javascript 🤓`,
      `I try to follow best practices and learn continously from the software community 👨‍🏫`,
      `I can get shit done and always ready to take on new challenges 🙌`,
      `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
      `I like to share what I know and a good team player 👬`,
      `In my non-coding hours, I play mobile games,watch series/movies,catch up with friends and try to pick up new hobbies 🎮`,
    ],
  },
  // Color for menu background
  shapeColor: {
    link: { color: "#171616", hover: "#fff" },
    shape1: {
      color: `#413f46`,
      opacity: `0.7`,
    },
    shape2: {
      color: `#e6e5ea`,
      opacity: `0.7`,
    },
    shape3: {
      color: `#fff`,
      opacity: `0.7`,
    },
  },
  footer: `heart`,
}
const {
  basePath,
  path,
  imagesPath,
  iconFile,
  typographyPath,
  siteTitle,
  siteUrl,
  siteName,
  siteShortName,
  siteDescription,
  siteKeywords,
  useMozJpeg,
  menuLinks,
  email,
  social,
  homePage,
  shapeColor,
  footer,
} = defaultOptions

module.exports = {
  siteMetadata: {
    title: siteTitle,
    siteName,
    siteKeywords,
    siteDescription,
    siteUrl,
    basePath,
    menuLinks,
    email,
    social,
    homePage,
    shapeColor,
    footer,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: imagesPath,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: typographyPath,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteName,
        short_name: siteShortName,
        description: siteDescription,
        lang: `en`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: iconFile,
        icon_options: {
          // For all the options available, please see https://www.gatsbyjs.com/plugins/gatsby-plugin-manifest/.
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: require.resolve(`./src/layout`),
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        // color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/experience/_additionalSkills`],
      },
    },
  ],
}
