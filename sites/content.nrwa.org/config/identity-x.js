const configureIdentityX = require('@rogue-monkey-media/package-global/config/identity-x');
const formDefault = require('@rogue-monkey-media/package-global/config/identity-x/default');

module.exports = configureIdentityX({
  appId: '6176f26a1fa8d14997cc99f5',
  requiredServerFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle',
    'countryCode',
    'regionCode',
    'postalCode',
  ],
  forms: {
    default: formDefault,
  },
});
