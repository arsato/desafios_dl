import React from "react";
import Alert from "react-bootstrap/Alert";

const Alerta = ({ mensaje, variante }) => {
  return (
    <Alert variant={variante} className="eventInfo w-50 mt-3">
      {mensaje}
    </Alert>
  );
};
export default Alerta;
