import express from "express";
import EditoraController from "../controller/editoraController.js";

const routes = express.Router();

routes.get("/editora", EditoraController.listaEditoras);
routes.get("/editora/busca", EditoraController.buscaEditoraPeloNome);
routes.get("/editora/:id", EditoraController.listaEditora);
routes.post("/editora", EditoraController.cadastraEditora);
routes.put("/editora/:id", EditoraController.atualizaEditora);
routes.delete("/editora/:id", EditoraController.deletaEditora);

export default routes;
