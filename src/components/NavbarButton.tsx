import NavbarButtonProps from "../Interfaces/Navbar/NavbarButtonProps"

const NavbarButton: React.FC<NavbarButtonProps> = ({text}: NavbarButtonProps) => {
    return (
        <button className="navbar-button">
           {text}
        </button>
    )
}

export default NavbarButton