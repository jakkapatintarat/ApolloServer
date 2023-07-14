const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./models/typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
    listen: { port: 4000 }
}).then((result) => {
    console.log(result);
})