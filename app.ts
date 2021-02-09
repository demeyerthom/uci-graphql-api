const {ResultsSDK, Disciplines} = require("uci-sdk");
const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./src/schema')
const {resolvers} = require('./src/resolvers/index')

const PORT = 4000;
const app = express();

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    dataSources: () => {
        return {
            resultsProvider: new ResultsSDK(Disciplines.Road)
        }
    },
    context: {
      disciplineId: 10
    },
    tracing: true
});
server.applyMiddleware({app, path: '/graphql/route'});

app.listen({port: PORT}, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)