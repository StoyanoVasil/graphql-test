const graphql = require('graphql');
const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList
 } = graphql;
const _ = require('lodash');

let books = [
    {name: "Cat\'s cradle", genre: "Fantasy", id: "1", authorId: "1"},
    {name: "King rat", genre: "Fantasy", id: "2", authorId: "2"},
    {name: "Slaughterhouse 5", genre: "Fantasy", id: "3", authorId: "1"},
    {name: "Lord of the Rings: The fellowship of the ring", genre: "Fantasy", id: "4", authorId: "3"},
    {name: "Shogun", genre: "Fantasy", id: "5", authorId: "2"},
    {name: "The hobbit", genre: "Fantasy", id: "6", authorId: "3"},
];

let authors = [
    {name: "Kurt Vonnegut", age: 65, id: "1"},
    {name: "James Clavell", age: 75, id: "2"},
    {name: "John R. R. Tolkien", age: 50, id: "3"},
];

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return _.find(authors, {id: parent.authorId});
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return _.filter(books, {authorId: parent.id});
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(books, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(authors, {id: args.id});
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})