import React, {useState} from 'react'
import MovieCard from './movieCard.js'
import { createMovie } from './actions/movies/createMovie.js'

export default function SearchMovies() {

  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([])
  const [hidden, setHidden] = useState(true)


  const searchMovie = async (event) => {
    event.preventDefault()

    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
    const url = `http://www.omdbapi.com/?t=${query}&apikey=8a8f7bda&plot=full`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      setHidden(false)
      setMovie(data)
      createMovie(data)
    })
    setHidden(true)
    
  }



  return (
<>
  <form className="form" onSubmit={searchMovie}>
    <label className="label" htmlFor="query">Movie Name</label>
    <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
    <button className="button" type="submit">Search</button>
  </form>
    {hidden === false ? <MovieCard movie={movie}></MovieCard> : null}
</>
  )
}