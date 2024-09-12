import { useState, useEffect } from 'react';
import './App.css';

import Form from './Components/Form';
import MovieDisplay from './Components/MovieDisplay';

export default function App() {
  const apiKey = "2b250105";
  
  const [movie, setMovie] = useState(null);

  const getMovie = async(searchTerm) => {
    try{
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
    const data = await response.json();
    setMovie(data);
  } catch(e) {
    console.error(e);
  }
  };

  useEffect(() => {
    getMovie("Clueless");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}


