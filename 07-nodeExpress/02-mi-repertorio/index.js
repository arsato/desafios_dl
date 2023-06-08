const express = require("express");
const routes = require("./routes/routes");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Servidor encendido en port ${PORT}!`));

app.use("/", routes);
