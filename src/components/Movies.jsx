

function ListOfMovies ({movies}) {
   return(
    <ul>
        {
          movies.map(movie => (
            <li
            key={movie.id}>
              <img src={movie.poster} alt={movie.title}/>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>

            </li>
          ))
        }
      </ul>
   ) 
}

function NoMoviesResult () {
    return (
        <p>No results</p>
    )
}

export function Movies ({movies}) {
    const hasMovies = movies?.length > 0

    return(
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}