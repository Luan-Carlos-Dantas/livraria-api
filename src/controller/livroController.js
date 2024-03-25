import { autor } from '../models/Autores.js';
import livro from '../models/Livro.js';

class LivroController {

  static async listarLivros(req,res){
    try{
      const listaLivros = await livro.find({})

      return res.status(200).send(listaLivros)
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao listar todos os livros` });
    }
  }

  static async listarLivro(req,res){

    const id = req.params.id

    try{
      const listaLivro = await livro.findById(id)

      return res.status(200).json(listaLivro)
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao listar o livro` });
    }

  }

  static async buscaLivros(req, res){
    const editora = req.query.editora

    try{
      const listaLivroEncontrado = await livro.find({
        editor: editora
      })

      return res.status(200).send(listaLivroEncontrado)
    }catch(error){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao listar o livro` });
    }
  }

  static async criarLivros(req,res){
    const novoLivro = (req.body)

    try{
      const autorEncontrado = await autor.findById(novoLivro.author);
      const livroCompleto = {
        ...novoLivro,
        author:{
          ...autorEncontrado._doc
        }
      }

      const livroCriado = await livro.create(livroCompleto)
      return res.status(201).json({
        message: 'Livro criado com sucesso',
        livro: livroCriado
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao cadastrar um novo livro` });
    }
  }

  static async atualizaLivro(req,res){
    const novoLivro = req.body
    const idAutor = req.body.author
    const idLivro = req.params.id

    try{
      const autorEncontrado = await autor.findById(idAutor)

      const livroAtualizado = {
        ...novoLivro,
        author: {
          ...autorEncontrado._doc
        }
      }

      await livro.findByIdAndUpdate(idLivro, livroAtualizado)

      return res.status(200).json({
        message: 'Livro atualizado'
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao atualizar o livro`});
    }

  }

  static async deletaLivro(req,res){
    try{
      const id = req.params.id
      await livro.findByIdAndDelete(id)

      return res.status(204).json({
        message: 'Livro deletado com sucesso'
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao atualizar o livro`});
    }

  }
}

export default LivroController
