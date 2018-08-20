const assert = require('assert');
const BookModel = require('../models/Book')

describe('Deleting records', () => {
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

    it('Deletes one book from the database',(done) => {
        BookModel.findOneAndRemove({ _id: newBook._id}).then(() => {
            BookModel.findOne({ _id: newBook._id}).then((result) => {
                assert(result === null);
                done();
            });
        });
    });
});
