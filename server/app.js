const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin request
app.use(cors());

//connect to local database
mongoose.connect("mongodb://localhost:27017/graphql", {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log("Connected to local MongoDB");
}).on('error', (error) => {
    console.log(`Connection error: ${error}`);
});

app.use('/gql', graphqlHTTP({
    schema: schema, //or just schema
    graphiql: true
}));

app.listen(4000, () => {
    console.log('listening to port 4000');
});
