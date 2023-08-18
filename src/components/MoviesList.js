import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovieList } from '../storeSlices/movieListSlice';
import "../styles/MoviesList.css";
import { Link } from 'react-router-dom';

const MoviesList = () => {
    const [count, setCount] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
    
    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${count}`)
        const data = await response.json()
        setTotalPages(data.total_pages)
        dispatch(updateMovieList(data.results))
    }

    useEffect(() => {
        fetchData()
    }, [count])

    return (
        <section>
            <div className='movies_list'>
            {
                movies.map((movie, index) => {
                    return (
                        <Link className='movie_tile' key={movie.id}>
                            <div>
                                <img src={IMAGE_PATH + movie.poster_path || IMAGE_PATH + movie.backdrop_path} alt='no poster' />
                                <span className='movie_name'>
                                    <h4> {movie.title} </h4>
                                    <span> {movie.popularity} </span>
                                </span>
                                <span className='movie_description'> {movie.overview} </span>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
            <ul className='pagination'>
                {
                    [...Array(totalPages)].map((pageNumber, index) => {
                        return <li key={index}> <button onClick={() => setCount(index+1)}> {index + 1} </button></li>
                    })
                }
            </ul>
        </section>
    )
}

export default MoviesList;