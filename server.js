import express from 'express'
import express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'

var schema = buildSchema (`
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