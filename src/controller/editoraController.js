import { editora} from "../models/Editora.js";

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

      return res.status(200).json(listaEditora);
    } catch (error) {
      next(error);
    }
  }

  static async listaEditora(req,res,next){
    const idProcurado = req.params.id;
    try {
      const listaEditora = await editora.findById(idProcurado);

      return res.status(200).send(listaEditora);
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

      await editora.findByIdAndUpdate(idParaAtualizacao, editoraAturalizada);
      return res.status(200).json(
        {
          message:"Editora atualizada com sucesso",
        }
      );
    } catch (error) {
      next(error);
    }
  }

  static async deletaEditora(req,res,next){
    const idParaExclusao = req.params.id;
    try {

      await editora.findByIdAndDelete(idParaExclusao);
      return res.status(204).json(
        {
          message:"Editora deletada com sucesso",
        }
      );
    } catch (error) {
      next(error);
    }
  }
}

export default EditoraController;
