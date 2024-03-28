import express from "express";
import livros from "./livroRoutes.js";
import autores from "./autoresRoutes.js";
import editora from "./editorasRoutes.js";

const routes = (app) =>{
  app.route("/").get((req,res)=>{
    res.status(200).send("API - Livraria");
  });

  app.use(express.json(), livros, autores, editora);
};

export default routes;
