import React from "react"

const Header = ({valorBuscado}) => {
    return (
        <div className="bg-dark text-light d-flex justify-content-between align-items-center" style={{height: "100px"}}>
        <h1 className="ms-3">Series mejor valoradas</h1>
        <input
          className="me-3"
          name="busqueda"
          style={{ width: "300px" }}
          type="text"
          placeholder="Busca una serie"
          onChange={(e) => valorBuscado(e.target.value)}
        />
      </div>
    )
}

export default Header