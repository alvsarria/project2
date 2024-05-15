import { useNavigate } from "react-router-dom"
import logo_books from "../assets/images/logo_books.png"
import "../styles/pages/HomePage.css"

const HomePage = ({ searchString, handleSearchString }) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate("/books")
    };
    return (
        <div className="homepage">
            <div className="homepage-majorcontainer">
                <div className="homepage-majorleft">
                    <img className="logo-books" src={logo_books} alt="" />
                </div>
                <div className="homepage-majorright">
                    <h1 className="slogan-homepage">Reading, The Ultimate Adventure</h1>
                    <input onChange={handleSearchString} className="searchinput" type="text" name="bookSearch" placeholder="Look for a title" value={searchString} />
                    <div className="homepage-minor">
                        <button onClick={handleSubmit} className="searchButton">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;