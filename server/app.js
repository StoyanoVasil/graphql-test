const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/gql', graphqlHTTP({
    schema: schema, //or just schema
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening to port 4000');
});
