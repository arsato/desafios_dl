const fs = require('fs')

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const listado = fs.readFileSync('citas.json','utf-8')
    let json = JSON.parse(listado);
    json.push({nombre: nombre, edad: edad, tipo: tipo, color: color, enfermedad: enfermedad})
    fs.writeFileSync('citas.json',JSON.stringify(json))
}

const leer = () => {
    const listado = fs.readFileSync("citas.json", "utf-8");
    listadoParse = JSON.parse(listado);
    listadoParse.forEach((cita) => console.log(cita))
  };

  module.exports = { registrar, leer }