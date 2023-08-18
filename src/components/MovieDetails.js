import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from "../styles/MovieDetails.module.css"

const MovieDetails = () => {
    const API_KEY = process.env.REACT_APP_API_KEY
    // if there are more api calls, this can be moved to constants.js
    const FETCH_URL = 'https://api.themoviedb.org/3/movie/'
    const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
    const movieId = useParams().id
    const [cast, setCast] = useState([])
    const [movieDetail, setMovieDetail] = useState()

    useEffect(() => {
        const fetchMovieDetails = async() => {
            const response = await fetch(`${FETCH_URL}${movieId}?api_key=${API_KEY}`);
            const data = await response.json();
            console.log(data);
            setMovieDetail(data)
        }
        const fetchCastDetails=async()=>{
            const response = await fetch(`${FETCH_URL}${movieId}/credits?api_key=${API_KEY}`);
            const cast_data = await response.json();
        
            console.log(cast_data)
            setCast(cast_data)
      }

      fetchMovieDetails()
      fetchCastDetails()
      
    }, [])
    return (
        <section className={classes.movie_details}>
            <img src= {IMAGE_PATH + movieDetail?.poster_path || IMAGE_PATH + movieDetail?.backdrop_path} alt='no poster found' />
            <div>
                <span className={classes.title_rating}>
                    <h4> {movieDetail?.title} </h4>
                    <span className={classes.vote}> ({movieDetail?.vote_average}) </span>
                </span>
                <span className={classes.year_length_director}>
                    <span> {movieDetail?.release_date.split('-')[0]} | </span>
                    <span> {movieDetail?.runtime < 60 ? movieDetail?.runtime + ' minutes' : Math.floor(movieDetail?.runtime/60) + ' hrs ' + movieDetail?.runtime%60 + ' minutes'} | </span>
                    <span>
                        {cast?.crew?.map(value => value.job.toLowerCase() === 'director' ? value.name : '')}
                    </span> 
                </span>
                <span className={classes.cast}>
                    <span> Cast: </span>
                    {cast?.cast?.map((value, index) => {
                        return (
                            value.name + ', '
                        )
                    })}
                </span>
                <span className={classes.overview}> Description: {movieDetail?.overview} </span>
            </div>
        </section>
    );
}

export default MovieDetails;