const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const mongoose = require('mongoose');
const typeDefs = require('./models/typeDefs');
const resolvers = require('./resolvers');

const Db = 'mongodb+srv://dondy:dondy123@cluster0.bmtksyl.mongodb.net/test';

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connect DB Success');
}).catch((err) => {
    console.log(err);
})

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
    listen: { port: 4000 }
}).then((result) => {
    console.log(result);
})