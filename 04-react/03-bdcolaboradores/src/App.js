import Colaboradores from "./components/Colaboradores"
import Header from "./components/Header";
import React, { useState } from "react";

function App() {
  const [buscar, setBuscar] = useState("");
  const valorBuscado = (dataestado) => {
    setBuscar(dataestado);
  };
  return (
    <div className="App">      
      <Header valorBuscado={valorBuscado} />
      <Colaboradores buscador={buscar}/>
    </div>
  );
}

export default App;
