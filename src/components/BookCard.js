import React from 'react'
function BookCard({book, onBookDelete, id}) {
    function handleDeleteClick() {
        fetch(`http://localhost:9292/books/${id}`, {
          method: "DELETE",
        });
    
        onBookDelete(id);
      }
    return(
        <div>
            <h4>{book.name}</h4>
            <p>Author: {book.author.name}</p>
            <p>Genre: {book.genre}</p>
            <button onClick={handleDeleteClick}>Book Completed</button>
        </div>
        )
}

export default BookCard;