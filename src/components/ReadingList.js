import React from 'react';
import BookCard from './BookCard'
function ReadingList({books}) {
    const allBooks = books.map((book) => <BookCard key = {book.id} book={book}/> )
    return(
    <div>
        {allBooks}
    </div>
    )
}

export default ReadingList;