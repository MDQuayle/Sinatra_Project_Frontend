import React from 'react';
import logo from './logo.svg';
import './src/App.css';
import './Header.js';
import './ReadingList';
import './ReadingForm';

function App() {
  const [books,setBooks] = useState([]) 


  useEffect(() => {
    fetch('http://localhost:9292/books')
    .then(res=> res.json())
    .then(bookData => setBooks(bookData))
  },[])
  
  function newBook(newBook){
    setFacts([...books, newBook])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
