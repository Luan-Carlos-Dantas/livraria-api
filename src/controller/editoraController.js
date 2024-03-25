import { editora, editoraSchema } from "../models/Editora.js";

class EditoraController{
  static async listaEditoras(req,res){
    try {
      const listaEditoras = await editora.find({})

      return res.status(200).json(listaEditoras)
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na listagem das editoras`})
    }
  }

  static async buscaEditoraPeloNome(req,res){
    const nomeEditora = req.query.nome
    try {
      const listaEditora = await editora.find({name: nomeEditora})

      return res.status(200).json(listaEditora)
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na listagem da editora`})
    }
  }

  static async listaEditora(req,res){
    const idProcurado = req.params.id
    try {
      const listaEditora = await editora.findById(idProcurado)

      return res.status(200).send(listaEditora)
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na listagem da editora`})
    }
  }

  static async cadastraEditora(req,res){
    const editoraRecebida = req.body
    try {
      const novaEditora = await editora.create(editoraRecebida)

      return res.status(200).json(
        {
          message:'Editora criada com sucesso',
          novaEditora
        }
      )
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na criação da nova editora`})
    }
  }

  static async atualizaEditora(req,res){
    const idParaAtualizacao = req.params.id
    const editoraAturalizada = req.body
    try {

      await editora.findByIdAndUpdate(idParaAtualizacao, editoraAturalizada)
      return res.status(200).json(
        {
          message:'Editora atualizada com sucesso',
        }
      )
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na atualização da nova editora`})
    }
  }

  static async deletaEditora(req,res){
    const idParaExclusao = req.params.id
    try {

      await editora.findByIdAndDelete(idParaExclusao)
      return res.status(204).json(
        {
          message:'Editora deletada com sucesso',
        }
      )
    } catch (error) {
      res.status(500).json({message:`${error.message} - Falha na exclusão da editora`})
    }
  }
}

export default EditoraController
