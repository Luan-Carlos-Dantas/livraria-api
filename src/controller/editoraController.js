import { editora} from "../models/Editora.js";
import Erro404 from "../error/Erro404.js";
class EditoraController{
  static async listaEditoras(req,res,next){
    try {
      const listaEditoras = await editora.find({});

      return res.status(200).json(listaEditoras);
    } catch (error) {
      next(error);
    }
  }

  static async buscaEditoraPeloNome(req,res,next){
    const nomeEditora = req.query.nome;
    try {
      const listaEditora = await editora.find({name: nomeEditora});

      console.log(listaEditora);

      if(listaEditora !== null || listaEditora !== ""){
        return res.status(200).json(listaEditora);
      }else{
        next(new Erro404("Nome da editora não foi encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async listaEditora(req,res,next){
    const idProcurado = req.params.id;
    try {
      const listaEditora = await editora.findById(idProcurado);

      if(listaEditora !== null){
        return res.status(200).json(listaEditora);
      }else{
        next(new Erro404("ID da editora não foi encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async cadastraEditora(req,res,next){
    const editoraRecebida = req.body;
    try {
      const novaEditora = await editora.create(editoraRecebida);

      return res.status(200).json(
        {
          message:"Editora criada com sucesso",
          novaEditora
        }
      );
    } catch (error) {
      next(error);
    }
  }

  static async atualizaEditora(req,res,next){
    const idParaAtualizacao = req.params.id;
    const editoraAturalizada = req.body;
    try {

      if(await editora.findById(idParaAtualizacao) !== null){
        await editora.findByIdAndUpdate(idParaAtualizacao, editoraAturalizada);

        return res.status(200).json(
          {
            message:"Editora atualizada com sucesso",
          }
        );
      }else{
        next(new Erro404("ID da editora não foi encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }

  static async deletaEditora(req,res,next){
    const idParaExclusao = req.params.id;
    try {

      if(await editora.findById(idParaExclusao) !== null){
        await editora.findByIdAndDelete(idParaExclusao);
        return res.status(204).json(
          {
            message:"Editora deletada com sucesso",
          }
        );
      }else{
        next(new Erro404("ID da editora não foi encontrado"));
      }
    } catch (error) {
      next(error);
    }
  }
}

export default EditoraController;
