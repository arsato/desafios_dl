// components/Formulario.js
import React, { useState } from "react";

const Login = ({ estadoIngreso }) => {
  //Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Función para validar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación de email y password
    if (email === "ariel@hola.cl" && password === "hola") {
      estadoIngreso({ mensaje: "Ingreso exitoso", variante: "success" });
      return;
    }
    estadoIngreso({ mensaje: "Datos incorrectos", variante: "danger" });
  };

  return (
    <form className="formulario" onSubmit={validarDatos}>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          placeholder="Ingresa tu correo"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          placeholder="********"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <button
        className="btn btn-dark mt-3"
        type="submit"
        disabled={!email || !password}
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default Login;
