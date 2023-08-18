import { configureStore } from "@reduxjs/toolkit";
import { movieList } from "./storeSlices/movieListSlice";
import { movieDetail } from "./storeSlices/movieDetailSlice";

const store = configureStore({
    reducer: {
        movies: movieList,
        movieDetail: movieDetail
    }
});

export default store;