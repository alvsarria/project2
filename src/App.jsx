import supabase from './utils/config.js'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import './App.css'

function App() {
  // const handleButton = async () => {
  //   const { data, error } = await supabase.from("favorites").select();
  //   if (error) {
  //     console.log("Error creating the user: ", error);
  //     return;
  //   } else {
  //     console.log(data);
  //   }
  // };

  return (
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
