import { withRouter, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchSingleMovie } from "../redux/Movies/actions";
import Page from "../Interfaces/page";
import formatMovieRuntime from "../helpers/formatMovieRuntime";

const SingleMovie: React.FC<Page & RouteComponentProps<any>> = (props) => {
  const movieID = props.match.params.id;
  let movie = useSelector(
    (state: RootStateOrAny) => state.moviesReducer.singleMovie
  );
  const dispatch = useDispatch();

  const releaseYear = movie.release_date?.split("-")[0];
  const genres = movie.genres
    ?.map((genre: { name: string }) => {
      return genre.name;
    })
    .join(", ");
  const movieDuration = formatMovieRuntime(movie.runtime);

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
        <p>
          {`${genres}`} &#8226; {`${movieDuration}`}{" "}
        </p>
        <p>{movie.tagline}</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default withRouter(SingleMovie);
