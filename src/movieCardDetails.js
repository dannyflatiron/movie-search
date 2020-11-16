import React from "react";

export default function MovieCardDetails({movie}){
    return (
      <div className="card--content">
        {movie.Title !== 'N/A' ? <h3 className="card--title">{movie.Title}</h3> : <h3 className="card-title">No Available Title</h3>}
        {movie.Year !== 'N/A' ? <p><small>RELEASE DATE: {movie.Year}</small></p> : <h3 className="card-title">No Available Release Date</h3>}
        {movie.Director !== 'N/A' ? <p><small>Director: {movie.Director}</small></p> : <h3 className="card-title">No Available Director</h3>}
        {movie.Plot !== 'N/A' ? <p className="card--desc">{movie.Plot}</p> : <h3 className="card-title">No Available Movie Description</h3>}
      </div>
    )
}