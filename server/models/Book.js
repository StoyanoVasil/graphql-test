const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    id: Number,
    name: String,
    genre: String
});

const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;
