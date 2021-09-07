import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useEffect, useCallback } from "react";
import { fetchMovies } from "../redux/Movies/actions";
import HomeContainer from "../components/HomeContainer";
import ItemGrid from "../components/PresentionalGrid/ItemGrid";
import Sidebar from "../components/Sidebar/Sidebar";
import Page from "../Interfaces/page";

const HomePage: React.FC<Page> = (props) => {
  const movies = useSelector(
    (state: RootStateOrAny) => state.moviesReducer.movies
  );
  const dispatch = useDispatch();

  const onLoad = useCallback(() => {
    dispatch(fetchMovies("popular"));
  }, [dispatch]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return (
    <>
      <h2>Popular Movies</h2>
      <HomeContainer>
        <Sidebar></Sidebar>
        <ItemGrid items={movies.results}></ItemGrid>
      </HomeContainer>
    </>
  );
};

export default HomePage;
