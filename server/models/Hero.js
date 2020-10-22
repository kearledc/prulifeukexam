const { Schema, model } = require("mongoose");

const heroSchema = new Schema(
  {
    name: String,
    primaryAttribute: String,
    teamName: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Hero", heroSchema);
