const express = require('express');
const cors = require('cors');
const expressGraphQl = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const { query } = require("./schemas/query");

const schema = new GraphQLSchema({
  query
});

const app = express();
app.use(cors());
app.use('/graphql', expressGraphQl({
   schema,
   graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);