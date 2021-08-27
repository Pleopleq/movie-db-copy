import { GET_MOVIES } from "./types";
import { getMovies } from "../../services/movies";

export const getMoviesAction = (movies) => ({
  type: GET_MOVIES,
  payload: movies,
});

export const fetchMovies = () => async (dispatch, getState) => {
  const movies = await getMovies();
  dispatch(getMoviesAction(movies));
};
