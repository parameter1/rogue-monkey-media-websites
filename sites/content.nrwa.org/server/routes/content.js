const withContent = require('@rogue-monkey-media/package-global/middleware/with-content');
const { formatContentResponse } = require('@rogue-monkey-media/package-global/middleware/format-content-response');
const qf = require('@rogue-monkey-media/package-global/graphql/fragments/content-page');
const contact = require('@rogue-monkey-media/package-global/templates/content/contact');
const company = require('../templates/content/company');
const mediaGallery = require('../templates/content/media-gallery');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

module.exports = (app) => {
  const { site } = app.locals;
  // base on site config||USE_LINK_INJECTED_BODY to enable bcl
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const queryFragment = qf.factory ? qf.factory({ useLinkInjectedBody }) : qf;

  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
    formatResponse: formatContentResponse,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
    formatResponse: formatContentResponse,
  }));

  app.get('/*?media-gallery/:id(\\d{8})*', withContent({
    template: mediaGallery,
    queryFragment,
    formatResponse: formatContentResponse,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
    formatResponse: formatContentResponse,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
    formatResponse: formatContentResponse,
  }));
};
