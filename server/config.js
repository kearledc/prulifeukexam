const Team = require("./models/Team");

module.exports.validAddHero = (name, primaryAttribute, teamName) => {
  const errs = {};
  if (name.trim() === "") {
    errs.name = "Enter a Proper Hero Name";
  }
  if (primaryAttribute.trim() === "") {
    errs.primaryAttribute = "Enter a Primary Attribute for your Hero";
  }

  if (teamName.trim() === "") {
    errs.teamName = "Please put a Team";
  }

  return {
    errs,
    valid: Object.keys(errs).length < 1,
  };
};
