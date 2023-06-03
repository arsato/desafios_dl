const { registrar, leer } = require('./operaciones.js');

const argumento = process.argv.slice(2);

const command = argumento[0];

if (command === 'registrar'){
    const nombre = argumento[1];
    const edad = argumento[2];
    const tipo = argumento[3];
    const color = argumento[4];
    const enfermedad = argumento[5];
    registrar(nombre, edad, tipo, color, enfermedad);
}
else if(command === 'leer'){
    leer();
}
else {
    console.log('Comando incorrecto, los comandos aceptados son: registrar o leer');
}