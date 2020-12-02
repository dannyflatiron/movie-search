import React from "react";

export default function MovieCardDetails({movie}){

  const handleUpVote = async (event) => {
    event.preventDefault()
    // await createMovie()
    // resetVoteCount()
  }

  const handleDownVote = async (event) => {
    event.preventDefault()
    // await createMovie()
    // resetVoteCount()
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
        <form onSubmit={handleDownVote}>
          <input type="submit" value="Click here to down"></input>
        </form>
      </div>
    )
}