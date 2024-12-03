const contentMeter = require('@rogue-monkey-media/package-global/config/content-meter');
const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  contentMeter,
  useLinkInjectedBody: process.env.USE_LINK_INJECTED_BODY || false,
  navigation,
  gam,
  nativeX,
  identityX,
  newsletter,
  search,
  subscribe,
  company: 'Rogue Monkey Media, LLC',
  publicationIds: [],
  mindful: {
    namespace: 'rmm/default',
  },
  p1events: {
    tenant: 'roguemonkey',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'content.nrwa.org' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=45&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=45&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/NationalRuralWaterAssociation/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/NRWA', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/national-rural-water-associaiton/', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-TQLXKT6',
  },
  magazine: {
    buttons: ['subscribe', 'pdf', 'archives'],
  },
  wufoo: {
    userName: 'roguemonkeymedia',
  },
  layout: 'combined',
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'NOT_SET@roguemonkeymedia.com',
    sendFrom: 'NOT_SET <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
  useNRWAFooter: true,
};
