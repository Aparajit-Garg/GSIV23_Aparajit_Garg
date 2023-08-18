import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMovieList } from '../storeSlices/movieListSlice';
import classes from "../styles/MoviesList.module.css";
import { Link } from 'react-router-dom';

const MoviesList = () => {
    const [count, setCount] = useState(1)
    const [totalPages, setTotalPages] = useState(10)
    const dispatch = useDispatch()
    const movies = useSelector(state => state.movies.movies)
    const IMAGE_PATH="https://image.tmdb.org/t/p/original/";

    const fetchData = async () => {
        // fetching upcoming movies sorted by latest first considering 20 August 2023 as the starting date
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&include_adult=false&include_video=false&language=en-US&page=${count}&primary_release_date.gte=2023-08-20&sort_by=primary_release_date.asc`)
        const data = await response.json()
        setTotalPages(data.total_pages)
        dispatch(updateMovieList(data.results))
    }

    useEffect(() => {
        fetchData()
    }, [count])

    return (
        <section className={classes.movies_list_section}>
            <div className={classes.movies_list}>
            {
                movies.map((movie, index) => {
                    return (
                        <Link className={classes.movie_tile} key={movie.id} to={`/detail/${movie.id}`}>
                            <div>
                                <img src={IMAGE_PATH + movie.poster_path || IMAGE_PATH + movie.backdrop_path} alt='no poster' />
                                <span className={classes.movie_name}>
                                    <h4> {movie.title} </h4>
                                    <span> {movie.vote_average} </span>
                                </span>
                                <span className={classes.movie_description}> {movie.overview} </span>
                            </div>
                        </Link>
                    )
                })
            }
            </div>
            <ul className={classes.pagination}>
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