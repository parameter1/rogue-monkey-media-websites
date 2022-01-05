const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@rogue-monkey-media/package-theme-monorail/routes/render-block');
const search = require('@rogue-monkey-media/package-theme-monorail/routes/search');
const identityX = require('./identity-x');
const magazine = require('../components/magazine/routes');
const nativeX = require('./native-x');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');

module.exports = (app, siteConfig) => {
  // IdentityX (user routing and app context)
  identityX(app);

  // Magazine Routes
  magazine(app);

  // NativeX (Story rendering)
  nativeX(app);

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app, siteConfig);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  search(app, siteConfig);

  // HTML Sitemap
  htmlSitemap(app);
};
