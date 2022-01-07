const template = require('@rogue-monkey-media/package-theme-monorail/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
