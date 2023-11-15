import { getMovies } from '../services/getMovies'
import { useRef, useState, useMemo, useCallback } from 'react'
import debounce from "just-debounce-it";

export function useMovies() {

    const [value, setValue] = useState('')
    const [movies, setMovies] = useState(null)
    const searched = useRef(null)
    const [sort, setSort] = useState(false)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedGetMovies = useCallback(
        debounce(async (newValue) => {
            setMovies(await getMovies(newValue))
            searched.current = value
        }
        , 300)
    , [getMovies])

    const handleChange = (event) => {

        const newValue = event.target.value
        if (newValue === ' ') return
        setValue(newValue)
        debouncedGetMovies(newValue)
    }

    const handleSubmit = async (event) => {

        event.preventDefault()
        if (searched.current === value || !value) return
        setMovies(await getMovies(value))
        searched.current = value
    }

    const handleSort = () => {

        if (!searched.current) return
        setSort(!sort)

    }

    const sortedMovies = useMemo(() =>
    (sort
        ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
        : movies
    ), [movies, sort])



    return { value, handleChange, handleSubmit, movies: sortedMovies, handleSort, sort }

}