const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const identityX = require('./identity-x');
const search = require('./search');
const subscribe = require('./subscribe');

module.exports = {
  navigation,
  gam,
  nativeX,
  identityX,
  search,
  subscribe,
  company: 'Rogue Monkey Media, LLC',
  publicationIds: [],
  p1events: {
    tenant: 'roguemonkey',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'content.nrwa.org' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=45&auto=format,compress&q=70',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=45&auto=format,compress&q=70&dpr=2 2x',
      ],
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress&q=70',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress&q=70&dpr=2 2x',
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
    containerId: 'NOT_SET',
  },
  wufoo: {
    userName: 'NOT_SET',
  },
  layout: 'combined',
  inquiry: {
    enabled: false,
    directSend: false,
    sendTo: 'NOT_SET@roguemonkeymedia.com',
    sendFrom: 'NOT_SET <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets.imgix.net/files/base/roguemonkeymedia/all/image/static/nrwa/logo.svg?h=60&auto=format,compress&q=70&bg=FFFFFF&pad=5',
    bgColor: '#FFFFFF',
  },
};
