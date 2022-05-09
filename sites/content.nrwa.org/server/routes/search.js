const template = require('@parameter1/base-cms-marko-web-theme-monorail/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
