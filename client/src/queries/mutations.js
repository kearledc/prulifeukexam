import { gql } from "@apollo/client";

const removeHeroMutation = gql`
  mutation($id: String) {
    removeHero(id: $id)
  }
`;

const addHeroMutation = gql`
  mutation($name: String, $teamName: String, $primaryAttribute: String) {
    addHero(
      name: $name
      teamName: $teamName
      primaryAttribute: $primaryAttribute
    ) {
      id
      name
      teamName
      primaryAttribute
    }
  }
`;

const updateHeroMutation = gql`
  mutation(
    $id: String
    $name: String
    $teamName: String
    $primaryAttribute: String
  ) {
    updateHero(
      id: $id
      updateHero: {
        name: $name
        teamName: $teamName
        primaryAttribute: $primaryAttribute
      }
    ) {
      id
      name
      teamName
      primaryAttribute
    }
  }
`;

export { removeHeroMutation, addHeroMutation, updateHeroMutation };
