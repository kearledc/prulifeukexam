const { model, Schema } = require("mongoose");

const teamSchema = Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = model("Team", teamSchema);
