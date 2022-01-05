const withContent = require('@rogue-monkey-media/package-global/middleware/with-content');
const queryFragment = require('@rogue-monkey-media/package-theme-monorail/graphql/fragments/content-page');
const contact = require('@rogue-monkey-media/package-global/templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));

  app.get('/*?media-gallery/:id(\\d{8})*', withContent({
    template: mediaGallery,
    queryFragment,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
