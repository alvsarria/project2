import { Link } from "react-router-dom";
import logo_slogan from "../assets/images/logo_slogan.png"
import "../styles/components/Header.css"

const Header = ({ setSearchString, activePage }) => {
    return (
        <div className="header">
            <img className="logo-slogan" src={logo_slogan} alt="logo image" />
            <ul>
                <Link to="/" onClick={() => setSearchString("")}><li className={activePage === "home" ? "active" : undefined}>Home</li></Link>
                <Link to="/books " onClick={() => setSearchString("")}><li className={activePage === "allbooks" ? "active" : undefined}>Books</li></Link>
                <Link to="/favorites"><li className={activePage === "favorites" ? "active" : undefined}>Favorites</li></Link>
                <Link to="/addbook"><li className={activePage === "addbook" ? "active" : undefined}>Add Book</li></Link>
            </ul>
        </div>
    )
}

export default Header;