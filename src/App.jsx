import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import AllBooksPage from './pages/AllBooksPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import AddBookPage from './pages/AddBookPage.jsx';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState("");

  const handleSearchString = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <Header setSearchString={setSearchString} />
      <Routes>
        <Route path="/" element={<HomePage searchString={searchString} setSearchString={setSearchString} handleSearchString={handleSearchString} />}></Route>
        <Route path="/books" element={<AllBooksPage searchString={searchString} setSearchString={setSearchString} handleSearchString={handleSearchString} />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
        <Route path="/addbook" element={<AddBookPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
