const Team = require("../models/Team");
const Hero = require("../models/Hero");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  Query: {
    getTeam: () => Team.find({}),
  },
  Mutation: {
    addTeam: async (_, { name }) => {
      let newTeam = Team({
        id: uuidv4(),
        name,
      });

      return newTeam.save();
    },
  },

  TeamType: {
    heroes: async (_, args) => {
      try {
        const heroes = await Hero.find({
          teamName: _.name,
        }).sort({ name: -1 });
        if (heroes) {
          return heroes;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
