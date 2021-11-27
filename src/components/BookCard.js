import React from 'react'
function BookCard({book}) {
    return(
        <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
        </div>
        )
}

export default BookCard;