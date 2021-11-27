import React, { useEffect, useState } from 'react'
import '../App.css';
import Header from './Header.js';
import ReadingList from './ReadingList';
import ReadingForm from './ReadingForm';

function App() {
  const [books,setBooks] = useState([]) 


  useEffect(() => {
    fetch('http://localhost:9292/books')
    .then(res=> res.json())
    .then(bookData => setBooks(bookData))
  },[])
  
  function newBook(newBook){
    setBooks([...books, newBook])
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Header />
          <ReadingList books={books}/>
          <ReadingForm newBook={newBook}/>
        </p>
      </header>
    </div>
  );
}

export default App;
