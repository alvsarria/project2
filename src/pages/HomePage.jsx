import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo_books from "../assets/images/logo_books.png";
import "../styles/pages/HomePage.css";

const HomePage = ({ searchString, handleSearchString, setActivePage }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/books");
  };

  useEffect(() => {
    setActivePage("home");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homepage">
      <div className="homepage-majorcontainer">
        <div className="homepage-majorleft">
          <img className="logo-books" src={logo_books} alt="" />
        </div>
        <div className="homepage-majorright">
          <h1 className="slogan-homepage">Reading, The Ultimate Adventure</h1>
          <input
            onChange={handleSearchString}
            className="searchinput"
            type="text"
            name="bookSearch"
            placeholder="Look for a title"
            value={searchString}
            onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
          />
          <div className="homepage-minor">
            <button className="button_homepage" onClick={handleSubmit}>
              <span>Search</span>
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
