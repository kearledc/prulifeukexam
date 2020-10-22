const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const app = express();
const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

mongoose.connect(
  "mongodb+srv://kearledc:SMVF5WapD00CAY4o@attendance.923ur.mongodb.net/Dota?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection.once("Open", () => {
  console.log("connected");
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({
  app,
  path: "/dota",
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => console.log(`Connected to ${PORT}`));
