import React, { useEffect, useState } from 'react'
import search from './search.svg'
import './App.css';
import MovieCard from './components/MovieCard';
// 4a529aea
const API_URL = 'http://www.omdbapi.com?apikey=4a529aea'
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
// }


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchItem , setSearchItem] = useState('')


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies(searchItem.data);
  },
    []

  )
  return (
    <div className="app">
      <h1>FilmWare</h1>
      <div className="search">
        <input type="text"
          placeholder='search movies'
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value)
          }}
        />
        <img src={search}
          alt="search"
          onClick={() => {
              searchMovies(searchItem)
          }} />
      </div>
      {
        movies.length > 0 ? <div className="conatiner">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div> : (<div className='empty'>
          <h2>No movies found</h2>
        </div>)

      }

    </div>
  )
}

export default App
