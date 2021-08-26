import './App.css';
import Navbar from './components/Navbar/Navbar'
import HomeContainer from './components/HomeContainer';
import Sidebar from './components/Sidebar/Sidebar'
import ItemGrid from './components/PresentionalGrid/ItemGrid';
import MOVIES from './mock/movies';

const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="main-container">
        <h2>Popular Movies</h2>
        <HomeContainer>
          <Sidebar></Sidebar>
          <ItemGrid items={MOVIES}></ItemGrid>
        </HomeContainer>
      </main>
    </>
  )
}

export default App;
