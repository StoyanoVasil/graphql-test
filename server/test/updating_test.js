const assert = require('assert');
const BookModel = require('../models/Book')

describe('Updating records', () => {
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

    it("Increments the id by 1", (done) => {
        BookModel.update({}, { $inc: { id: 1 }}).then(() => {
            BookModel.findOne({ _id: newBook._id }).then((result) => {
                assert(result.id === ++(newBook.id));
                done();
            })
        });
    });

    it('Updates two attributes of one book from the database', (done) => {
        const newName = "Rat king";
        const newGenre = "Amard";
        BookModel.findOneAndUpdate({ _id: newBook._id }, { genre: newGenre, name: newName }).then(() => {
            BookModel.findOne({ _id: newBook._id }).then((result) => {
                assert(result.name === newName && result.genre === newGenre);
                done();
            });
        });
    });
});
