module.exports = {
  blogPostDir: "posts",          // The name of directory that contains your posts.
  siteTitle: "Juan Ojeda",              // Site title.
  siteTitleAlt: "",                     // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png",     // Logo used for SEO and manifest.
  siteUrl: "http://www.juanojeda.com",  // Domain of your website without pathPrefix.
  pathPrefix: "/",                      // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "",                  // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml",                  // Path to the RSS file.
  siteFBAppID: undefined,               // FB Application ID for using app insights
  googleAnalyticsID: undefined,         // GA tracking ID.
  disqusShortname: undefined,           // Disqus shortname.
  postDefaultCategoryID: "Tech",        // Default category for posts.
  userName: "Juan Ojeda",               // Username to display in the author segment.
  userLocation: "Melbourne, Australia", // User location to display in the author segment.
  userAvatar: "https://en.gravatar.com/userimage/2598878/847fab29455c8315bfdbf06dfaaaaa5f.jpg?size=250", // User avatar to display in the author segment.
  userDescription:
    "I write recipes, thoughts about food, thoughts about tech and design, and other random stuff.",   // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/juanojeda",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:hi@juanojeda.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Juan Ojeda",  // Copyright string for the footer of the website and RSS feed.
  themeColor: "#991d4e",                      // Used for setting manifest and progress theme colors.
  backgroundColor: "#edf3f4"                  // Used for setting manifest background color.
};
