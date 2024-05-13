import logo_slogan from "../assets/images/logo_slogan.png"
import "../styles/components/Header.css"

const Header = () => {
    return (
        <div className="header">
             <img className="logo-slogan" src={logo_slogan} alt="logo image" />
             <ul>
                <li>Home</li>
                <li>Books</li>
                <li>Favorites</li>
                <li>Add Book</li>
                <li>Shop</li>
             </ul>
        </div>
    )
}

export default Header;