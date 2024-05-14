import axios from 'axios';
import logo_books from "../assets/images/logo_books.png"
import "../styles/pages/HomePage.css"
import { useState } from 'react';

const bookApiUrl = "https://openlibrary.org/search.json?q=";

const HomePage = () => {
    const [searchWord, setSearchWord] = useState("");

    const handleSarch = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSubmit = async () => {
        const searchWordFormatted = searchWord.replaceAll(" ","+");
        try {
            const data = (await axios.get(`${bookApiUrl}${searchWordFormatted}&limit=10000`)).data.docs;
            console.log(data);
        } catch (error){
            console.log("Error creating the user: ", error);
        }
    };

    return (
        <div className="homepage">
            <div className="homepage-majorcontainer">
                <div className="homepage-majorleft">
                    <img className="logo-books" src={logo_books} alt="" />
                </div>
                <div className="homepage-majorright">
                    <h1 className="slogan-homepage">Reading, The Ultimate Adventure</h1>
                    <input className="searchinput" type="text" name="bookSearch" placeholder="Look for a book" onChange={handleSarch} value={searchWord} />
                    <div className="homepage-minor">
                        <input className="searchinput" type="text" name="genreSearch" placeholder="Genre" />
                        <input className="searchinput" type="text" name="authorSearch" placeholder="Author" />
                        <button className="searchButton" onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;