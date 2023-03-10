import { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";

const Colaboradores = ({buscador}) => {
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");
  const [listaColaboradores, setListaColaboradores] =
    useState(BaseColaboradores);

  function crearID(len) {
    let characters = "0123456789ABCDEF";
    let str = "";
    for (let i = 0; i < len; i++) {
      str += characters[Math.floor(Math.random() * 16)];
    }
    return str;
  }

  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaColaboradores([
      ...listaColaboradores,
      { id: crearID(4), nombre: nombreColaborador, correo: correoColaborador },
    ]);
    setNombreColaborador("");
    setCorreoColaborador("");
  };

  const capturaInput = (e) => {
    setNombreColaborador(e.target.value);
  };

  const capturaInput2 = (e) => {
    setCorreoColaborador(e.target.value);
  };

  return (
    <div>
      <form
        className="d-flex flex-column mt-3 ms-3"
        onSubmit={enviarFormulario}
      >
        <h5>Nombre del colaborador</h5>
        <input
          style={{ width: "300px" }}
          name="nombreColaborador"
          placeholder="Ingresa Nombre Colaborador"
          onChange={capturaInput}
          value={nombreColaborador}
        />
        <h5 className="mt-3">Correo del colaborador</h5>
        <input
          style={{ width: "300px" }}
          name="correoColaborador"
          placeholder="Ingresa Correo Colaborador"
          onChange={capturaInput2}
          type="email"
          value={correoColaborador}
        />
        <button className=" mt-3 btn btn-success" style={{ width: "300px" }}>
          Agregar Colaborador
        </button>
      </form>
      <hr className="mt-4" />
      <h1 className="ms-3">Listado de colaboradores</h1>
      <ul>
        {listaColaboradores
          .filter((colab) => {
            if (colab.nombre.toLowerCase().includes(buscador.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((colab) => (
            <li key={colab.id}>
              {colab.nombre} - {colab.correo}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Colaboradores;
