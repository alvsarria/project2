import { Link } from "react-router-dom";
import logo_slogan from "../assets/images/logo_slogan.png"
import "../styles/components/Header.css"

const Header = ({ setSearchString }) => {
    return (
        <div className="header">
            <img className="logo-slogan" src={logo_slogan} alt="logo image" />
            <ul>
                <Link to="/" onClick={() => setSearchString("")}><li className="active">Home</li></Link>
                <Link to="/books " onClick={() => setSearchString("")}><li>Books</li></Link>
                <Link to="/favorites"><li>Favorites</li></Link>
                <Link to="/addbook"><li>Add Book</li></Link>
                <Link to="/shop"><li>Shop</li></Link>
            </ul>
        </div>
    )
}

export default Header;