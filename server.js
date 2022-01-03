var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
require('dotenv').config();

// Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`)

// Root
var root = {
    message: () => 'GraphQL is working!'
 }

// Create app
var app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
var port = process.env.PORT
app.listen(port, ()=> console.log(`Express Graphql Server is running on the port of ${port}`))