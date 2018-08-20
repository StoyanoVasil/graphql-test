const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
    id: Number,
    name: String,
    age: Number
});

const AuthorModel = mongoose.model('author', AuthorSchema);

module.exports = AuthorModel;
