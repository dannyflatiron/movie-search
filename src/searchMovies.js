import React, {useState} from 'react'
import MovieCard from './movieCard.js'

export default function SearchMovies() {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])
  const [hidden, setHidden] = useState(true)

  const searchMovies = async (event) => {
    event.preventDefault()

    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.APIKEY}&language=en-US&query=${query}&page=1&include_adult=false`
    const url = `http://www.omdbapi.com/?t=${query}&apikey=8a8f7bda&plot=full`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      setHidden(false)
      setMovies(data)
    })
    setHidden(true)
  }

  return (
<>
  <form className="form" onSubmit={searchMovies}>
    <label className="label" htmlFor="query">Movie Name</label>
    <input className="input" type="text" name="query" placeholder="i.e. Jurassic Park" value={query} onChange={(e) => setQuery(e.target.value)}/>
    <button className="button" type="submit">Search</button>
  </form>
  {console.log(movies)}
    {hidden === false ? <MovieCard movie={movies}></MovieCard> : null}
</>
  )
}