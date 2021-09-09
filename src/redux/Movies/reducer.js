import { GET_MOVIES, GET_MOVIE } from "./types";

const INITIAL_STATE = {
  movies: [],
  singleMovie: [],
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  console.log(payload);
  console.log(type);
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        singleMovie: payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
