const mongoose = require("mongoose");

//ES6 Promises
mongoose.PromiseProvider = global.PromiseProvider;

//connect to the db before tests run
before((done) => {
    // Connect with MongoDB locally
    mongoose.connect("mongodb://localhost:27017/graphql", {useNewUrlParser: true});
    mongoose.connection.once('open', () => {
        console.log("Connected to local MongoDB");
        done();
    }).on('error', (error) => {
        console.log(`Connection error: ${error}`);
    });
});
