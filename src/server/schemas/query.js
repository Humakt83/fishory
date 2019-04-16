const { db } = require("../pgAdaptor");
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { FishType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    fishes: {
      type: new GraphQLList(FishType),
      args: {},
      resolve() {
        const query = `SELECT * FROM fish`;
        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    fish: {
      type: FishType,
      args: {id: { type: GraphQLString }},
      resolve(parent, args) {
        const query = `SELECT * FROM fish where id=$1`;
        return db
          .one(query, [args.id])
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;
