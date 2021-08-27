import { GET_MOVIES } from "./types";

const INITIAL_STATE = {
  movies: [],
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
};

export default moviesReducer;
