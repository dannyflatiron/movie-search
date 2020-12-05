import React, {useState} from 'react'
import { upVote, downVote } from './actions/movies/createMovie.js'

export default function MovieCardDetails({movie}){

  const [upVoteCount, setUpVoteCount] = useState('0')
  const [downVoteCount, setDownVoteCount] = useState('0')

  const handleUpVote = async (event) => {
    event.preventDefault()
    await upVote(movie.Title)
    getAllMovies()
    
  }

  const handleDownVote = async (event) => {
    event.preventDefault()
    await downVote(movie.Title)
    getAllMovies()
  }

  const getAllMovies = async () => {
    const movieSearchApi = `http://localhost:3000/movies/`

    fetch(movieSearchApi)
    .then(response => response.json())
    .then(result => {
      let selectedMovie = result.data.map(data => data.attributes).find(m => m.title === movie.Title)
      if (selectedMovie.upvote === '') {
        return null 
      } else {
        setUpVoteCount(selectedMovie.upvote)
      } 

      if (selectedMovie.downvote === '' ) {
        return null 
      } else {
        setDownVoteCount(selectedMovie.downvote)
      } 
    })
  }


    return (
      <div className="card--content">
        {movie.Title !== 'N/A' ? <h3 className="card--title">{movie.Title}</h3> : <h3 className="card-title">No Available Title</h3>}
        {movie.Year !== 'N/A' ? <p><small>RELEASE DATE: {movie.Year}</small></p> : <h3 className="card-title">No Available Release Date</h3>}
        {movie.Director !== 'N/A' ? <p><small>Director: {movie.Director}</small></p> : <h3 className="card-title">No Available Director</h3>}
        {movie.Plot !== 'N/A' ? <p className="card--desc">{movie.Plot}</p> : <h3 className="card-title">No Available Movie Description</h3>}
        <form onSubmit={handleUpVote}>
          <input type="submit" value="Click here to upvote"></input>
        </form>
        <p>Total upvotes: {upVoteCount}</p>
        <form onSubmit={handleDownVote}>
          <input type="submit" value="Click here to down"></input>
        </form>
        <p>Total downvotes: {downVoteCount}</p>
      </div>
    )
}