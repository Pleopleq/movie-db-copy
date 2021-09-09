import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchSingleMovie } from "../redux/Movies/actions";
import Page from "../Interfaces/page";

const SingleMovie: React.FC<Page & RouteComponentProps<any>> = (props) => {
  const movieID = props.match.params.id;
  const movie = useSelector(
    (state: RootStateOrAny) => state.moviesReducer.singleMovie
  );
  const releaseYear = movie.release_date?.split("-")[0];

  const dispatch = useDispatch();

  const onLoad = useCallback(() => {
    dispatch(fetchSingleMovie(movieID));
  }, [dispatch, movieID]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <div className='movie-container'>
      <div className='left-panel'>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={`${movie.original_title} poster`}></img>
      </div>
      <div className='right-panel'>
        <h1>
          {movie.original_title}
          <span>{` (${releaseYear})`}</span>
        </h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default withRouter(SingleMovie);
