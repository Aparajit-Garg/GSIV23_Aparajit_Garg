import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        totalCount: 0,
        searchedMovieList: []
    },
    reducers: {
        updateMovieList: (state, action) => {
            state.movies = action.payload;
        },
        updateSearchedMovieList: (state, action) => {
            state.searchedMovieList = action.payload;
        }
    }
})

export const { updateSearchedMovieList, updateMovieList } = movieListSlice.actions;
export const movieList = movieListSlice.reducer;