import { GET_MOVIES } from "./types";
import { getMoviesBy } from "../../services/movies";

export const getMoviesAction = (movies) => ({
  type: GET_MOVIES,
  payload: movies,
});

export const fetchMovies = (query) => async (dispatch, getState) => {
  const movies = await getMoviesBy(query);
  dispatch(getMoviesAction(movies));
};
