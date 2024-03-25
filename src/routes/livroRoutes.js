import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.buscaLivros);
routes.get('/livros/:id', LivroController.listarLivro);
routes.post('/livros', LivroController.criarLivros);
routes.put('/livros/:id', LivroController.atualizaLivro);
routes.delete('/livros/:id', LivroController.deletaLivro);


export default routes
