import { autor } from "../models/Autores.js";
import { editora } from "../models/Editora.js";
import livro from "../models/Livro.js";

class LivroController {

  static async listarLivros(req,res,next){
    try{
      const listaLivros = await livro.find({});

      return res.status(200).send(listaLivros);
    }catch(error){
      next(error);
    }
  }

  static async listarLivro(req,res,next){

    const id = req.params.id;

    try{
      const listaLivro = await livro.findById(id);

      return res.status(200).json(listaLivro);
    }catch(error){
      next(error);
    }

  }

  static async buscaLivros(req, res,next){
    const editora = req.query.editora;

    try{
      const listaLivroEncontrado = await livro.find({
        editor: editora
      });

      return res.status(200).send(listaLivroEncontrado);
    }catch(error){
      next(error);
    }
  }

  static async criarLivros(req,res,next){
    const novoLivro = (req.body);

    try{
      const editoraEcontrada = await editora.findById(novoLivro.editor);
      const autorEncontrado = await autor.findById(novoLivro.author);
      const livroCompleto = {
        ...novoLivro,
        editor:{
          ...editoraEcontrada._doc
        },
        author:{
          ...autorEncontrado._doc
        }
      };

      const livroCriado = await livro.create(livroCompleto);
      return res.status(201).json({
        message: "Livro criado com sucesso",
        livro: livroCriado
      });
    }catch(error){
      next(error);
    }
  }

  static async atualizaLivro(req,res,next){
    const novoLivro = req.body;
    const idAutor = req.body.author;
    const idEditora = req.body.editor;
    const idLivro = req.params.id;

    try{
      const editoraEncontrada = await editora.findById(idEditora);
      const autorEncontrado = await autor.findById(idAutor);

      const livroAtualizado = {
        ...novoLivro,
        editor:{
          ...editoraEncontrada._doc
        },
        author: {
          ...autorEncontrado._doc
        }
      };

      await livro.findByIdAndUpdate(idLivro, livroAtualizado);

      return res.status(200).json({
        message: "Livro atualizado"
      });
    }catch(error){
      next(error);
    }

  }

  static async deletaLivro(req,res,next){
    try{
      const id = req.params.id;
      await livro.findByIdAndDelete(id);

      return res.status(204).json({
        message: "Livro deletado com sucesso"
      });
    }catch(error){
      next(error);
    }

  }
}

export default LivroController;
