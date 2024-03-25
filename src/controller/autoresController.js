import {autor, autorSchema} from '../models/Autores.js';

class AutoresController {

  static async listarAutores(req,res){
    try{
      const listaAutores = await autor.find({})

      return res.status(200).send(listaAutores)
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao listar todos os Autores` });
    }
  }

  static async criarAutor(req,res){
    try{
     const novoAutor = await autor.create(req.body)

      return res.status(201).json({
        message: 'Autor criado com sucesso',
        livro: novoAutor
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao cadastrar um novo autor` });
    }
  }

  static async listarAutor(req,res){
    const id = req.params.id

    try{
      const listaAutor = await autor.findById(id)

      return res.status(200).json(listaAutor)
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao listar o autor` });
    }

  }

  static async atualizaAutor(req,res){
    try{
      const id = req.params.id
      await autor.findByIdAndUpdate(id, req.body)

      return res.status(200).json({
        message: 'Autor atualizado'
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao atualizar o Autor`});
    }

  }

  static async deletaAutores(req,res){
    try{
      const id = req.params.id
      await autor.findByIdAndDelete(id)

      return res.status(204).json({
        message: 'Autor deletado com sucesso'
      })
    }catch(erro){
      res
      .status(500)
      .json({ message: `${erro.message} - Falha ao deletar o Autor`});
    }

  }
}

export default AutoresController
