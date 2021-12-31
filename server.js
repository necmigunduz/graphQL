var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`)

// Root
var root = {
    message: () => 'This is a try-out!'
}

// Create app
var app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
var port = process.env.PORT || 4000
app.listen(port, ()=> console.log(`Express Graphql Server is running on the port of ${port}`))