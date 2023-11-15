import { apiURL } from "./constants";

export async function getMovies (value) {
    console.log(value)

    const res = await fetch(apiURL+value);
    const json = await res.json();
    const data = json.Search

    const movies = data?.map(movie => (
        {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }
    ))
        console.log('getMovies')
    return movies

    
}

// TODO: try-catch
// mensajes error de escritura
// mensajes loading