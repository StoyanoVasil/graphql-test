const assert = require('assert');
const BookModel = require('../models/Book')

describe('Finding records', () => {
    let newBook;
    beforeEach((done) => {
        //add new book to database
        newBook = new BookModel({
            id: 1,
            name: "King rat",
            genre: "Drama"
        });
        //check if book is saved
        newBook.save().then(() => {
            done();
        });
    });

    it('Finds one book from the database',(done) => {
        BookModel.findOne({
            name: "King rat",
            genre: "Drama"
        }).then((result) => {
            assert(result.name === "King rat" && result.genre === "Drama");
            done();
        })
    });

    it('Finds one book by ID from the database',(done) => {
        BookModel.findOne({ _id: newBook._id }).then((result) => {
            assert(result._id.toString() === newBook._id.toString());
            done();
        });
    });
});
