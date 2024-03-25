import mongoose from "mongoose";
import { autorSchema } from "./Autores.js";
import { editoraSchema } from "./Editora.js";

const livroSchema = new mongoose.Schema({
  id:{type: mongoose.Schema.Types.ObjectId},
  title:{type: mongoose.Schema.Types.String, required: true},
  editor: editoraSchema,
  price: {type: mongoose.Schema.Types.Number},
  pages: {type: mongoose.Schema.Types.Number},
  author: autorSchema
}, {versionKey: false})

const livro = mongoose.model('livros', livroSchema)

export default livro
