import React from 'react';
import {useState} from 'react'
function ReadingForm({newBook}) {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        setName('')
        setAuthor('')
        setGenre('')
        fetch('http://localhost:9292/books',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name:name, author:author, genre:genre})
        })
        .then(res => res.json())
        .then((book) => newBook(book))
    }
    
function handleNameChange(e){
    setName(e.target.value)
}

function handleAuthorChange(e){
    setAuthor(e.target.value)
}

function handleGenreChange(e){
    setGenre(e.target.value)
}
    return(
        <><form onSubmit={handleSubmit}>
        <p><label>
            Book Title:
            <input className="inputField" type='text' value={name} onChange={handleNameChange} />
        </label></p>
        <p><label>
            Author Name:
        <select name="filter" onChange={handleAuthorChange}>
          <option value=" ">AUTHORS</option>
          <option value="Chuck Klosterman">Chuck Klosterman</option>
          <option value="Kurt Vonnegut Jr.">Kurt Vonnegut Jr.</option>
          <option value="Will Wight">Will Wight</option>
          <option value="T.J. Klune">T.J. Klune</option>
        </select>
        </label></p>
        <p><label>
            Genre:
            <input className="inputField" type='text' value={genre} onChange={handleGenreChange} />
        </label></p>
        <p><input className="submitButton" type='submit' value="Add New Book" /></p>
    </form>
        </>
)
}

export default ReadingForm;