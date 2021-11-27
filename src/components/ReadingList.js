import React from 'react';
import BookCard from './BookCard'
function ReadingList({books, onBookDelete}) {
    const allBooks = books.map((book) => <BookCard key = {book.id} id={book.id} book={book} onBookDelete={onBookDelete}/> )
    return(
    <div>
        {allBooks}
    </div>
    )
}

export default ReadingList;