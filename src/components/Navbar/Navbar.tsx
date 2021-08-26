// import NavbarImageItem from '../NavbarImageItem'
import NavbarButton from '../NavbarButton'
import NavbarTextItem from '../NavbarText'

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-items">
            {/* <NavbarImageItem></NavbarImageItem> */}
            <div className="navbar-primary">
                <NavbarTextItem text="Movies"></NavbarTextItem>
                <NavbarTextItem text="TV Shows"></NavbarTextItem>
                <NavbarTextItem text="People"></NavbarTextItem>
                <NavbarTextItem text="More"></NavbarTextItem>
            </div>
            <div className="navbar-secondary">
                <NavbarTextItem text="+"></NavbarTextItem>
                <NavbarButton text="EN"></NavbarButton>
                <NavbarTextItem text="Login"></NavbarTextItem>
                <NavbarTextItem text="Join TMDB"></NavbarTextItem>
                <NavbarTextItem text="Lupita"></NavbarTextItem>
            </div>
            </div>
        </nav>
    )
}


export default Navbar