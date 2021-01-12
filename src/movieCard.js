import React, {useState} from 'react'
import MovieCardDetails from './movieCardDetails.js'


export default function MovieCard({movie}){

  const [hiddenCardDetails, setHiddenCardDetails] = useState(true)
  const [hiddenButton, setHiddenButton] = useState(false)
  const [upVoteData, setUpVoteData] = useState('0')
  const [downVoteData, setDownVoteData] = useState('0')

  const displayMovieDetails = (event) => {
    event.preventDefault()

    setHiddenCardDetails(false)
    setHiddenButton(true)

    grabVoteData()
  }

  const grabVoteData = () => {
    const movieSearchApi = `http://localhost:3000/movies/`

    fetch(movieSearchApi)
    .then(response => response.json())
    .then(result => {
      let selectedMovie = result.data.map(data => data.attributes).find(m => m.title === movie.Title)
      if (selectedMovie.upvote === '') {
        return null 
      } else {
        setUpVoteData(selectedMovie.upvote)
      } 

      if (selectedMovie.downvote === '' ) {
        return null 
      } else {
        setDownVoteData(selectedMovie.downvote)
      } 
    })

  }

  return (
  <>
{ movie.Poster !== "N/A" ? <div className="card"  >
    <img className="card--image"
      src={movie.Poster}
      alt={movie.title + ' poster'}
    />
  </div> : <h1 className="card-image" style={{marginTop: "2em"}}>No Available Poster</h1>}
  {hiddenCardDetails === true ? null : <MovieCardDetails movie={movie} upvote={upVoteData} downvote={downVoteData}></MovieCardDetails>}
  {hiddenButton !== false ? null : <button className="button" onClick={event => displayMovieDetails(event)}>Click Here To View Movie Details</button>}
  </>
  )
}

