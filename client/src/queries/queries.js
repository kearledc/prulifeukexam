import { gql } from "@apollo/client";

const getTeamQuery = gql`
  {
    getTeam {
      name
      heroes {
        name
        teamName
        id
        primaryAttribute
      }
    }
  }
`;

const getHeroesQuery = gql`
  {
    getHeroes {
      name
      id
      primaryAttribute
      teamName
    }
  }
`;

const getHeroByIdQuery = gql`
  query($id: String) {
    getHeroById(heroId: $id) {
      name
      teamName
      primaryAttribute
      id
    }
  }
`;

export { getHeroesQuery, getTeamQuery, getHeroByIdQuery };
