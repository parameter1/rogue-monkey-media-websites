const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  apiToken = process.env.IDENTITYX_API_TOKEN,
  requiredServerFields,
  forms = [],
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken,
    requiredServerFields,
    forms,
    onHookError: newrelic.noticeError.bind(newrelic),
  });
  return config;
};
