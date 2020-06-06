const graphql = require('graphql');
const lodash = require('lodash');
const users = require("../models/user");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const usersType = new GraphQLObjectType({
  name: 'users',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    password: {type: GraphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users:{
      type: usersType,
      args: {
        email: {type: GraphQLString},
        password: {type: GraphQLString}
      },
      resolve(parent, args){
        return users.find({email: args.email, password: args.password});
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})