import { useState} from "react";
import MiApi from "./components/MiApi";
import Header from "./components/Header";
import "./App.css";


function App() {
  const [buscar, setBuscar] = useState("");
  const valorBuscado = (searchData) => {
    setBuscar(searchData);
  };

  return (
    <div>
      <Header valorBuscado={valorBuscado} />
      <div className="container-fluid mt-3">
        <MiApi search={buscar} />
      </div>
    </div>
  );
}
export default App;
