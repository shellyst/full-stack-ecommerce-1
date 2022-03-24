// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Product {
        _id: ID
        name: String
        createdAt: String
        description: String
        downloadURL: String
        price: Int
    }
    type Query {
        findUsers: [User]
        findUser(username: String!): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
    }
    `;

// export the typeDefs
module.exports = typeDefs;