const { ApolloServer } = require('apollo-server');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const context = require('./context');

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(() => {
  console.log("Apollo ready");
});
