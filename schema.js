//schema.js
/*import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt
} from 'graphql';*/

const graphql = require('graphql')

let count = 0;

let schema = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      count: {
        type: graphql.GraphQLInt,
        resolve: function() {
          return count;
        }
      }
    }
  })
});

module.exports = schema;