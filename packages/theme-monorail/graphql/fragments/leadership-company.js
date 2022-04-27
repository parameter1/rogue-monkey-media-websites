const gql = require('graphql-tag');

module.exports = gql`

fragment LeadershipCompanyFragment on Content {
  id
  name
  siteContext {
    path
  }
  ... on ContentCompany {
    youtube {
      url
    }
  }
}

`;
