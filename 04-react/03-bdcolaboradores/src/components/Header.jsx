import React from "react"

const Header = ({valorBuscado}) => {
    return (
        <div className="bg-dark text-light d-flex justify-content-between align-items-center">
        <h1 className="ms-3">Buscador de Colaboradores </h1>
        <input
          className="me-3"
          style={{ width: "300px" }}
          type="text"
          placeholder="Busca un colaborador"
          onChange={(e) => valorBuscado(e.target.value)}
        />
      </div>
    )
}

export default Header