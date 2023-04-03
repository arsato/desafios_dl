import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import MyContext from "./MyContext";
import AppRouter from "./components/AppRouter";

function App() {
  const [dataFotos, setDataFotos] = useState([]);

  const getPhotos = async () => {
    const response = await fetch("./fotos.json");
    let { photos } = await response.json();
    photos = photos.map((val) => ({
      id: val.id,
      src: val.src.medium,
      text: val.alt,
      liked: val.liked,
    }));
    setDataFotos(photos);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const estadoFotos = { dataFotos, setDataFotos };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MyContext.Provider value={estadoFotos}>
          <AppRouter />
        </MyContext.Provider>
      </Router>
    </div>
  );
}

export default App;
