import React from "react";

const Contact = () => {
  return (
    <div className="formulario">
    <h3 className="mt-5">Envíanos tu mensaje, te responderemos a la brevedad</h3>
    <form className="mt-4">
      <div className="correo mb-4">
        <label HtmlFor="correoInput" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="correoInput"
          placeholder="nombre@ejemplo.com"
        />
      </div>
      <div className="mensaje mb-4">
        <label HtmlFor="textoMensaje" className="form-label">
          Mensaje
        </label>
        <textarea
          className="form-control"
          id="textoMensaje"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="enviar btn btn-danger">Enviar mensaje</button>
    </form>
    </div>
  );
};

export default Contact;
