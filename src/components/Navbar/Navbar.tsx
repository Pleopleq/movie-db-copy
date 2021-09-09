// import NavbarImageItem from '../NavbarImageItem'
import NavbarButton from "../NavbarButton";
import { ReactComponent as MovieDBLogo } from "./logo.svg";
import NavbarTextItem from "../NavbarText";
import NavbarImageItem from "../NavbarImageI";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-items'>
        <div className='navbar-primary'>
          <div className='navbar-logo-container'>
            <Link to={"/"}>
              <MovieDBLogo className='navbar-logo'></MovieDBLogo>{" "}
            </Link>
          </div>
          <NavbarTextItem text='Movies'></NavbarTextItem>
          <NavbarTextItem text='TV Shows'></NavbarTextItem>
          <NavbarTextItem text='People'></NavbarTextItem>
          <NavbarTextItem text='More'></NavbarTextItem>
        </div>
        <div className='navbar-secondary'>
          <NavbarImageItem
            src={
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-371-plus-white-0bac34f16124808a12ea863b4d9cc6e599dee7c0a80658cfe9ead26939e64517.svg"
            }
            alt={"Search icon"}
            className={"navbar-logo-container"}
            imgClassName={"navbar-logo__plus"}></NavbarImageItem>
          <NavbarButton text='EN'></NavbarButton>
          <NavbarTextItem text='Login'></NavbarTextItem>
          <NavbarTextItem text='Join TMDB'></NavbarTextItem>
          <NavbarImageItem
            src={
              "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-28-search-blue-177462d06db81ff2a02aa022c1c0be5ba4200d7bd3f51091ed9298980e3a26a1.svg"
            }
            alt={"Search icon"}
            className={"navbar-logo-container"}
            imgClassName={"navbar-logo__search"}></NavbarImageItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
