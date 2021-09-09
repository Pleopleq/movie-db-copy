import { GET_MOVIE, GET_MOVIES } from "./types";
import { getMoviesBy, getSingleMovieBy } from "../../services/movies";

export const getMoviesAction = (movies) => ({
  type: GET_MOVIES,
  payload: movies,
});

export const getSingleMovieAction = (movie) => ({
  type: GET_MOVIE,
  payload: movie,
});

export const fetchMovies = (query) => async (dispatch, getState) => {
  const movies = await getMoviesBy(query);
  dispatch(getMoviesAction(movies));
};

export const fetchSingleMovie = (id) => async (dispatch, getState) => {
  const movie = await getSingleMovieBy(id);
  dispatch(getSingleMovieAction(movie));
};
