import { autor } from "../models/index.js";
import { editora } from "../models/index.js";
import {livro} from "../models/index.js";
import Erro404 from "../error/Erro404.js";

function processaBusca(params){
  const {editora,titulo,autores,minPages,maxPages} = params;

  const busca = {};

  if(titulo) busca.title = {
    $regex: titulo,
    $options: "i"
  };
  if(editora) busca["editor.name"] = {
    $regex: editora,
    $options: "i"
  };

  if(autores) busca["author.name"] = {
    $regex: autores,
    $options: "i"
  };

  if(minPages || maxPages) busca.pages = {};
  if(minPages) busca.pages.$gte = minPages;
  if(maxPages) busca.pages.$lte = maxPages;

  return busca;
}
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

      if(listaLivro !== null){
        return res.status(200).json(listaLivro);
      }else{
        next(new Erro404("ID do livro não foi encontrado"));
      }
    }catch(error){
      next(error);
    }

  }

  static async buscaLivrosPorFiltro(req, res,next){
    const busca = processaBusca(req.query);

    try{
      const listaLivroEncontrado = await livro.find(busca);

      if(listaLivroEncontrado !== null){
        return res.status(200).json(listaLivroEncontrado);
      }else{
        next(new Erro404("Não foi possível encontrar livros com os parametros informados"));
      }
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

      if(editoraEncontrada !== null & autorEncontrado !== null){
        const livroAtualizado = {
          ...novoLivro,
          editor:{
            ...editoraEncontrada._doc
          },
          author: {
            ...autorEncontrado._doc
          }
        };

        if(await livro.findById(idLivro) !== null){
          console.log(livro.findByIdAndUpdate(idLivro, livroAtualizado));
          await livro.findByIdAndUpdate(idLivro, livroAtualizado);

          return res.status(200).json({
            message: "Livro atualizado"
          });
        }else{
          next(new Erro404("ID do livro não foi encontrado"));
        }

      }else{
        next(new Erro404("ID do autor ou editora não foi encontrado"));
      }
    }catch(error){
      next(error);
    }
  }

  static async deletaLivro(req,res,next){
    try{
      const id = req.params.id;

      if(await livro.findById(id) !== null){
        await livro.findByIdAndDelete(id);

        return res.status(204).json({
          message: "Livro deletado com sucesso"
        });
      }else{
        next(new Erro404("ID do livro não foi encontrado"));
      }
    }catch(error){
      next(error);
    }

  }
}

export default LivroController;
