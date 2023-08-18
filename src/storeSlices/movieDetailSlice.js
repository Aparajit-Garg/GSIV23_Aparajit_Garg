import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
    name: 'movieDetail',
    initialState: {
        movieDetail: {},
        castDetail: {}
    },
    reducers: {
        updateMovieDetail: (state, action) => {
            state.movieDetail[action.payload.movieId] = action.payload.payload;
        },
        updateCastDetail: (state, action) => {
            state.castDetail[action.payload.movieId] = action.payload.payload;
        }
    }
})

export const { updateMovieDetail, updateCastDetail } = movieDetailSlice.actions;
export const movieDetail = movieDetailSlice.reducer;