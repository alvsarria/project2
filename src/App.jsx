import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './App.css'
import HomePage from './pages/HomePage.jsx';
import AllBooksPage from './pages/AllBooksPage.jsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/books" element={<AllBooksPage />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
