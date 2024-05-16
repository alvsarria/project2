import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AllBooksPage from "./pages/AllBooksPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import AddBookPage from "./pages/AddBookPage.jsx";
import "./App.css";

function App() {
  const [searchString, setSearchString] = useState("");
  const [activePage, setActivePage] = useState("home");

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <Header activePage={activePage} setSearchString={setSearchString} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              setActivePage={setActivePage}
              searchString={searchString}
              setSearchString={setSearchString}
              handleSearchString={handleSearchString}
            />
          }
        ></Route>
        <Route
          path="/books"
          element={
            <AllBooksPage
              setActivePage={setActivePage}
              searchString={searchString}
              setSearchString={setSearchString}
              handleSearchString={handleSearchString}
            />
          }
        ></Route>
        <Route
          path="/favorites"
          element={<FavoritesPage setActivePage={setActivePage} />}
        ></Route>
        <Route
          path="/addbook"
          element={
            <AddBookPage
              setActivePage={setActivePage}
              setSearchString={setSearchString}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
