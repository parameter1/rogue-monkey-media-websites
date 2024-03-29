const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/website-section-page');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(products)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias(more-articles)', withWebsiteSection({
    template: section,
    queryFragment,
    aliasResolver: () => 'home',
    redirectOnPathMismatch: false,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
