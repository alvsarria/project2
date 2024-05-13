import supabase from './utils/config.js'
import Footer from './components/Footer.jsx';
import './App.css'

function App() {
  const handleButton = async () => {
    const { data, error } = await supabase.from("favorites").select();
    if (error) {
      console.log("Error creating the user: ", error);
      return;
    } else {
      console.log(data);
    }
  };

  return (
    <>
      <h1>Hello World!!!</h1>
      <button onClick={handleButton}>Click to console log DB</button>
      <Footer />
    </>
  )
}

export default App
