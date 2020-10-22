const Hero = require("../models/Hero");
const { validAddHero } = require("../config");
const { UserInputError } = require("apollo-server");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  Query: {
    getHeroes: () => Hero.find({}),
    getHeroById: async (_, { heroId }) => {
      try {
        const hero = await Hero.findById(heroId);
        if (hero) {
          return hero;
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addHero: async (_, { name, primaryAttribute, teamName }) => {
      const { valid, errs } = validAddHero(name, primaryAttribute, teamName);
      if (!valid) {
        throw new UserInputError("Errors", { errs });
      }

      const checkHero = await Hero.findOne({
        name,
      });
      if (checkHero) {
        throw new UserInputError("Hero already Added", {
          errs: {
            name: "Hero already Added",
          },
        });
      }

      let newHero = Hero({
        id: uuidv4(),
        name,
        primaryAttribute,
        teamName,
      });

      return newHero.save();
    },
    updateHero: async (_, { id, updateHero }) => {
      return Hero.findByIdAndUpdate(id, updateHero, {
        new: true,
      });
    },

    removeHero: async (_, { id }) => {
      const hero = await Hero.findById(id);
      if (hero) {
        await hero.delete();
        return true;
      }
    },
  },
};
