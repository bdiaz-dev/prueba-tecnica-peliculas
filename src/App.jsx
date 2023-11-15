import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {

  const { value, handleChange, handleSubmit, movies, handleSort, sort } = useMovies()

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de peliculas</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} placeholder='Avengers, the matrix...' />
            <input type="checkbox" onChange={handleSort} checked={sort} id="" />
            <button type="submit">Buscar</button>
          </form>

        </header>

        <main>
          <Movies
            movies={movies}
          />
        </main>
      </div>
    </>
  )
}

export default App
