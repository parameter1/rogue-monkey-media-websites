const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');
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

  const routesList = [
    { // contact
      regex: '/*?contact/:id(\\d{8})*',
      template: contact,
      queryFragment,
    },
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment,
    },
    { // document
      regex: '/*?document/:id(\\d{8})*',
      template: whitepaper,
      queryFragment,
    },
    { // product
      regex: '/*?media-gallery/:id(\\d{8})*',
      template: mediaGallery,
      queryFragment,
    },
    { // whitepaper
      regex: '/*?whitepaper/:id(\\d{8})*',
      template: whitepaper,
      queryFragment,
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment,
      withContentMeter: true,
    },
  ];

  const cmConfig = site.getAsObject('contentMeter');
  const contentMeterEnable = cmConfig.enabled;
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      app.get(
        route.regex,
        contentMetering(cmConfig),
        withContent({
          template: route.template,
          queryFragment: route.queryFragment,
          formatResponse: formatContentResponse,
        }),
      );
    } else {
      app.get(route.regex, withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
