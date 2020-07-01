const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/RAFNA/Documents/Rafna/MyProjects/No-ide/Jamstack/hello-world/Gatesby-sample-project/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/RAFNA/Documents/Rafna/MyProjects/No-ide/Jamstack/hello-world/Gatesby-sample-project/src/pages/about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/RAFNA/Documents/Rafna/MyProjects/No-ide/Jamstack/hello-world/Gatesby-sample-project/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/RAFNA/Documents/Rafna/MyProjects/No-ide/Jamstack/hello-world/Gatesby-sample-project/src/pages/index.js")))
}

