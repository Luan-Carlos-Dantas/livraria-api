import express from 'express';
import AutoresController from '../controller/autoresController.js';

const routes = express.Router();

routes.get('/autores', AutoresController.listarAutores);
routes.get('/autores/:id', AutoresController.listarAutor);
routes.post('/autores', AutoresController.criarAutor);
routes.put('/autores/:id', AutoresController.atualizaAutor);
routes.delete('/autores/:id', AutoresController.deletaAutores);


export default routes
