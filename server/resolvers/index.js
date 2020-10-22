const heroResolvers = require("./heroResolvers");
const teamResolvers = require("./teamResolvers");

module.exports = {
  Query: {
    ...heroResolvers.Query,
    ...teamResolvers.Query,
  },
  Mutation: {
    ...teamResolvers.Mutation,
    ...heroResolvers.Mutation,
  },
  TeamType: {
    ...teamResolvers.TeamType,
  },
};
