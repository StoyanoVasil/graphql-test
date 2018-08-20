const assert = require('assert');
const BookModel = require('../models/Book')

describe('Saving records', () => {
    it('Saves  a record to the database', function(done){
        //add new book to database
        let newBook = new BookModel({
            id: 1,
            name: "test",
            genre: "test"
        });
        //check if book is saved
        newBook.save().then(function(){
            assert(!newBook.isNew);
            done();
        });
    });
});
