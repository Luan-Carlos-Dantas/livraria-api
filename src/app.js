import express from "express";
import dbConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middleware/manipuladorDeErros.js";
import erro404 from "./middleware/erro404.js";

const connection = await dbConnection();

connection.on("error", (err) => {
  console.error("Erro de conexão com o banco", err);
});

connection.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();

routes(app);

app.use(erro404);

// eslint-disable-next-line no-unused-vars
app.use(manipuladorDeErros);


export default app;
