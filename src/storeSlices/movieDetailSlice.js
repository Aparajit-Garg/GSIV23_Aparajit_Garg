import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState: {
        movie: []
    },
    reducers: {
        updateMovie: (state, action) => {
            state.movie.push(action.payload)
        }
    }
})

export const updateMovie = movieDetailSlice.actions;
export const movieDetail = movieDetailSlice.reducer;