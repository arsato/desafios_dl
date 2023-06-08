const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/canciones", (req, res) => {
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  res.json(canciones);
});

router.post("/canciones", (req, res) => {
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  canciones.push(cancion);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Cancion agregada con éxito!");
  console.log("\x1b[32m", "----------------");
  console.log(" Canción Agregada");
  console.log(" ----------------");
  console.log(`Titulo: ${cancion.titulo}`);
  console.log(`Artista: ${cancion.artista}`);
  console.log("%s\x1b[0m", `Tono: ${cancion.tono}`);
});

router.delete("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = canciones.findIndex((p) => p.id == id);
  const cancionEliminada = canciones.find((p) => p.id == id);
  canciones.splice(index, 1);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Cancion eliminada con éxito!");
  console.log("\x1b[31m", "-----------------");
  console.log(" Canción Eliminada");
  console.log(" -----------------");
  console.log(`Titulo: ${cancionEliminada.titulo}`);
  console.log(`Artista: ${cancionEliminada.artista}`);
  console.log("%s\x1b[0m", `Tono: ${cancionEliminada.tono}`);
});

router.put("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const cancion = req.body;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = canciones.findIndex((p) => p.id == id);
  const cancionOld = canciones[index];
  canciones[index] = cancion;
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("Cancion modificada con éxito");
  console.log("-----------------");
  console.log(" Canción Modificada");
  console.log(" -----------------");
  cancionOld.titulo != cancion.titulo
    ? console.log(
        "\x1b[34m%s\x1b[0m",
        `Titulo: ${cancionOld.titulo} --> ${cancion.titulo}`
      )
    : console.log(`Titulo: ${cancionOld.titulo}`);
  cancionOld.artista != cancion.artista
    ? console.log(
        "\x1b[34m%s\x1b[0m",
        `Artista: ${cancionOld.artista} --> ${cancion.artista}`
      )
    : console.log(`Artista: ${cancionOld.artista}`);
  cancionOld.tono != cancion.tono
    ? console.log(
        "\x1b[34m%s\x1b[0m",
        `Tono: ${cancionOld.tono} --> ${cancion.tono}`
      )
    : console.log(`Tono: ${cancionOld.tono}`);
});

module.exports = router;
