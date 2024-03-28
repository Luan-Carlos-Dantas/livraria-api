import {autor} from "../models/Autores.js";

class AutoresController {

  static async listarAutores(req,res,next){
    try{
      const listaAutores = await autor.find({});

      return res.status(200).send(listaAutores);
    }catch(error){
      next(error);
    }
  }

  static async criarAutor(req,res,next){
    try{
      const novoAutor = await autor.create(req.body);

      return res.status(201).json({
        message: "Autor criado com sucesso",
        livro: novoAutor
      });
    }catch(error){
      next(error);
    }
  }

  static async listarAutor(req,res,next){
    const id = req.params.id;

    try{
      const listaAutor = await autor.findById(id);

      if(listaAutor !== null){
        return res.status(200).json(listaAutor);
      }else{
        res
          .status(404)
          .json({ message: "Falha ao listar o autor" });
      }
    }catch(error){
      next(error);
    }

  }

  static async atualizaAutor(req,res,next){
    try{
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);

      return res.status(200).json({
        message: "Autor atualizado"
      });
    }catch(error){
      next(error);
    }

  }

  static async deletaAutores(req,res,next){
    try{
      const id = req.params.id;
      await autor.findByIdAndDelete(id);

      return res.status(204).json({
        message: "Autor deletado com sucesso"
      });
    }catch(error){
      next(error);
    }

  }
}

export default AutoresController;
