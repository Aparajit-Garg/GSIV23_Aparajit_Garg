import classes from './../styles/Header.module.css'
import { Search } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { updateSearchedMovieList } from '../storeSlices/movieListSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const params = useParams()
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    // if there are more api calls, this can be moved to constants.js
    const FETCH_URL = "https://api.themoviedb.org/3/"
    console.log(params)
    console.log(params.id)

    useEffect(() => {
        const timer = setTimeout(async () => {
            try {
                const response = await fetch(`${FETCH_URL}search/movie?&query=${searchValue}&api_key=${process.env.REACT_APP_API_KEY}`)
                const data = await response.json()
                console.log(data)
                dispatch(updateSearchedMovieList(data))
            } catch (error) {
                console.log("Error fetching search query: ", error)
            }
        }, 500)

        return (() => clearTimeout(timer))

    }, [searchValue])

    const updateSearchValue = (e) => {
        setSearchValue(e.target.value)
        if (searchValue === '') {
            dispatch(updateSearchedMovieList([]))
        }
    }
    
    return (
        <header className={classes.header}>
            {
                params.id !== undefined ? 
                <h2> Movie Details </h2>
                :
                <span className={classes.search_input}>
                    <Search />
                    <input type="text" placeholder="Search" value={searchValue} onChange={updateSearchValue}/>
                </span>
            }
            <span className={classes.home_icon}>
                <Link to="/"> <Home /> </Link>
            </span>
            
        </header>
    );
}

export default Header;