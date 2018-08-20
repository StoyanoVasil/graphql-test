const assert = require('assert');
const BookModel = require('../models/Book')

describe('Saving records', () => {
    it('Saves a book to the database',(done) => {
        //add new book to database
        let newBook = new BookModel({
            id: 1,
            name: "test",
            genre: "test"
        });
        //check if book is saved
        newBook.save().then(() => {
            assert(!newBook.isNew);
            done();
        });
    });
});
