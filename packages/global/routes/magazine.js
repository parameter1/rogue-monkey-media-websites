const { withMagazineIssue, withMagazinePublication } = require('@parameter1/base-cms-marko-web/middleware');
const index = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/templates/index');
const publication = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/templates/publication');
const publicationFragment = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/graphql/fragments/magazine-publication-page');
const issueFragment = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/graphql/fragments/magazine-issue-page');
const issue = require('../templates/magazine/issue');


module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
