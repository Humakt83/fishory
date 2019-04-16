const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const FishType = new GraphQLObjectType({
  name: "Fish",
  type: "Query",
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    size: { type: GraphQLInt },
    minimum_aquarium_size: { type: GraphQLInt },
  }
});

exports.FishType = FishType;
