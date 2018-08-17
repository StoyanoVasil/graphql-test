const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
    id: Int,
    name: String,
    age: Int
});

const AuthorModel = mongoose.model('author', AuthorSchema);

module.exports = AuthorModel;
