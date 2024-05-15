import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import AllBooksPage from './pages/AllBooksPage.jsx';
import FavoritesPage from './pages/FavoritesPage.jsx';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/books" element={<AllBooksPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
