import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
    books{
        id
        name
        author{
            name
        }
    }
}
`

class BookList extends Component {
    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return (<div>Loading books...</div>);
        } else {
            return data.books.map((book) => {
                return(
                    <li key={book.id}>{book.name} is written by {book.author.name}</li>
                );
            })
        }
    }

    render() {
        return (
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
