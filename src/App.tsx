import "./App.css";
import { useEffect, useCallback } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { fetchMovies } from "./redux/Movies/actions";
import Navbar from "./components/Navbar/Navbar";
import HomeContainer from "./components/HomeContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemGrid from "./components/PresentionalGrid/ItemGrid";

const App: React.FC = () => {
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
      <Navbar></Navbar>
      <main className='main-container'>
        <h2>Popular Movies</h2>
        <HomeContainer>
          <Sidebar></Sidebar>
          <ItemGrid items={movies.results}></ItemGrid>
        </HomeContainer>
      </main>
    </>
  );
};

export default App;
