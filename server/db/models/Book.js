const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
    id: Int,
    name: String,
    genre: String,
    authorId: Int
});

const BookModel = mongoose.model('book', BookSchema);

module.exports = BookModel;
