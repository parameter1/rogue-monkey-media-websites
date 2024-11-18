const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const search = require('@parameter1/base-cms-marko-web-theme-monorail/routes/search');
const getAdvertisingPostAsNativeStory = require('@parameter1/base-cms-mindful/marko-web/middleware/get-advertising-post-as-native-story');
const advertisingPostTemplate = require('../templates/content/advertising-post');
const identityX = require('./identity-x');
const magazine = require('./magazine');
const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');

module.exports = (app, siteConfig) => {
  // IdentityX (user routing and app context)
  identityX(app);

  // Magazine Routes
  magazine(app);

  // Mindful|NativeX (Story rendering)
  getAdvertisingPostAsNativeStory(app, {
    route: '/sponsored/:section/:slug/:id',
    tenant: 'roguemonkeymedia',
    template: advertisingPostTemplate,
  });

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
