import React, {useState} from 'react'
import MovieCardDetails from './movieCardDetails.js'


export default function MovieCard({movie}){

  const [hiddenCardDetails, setHiddenCardDetails] = useState(true)
  const [hiddenButton, setHiddenButton] = useState(false)

  const displayMovieDetails = (event) => {
    event.preventDefault()
    setHiddenCardDetails(false)
    setHiddenButton(true)
  }

  return (
  <>
{ movie.Poster !== "N/A" ? <div className="card"  >
    <img className="card--image"
      src={movie.Poster}
      alt={movie.title + ' poster'}
    />
  </div> : <h1 className="card-image" style={{marginTop: "2em"}}>No Available Poster</h1>}
  {hiddenCardDetails === true ? null : <MovieCardDetails movie={movie}></MovieCardDetails>}
  {hiddenButton !== false ? null : <button className="button" onClick={event => displayMovieDetails(event)}>Click Here To View Movie Details</button>}
  </>
  )
}

