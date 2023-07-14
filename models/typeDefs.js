
const { default: gql } = require('gql-tag');

const typeDefs = gql`
    type user {
        id: ID
        name: String
        email: String
    }
    type Query {
        users: [user]
        finduser(id: ID!): user
    }
    type Mutation {
        createuser(name: String, email: String): user
    }
`

module.exports = typeDefs