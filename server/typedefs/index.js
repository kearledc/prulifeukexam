const { gql } = require("apollo-server-express");

module.exports = gql`
  type HeroType {
    id: ID!
    name: String!
    primaryAttribute: String
    teamName: String
  }

  type TeamType {
    id: ID!
    name: String!
    heroes: [HeroType]
  }

  type Query {
    getHeroes: [HeroType]
    getTeam: [TeamType]
    getHeroById(heroId: String): HeroType
  }

  input UpdateHero {
    name: String
    primaryAttribute: String
    teamName: String
  }

  type Mutation {
    addHero(name: String, primaryAttribute: String, teamName: String): HeroType
    addTeam(name: String): TeamType
    updateHero(id: String, updateHero: UpdateHero): HeroType
    removeHero(id: String): Boolean
  }
`;
