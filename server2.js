var express = require('express')
var express_graphql = require('express-graphql')
var { buildSchema } = require('graphql')

// GraphQL Schema
var schema = buildSchema(`
    type Query {
        course(id: Int!): Course
        course(topic: String): [Course]
    },
    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`)

