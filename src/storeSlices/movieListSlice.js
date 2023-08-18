import { createSlice } from "@reduxjs/toolkit";

const movieListSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        totalCount: 0
    },
    reducers: {
        updateMovieList: (state, action) => {
            state.movies = action.payload
        }
    }
})

export const { updateMovieList } = movieListSlice.actions;
export const movieList = movieListSlice.reducer;