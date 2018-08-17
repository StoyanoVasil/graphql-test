const mongoose = require("mongoose");

// Connect with MongoDB locally
mongoose.connect("mongodb://localhost:27017/graphql", {useNewUrlParser: true});

mongoose.connection.once('open', () => {
    console.log("Connected to local MongoDB");
}).on('error', (error) => {
    console.log(`Connection error: ${error}`);
});
