import NavbarTextProps from "../Interfaces/Navbar/NavbarTextProps"

const NavbarText: React.FC<NavbarTextProps> = ({text}: NavbarTextProps) => {
    return (
        <div className="navbar-item">
            <p>{text}</p>
        </div>
    )
}

export default NavbarText