import { useState, useEffect } from "react";
import MiApi from "./components/MiApi";
import Header from "./components/Header";

function App() {
  const [buscar, setBuscar] = useState("");
  const valorBuscado = (dataestado) => {
    setBuscar(dataestado);
  };
  console.log(buscar);
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
