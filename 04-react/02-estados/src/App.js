import React, { useState } from "react";
import Login from "./components/Login";
import Alerta from "./components/Alert";
import "./app.css";

function App() {
  //Estado de la alerta dependiente de la validacion de login
  const [data, setData] = useState({ mensaje: "", variante: "" });
  const estadoIngreso = (dataestado) => {
    setData(dataestado);
  };
  return (
    <div className="todo">
      <h1>Formulario de correo</h1>
      <Login estadoIngreso={estadoIngreso} />
      <Alerta mensaje={data.mensaje} variante={data.variante} />
    </div>
  );
}

export default App;
