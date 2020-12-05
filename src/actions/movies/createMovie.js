export const createMovie = (movieData) => {
  // console.log("movieData", movieData)
  const data = {
    title: movieData.Title,
    upvote: '',
    downvote: ''
  }
  console.log("data", data)

    return fetch("http://localhost:3000/movies", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
}

export const upVote = (movieTitle) => {
  const data = {
    upvote: '1'
  }

  return fetch(`http://localhost:3000/movies/`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(result => {
    let movie = result.data.map(data => data.attributes).find(movie => movieTitle === movie.title)
   return fetch(`http://localhost:3000/movies/${movie.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log("updated movie", result)
    })
  })
}

export const downVote = (movieTitle) => {
  const data = {
    downvote: '1'
  }

  return fetch(`http://localhost:3000/movies/`, {
    credentials: "include",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => response.json())
  .then(result => {
    let movie = result.data.map(data => data.attributes).find(movie => movieTitle === movie.title)
   return fetch(`http://localhost:3000/movies/${movie.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log("downvoted movie", result)
    })
  })


}